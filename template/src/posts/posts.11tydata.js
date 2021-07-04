module.exports = {
  layout: 'post',
  tags: ["posts"],
  title: 'Untitled',
  eleventyComputed: {
    permalink: (data) => `blog/${data.page.fileSlug}/index.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb;
        } else if (data.thumb.startsWith('.')){
          return data.thumb.substring(1);
        }
        return `/assets/img/${data.thumb}`;
      } else {
        return false;
      }
    }
  }
};
