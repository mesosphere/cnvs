---
layout: post
id: page-grid
title: Grid
page-header:
  headline: Grid
  description: Canvas supports a responsive mobile-first grid system.  By default, the grid system is based on a 12 column layout, but can be easily modified to enable any column count.  With simple class name additions, the column count can be changed based on the users viewport.  This allows for rich layouts that adjust to best fit the device.
toc: true
---

<div class="panel flush-horizontal">

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

# Grid Options

The column width and position can change based on both screen resolution and class name.  The column count and gutter width are easily modified using Canvas variables.  The grid itself is size independent, the grid column width is defined based on the element wrapping the row.  The only constant size in a grid is the gutter width -- which itself varies based on the width of the viewport.

<table class="table table-bordered table-striped flush-bottom">
  <thead>
    <tr>
      <th></th>
      <th class="text-align-center">
        Mini<br>
        <small class="flush-bottom">Portrait phones (< 480px)</small>
      </th>
      <th class="text-align-center">
        Small<br>
        <small class="flush-bottom">Landscape phones (≥ 480px)</small>
      </th>
      <th class="text-align-center">
        Medium<br>
        <small class="flush-bottom">Tablets (≥ 768px)</small>
      </th>
      <th class="text-align-center">
        Large<br>
        <small class="flush-bottom">Desktops (≥ 992px)</small>
      </th>
      <th class="text-align-center">
        Jumbo<br>
        <small class="flush-bottom">Desktops (≥ 1400px)</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Grid behavior</th>
      <td>Horizontal at all times</td>
      <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Max Container Width</th>
      <td>None (Auto)</td>
      <td>None (Auto)</td>
      <td>730px</td>
      <td>920px</td>
      <td>1100px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code>.column-</code></td>
      <td><code>.column-small-</code></td>
      <td><code>.column-medium-</code></td>
      <td><code>.column-large-</code></td>
      <td><code>.column-jumbo-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12 (default)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td>12px</td>
      <td>12px</td>
      <td>24px</td>
      <td>32px</td>
      <td>36px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Offsets</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>

# Offset Columns

Offset columns, shifting them to the right, by using the `.column-offset-*` classes -- replacing the `*` with the number of columns to shift by. For example, `.column-offset-3` will move the column over by 3 columns. Use direction modifiers, in the format `.column-small-offset-*`, to offset at the designated screen size breakpoint.

<div class="panel flush-horizontal" markdown="1">

  <div class="panel-cell">

    <div class="pod pod-short-bottom flush-horizontal flush-top">

      <div class="row">
        <div class="column-medium-3">
          <div class="layout-box">
            <div class="layout-box-item layout-box-item-margin">
              <div class="layout-box-item layout-box-item-padding">
                <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-medium-5 column-medium-offset-4">
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

    <div class="pod pod-short-bottom flush-horizontal flush-top">

      <div class="row">
        <div class="column-medium-5 column-medium-offset-2">
          <div class="layout-box">
            <div class="layout-box-item layout-box-item-margin">
              <div class="layout-box-item layout-box-item-padding">
                <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-medium-2 column-medium-offset-3">
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

    <div class="row">
      <div class="column-small-8 column-small-offset-1">
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
  <div class="column-medium-3">
  </div>
  <div class="column-medium-5 column-medium-offset-4">
  </div>
</div>

<div class="row">
  <div class="column-medium-5 column-medium-offset-2">
  </div>
  <div class="column-medium-2 column-medium-offset-3">
  </div>
</div>

<div class="row">
  <div class="column-small-8 column-small-offset-1">
  </div>
</div>
```

  </div>

</div>

# Nested Grid

The CNVS Grid System supports an infinite number of nested grids. This means, in a given `.column-*` you can add a child `.row`, effectively establishing a new grid. Be careful to always wrap your nested columns in a new `.row`.

<div class="panel flush-horizontal"  markdown="1">

  <div class="panel-cell">

    <div class="row">
      <div class="column-small-9 column-large-10">
        <div class="layout-box">
          <div class="layout-box-item layout-box-item-margin">
            <div class="layout-box-item layout-box-item-padding">
              <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
                <div class="row">
                  <div class="column-small-6 column-medium-7 column-large-5">
                    <div class="layout-box">
                      <div class="layout-box-item layout-box-item-margin">
                        <div class="layout-box-item layout-box-item-padding">
                          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column-small-6 column-medium-5 column-large-7">
                    <div class="layout-box">
                      <div class="layout-box-item layout-box-item-margin">
                        <div class="layout-box-item layout-box-item-padding">
                          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
                            <div class="row">
                              <div class="column-6">
                                <div class="layout-box">
                                  <div class="layout-box-item layout-box-item-margin">
                                    <div class="layout-box-item layout-box-item-padding">
                                      <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="column-6">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  <div class="column-small-9 column-large-10">
    <div class="row">
      <div class="column-small-6 column-medium-7 column-large-5">
      </div>
      <div class="column-small-6 column-medium-5 column-large-7">
        <div class="row">
          <div class="column-small-6">
          </div>
          <div class="column-small-6">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

  </div>

</div>

# Size Modifiers

Size modifiers are available if you wish to have a grid with narrower or wider gutters. For example, adding the class `.row-narrow` to the `.row` element will decrease the gutter width of applied between columns in the given row. You can even remove the gutters all together with the `.row-flush` class modifier.

| Class         | Description                                  |
| ------------- | -------------------------------------------- |
| `.row-flush`  | Remove the gutters between columns entirely. |
| `.row-narrow` | Decrease the gutter width between columns.   |
| `.row-wide`   | Increase the gutter width between columns.   |
{: .table }

<div class="panel flush-horizontal">

  <div class="panel-cell">

    <div class="row row-narrow">
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
<div class="row row-narrow">
  …
</div>
```

  </div>

</div>
