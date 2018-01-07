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
