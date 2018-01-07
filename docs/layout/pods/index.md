---
layout: post
id: page-pods
title: Pods
page-header:
  headline: Pods
  description: Pods are simple and convient way to adding space around your content.  With provided classes, you can quickly define layout rules that fit the requirements of your project.
toc: true
---

Use the class `.pod` to apply vertical and horizontal margin to any component. By default, margin is applied evenly to all sides of the pod. However, with the provided classes you can override this to behave differently &mdash; taller, shorter, narower, wider, or no padding at all.

<div class="panel">

  <div class="panel-cell">

    <div class="layout-box pods-overview">
      <div class="layout-box-item layout-box-item-margin pod">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod">
  …
</div>
```

  </div>

</div>

{% include layout/pods/pods-options.md %}
{% include layout/pods/pods-responsive.md %}
