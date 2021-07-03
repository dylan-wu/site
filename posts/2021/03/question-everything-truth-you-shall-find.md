---
title: Question everything, truth you shall find.
date: 2021-03-24T05:00:00Z
tags: []
description: ''

---
I've never had a very good experience with programming stuff. When I was younger, I lacked the discipline and creativity required to solve a lot of the issues that I came upon. I was always unsettled when the console spat out errors at me, regardless of how closely I'd followed a tutorial.

Recently however, I've become more and more familiar with my windows terminal out of necessity. In creating this blog, for example, I had to clone an eleventy template, figure out how pages were made, and hook forestry up. And even just a couple days ago, I tried a little ubuntu using the Windows Terminal from the windows store and figured out how to have two separate ghost blogs hosted on one digital ocean server.

I ran into a lot of problems along the way, even thought I was "following the tutorials to a tee." I thought it was because I didn't (and still don't) really understand what a user was, commands like ssh, sudo, the root user, user permissions, were all completely foreign to me, and I had to do a lot of research to get an idea of what exactly I was dealing with.

Now, I won't get into the details of what each command is, that's not the goal of this post, instead, the goal of this post is to highlight how not-useful it was to understand these commands.

What I mean here, is that my understanding of what each command did was null, in terms of solving the errors that I was getting, they didn't help me. That's because the errors that I was making were errors of assumption.

Firstly, I was using these two resources in conjunction to create my ghost websites:

For the first blog: [https://ghost.org/docs/install/ubuntu/](https://ghost.org/docs/install/ubuntu/ "https://ghost.org/docs/install/ubuntu/")

For the second site: [https://primates.dev/how-to-install-multiple-ghost-instances-on-the-same-server/](https://ghost.org/docs/install/ubuntu/ "https://ghost.org/docs/install/ubuntu/")

I'd gotten the first tutorial down pat, I could go through that one without any issues, but it was the second one that I was running into trouble. In the final step of the second tutorial where it discusses how to the ghost setup

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FDylanWu%2F5VAPhxabRX.png?alt=media&token=e999a4d0-63b6-4516-9560-c623395a8238)

I was running into connection issues because I was using the wrong username and password for MySQL. The reason I was using the wrong username and password, was because I'd assumed what user ghost setup was asking for, as such, I didn't even consider that it might be the root of my problem.

Looking back at a lot of my previous troubles with tutorials involving the command line, I realize that every single one of my issues were issues of assumption, maybe I was in the wrong directory, maybe I was using the wrong user, regardless, they were all things that could have been bypassed had I just questioned my assumptions.

So I guess that's my first piece of learning, done of the "first" real blog post on this website.

Thanks for reading! If you enjoyed it or you learned something, feel free to check out and follow my twitter for more updates on my learning, and on my maker journey!