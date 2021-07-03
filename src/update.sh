yes | cp data/*.json template/src/_data
yes | cp -r pages/* template/src/
shopt -s globstar
yes | cp posts/{**/*,*} template/src/posts/
cat template-netlify.toml >> template/netlify.toml
