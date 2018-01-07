---
layout: post
id: page-flex
title: Flex
page-header:
  headline: Flex
  description: CNVS provides a number of available classes for quickly assigning flex box behavior to your layout through the use of the Flex layout toolkit. Flexbox (or "Flexible Box") provides an efficient set of styles for positioning, aligning, and distributing space among items in a container.
toc: true
---

The flex box model provides an improvement over the block model in that it does not use floats, nor do the flex container's margins collapse with the margins of its contents.  In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions.

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

# Flex Item

In many projects, it is necessary to override specific flex behavior on items within the flex container.  For example, you may wish to adjust the order in the flex container, or change the alignment behavior of just one item.  The options below provide may classes prefixed with `.flex-item` to provide this item-specific support.

## Align (`.flex-item-align-`)

The `.flex-item-align-` overrides the flex container's align-items property for a specific item.  It has the same possible values as the `.flex-align-items` property.

| Class                       | Description                                                      |
| --------------------------- | ---------------------------------------------------------------- |
| `.flex-item-align-start`    | Item is positioned along top or beginning of the flex container. |
| `.flex-item-align-end`      | Item is position at the bottom or end of the flex container.     |
| `.flex-item-align-center`   | Item is centered in the flex container.                          |
| `.flex-item-align-baseline` | Item is aligned with the baseline of the flex container.         |
| `.flex-item-align-stretch`  | Item is stretched to fill the flex container.                    |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-item-align flex flex-align-items-end">
      <div class="example-flex-item example-flex-item-1">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3 flex-item-align-start">
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
  <div class="flex-item-align-start">
    3
  </div>
  …
</div>
```

  </div>

</div>

## Order (`.flex-item-order-*`)

By default, flex items are laid out in the order they appear in the source code.  The `.flex-item-order-*` property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.  The `*` suffix will accept any value between `-100` and `100`.

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-item-order flex flex-direction-left-to-right">
      <div class="example-flex-item example-flex-item-1 flex-item-order-3">
        1
      </div>
      <div class="example-flex-item example-flex-item-2">
        2
      </div>
      <div class="example-flex-item example-flex-item-3 flex-item-order-4">
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
  <div class="flex-item-order-3">
    1
  </div>
  <div>
    2
  </div>
  <div class="flex-item-order-4">
    3
  </div>
  <div>
    4
  </div>
</div>
```

  </div>

</div>

## Grow (`.flex-item-grow-*`)

The class `.flex-item-grow-*` specifies the proportion you wish the item to grow relative to other items when there is more remaining space in the flex container than the width of the items inside.  If other items also have flex grow defined, the proportion will be calculated across all defined flex grow values. For example if there are two objects in your flex container, and the first object has class `.flex-item-grow-2`, then this object will increase it's size twice that of it's sibling.  Likewise, if the second object has class `.flex-item-grow-4`, then the first object will increase it's size at 50% (or 2/4ths) that of it's sibling.

By default the flex grow property is `0`. The `*` suffix in `.flex-item-grow-*` provided by CNVS will accept any value between `0` and `10`.

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-item-grow flex flex-direction-left-to-right">
      <div class="example-flex-item example-flex-item-1 flex-item-grow-2">
        1
      </div>
      <div class="example-flex-item example-flex-item-2 flex-item-grow-1">
        2
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex">
  <div class="flex-item-grow-2">
    1
  </div>
  <div class="flex-item-grow-1">
    2
  </div>
