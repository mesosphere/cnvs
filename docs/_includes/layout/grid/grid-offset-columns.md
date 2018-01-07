# Offset Columns

Offset columns, shifting them to the right, by using the `.column-offset-*` classes -- replacing the `*` with the number of columns to shift by. For example, `.column-offset-3` will move the column over by 3 columns. Use direction modifiers, in the format `.column-small-offset-*`, to offset at the designated screen size breakpoint.

<div class="panel pod pod-short-bottom pod-short-top flush-horizontal" markdown="1">

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
