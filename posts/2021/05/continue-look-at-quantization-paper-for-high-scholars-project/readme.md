---
title: Continue Look at Quantization Paper for High Scholars Project
date: 2021-05-21
tags: [Complex Variables, TIL, Quantization, High Scholars]
thumb: .image.jpg
thumbCredit: Instagram timmossholder
description: ''
---

Now, onto the main result of the paper, if we skip the introduction paragraph, and go straight to 2.1 Optimal quantization for a uniform distribution on a line segment, then it states:

Without any loss of generality we can assume the line segment as a closed interval $$[a,b]$$, where $$0<a<b<\infin$$

As shown by this graphic:

![image](https://user-images.githubusercontent.com/6586811/119157435-cca1bd80-ba1a-11eb-9668-ed53c80b81fc.png)

Then, if we let $$P$$ be the uniform distribution defined on the closed interval of $$[a,b]$$, and we let the PDF of $$P$$ be $$f$$. Then, we have that

![image](https://user-images.githubusercontent.com/6586811/119179886-18616080-ba35-11eb-8dfc-635b58dbe498.png)

This implies that $$dP(x)=P(dx)=f(x)dx=\frac{1}{b-a}dx$$

Next, for theorem 2.1.1

Let $$P$$ be the uniform distribution on the closed interval of $$[a,b]$$. Then, the optimal set n-means is given by $$\alpha_n:=\{a+\frac{2i-1}{2n}(b-a):1\le i\le n\}$$, and the corresponding quantization error is $$V_n:=V_n(P)=\frac{(a-b)^2}{12n^2}$$.

