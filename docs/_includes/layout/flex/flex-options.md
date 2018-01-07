# Flex Options

CNVS provides a number of available classes for quickly assigning flex box behavior to your layout.  All classes are prefixed with `.flex-`.  Classes were selected to be human-readable and don't necessarily match directly with the related styling properties they invoke.

| Class          | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `.flex`        | Apply flex box layout behavior to element.                               |
| `.flex-inline` | Apply flex box layout behavior to element, but render as inline element. |
{: .table }

##  Direction (`.flex-direction-`)

The `.flex-direction-` property specifies the direction of the flexible items inside the flex container. The default value of flex-direction is row (left-to-right, top-to-bottom).

| Class                                     | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `.flex-direction-left-to-right` (default) | Arrange flex items left to right along a horizontal axis. |
| `.flex-direction-right-to-left`           | Arrange flex items right to left along a horizontal axis. |
| `.flex-direction-top-to-bottom`           | Arrange flex items top to bottom along a vertical axis.   |
| `.flex-direction-bottom-to-top`           | Arrange flex items bottom to top along a vertical axis.   |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-direction flex flex-direction-left-to-right">
      <div class="example-flex-item example-flex-item-1">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3">
        3
      </div>
      <div class="example-flex-item example-flex-item-4">
        4
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-direction-left-to-right">
  …
</div>
```

  </div>

</div>

## Wrap Items (`.flex-wrap-items-`)

The `.flex-wrap-items-` property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

| Class                                     | Description                                         |
| ----------------------------------------- | --------------------------------------------------- |
| `.flex-wrap-items-none` (default)         | Do not wrap the flexible items.                     |
| `.flex-wrap-items`                        | Wrap the flexible items if needed.                  |
| `.flex-wrap-items-reverse`                | Wrap the flexible items in reverse order if needed. |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-wrap-items flex flex-direction-left-to-right flex-wrap-items">
      <div class="example-flex-item example-flex-item-1">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3">
        3
      </div>
      <div class="example-flex-item example-flex-item-4">
        4
      </div>
      <div class="example-flex-item example-flex-item-5">
        5
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-wrap-items">
  …
</div>
```

  </div>

</div>

## Align Items (`.flex-align-items-`)

The `.flex-align-items-` property vertically aligns the flexible container's items when the items do not use all available space on the cross-axis.

| Class                                | Description                                                    |
| ------------------------------------ | -------------------------------------------------------------- |
| `.flex-align-items-stretch`(default) | Items are stretched to fill the container.                     |
| `.flex-align-items-start`            | Items are positioned along top or beginning of the container.  |
| `.flex-align-items-end`              | Items are positioned along the bottom or end of the container. |
| `.flex-align-items-center`           | Items are centered in the container.                           |
| `.flex-align-items-baseline`         | Items are aligned with the baseline of the container.          |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-align-items flex flex-align-items-end">
      <div class="example-flex-item example-flex-item-1">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3">
        3
      </div>
      <div class="example-flex-item example-flex-item-4">
        4
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-align-items-end">
  …
</div>
```

  </div>

</div>

## Justify Items (`.flex-justify-items-`)

The `.flex-justify-items-` property horizontally aligns the flexible container's items when the items do not use all available space on the main-axis.

| Class                                 | Description                                                                                   |
| ------------------------------------- | --------------------------------------------------------------------------------------------- |
| `.flex-justify-items-start` (default) | Items are positioned at the beginning of the container with remaining space after.            |
| `.flex-justify-items-end`             | Items are positioned at the end of the container with remaining space before.                 |
| `.flex-justify-items-center`          | Items are positioned in the center f the container with remaining space evenly on both sides. |
| `.flex-justify-items-space-between`   | Items are positioned with space evenly between them.                                          |
| `.flex-justify-items-space-around`    | Items are positioned with space evenly around them.                                           |
{: .table }

<!-- =================================================
BEGIN: Example
================================================== -->

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-justify-items flex flex-justify-items-space-around">
      <div class="example-flex-item example-flex-item-1">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3">
        3
      </div>
      <div class="example-flex-item example-flex-item-4">
        4
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-justify-items-space-around">
  …
</div>
```

  </div>

</div>

## Align Content (`.flex-align-content-`)

The `.flex-align-content-` property modifies the behavior of the flex item wrapping property. It is similar to `.flex-align-items-`, but instead of aligning flex items, it aligns flex lines.

<strong>Note:</strong> this property has no effect when flex wrap is disabled or there is only one line of flex items.

| Class                                   | Description                                                     |
| --------------------------------------- | --------------------------------------------------------------- |
| `.flex-align-content-stretch` (default) | Lines stretch to take up the remaining space.                   |
| `.flex-align-content-start`             | Align lines at the start of the flex container.                 |
| `.flex-align-content-end`               | Align lines at the end of the flex container.                   |
| `.flex-align-content-center`            | Center lines in the flex container.                             |
| `.flex-align-content-space-between`     | Lines are positioned with space evenly between them.            |
| `.flex-align-content-space-around`      | Lines are evenly distributed with equal space around each line. |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-align-content flex flex-direction-left-to-right flex-wrap-items flex-align-content-space-between">
      <div class="example-flex-item example-flex-item-1">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3">
        3
      </div>
      <div class="example-flex-item example-flex-item-4">
        4
      </div>
      <div class="example-flex-item example-flex-item-5">
        5
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-wrap-items flex-align-content-space-between">
  …
</div>
```

  </div>

</div>