</div>
```

  </div>

</div>

## Shrink (`.flex-item-shrink-*`)

The class `.flex-item-shrink-*` specifies the proportion you wish the item to shrink relative to other items when there is less available space in the flex container than the width of the items inside.  If other items also have flex shrink defined, the proportion items shrinks will be calculated across all defined flex shrink values. For example if there are two objects in your flex container, and the first object has class `.flex-item-shrink-2`, then this object will decrease it's size twice that of it's sibling.  Likewise, if the second object has class `.flex-item-shrink-4`, then the first object will decrease it's size at 50% (or 2/4ths) that of it's sibling.

By default the flex shrink property is `0`. The `*` suffix in `.flex-item-shrink-*` provided by CNVS will accept any value between `0` and `10`.

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-item-shrink flex flex-direction-left-to-right">
      <div class="example-flex-item example-flex-item-1 flex-item-shrink-2" style="flex-basis: 1000px;">
        1
      </div>
      <div class="example-flex-item example-flex-item-2 flex-item-shrink-1" style="flex-basis: 1000px;">
        2
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex">
  <div class="flex-item-shrink-2" style="width: 1000px;">
    1
  </div>
  <div class="flex-item-shrink-1" style="width: 1000px;">
    2
  </div>
</div>
```

  </div>

</div>

## Basis (`.flex-item-basis-`)

Flex basis defines the default size of an element before any remaining space is distributed between the items. Flex basis accepts the same values as the width and height property (e.g. 40%, 30px, etc...), plus keywords `auto` and `content`.  CNVS provides classes that allow you to define the `auto` and `content` keyword properties for an item.  However, if you wish to use a specific value, this should be defined in your project-specific styles.

| Class                      | Description                                                    |
| -------------------------- | -------------------------------------------------------------- |
| `.flex-item-basis-auto`    | Remaining space is distributed based on its `flex-grow` value. |
| `.flex-item-basis-content` | Remaining space is distributed based on the item's content.    |
| `.flex-item-basis-none`    | Remaining space is not factored in.                            |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-item-basis flex flex-direction-left-to-right">
      <div class="example-flex-item example-flex-item-1" style="flex-basis: 100px;">
        1
      </div>
      <div class="example-flex-item example-flex-item-2" style="flex-basis: 50px;">
        2
      </div>
      <div class="example-flex-item example-flex-item-3 flex-item-grow-1">
        3
      </div>
      <div class="example-flex-item example-flex-item-4" style="flex-basis: 100px;">
        4
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-direction-left-to-right">
  <div style="flex-basis: 100px;">
    1
  </div>
  <div style="flex-basis: 50px;">
    2
  </div>
  <div class="flex-item-grow-1">
    3
  </div>
  <div style="flex-basis: 100px;">
    4
  </div>
</div>
```

  </div>

</div>

# Responsive Flex Box

The flex layout system in CNVS is built to be fully responsive across all included screen-size break-points. In your specific project it may be necessary to adjust flex behavior when moving from mobile devices to desktop screens.  To apply as specific flex behavior at mini, small, medium, and large viewports, add the suffix `-screen-small`, `-screen-medium`, `-screen-large`, or `-screen-jumbo` respectively to your specific flex class.

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-responsive flex flex-direction-top-to-bottom flex-direction-left-to-right-screen-medium flex-align-items-stretch">
      <div class="example-flex-item example-flex-item-1 flex-item-grow-3-screen-medium flex-item-order-3-screen-medium">
        1
      </div>
      <div class="example-flex-item example-flex-item-2 flex-item-grow-2-screen-medium flex-item-order-2-screen-medium">
        2
      </div>
      <div class="example-flex-item example-flex-item-3 flex-item-grow-1-screen-medium flex-item-order-0-screen-medium">
        3
      </div>
      <div class="example-flex-item example-flex-item-4 flex-item-grow-4-screen-medium flex-item-order-1-screen-medium flex-item-order--1-screen-jumbo">
        4
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-direction-top-to-bottom flex-direction-left-to-right-screen-medium flex-align-items-stretch">
  <div class="flex-item-grow-3-screen-medium flex-item-order-3-screen-medium">
    1
  </div>
  <div class="flex-item-grow-2-screen-medium flex-item-order-2-screen-medium">
    2
  </div>
  <div class="flex-item-grow-1-screen-medium flex-item-order-0-screen-medium">
    3
  </div>
  <div class="flex-item-grow-4-screen-medium flex-item-order-1-screen-medium flex-item-order--1-screen-jumbo">
    4
  </div>
</div>
```

  </div>

</div>
