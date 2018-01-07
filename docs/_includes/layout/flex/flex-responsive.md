# Responsive Flex Box

The flex layout system in CNVS is built to be fully responsive across all included screen-size break-points. In your specific project it may be necessary to adjust flex behavior when moving from mobile devices to desktop screens.  To apply as specific flex behavior at mini, small, medium, and large viewports, add the suffix `-screen-small`, `-screen-medium`, `-screen-large`, or `-screen-jumbo` respectively to your specific flex class.

<div class="panel">

  <div class="panel-cell">

    <div class="example-flex-container example-flex-responsive flex flex-direction-top-to-bottom flex-direction-left-to-right-screen-medium flex-align-items-stretch">
      <div class="example-flex-item example-flex-item-1 flex-item-grow-3-screen-medium flex-item-order-3-screen-medium">
        1
      </div>
      <div class="example-flex-item example-flex-item-2 flex-item-grow-2-screen-medium flex-item-order-2-screen-medium">
        2
      </div>
      <div class="example-flex-item example-flex-item-3 flex-item-grow-1-screen-medium flex-item-order-0-screen-medium">
        3
      </div>
      <div class="example-flex-item example-flex-item-4 flex-item-grow-4-screen-medium flex-item-order-1-screen-medium flex-item-order--1-screen-jumbo">
        4
      </div>
    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="flex flex-direction-top-to-bottom flex-direction-left-to-right-screen-medium flex-align-items-stretch">
  <div class="flex-item-grow-3-screen-medium flex-item-order-3-screen-medium">
    1
  </div>
  <div class="flex-item-grow-2-screen-medium flex-item-order-2-screen-medium">
    2
  </div>
  <div class="flex-item-grow-1-screen-medium flex-item-order-0-screen-medium">
    3
  </div>
  <div class="flex-item-grow-4-screen-medium flex-item-order-1-screen-medium flex-item-order--1-screen-jumbo">
    4
  </div>
</div>
```

  </div>

</div>
