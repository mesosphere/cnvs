---
layout: post
id: page-badges
title: Badges
page-header:
  headline: Badges
toc: true
---

Badges are a lightweight method of annotating or labeling content. Wrap content in the `.badge` class to add an inline badge. The font-size and line-height of a badge inherit from that of it's parent's properties.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <span class="badge">

      Badge

    </span>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="badge">
  Badge
</span>
```

  </div>

</div>

Badge States

You may wish to display more than the single badge type, either to create separation in the importance of various actions or to communicate the state of an action or form.  badge states make this super easy.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="badge-collection flush-bottom">

      <span class="badge">

        Default

      </span>

      <span class="badge badge-success">

        Success

      </span>

      <span class="badge badge-info">

        Information

      </span>

      <span class="badge badge-warning">

        Warning

      </span>

      <span class="badge badge-danger">

        Danger

      </span>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- badge: Default -->
<span class="badge">
  Default
</span>

<!-- badge: Success -->
<span class="badge badge-success">
  Success
</span>

<!-- badge: Info -->
<span class="badge badge-info">
  Info
</span>

<!-- badge: Warning -->
<span class="badge badge-warning">
  Warning
</span>

<!-- badge: Danger -->
<span class="badge badge-danger">
  Danger
</span>
```

  </div>

</div>

# Rounded Badge

Add the class `.badge-rounded` to any `.badge` element to display it with rounded caps.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="badge-collection flush-bottom">

      <span class="badge badge-rounded">

        Badge

      </span>

      <span class="badge badge-success badge-rounded">

        Badge

      </span>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- badge: Default -->
<span class="badge badge-rounded">
  Default
</span>
```

  </div>

</div>
