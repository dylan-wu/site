---
title: Thoughts on Quantization for Uniform Distributions on Semicircles
date: 2021-05-24
tags: [Complex Variables, TIL, Quantization]
description: ''
---

In this paper: [QUANTIZATION FOR UNIFORM DISTRIBUTIONS ON HEXAGONAL, SEMICIRCULAR, AND ELLIPTICAL CURVES](https://arxiv.org/pdf/1902.03887.pdf), given to me (and written) by Professor Roychowdhury, it discusses quantizations for uniform distributions on a variety of shapes, hexagons, semicircles, and ellipses. In this article, I'll mainly be focusing on semicircles (as per Dr. Roychowdhury's suggestion)

## 4. Quantization for a Mixed Uniform Distribution on Semicircular Curve

Proposition 4.1 states:

---

*Let $$\alpha_n$$ be an optimal set of n-means for a uniform distribution on the unit circular arc $$S$$ given by:*

$$S:=\{(\cos\theta,\sin\theta):\alpha\le\theta\le\beta\}$$,

*where $$0\le\alpha\le\beta\le2\pi$$. Then,*

$$\alpha_n:=\{\frac{2n}{\beta-\alpha}\sin(\frac{\beta-\alpha}{2n}(\cos(\alpha+(2j-1)\frac{\beta-\alpha}{2n}),\sin(\alpha+(2j-1)\frac{\beta-\alpha}{2a})):j=1,2,...,n\}$$

*forms an optimal set of n-means, and the corresponding quantization error is given by*

$$V_n=1-\frac{4n^2}{(\alpha-\beta)^2}\sin^2\frac{\alpha-\beta}{2n}$$

---

If my understanding is correct, this is giving us the coordinates for any circular arc $$S$$ defined by $$(\cos\theta,\sin\theta)$$

Remark 4.3 sums up nicely one of the major things to notice, that the optimal set of one-mean is the set $$\{(0,\frac{1}{\pi}\}$$, and the corresponding quantization error is the variance $$V:=V(X)$$ of the random variable $$X$$.

Now that the optimal sets of one-mean has been established, proposition 4.4 gives the optimal set of two-means.

I wonder if these points:

![image](https://user-images.githubusercontent.com/6586811/119372537-0c67df80-bc7d-11eb-8213-6daf2b8bbfec.png)

Were calculated based on our two propositions? I don't see the calculations anywhere, so perhaps they're already established in the world of quantization?

Regardless, we have now in proposition 4.5 calculating the optimal set of three-means, and in proposition 4.6 we have it for 5 - 9 means. Oh, so this is actually where the calculation for figure 3 is.

