---
# layout: ../../layouts/PostLayout.astro
title: My Second Blog Post
author: Astro Learner
description: "After learning some Astro, I couldn't stop!"
image: 
    url: "https://docs.astro.build/assets/arc.webp"
    alt: "Thumbnail of Astro arcs,"
pubDate: 2022-07-08
tags: ["astro", "blogging", "learning in public", "successes"]
---
After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!

```html
<html>
    <head>
        <title>{frontmatter.title}</title>
    </head>
    <body>
        <h1>{frontmatter.title} by {frontmatter.author}</h1>
        <slot />
        <p>Written on: {frontmatter.date}</p>
        <p>{frontmatter.date}</p>
        <p>{frontmatter.url}</p>
        <p>{frontmatter.minutesRead}</p>
    </body>
</html>

```