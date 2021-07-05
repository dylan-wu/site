const path = require('path');

module.exports = {
  layout: 'post',
  tags: ["posts"],
  title: 'Untitled',
  eleventyComputed: {
    permalink: (data) => `blog/${ path.basename(path.dirname(data.page.filePathStem)) }/index.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb;
        } else if (data.thumb.startsWith('.')){
          return path.join(data.page.url, data.thumb.substring(1));
        }
        return `/assets/img/${data.thumb}`;
      } else {
        return false;
      }
    }
  }
};
