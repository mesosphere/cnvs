---
layout: post
id: page-containers
title: Containers
page-header:
  headline: Containers
  description: Containers provide basic layout functionality. The term "container" has been borrowed from Twitter's Bootstrap, and is meant to imply an element that wraps or "contains" content.
toc: true
---

In Canvas, containers can be used independent of the [Grid System](/layout/grid). Properties such as a width and margin for the container vary depending on both the class and screen resolution. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

# Fixed-Width Containers

A container can be fixed or fluid.  A fixed container is one where the width of the container is fixed value. That value may change based on the screen resolution to take advantage of additional horizontal screen space. Use the class `.container` to create a fixed with container.  By default a fixed width container has no margin or padding.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="layout-box containers-fixed">
      <div class="layout-box-item layout-box-item-margin container">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div div class="container">
  <!-- Container content goes here -->
</div>
```

  </div>

</div>

# Fluid-Width Containers

In previous versions of CNVS, `.container-fluid` was used to encapsulated content that should fill the width of it's parent.  A fluid container applied outerward spacing to the left and right of the Container and was a quick way to create a header, banner, or other full-width components.  With the introduction of the `.pod` layout component (see: [Pods](/layout/pods)) we Containers have been generalized to be used only for bounding content by width.  To create the previously seen by `.container-fluid` it is now suggested that you wrap content in a `.pod`.

<div class="panel">

  <div class="panel-cell">

    <div class="layout-box containers-fluid">
      <div class="layout-box-item layout-box-item-margin pod flush-top flush-bottom">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod flush-top flush-bottom">
  <!-- Container content goes here -->
</div>
```

  </div>

</div>
