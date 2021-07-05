---
title: "Trying to understand: Stochastic Model for the Spread of the COVID-19 Virus"
date: 2021-05-18
tags: [Trying to understand, COVID-19, Math]
description: ''
---

Source: https://www.scirp.org/journal/paperinformation.aspx?paperid=106899

The first thing to note of interest is the infectious disease model representation:

$$I_t=I_0+\int_0^tb(u,I_u)du+\\int_0^t\sigma(u,I_u)dB_u$$

Where $$b(u,I_u)\in\R^d\times\R^d\rightarrow\R^d$$ and $$\sigma(u,I_u)\in\R^d\times\R^d\rightarrow\R^{d\times d}$$ denote respectively the drift of the disease transmission and the Brownian motion diffusion $$(B_t),\forall t\in[0,T]$$.

I see this "d-dimensional Wiener process $$(I_t)_{t\in[0,T]}$$" and decided to search up what a Wiener process was in mathematica, after looking at the documentation, this is the example that I came up with.

![image](https://user-images.githubusercontent.com/6586811/118733147-58400200-b801-11eb-96f2-1083ce3f968b.png)
