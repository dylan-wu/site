yes | cp data/*.json template/src/_data
yes | cp -r pages/* template/src/
cat template-netlify.toml >> template/netlify.toml