---
layout: post
id: page-icons
title: Icons
page-header:
  headline: Icons
toc: true
---

A simple and easy to use icon class is available in Canvas.  The icon class <code>.icon</code> assumes very little about the actual icon itself, but instead serves as an easily modifiable container in which you can define or place your icon -- whether that icon is an SVG, font, or bitmap.  Canvas does not include icon glyphs or fonts by default, relying on the user to specify how these should be configured.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <i class="icon icon-medium icon-black">
      <svg class="">
        <use xlink:href="#icons-square"></use>
      </svg>
    </i>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<i class='icon icon-medium'></i>
```

  </div>

</div>

{% include components/icons/icons-sizes.md %}
{% include components/icons/icons-styles.md %}
