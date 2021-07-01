yes | cp data/*.json template/src/_data
yes | cp -r pages/* template/src/
yes | rm -rf template/src/posts
yes | cp -r  posts template/src/posts
cat template-netlify.toml >> template/netlify.toml