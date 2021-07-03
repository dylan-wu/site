yes | cp data/*.json template/src/_data
yes | cp -r pages/* template/src/
cat template-netlify.toml >> template/netlify.toml
shopt -s globstar
for file in posts/**/*;
do
    if [ -f "$file" ]; then
        folder="$(dirname $file)"
        cp -r "$folder" template/src/blog/
    fi
done

