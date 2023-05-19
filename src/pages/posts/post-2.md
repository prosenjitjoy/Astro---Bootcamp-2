---
layout: ../../layouts/PostLayout.astro
title: "Hello, Joy!"
author: "Matthew Phillips"
date: "09 Aug 2022"
---

All frontmatter properties are available as props to an Astro layout component. 

The `layout` property is the only special one provided by astro. 

You can use it in both Markdown and MDX files located within `src/pages/`
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