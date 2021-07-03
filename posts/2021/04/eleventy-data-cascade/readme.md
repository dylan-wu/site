---
title: Eleventy Data Cascade
date: 2021-04-24
tags: [Eleventy]
description: ''
---

I've been striving to build a completely data driven Eleventy site template that I can use for all of my projects, and one of the big topics that I've run into recently is that of "The Data Cascade" [Docs](https://www.11ty.dev/docs/data-cascade/).

It took me a little bit to understand, so I decided I'd put it into a blog post, as all good build-in-public-ers do.

There are seven sources of data within eleventy, ordered from highest priority, to lowest (priority is what determines which data is displayed, say, if there was a naming conflict)

1. Computed Data
2. Front Matter Data in ***Templates***
3. Front Matter Data in ***Layouts***
4. Template Data Files
5. Directory Data Files
6. Global Data Files
7. Custom Global Data

One of my hiccups was misunderstanding Eleventy's use of the word "Template" and "Layout." A blog post, say ```"posts/dog.md"``` is a "template" file, while a "layout" is something like ```"_layouts/base.njk"```.

I personally focused on understanding topics 2 - 6, so let's start from there.

## 2. Front Matter Data in Templates

"Front Matter" in eleventy is simply whatever comes inside of the triple dashes at the top of your files. Front matter might look a little bit like this.

```html

---
title: My Blog Post
author: dog
tags:
    - Post
    - Dog
    - Great
---
```

You can reference any of this data using two curly brackets like so ```{% raw %}{{variableName}}{% endraw %}```. So for example, if I wanted to put the title into my post, I'd do this.

```html

---
title: My Blog Post
author: dog
tags:
    - Post
    - Dog
    - Great
---

{{title}}
```

## 3. Front Matter Data in Layouts

Front matter in layouts is exactly the same as in a template, in order to reference a layout inside of a template, you'd do this:

```md

// random-post.md
---
layout: mylayout.njk
---
```

If ```"mylayout.njk"``` had a front matter that looked like this:

```html

// mylayout.njk
---
title: My Great Blog Post
author: doggo
tags:
    - Posts
    - Doggo
    - Greatest
---
```

Then you could reference these front matters in your post like so

```md

// random-post.md
---
layout: mylayout.njk
---

{% raw %}{{title}}{% endraw %}
{% raw %}{{author}}{% endraw %}
```

## 4. Template Data Files

Template data files is data that only applies to files of a specific name.

For example, if I create a file ```posts/subdir/my-first-blog-post.json```, the values inside this file will only be applied to ```posts/subdir/my-first-blog-post.md```

## 5. Directory Data Files

Much like template data files, directory data files are data that only apply to a specific subdirectory.

For example, if I create a file ```posts/subdir/subdir.json```, the values inside this file will be applied to any files inside ```posts/subdir```

## 6. Global Data Files

Lastly, global data files are files located in your global directory, most commonly the ```_data``` directory.

Any data files in here, say ```_data/global.json```, can be referenced by any and all other files.

So if I had a global data file that looked like this:

```json

// _data/global.json

{"title":"global"}
```

Then I could grab this title from any other file by just doing this

```html

// randomfile.njk

<h1>{%raw%}{{title}}{%endraw%}</h1>
```