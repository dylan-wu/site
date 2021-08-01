---
title: Shannon Model of a Communications System
date: 2021-05-17
tags: [Quantization, UTRGV High Scholars, Shannon Model of a Communications System]
description: ''
---

Based on Dr. Mrinal Roychowdhury's suggestion to look more into quantization, I found this resource Stanford University's "Fundamentals of Quantization" by Robert M. Gray: https://ee.stanford.edu/~gray/shortcourse.pdf.

![image](https://user-images.githubusercontent.com/6586811/118518912-3f025d00-b6fe-11eb-8e72-23834d73a083.png)

The Shannon Model of a Communications System is a model for point-to-point communication. The encoder serves to transform the continuous input, let's say in this case an audio input, like a phone call, into a sequence of data that can then be decoded back into the original stream of audio. This is exactly what happens in a phone call (of course a phone call has some extra steps).

The goal is that given any signal and channel, to find an encoder and decoder which gives the "best possible" reconstruction of the original signal.

