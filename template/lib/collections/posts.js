module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob('src/blog/**/*.md')];
  return posts.reverse();
};
