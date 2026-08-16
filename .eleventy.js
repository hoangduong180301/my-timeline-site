module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.ignores.add("src/admin/**");

  eleventyConfig.addCollection("trips", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/trips/*.md").sort((a, b) => {
      return b.data.date_sort - a.data.date_sort;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
