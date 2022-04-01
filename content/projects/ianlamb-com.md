---
title: ianlamb.com
path: /projects/ianlamb.com
date: 2022-03-09T16:00:34.584Z
source: https://github.com/ianlamb/ianlamb.com
url: https://ianlamb.com
image: /img/ianlamb.com.jpg
description: 2022 rewrite of my personal site.
---

## Summary

This is the latest rendition of my personal website. The one I had for the last ~7 years was a Node/Angular app that had all kinds of back-end goodies, including pulling gaming data from Blizzard public APIs, etc. I was starting to feel like it was just bloated and I didn't want to maintain it anymore.

**My vision for this new site was to make it fully static, super fast and dead simple.** I could have gone even more basic, but I wanted to add some stylistic visual flair just for fun.

## Technologies

I'm using the clever combination of `Gatsby` and `Netlify CMS` to have a fully-functional CMS without having to run any servers. Every time a change is made in the CMS it automatically pushes a commit to the repo which triggers a build & deploy through Netlify. The CMS powers almost everything seen on the website, from the fixture strings on the main page to these project detail pages.

I've also configured Gatsby to be more performant. The entire website loads quite fast (<1s on a decent device/connection) and the bundle size is pretty small (<200kb br/gzipped, not including images).

For date manipulation I've graduated to using `DayJS` instead of the *timeless* classic `moment` which is [deprecated now](https://momentjs.com/docs/#/-project-status/). Not only do I appreciate the more modern API (immutable operations!), but the base bundle is only 2kb compared to moment's 72kb! Suffice to say, I'm very happy to use DayJS in this and future projects.

Lastly, styling was done with the popular CSS-in-JS `styled-components` lib. I've been using `Emotion` in recent professional projects and I think I have a slight preference towards it despite being mostly identical. Also, MUI v5 has migrated to using Emotion as their styling engine and it's currently my favorite UI library.