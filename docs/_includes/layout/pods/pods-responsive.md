# Responsive Pod

In your specific project it may be necessary to adjust the pod layout behavior when moving from mobile devices to desktop screens.  To apply as specific pod layout behavior at mini, small, medium, and large viewports, add the suffix `-screen-mini`, `-screen-small`, `-screen-medium`, `-screen-large`, or `-screen-jumbo` respectively to your specific pod class.

For example, an element with the following element `<div class="pod pod-narrow-screen-small pod-left-screen-medium pod-wider-right-screen-large">…<div>` will exhibit default pod spacing behavior until the small screen size, at which point the pod will narrow horizontally.  Then, at the medium screen size, the left side of the pod will return to default pod margins.  Once moving into the large screen size, the right side of the pod will behave like a wider pod.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="layout-box pods-options-responsive">
      <div class="layout-box-item layout-box-item-margin pod pod-short pod-narrower-left-screen-small pod-tall-screen-medium pod-wider-right-screen-jumbo">
        <div class="layout-box-item layout-box-item-padding">
          <div class="layout-box-item layout-box-item-content layout-box-item-content-fixed-height">
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="pod pod-short pod-narrower-left-screen-small pod-tall-screen-medium pod-wider-right-screen-jumbo">
  …
</div>
```

  </div>

</div>
