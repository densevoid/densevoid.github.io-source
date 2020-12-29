const htmlmin = require("html-minifier");
const moment = require("moment");

module.exports = function (eleventyConfig) {    
    eleventyConfig.addShortcode("version", function () {
      return String(Date.now());
    });
    
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
      if (
        process.env.ELEVENTY_PRODUCTION &&
        outputPath &&
        outputPath.endsWith('.html')
      ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
        return minified;
      }
  
      return content;
    });

    eleventyConfig.addFilter('simpleDate', date => {
      return moment(date).format('DD.MM.YYYY');
    })
};

