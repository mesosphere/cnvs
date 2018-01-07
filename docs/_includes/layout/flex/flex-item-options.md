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
