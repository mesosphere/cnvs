# Pod Options

By default, margin is applied evenly to sides of the pod (top, bottom, left, right).  You can easily adjust this behavior by adding a size modifier to the base `.pod` class. For example `.pod-short` will decrease the margin and `.pod-tall` will increase the margin. Furthermore, if you are seeking to change the margin in only a single direction, you can add an additional direction modifier. For example, `.pod-tall-top` increase the margin above the pod.

## Size Modifiers

To adjust padding size apply one of the available pod-specific size classes.  For example, simply using the class `.pod-short` will reduce padding evenly above and below the pod.

<table class="table short">

  <thead>

    <tr>

      <th>

        Class

      </th>

      <th>

        Description

      </th>

    </tr>

  </thead>

  <tbody>

    <tr>

      <td>

        <code>

          .pod-flush

        </code>

      </td>

      <td>

        Remove the margins entirely.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-shorter

        </code>

      </td>

      <td>

        Reduce the vertical margins to 25%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-short

        </code>

      </td>

      <td>

        Reduce the vertical margins to 50%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-tall

        </code>

      </td>

      <td>

        Increase the vertical margins by 150%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-taller

        </code>

      </td>

      <td>

        Increase the vertical margins by 200%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-narrower

        </code>

      </td>

      <td>

        Reduce the horizontal margins to 25%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-narrow

        </code>

      </td>

      <td>

        Reduce the horizontal margins to 50%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-wide

        </code>

      </td>

      <td>

        Increase the horizontal margins by 150%.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-wider

        </code>

      </td>

      <td>

        Increase the horizontal margins by 200%.

      </td>

    </tr>

  </tbody>

</table>

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

<table class="table short">

  <thead>

    <tr>

      <th>

        Class

      </th>

      <th>

        Description

      </th>

    </tr>

  </thead>

  <tbody>

    <tr>

      <td>

        <code>

          .pod-*-top

        </code>

      </td>

      <td>

        Adjust margin above the pod.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-*-right

        </code>

      </td>

      <td>

        Adjust margin to the right of the pod.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-*-bottom

        </code>

      </td>

      <td>

        Adjust margin below the pod.

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .pod-*-left

        </code>

      </td>

      <td>

        Adjust margin to the left of the pod.

      </td>

    </tr>

  </tbody>

</table>

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
