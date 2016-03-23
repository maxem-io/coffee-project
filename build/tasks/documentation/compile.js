var docs, gulp, log, path;

path = require("path");

gulp = require("gulp");

log = require("../../lib/log");

docs = require("../../lib/docs");

module.exports = function(coffeeProjectOptions) {
  var enabled, options, sourceDirectoryPath, targetDirectoryPath;
  options = coffeeProjectOptions.documentation;
  enabled = options.enabled;
  sourceDirectoryPath = path.resolve(options.sourceDirectoryPath);
  targetDirectoryPath = path.resolve(options.targetDirectoryPath);
  return gulp.task("documentation:compile", function(cb) {
    if (enabled !== true) {
      log.info("Skipping documentation:compile: Disabled.");
      return cb();
    }
    log.debug("[documentation:compile] Source directory path: `" + sourceDirectoryPath + "`.");
    log.debug("[documentation:compile] Target directory path: `" + targetDirectoryPath + "`.");
    log.debug("[documentation:compile] Compiling.");
    docs(sourceDirectoryPath, targetDirectoryPath, false, cb);
  });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL2RvY3VtZW50YXRpb24vY29tcGlsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVI7O0FBQ1AsSUFBQSxHQUFPLE9BQUEsQ0FBUSxNQUFSOztBQUVQLEdBQUEsR0FBTyxPQUFBLENBQVEsZUFBUjs7QUFDUCxJQUFBLEdBQU8sT0FBQSxDQUFRLGdCQUFSOztBQUVQLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsb0JBQUQ7QUFDaEIsTUFBQTtFQUFBLE9BQUEsR0FBc0Isb0JBQW9CLENBQUM7RUFDM0MsT0FBQSxHQUFzQixPQUFPLENBQUM7RUFDOUIsbUJBQUEsR0FBc0IsSUFBSSxDQUFDLE9BQUwsQ0FBYSxPQUFPLENBQUMsbUJBQXJCO0VBQ3RCLG1CQUFBLEdBQXNCLElBQUksQ0FBQyxPQUFMLENBQWEsT0FBTyxDQUFDLG1CQUFyQjtTQUV0QixJQUFJLENBQUMsSUFBTCxDQUFVLHVCQUFWLEVBQW1DLFNBQUMsRUFBRDtJQUNsQyxJQUFPLE9BQUEsS0FBVyxJQUFsQjtNQUNDLEdBQUcsQ0FBQyxJQUFKLENBQVMsMkNBQVQ7QUFDQSxhQUFPLEVBQUEsQ0FBQSxFQUZSOztJQUlBLEdBQUcsQ0FBQyxLQUFKLENBQVUsa0RBQUEsR0FBbUQsbUJBQW5ELEdBQXVFLElBQWpGO0lBQ0EsR0FBRyxDQUFDLEtBQUosQ0FBVSxrREFBQSxHQUFtRCxtQkFBbkQsR0FBdUUsSUFBakY7SUFDQSxHQUFHLENBQUMsS0FBSixDQUFVLG9DQUFWO0lBRUEsSUFBQSxDQUFLLG1CQUFMLEVBQTBCLG1CQUExQixFQUErQyxLQUEvQyxFQUFzRCxFQUF0RDtFQVRrQyxDQUFuQztBQU5nQiIsImZpbGUiOiJ0YXNrcy9kb2N1bWVudGF0aW9uL2NvbXBpbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJwYXRoID0gcmVxdWlyZSBcInBhdGhcIlxuZ3VscCA9IHJlcXVpcmUgXCJndWxwXCJcblxubG9nICA9IHJlcXVpcmUgXCIuLi8uLi9saWIvbG9nXCJcbmRvY3MgPSByZXF1aXJlIFwiLi4vLi4vbGliL2RvY3NcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IChjb2ZmZWVQcm9qZWN0T3B0aW9ucykgLT5cblx0b3B0aW9ucyAgICAgICAgICAgICA9IGNvZmZlZVByb2plY3RPcHRpb25zLmRvY3VtZW50YXRpb25cblx0ZW5hYmxlZCAgICAgICAgICAgICA9IG9wdGlvbnMuZW5hYmxlZFxuXHRzb3VyY2VEaXJlY3RvcnlQYXRoID0gcGF0aC5yZXNvbHZlIG9wdGlvbnMuc291cmNlRGlyZWN0b3J5UGF0aFxuXHR0YXJnZXREaXJlY3RvcnlQYXRoID0gcGF0aC5yZXNvbHZlIG9wdGlvbnMudGFyZ2V0RGlyZWN0b3J5UGF0aFxuXG5cdGd1bHAudGFzayBcImRvY3VtZW50YXRpb246Y29tcGlsZVwiLCAoY2IpIC0+XG5cdFx0dW5sZXNzIGVuYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0bG9nLmluZm8gXCJTa2lwcGluZyBkb2N1bWVudGF0aW9uOmNvbXBpbGU6IERpc2FibGVkLlwiXG5cdFx0XHRyZXR1cm4gY2IoKVxuXG5cdFx0bG9nLmRlYnVnIFwiW2RvY3VtZW50YXRpb246Y29tcGlsZV0gU291cmNlIGRpcmVjdG9yeSBwYXRoOiBgI3tzb3VyY2VEaXJlY3RvcnlQYXRofWAuXCJcblx0XHRsb2cuZGVidWcgXCJbZG9jdW1lbnRhdGlvbjpjb21waWxlXSBUYXJnZXQgZGlyZWN0b3J5IHBhdGg6IGAje3RhcmdldERpcmVjdG9yeVBhdGh9YC5cIlxuXHRcdGxvZy5kZWJ1ZyBcIltkb2N1bWVudGF0aW9uOmNvbXBpbGVdIENvbXBpbGluZy5cIlxuXG5cdFx0ZG9jcyBzb3VyY2VEaXJlY3RvcnlQYXRoLCB0YXJnZXREaXJlY3RvcnlQYXRoLCBmYWxzZSwgY2JcblxuXHRcdHJldHVyblxuIl19
