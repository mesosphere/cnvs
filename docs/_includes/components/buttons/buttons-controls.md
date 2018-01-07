# Button Controls

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with our buttons plugin.

## Toggle Buttons

Add `data-toggle="button"` to activate toggling on a single button.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <button type="button" class="button button-primary" data-toggle="button" aria-pressed="false" autocomplete="off">

      Toggle Button

    </button>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<button type="button" class="button button-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Toggle Button
</button>
```

  </div>

</div>

## Checkbox &amp; Radio Button Groups

Add `data-toggle="buttons"` to a `.btn-group` containing checkbox or radio inputs to enable toggling in their respective styles.

### Checkbox Button Groups

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-group" data-toggle="buttons">

      <label class="button button-primary active">

        <input type="checkbox" autocomplete="off" checked> Checkbox 1

      </label>

      <label class="button button-primary">

        <input type="checkbox" autocomplete="off"> Checkbox 2

      </label>

      <label class="button button-primary">

        <input type="checkbox" autocomplete="off"> Checkbox 3

      </label>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="button-group" data-toggle="buttons">
  <label class="button button-primary active">
    <input type="checkbox" autocomplete="off" checked> Checkbox 1
  </label>
  <label class="button button-primary">
    <input type="checkbox" autocomplete="off"> Checkbox 2
  </label>
  <label class="button button-primary">
    <input type="checkbox" autocomplete="off"> Checkbox 3
  </label>
</div>
```

  </div>

</div>

### Radio Button Groups

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-group" data-toggle="buttons">

      <label class="button button-primary active">

        <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1

      </label>

      <label class="button button-primary">

        <input type="radio" name="options" id="option1" autocomplete="off"> Radio 2

      </label>

      <label class="button button-primary">

        <input type="radio" name="options" id="option1" autocomplete="off"> Radio 3

      </label>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="button-group" data-toggle="buttons">
  <label class="button button-primary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
  </label>
  <label class="button button-primary">
    <input type="radio" name="options" id="option1" autocomplete="off"> Radio 2
  </label>
  <label class="button button-primary">
    <input type="radio" name="options" id="option1" autocomplete="off"> Radio 3
  </label>
</div>
```

  </div>

</div>
