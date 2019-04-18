---
title: 'Accessibility '
date: 2019-04-17T18:06:42.279Z
tag: roundaboutjs
path: /posts/roundaboutjs/04-17-19-accessibility
---
I can't say for other carousel libraries, but the current one that I'm using does not handle CSS transitions well.

\[insert GIF]

However, it seems that Google was able to solve this problem using an overflow: scroll element.

![](/../images/assets/1280x700.png "This is a caption")

I think Google's overflow: scroll approach is a lot easier to implement than using CSS transitions. We can use [Element.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) to move in between slides and implement smooth transitions as well.

I also did some research to see if there are any opportunities where I can add appropriate ARIA attributes or roles. It turns out that in January of this year, carousels are considered a design pattern and have been added to [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/#carousel).
