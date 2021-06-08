const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection("page", function(api) {
    return api.getFilteredByGlob("pages/**/*.md");
  });
};
