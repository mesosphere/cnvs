# Form Controls

## Inputs

Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <input type="text" class="form-control" placeholder="Placeholder Text">

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="form-group">
  <input type="text" class="form-control" placeholder="Placeholder Text">
</div>
```

  </div>

</div>

## Textarea

Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <textarea class="form-control" placeholder="Placeholder Text" rows="4"></textarea>

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="form-group">
  <textarea class="form-control" placeholder="Placeholder Text" rows="4"></textarea>
</div>
```

  </div>

</div>

## Checkboxes &amp; Radios

Checkboxes and radios, both staple toggles of the traditional HTML form, share a single class in CNVS, `.form-control-toggle`, to governs layout and basic styling.  Wrap a checkbox or radio in the class `.form-control-toggle`, preferrably using a `<label>` for added context and accessibility.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group">

            <label class="form-control-toggle">

              <input type="checkbox">

              First Option

            </label>

            <label class="form-control-toggle">

              <input type="checkbox">

              Second Option

            </label>

            <label class="form-control-toggle disabled">

              <input type="checkbox" disabled="">

              Third Option (Disabled)

            </label>

          </div>

          <div class="form-group flush-bottom">

            <label class="form-control-toggle">

              <input type="radio" name="sample-radio-group" checked="">

              First Option

            </label>

            <label class="form-control-toggle">

              <input type="radio" name="sample-radio-group">

              Second Option

            </label>

            <label class="form-control-toggle disabled">

              <input type="radio" name="sample-radio-group" disabled="">

              Third Option (Disabled)

            </label>

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="form-group">
  <label class="form-control-toggle">
    <input type="checkbox">
    First Option
  </label>
  <label class="form-control-toggle">
    <input type="checkbox">
    Second Option
  </label>
  …
</div>
```

  </div>

</div>

### Custom Checkboxes &amp; Radios

Looking to take your checkbox or radio toggle to the next level? Add the class `.form-control-toggle-custom` to your exisiting `.form-control-toggle` wrapped checkbox or radio input.  The `<input>` is hidden from view, but still available in the DOM for use in your form.  In order to replace the hidden checkbox or radio component with a styled alternate, you must also inject a new element with the class `.form-control-toggle-indicator`. We recommend a simple `<span>` for this.

For the checkmark icon, as well as the circle icon for radios, we use base64 embedded SVG icons and adjust the color.

#### Checkboxes

<div class="panel pod flush-top flush-horizontal pod-short-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="checkbox" checked />

              <span class="form-control-toggle-indicator"></span>

              First Option

            </label>

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<label class="form-control-toggle form-control-toggle">
  <input type="checkbox" checked />
  <span class="form-control-toggle-indicator"></span>
  First Option
</label>
```

  </div>

</div>

For indetermindate checkboxes, one whose state is neither true nor false, you may leverage the `:indeterminate` pseudo class.  However, you must use Javascript magic to manually set this property.  Something like this should work: `$(element).prop('indeterminate', true)`.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="checkbox" class="indeterminate" />

              <span class="form-control-toggle-indicator"></span>

              First Option

            </label>

          </div>

        </div>

      </div>

    </form>

  </div>

</div>

#### Radios

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="sample-radio-group" checked="">

              <span class="form-control-toggle-indicator"></span>

              First Option

            </label>

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="sample-radio-group">

              <span class="form-control-toggle-indicator"></span>

              Second Option

            </label>

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="sample-radio-group">

              <span class="form-control-toggle-indicator"></span>

              Third Option

            </label>

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<label class="form-control-toggle form-control-toggle">
  <input type="radio" />
  <span class="form-control-toggle-indicator"></span>
  First Option
</label>
…
```

  </div>

</div>

#### Disabled

Using the `disabled` attribute, placed inline on the checkbox or radio HTML element, will not only make the toggle un-clickable, but also adjusts the appearance to reflect it's inaccessibility.

<div class="panel">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group">

            <label class="form-control-toggle checkbox-inline form-control-toggle-custom">

              <input type="checkbox" disabled checked/>

              <span class="form-control-toggle-indicator"></span>

              First Option

            </label>

            <label class="form-control-toggle checkbox-inline form-control-toggle-custom">

              <input type="checkbox" disabled />

              <span class="form-control-toggle-indicator"></span>

              Second Option

            </label>

          </div>

          <div class="form-group flush-bottom">

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="sample-radio-group" checked="" disabled>

              <span class="form-control-toggle-indicator"></span>

              First Option

            </label>

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="sample-radio-group" disabled>

              <span class="form-control-toggle-indicator"></span>

              Second Option

            </label>

            <label class="form-control-toggle form-control-toggle-custom disabled">

              <input type="radio" name="sample-radio-group" disabled>

              <span class="form-control-toggle-indicator"></span>

              Third Option

            </label>

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<label class="form-control-toggle form-control-toggle">
  <input type="checkbox" disabled />
  <span class="form-control-toggle-indicator"></span>
  First Option
</label>
```

  </div>

</div>

## Selects

Default styling for `select` elements are available, or mirror custom control styling by wrapping any select in `.form-control` class and add the additional class `.form-control-select`.  For selects of type `multiple` add the class `.form-control-select-multiple`.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group">

            <span class="form-control form-control-select">

              <select>

                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>

              </select>

            </span>

          </div>

          <div class="form-group flush-bottom">

            <span class="form-control form-control-select form-control-select-multiple">

              <select multiple>

                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>

              </select>

            </span>

          </div>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="form-group">
  <span class="form-control form-control-select">
    <select>
      <option>1</option>
      <option>2</option>
      <option>…</option>
    </select>
  </span>
</div>

<div class="form-group">
  <span class="form-control form-control-select form-control-select-multiple">
    <select multiple>
      <option>1</option>
      <option>2</option>
      <option>…</option>
    </select>
  </span>
</div>
```

  </div>

</div>
