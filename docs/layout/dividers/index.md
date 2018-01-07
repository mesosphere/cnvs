---
layout: post
id: page-dividers
title: Dividers
page-header:
  headline: Dividers
  description: Dividers are a simple way to create separation between content.  CNVS includes a simple divider in both a normal and inverse style.
  alignment: left
toc: true
---

Use either the class `.divider` or go old-school with the `<hr>` tag to create a divider.  Dividers fill the width of their parent containers.  By default, dividers have space above and below.

<div class="panel">

  <div class="panel-cell">

    <hr>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Alternatively, use <hr> -->
<div class="divider">
  &hellip;
</div>
```

  </div>

</div>

{% include layout/dividers/dividers-inverse-styling.md %}
{% include layout/dividers/dividers-spacing-modifiers.md %}
