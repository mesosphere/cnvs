# Spacing Modifiers

To adjust the margin size apply one of the available divider-specific size classes.  For example, simply using the class `.divider-short` will reduce margin evenly above and below the divider.

| Class              | Description                                           |
| ------------------ | ----------------------------------------------------- |
| `.divider-flush`   | Remove the margin in one or both direction entirely.  |
| `.divider-shorter` | Reduce the margin in one or both direction to 25%.    |
| `.divider-short`   | Reduce the margin in one or both direction to 50%.    |
| `.divider-tall`    | Increase the margin in one or both direction to 150%. |
| `.divider-taller`  | Increase the margin in one or both direction to 200%. |
{: .table }

<div class="panel">

  <div class="panel-cell">

    <div class="layout-box dividers-spacing-modifiers">
      <div class="layout-box-item layout-box-item-margin divider divider-short">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content">
            <div class="divider divider-flush">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block">

```html
<div class="divider divider-short">
&hellip;
</div>
```

  </div>

</div>

## Spacing Direction Modifiers

Add `-top` or `-bottom` to the end of the size modifier class to adjust padding only in the direction implied by the direction modifier.

| Class               | Description                       |
| ------------------- | --------------------------------- |
| `.divider-*-top`    | Adjust padding above the divider. |
| `.divider-*-bottom` | Adjust padding below the divider. |
{: .table }

<!-- =================================================
BEGIN: Example
================================================== -->

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="layout-box dividers-spacing-direction-modifier">
      <div class="layout-box-item layout-box-item-margin divider divider-short-top divider-taller-bottom">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content">
            <div class="divider flush">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="divider divider-short-top divider-taller-bottom">
  &hellip;
</div>
```

  </div>

</div>
