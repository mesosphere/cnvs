# Nested Grid

The CNVS Grid System supports an infinite number of nested grids. This means, in a given `.column-*` you can add a child `.row`, effectively establishing a new grid. Be careful to always wrap your nested columns in a new `.row`.

<div class="panel pod pod-short-bottom pod-short-top flush-horizontal"  markdown="1">

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
