---
title: First Look at Datasette
date: 2021-04-16
tags: [Datasette, Python, SQL, Open Source]
thumb: .image.jpg
description: ''
---

# First Look at Datasette

I recently came across an open source tool called [Datasette](https://datasette.io/) that allows users to publish scientific data online using sql.

Essentially, all you have to do is create a sql database with some proprietary metadata and frontmatter, and Datasette will let you view that data in table form in your browser.

It's completely open source so you can contribute and figure out how it works. Datasette is actually perfect for another one of my projects called Indie Science, which promotes community driven volunteer scientific research. Datasette is an incredible tool to publish data gathered with Indie Science.

In 5 minutes, following this [tutorial](https://til.simonwillison.net/jq/radio-garden-jq) from Simon Willison, I managed to create a map of radio stations from [Radio.garden](http://radio.garden/).

To do this, first download Datasette using pip or brew
```
brew install datasette
```
Pip or pipx:
```
pip install datasette
```
Then copy paste this into your console:
```
curl http://radio.garden/api/ara/content/places | jq '[.data.list[] | {
    id: .id,
    title: .title,
    country: .country,
    url: .url,
    size: .size,
    latitude: .geo[1],
    longitude: .geo[0]
}]' | sqlite-utils insert radio.db stations - --pk=id
```

Then finally install a datasette package called "datasette-cluster-map" by doing

```
datasette install datasette-cluster-map
```

And finally run the database on your local machine

```
datasette radio.db -o
```