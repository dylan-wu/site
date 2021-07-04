const pluginTailwind = require('eleventy-plugin-tailwindcss');
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const path = require('path')
const projectDir = path.resolve('.') 
const katex = require('katex')

async function imageShortcode(src, alt, sizes) {
  if (src.startsWith('?')){
    src=`https://source.unsplash.com/random?orientation=landscape&query="${src.substring(1)}"`
  }

  let metadata = await Image(src, {
    outputDir: path.join(projectDir, 'dist/assets/img/'),
    urlPath: "/assets/img/",
    widths: [500],
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline"
  });
}

module.exports = (config) => {
  config.addPlugin(pluginTailwind, {
    src: 'src/assets/css/*'
  });

  config.addFilter('latex', content => {
    return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
  
      return katex.renderToString(cleanEquation, { throwOnError: false })
    })
  })

  config.addNunjucksAsyncShortcode("image", imageShortcode);

  config.setDataDeepMerge(true);

  config.addPassthroughCopy('src/assets/img/**/*');
  config.addPassthroughCopy({ 'src/posts/img/**/*': 'assets/img/' });

  //config.addPassthroughCopy('src/smart-health/img');

  config.addWatchTarget("src/assets/js/");

  config.addFilter('readableDate', require('./lib/filters/readableDate'));
  config.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  config.addTransform('minifyHtml', require('./lib/transforms/minifyHtml'));

  config.addCollection('posts', require('./lib/collections/posts'));
  config.addCollection('tagList', require('./lib/collections/tagList'));
  config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));
  config.addCollection('pagedPostsByTag', require('./lib/collections/pagedPostsByTag'));

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  config.addNunjucksFilter('split', require('./filters/split'))
  
  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: "_layouts"
    },
    // pathPrefix: "/subfolder/",
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
