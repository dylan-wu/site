---
title: Thoughts on \"Fundamentals of Quantization\" from Stanford University
date: 2021-05-18
tags: [Quantization, UTRGV High Scholars]
description: ''
---

Based on Dr. Mrinal Roychowdhury's suggestion to look more into quantization, I found this resource Stanford University's "Fundamentals of Quantization" by Robert M. Gray: https://ee.stanford.edu/~gray/shortcourse.pdf.

Quantization is defined as "The mapping of a continuous quantity into a discrete one." A discrete representation of a continuous quantity can be thought of as measuring the velocity of a car. You take a snapshot of that car in time, and take its velocity at that specific point at time, even though "velocity" is a constantly changing value. 

Another example, images, an image is a snapshot in time of a specific instance, the actual thing that it's taking an image of is infinitely precise, and changing all the time, but we use the image as an approximation or representation of what occured in that time instance.

Some examples of continuous quantities are:

- Hyperspectral images
- Video images
- Speech
- Audio
- Sensor data (temperature, precipitation, birdcalls, EKG)

In order to describe any of these, we will need to transform these into discrete representations.

The most common model for point-to-point communication is the [Shannon Model](/posts/shannon-model-of-a-communications-system)

The question is how to encode and decode signals in order to give the "best" output.

In order to formulate this as a precise problem, we need to specify three things.

- Probabilistic descriptions of the signal and the channel (parametric model or sample training data)
- Possible structural constrains on the form of the codes (scalar, block, sliding block, recursive, predictive)
- A quantifiable notion of what "good" or "bad" reconstruction is (MSE, perceptually weighted distortion, $$P_e$$, Bayes risk)

Here are some of the common assumptions that we might have:

- A signal is a discrete time sequence $$X_n, n=1,2,...,$$ but each $$X_n$$ can be complicated (scalar, vector, field, function).
- Each $$X_n$$ is a random object (variable, vector, field) with common probability distributions $$P_x$$ (probability mass function, density function, empirical data), $$X$$ is a generic random object with this distribution.
- Do not separate out signal decompositions (Fourier, wavelet, principal component), i.e., assume either done already or to be done as part of the code.
- Codes map individual $$X_n$$ or groups of $$X_n$$ into possibly variable length binary strings.
- Binary strings are communicated without further error to receiver.