---
layout: post
id: page-pods
title: Pods
page-header:
  headline: Pods
  description: Pods are simple and convient way to adding space around your content.  With provided classes, you can quickly define layout rules that fit the requirements of your project.
toc: true
---

Use the class `.pod` to apply vertical and horizontal margin to any component. By default, margin is applied evenly to all sides of the pod. However, with the provided classes you can override this to behave differently -- taller, shorter, narower, wider, or no padding at all.

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

# Pod Options

By default, margin is applied evenly to sides of the pod (top, bottom, left, right).  You can easily adjust this behavior by adding a size modifier to the base `.pod` class. For example `.pod-short` will decrease the margin and `.pod-tall` will increase the margin. Furthermore, if you are seeking to change the margin in only a single direction, you can add an additional direction modifier. For example, `.pod-tall-top` increase the margin above the pod.

## Size Modifiers

To adjust padding size apply one of the available pod-specific size classes.  For example, simply using the class `.pod-short` will reduce padding evenly above and below the pod.

| Class           | Description                              |
| --------------- | ---------------------------------------- |
| `.pod-flush`    | Remove the margins entirely.             |
| `.pod-shorter`  | Reduce the vertical margins to 25%.      |
| `.pod-short`    | Reduce the vertical margins to 50%.      |
| `.pod-tall`     | Increase the vertical margins by 150%.   |
| `.pod-taller`   | Increase the vertical margins by 200%.   |
| `.pod-narrower` | Reduce the horizontal margins to 25%.    |
| `.pod-narrow`   | Reduce the horizontal margins to 50%.    |
| `.pod-wide`     | Increase the horizontal margins by 150%. |
| `.pod-wider`    | Increase the horizontal margins by 200%. |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="layout-box pods-options-size-modifier">
      <div class="layout-box-item layout-box-item-margin pod pod-short pod-wider">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod pod-short pod-wider">
  …
</div>
```

  </div>

</div>

## Size Direction Modifiers

Add `-top`, `-right`, `-bottom`, or `-left` to the end of the size modifier class to adjust margin only in the direction implied by the direction modifier.

| Class           | Description                            |
| --------------- | -------------------------------------- |
| `.pod-*-top`    | Adjust margin above the pod.           |
| `.pod-*-right`  | Adjust margin to the right of the pod. |
| `.pod-*-bottom` | Adjust margin below the pod.           |
| `.pod-*-left`   | Adjust margin to the left of the pod.  |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="layout-box pods-options-size-direction-modifier">
      <div class="layout-box-item layout-box-item-margin pod pod-short-top pod-taller-bottom pod-wide-left pod-narrower-right">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod pod-short-top pod-taller-bottom pod-wide-left pod-narrower-right">
  …
</div>
```

  </div>

</div>

# Responsive Pod

In your specific project it may be necessary to adjust the pod layout behavior when moving from mobile devices to desktop screens.  To apply as specific pod layout behavior at mini, small, medium, and large viewports, add the suffix `-screen-mini`, `-screen-small`, `-screen-medium`, `-screen-large`, or `-screen-jumbo` respectively to your specific pod class.

For example, an element with the following element `<div class="pod pod-narrow-screen-small pod-left-screen-medium pod-wider-right-screen-large">…<div>` will exhibit default pod spacing behavior until the small screen size, at which point the pod will narrow horizontally.  Then, at the medium screen size, the left side of the pod will return to default pod margins.  Once moving into the large screen size, the right side of the pod will behave like a wider pod.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="layout-box pods-options-responsive">
      <div class="layout-box-item layout-box-item-margin pod pod-short pod-narrower-left-screen-small pod-tall-screen-medium pod-wider-right-screen-jumbo">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod pod-short pod-narrower-left-screen-small pod-tall-screen-medium pod-wider-right-screen-jumbo">
  …
</div>
```

  </div>

</div>
