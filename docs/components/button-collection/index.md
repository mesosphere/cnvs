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

# Vertical Alignment

When you have buttons of different sizes in the same `.button-collection`, you can use the button alignment properties `.button-collection-align-top`, `.button-collection-align-middle`, and `.button-collection-align-bottom` to position them along the top, middle, or baseline axis.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-top">

      <a href="#" class="button button-jumbo">

        Jumbo

      </a>

      <a href="#" class="button button-large">

        Large

      </a>

      <a href="#" class="button">

        Default

      </a>

      <a href="#" class="button button-small">

        Small

      </a>

      <a href="#" class="button button-mini">

        Mini

      </a>

    </div>

    <div class="button-collection button-collection-align-vertical-middle">

      <a href="#" class="button button-jumbo">

        Jumbo

      </a>

      <a href="#" class="button button-large">

        Large

      </a>

      <a href="#" class="button">

        Default

      </a>

      <a href="#" class="button button-small">

        Small

      </a>

      <a href="#" class="button button-mini">

        Mini

      </a>

    </div>

    <div class="button-collection button-collection-align-vertical-bottom flush-bottom">

      <a href="#" class="button button-jumbo">

        Jumbo

      </a>

      <a href="#" class="button button-large">

        Large

      </a>

      <a href="#" class="button">

        Default

      </a>

      <a href="#" class="button button-small">

        Small

      </a>

      <a href="#" class="button button-mini">

        Mini

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button Collection: Align Top-->
<div class="button-collection button-collection-align-vertical-top">
  …
</div>

<!-- Button Collection: Align Middle-->
<div class="button-collection button-collection-align-vertical-middle">
  …
</div>

<!-- Button Collection: Align Bottom-->
<div class="button-collection button-collection-align-vertical-bottom">
  …
</div>
```

  </div>

</div>
