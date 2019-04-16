---
title: Inspiration and goals
date: 2019-04-16T07:14:10.327Z
tag: roundaboutjs
path: /posts/roundaboutjs/04-16-19-inspiration-and-goals
---
Near the end of GTAA's redesign project, we had an external tester go through the entire site and verify that everything was functional from an accessibility stand-point. Everything passed W3 standards &mdash; HTML markup was flowing great, ARIA attributes were applied correctly, color contrasts, etc. However, when it was time to test out the carousels, that's where it became a little bit of a problem.

## The problem

For the GTAA project, we were using a 3rd party library called [Siema](https://github.com/pawelgrzybek/siema). While the library was what we needed in terms of size, functionality and simplicity, I ultimately had to develop custom Javascript to fix several specific design issues. A few examples:

* No resizing ability, the user has to refresh the page
* Implementation of "ghost cards" when they're not in the main focus area
* Most important = accessibility. When VoiceOver is on, selecting the next card would cause visual bugs

Since GTAA and Petro-Canada both have the same carousel pattern implementation, I can assume that the next project I'm on is going to have one as well. This is the perfect time to enhance my Javascript knowledge and hopefully use what I built from scratch in a commercial product!

## Research

After taking a look at popular carousel libraries, I realize that they have several similarities:

* Use transform and transition on a dynamically created div
* Bloated features like animations which increased the size greatly
* Dependencies (jQuery)

The past two projects that I was on didn't need carousels with all of that. Let's create our own and set some features/goals.

## Features and goals

I want this library to have the basics:

* Mobile friendly
* Media breakpoints and re sizable
* Looping
* Number of slides per view
* Next/previous event listeners
* Lightweight
* **Accessible!**

And for some optional features:

* Ghost cards
* Animations



This is going to be a great learning experience and hopefully I get to use it in my next project!

Let's get started!
