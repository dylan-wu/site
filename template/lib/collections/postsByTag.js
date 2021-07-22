const siteData = require('../../src/_data/site.json');

module.exports = (coll) => {
  const tagList = require('./tagList')(coll);
  
  const pagedPosts = [];

  Object.keys(tagList).forEach((tagName) => {
    pagedPosts["TIL"] = [...coll.getFilteredByTag(tagName)].reverse();
  });

  return pagedPosts;
};
