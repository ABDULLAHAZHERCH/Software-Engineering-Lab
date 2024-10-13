module.exports = function (grunt) {
  // Load the plugin that provides the "sass" task
  grunt.loadNpmTasks("grunt-sass");

  // Project configuration
  grunt.initConfig({
    sass: {
      options: {
        implementation: require("sass"),
        sourceMap: true,
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: ".",
            src: ["simple.scss"],
            dest: ".",
            ext: ".css",
            flatten: true,
          },
        ],
      },
    },
  });

  grunt.registerTask("default", ["sass"]);
};
