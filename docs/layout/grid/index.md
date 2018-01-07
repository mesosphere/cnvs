---
layout: post
id: page-grid
title: Grid
page-header:
  headline: Grid
  description: Canvas supports a responsive mobile-first grid system.  By default, the grid system is based on a 12 column layout, but can be easily modified to enable any column count.  With simple class name additions, the column count can be changed based on the users viewport.  This allows for rich layouts that adjust to best fit the device.
toc: true
---

<div class="panel pod pod-short-bottom pod-short-top flush-horizontal">

  <div class="panel-cell">

    <div class="row">
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="row">
  <div class="column-*">
  </div>
  …
</div>
```

  </div>

</div>

At first, the grid can seem complicated.  However, when you distill it down to the basic primitives and rules, it becomes quite simple.  Here's a quick overview of what you need to know:

* There are two primitives that are required in defining a grid: Rows (`.row`) and Columns (`.column-*`).
* Rows (`.row`) is a simple wrapping element around columns.  They ensure columns are aligned appropriately.
* Content should be placed within columns, and only columns may be immediate children of rows.
* Column classes indicate the number of columns you’d like to use out of the possible <em>n</em> per row (`default=12`). So, for a 12 column grid, `.column-4` will consumer the total with of 4 columns.
* Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
* Columns have horizontal padding to create the gutters between individual columns. Gutter width is defined as a fixed pixel width.
* There are five grid tiers, one for each responsive breakpoint: `mini` (assumed mobile devices), `small`, `medium`, `large`, and `jumbo`.
* Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it (e.g., `.column-large-4` applies to medium, and large devices, but not small or smaller devices).

{% include layout/grid/grid-options.md %}
{% include layout/grid/grid-offset-columns.md %}
{% include layout/grid/grid-nested-grid.md %}
{% include layout/grid/grid-size-modifiers.md %}
