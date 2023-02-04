const markdownIt = require("markdown-it");

let markdownLibrary = markdownIt({
  html: true,
  xhtmlOut: true,
  breaks: false
});

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(require("eleventy-plugin-postcss"));
  eleventyConfig.addPlugin(require('eleventy-plugin-feathericons'));

  eleventyConfig.addPassthroughCopy("src/assets/js");

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPairedShortcode('md', (arg) => {
    return markdownLibrary.render(arg);
  })

  // 11ty defaults
  return {
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};