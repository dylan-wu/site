---
title: Invalid Tailwind classes causing overlayed elements
date: 2021-04-16
tags: [TIL, Tailwind]
thumb: .image.jpg
description: ''
---

I encountered a new problem recently after I made a navbar on Indie Science sticky, some elements like images and forms were appearing over my navbar, not respecting the z-order.

Assuming it was the z-order, I quickly added the z-99 class to my header element, which, didn't work. Going back to one of my previous blog posts __Question everything, truth you shall find.__ I thought that maybe it was because my class, "z-99" wasn't actually a tailwind class.

The way tailwind handles z-indexes is via z-0, z-10, z-20, z-30, z-40, and z-50. Switching now to z-50, my problem was solved!