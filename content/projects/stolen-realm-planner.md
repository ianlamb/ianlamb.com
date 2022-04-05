---
path: /projects/stolen-realm-planner
title: Stolen Realm Planner
date: 2022-02-12T00:00:00.000Z
image: /projects/stolen-realm-planner.jpg
url: https://ianlamb.github.io/stolen-realm-planner
source: https://github.com/ianlamb/stolen-realm-planner
description: Stolen Realm Planner is a skill calculator for the game Stolen Realm. It replicates the in-game skill trees including damage calculations and also features build sharing.
featured: true
---

## Problem

[Stolen Realm](https://store.steampowered.com/app/1330000/Stolen_Realm/) is a turn-based dungeon crawler RPG. One of my favourite things about the game is the deep, classless skill trees that allow for endless build combinations. There's a lot of satisfaction to be had just from playing around with them and figuring out what your next character build will be. As with many RPGs, the game interface can make it challenging to do this and many people also like to be able to share builds with their friends or get ideas from other people in the community.

## Solution

This project aims to be a web-based replica of the in-game skill trees. The trees are mostly data-driven, based on a dataset I have in a [spreadsheet](https://docs.google.com/spreadsheets/d/1pGj7okL-BUizoC09SP4qoYR-hvP7gECHim7FC8WKzW4/edit?usp=sharing) which I convert to JSON and use directly in the project. All of the skill tooltips are as close of a match as I could get to what you see in the game client, including damage calculations.

### Build Sharing

Sharing builds is as easy as copying and pasting the URL. I didn't want to have to store anything on a server, so build data is [cleverly encoded](https://github.com/ianlamb/stolen-realm-planner/blob/v1.0.0/src/scenes/SkillCalculator/helpers.js#L18-L118) into a query string parameter every time you make a change. When the app is loaded with a build in the URL, it unpacks it and displays the build exactly as it was when it was shared.

## Technologies

This React app was bootstrapped with `create-react-app` and uses `emotion` for the styling system. It gets deployed to [Github Pages](https://pages.github.com/) as a static site. I also use [SheetDB](https://sheetdb.io/) as a way of converting the spreadsheet data to JSON.
