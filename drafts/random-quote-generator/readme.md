---
title: Nunjucks random quote machine
date: 07-21-2021
tags: [TIL, Nunjucks]
---

Nunjucks has a built in filter called "random" that acquires a random index for some array, I made a random quote machine:

```html
{% set quote = topic.quotes | random %}
<p class="italic leading-relaxed text-lg whitespace-pre-wrap">{{quote.text}}</p>
<span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
<h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{quote.source}}</h2>
```