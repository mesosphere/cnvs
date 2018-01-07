# Button Content

By default, buttons are defined so that all content will display vertically centered inside the button.  However, it may be necessary to place more than just text inside of a button.  For example, you may want a small icon next to the button label.  Space will be applied between child elements of a button automatically.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button">

        <i class="icon icon-mini">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

        <span>

          Button

        </span>

      </a>

      <a href="#" class="button">

        <span>

          Button

        </span>

        <i class="icon icon-mini">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button">
  <i class="icon icon-mini"></i>
  <span>Button</span>
</a>
```

  </div>

</div>
