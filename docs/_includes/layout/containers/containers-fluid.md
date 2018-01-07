# Fluid-Width Containers

In previous versions of CNVS, `.container-fluid` was used to encapsulated content that should fill the width of it's parent.  A fluid container applied outerward spacing to the left and right of the Container and was a quick way to create a header, banner, or other full-width components.  With the introduction of the `.pod` layout component (see: [Pods](/layout/pods)) we Containers have been generalized to be used only for bounding content by width.  To create the previously seen by `.container-fluid` it is now suggested that you wrap content in a `.pod`.

<div class="panel">

  <div class="panel-cell">

    <div class="layout-box containers-fluid">
      <div class="layout-box-item layout-box-item-margin pod flush-top flush-bottom">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod flush-top flush-bottom">
  <!-- Container content goes here -->
</div>
```

  </div>

</div>
