_              = require "lodash"
browserify     = require "browserify"
coffeeReactify = require "coffee-reactify"
fs             = require "fs"
gulp           = require "gulp"
gulpLivereload = require "gulp-livereload"
gulpTap        = require "gulp-tap"
pugify        = require "pugify"
vinylSource    = require "vinyl-source-stream"
watchify       = require "watchify"

log = require "../../lib/log"

module.exports = (coffeeProjectOptions) ->
	options      = coffeeProjectOptions.bundle
	enabled      = options.enabled
	sourcemaps   = options.sourcemaps
	externals    = options.externals or []
	watchEnabled = coffeeProjectOptions.watch.enabled
	isProduction = process.env.NODE_ENV is "production"

	gulp.task "bundle:watch", (cb) ->
		unless enabled and watchEnabled
			log.info "[bundle:watch] Disabled."
			return cb()

		entry      = options.app.entry
		target     = options.app.target
		bundle     = options.app.bundle
		paths      = options.app.paths
		extensions = options.app.extensions
		transforms = options.app.transforms

		log.debug "[bundle:watch] Entry file:       `#{entry}`."
		log.debug "[bundle:watch] Target directory: `#{target}`."
		log.debug "[bundle:watch] Target bundle:    `#{bundle}`."
		log.debug "[bundle:watch] extensions:       `#{(extensions or []).join ", "}`."
		log.debug "[bundle:watch] transforms:       `#{(transforms or []).join ", "}`."

		fs.exists entry, (exists) ->
			unless exists
				log.info "[bundle:watch] [app] Entry file `#{entry}` not found."
				return cb()

			bundler = watchify browserify
				cache:        {}
				packageCache: {}
				# fullPaths:    true
				extensions:   extensions
				paths:        paths
				debug:        if isProduction then false else sourcemaps

			_.each externals, (external) ->
				external = require: external if typeof external is "string"
				bundler.external external.expose or external.require

			for transform in transforms or []
				switch transform
					when "coffee-reactify" then	bundler.transform coffeeReactify
					when "pugify"         then bundler.transform pugify

			bundler.add entry

			compile = ->
				bundlerStream = bundler.bundle()

				bundlerStream.on "error", (error) -> log.error "[bundle:watch]: #{error.message}"

				bundlerStream
					.pipe vinylSource bundle
					.pipe gulpTap (file) ->
						log.debug "[bundle:watch] Compiled `#{file.path}`."
					.pipe gulp.dest target
					.pipe gulpLivereload auto: false

			bundler.on "update", compile

			compile()

			return

		return

