---
layout: post
id: page-button-collection
title: Button Collection
page-header:
  headline: Button Collection
toc: true
---

Buttons render easily as objects inline with other elements.  When you have a group of buttons, use the `.button-collection` element to wrap a set of buttons.  A button collection defines simple rules governing the space between buttons both horizontally and vertically.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button button-primary">

        Primary Button

      </a>

      <a href="#" class="button">

        Button

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Collection -->
<div class="button-collection">
  <a href="#" class="button button-primary">
    Primary Button
  </a>
  <a href="#" class="button">
    Button
  </a>
</div>
```

  </div>

</div>

{% include components/button-collection/button-collection-vertical-alignment.md %}
