---
title: Eleventy Pagination From Global Data
date: 2021-04-25
tags: [Eleventy]
thumb: .image.jpg
description: ''
---

Pagination in eleventy allows you to create pages from just a single layout file, and a data file.

To use pagination, specify the "pagination:" item in your layout's frontmatter. Then add the data source and size of your data.

```json

// _data/test-data.json

[{
        "title": "Fluffy",
        "url": "Fluffy",
        "age": 2
    },
    {
        "title": "Snugglepants",
        "url": "Snugglepants",
        "age": 5
    },
    {
        "title": "Lord Featherbottom",
        "url": "Lord Featherbottom",
        "age": 4
    },
    {
        "title": "Pennywise",
        "url": "Pennywise",
        "age": 9
    }
]
```

```html

// post-layout.njk
---
pagination:
    data: test-data
    size: 1
---
```

To more easily access the data (and make our code a bit prettier), we'll create an alias.

```html

// post-layout.njk
---
pagination:
    data: test-data
    size: 1
    alias: data
---

<h1>{% raw %}{{data.title}}{% endraw %}</h1>
```

This would create new posts under ```post-layout/[0-3]``` with the [0-3] representing the index of the json array. So if you wanted to go to the page that had "Lord Featherbottom" as the title, you'd go to ```post-layout/2```

If you wanted to change these links, add a permalink value to your front matter.

```html

// post-layout.njk
---
pagination:
    data: test-data
    size: 1
    alias: data
permalink: "{% raw %}test-data/{{data.url | slug}}/{% endraw %}"
---

<h1>{% raw %}{{data.title}}{% endraw %}</h1>
```

This will put your post at ```post-layout/lord-featherbottom``` (replace "lord-featherbottom" with the url value of your choice).