module.exports = (coll) => {
  console.log(coll)
  const posts = [...coll.getFilteredByGlob('src/posts/*.md')];

  return posts.reverse();
};
