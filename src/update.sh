yes | cp data/*.json template/src/_data
yes | cp -r pages/* template/src/
yes | cp -r  posts/* template/src/posts/
cat template-netlify.toml >> template/netlify.toml
