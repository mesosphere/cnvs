# Block Buttons

Use the class `.button-block` when you need a button to fill the entire width of it's parent container.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-block">

        Block Button

      </a>

      <a href="#" class="button button-primary button-block">

        Block Button

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button button-block">
  Block Button
</a>
```

  </div>

</div>

## Responsive Block Buttons

Optional classes are available when you need a button to fill it's parent container only below a specific screen size.  Add `.button-block-below-screen-*`, replacing `*` with `-mini`, `-small`, `-medium`, or `-large`.  Try it out.  Resize this browser window and observe when the buttons below switch to their Block view.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-block button-block-below-screen-small">

        Block Button (Mini)

      </a>

      <a href="#" class="button button-block button-block-below-screen-medium">

        Block Button (Small)

      </a>

      <a href="#" class="button button-block button-block-below-screen-large">

        Block Button (Medium)

      </a>

      <a href="#" class="button button-block button-block-below-screen-jumbo">

        Block Button (Large)

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Block Button: When Smaller than Screen Mini-->
<a href="#" class="button button-block button-block-below-screen-small">
  Block Button (Mini)
</a>

<!-- Block Button: When Smaller than Screen Small-->
<a href="#" class="button button-block button-block-below-screen-medium">
  Block Button (Small)
</a>

<!-- Block Button: When Smaller than Screen Medium-->
<a href="#" class="button button-block button-block-below-screen-large">
  Block Button (Medium)
</a>

<!-- Block Button: When Smaller than Screen Large-->
<a href="#" class="button button-block button-block-below-screen-jumbo">
  Block Button (Large)
</a>
```

  </div>

</div>
