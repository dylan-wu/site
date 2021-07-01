---
title: "Thoughts on: The Simulation and the Calculation of the Shortest Hohmann Transfer Orbit to Mars"
date: 2021-05-30
tags: [Mars, Hohmann Transfer Orbit]
description: ''
---

In this paper [The Simulation and the Calculation of the Shortest Hohmann Transfer Orbit to Mars](https://www.scirp.org/journal/paperinformation.aspx?paperid=95855) the authors take a look at some of the results and analysis of a simulation of sending a satellite from Earth to Mars.

The ultimate goal is to find the least energy-cost trajectory with the least initial velocity.

Using Python and Matlab, they modeled the [Hohmann Transfer Orbit](/posts/what-is-a-hohmann-transfer-orbit) and in order to find the trajectory of least fuel, they needed to find the shortest distance from the initial position to the final position of the rocket.

Due to Kepler's first law, which states that all planets travel around the Sun in elliptical orbits, a rocket's trajectory will be elliptical and focus on the Sun (this is intuitive because the Sun accounts for over 99% of the Solar System's mass)

If you go on Wikipedia and search for Hohmann Transfer Orbit, it'll actually give you a way to fairly easily calculate for yourself a Hohmann Transfer Orbit. There are plenty of resources online as well that provide classroom guides on how to calculate the trajectory. Unfortunately, in real life, it's nowhere near as simple, and in fact is quite difficult to do via hand calculation. This is because in real life, orbits are not perfectly circular, and are slightly squished, which means that in some portions of the orbits, the objects are moving faster than in others (Kepler's second law). Mars and Earth aren't even on the same plane of orbit, Mars is tilted a couple of degrees relative to Earth.

As such, this complicates the calculation significantly