---
layout: post
id: page-forms
title: Forms
page-header:
  headline: Forms
toc: true
---

Individual form controls automatically receive some global styling. All textual `<input>`, `<textarea>`, and `<select>` elements with `.form-control` are set to `width: 100%;` by default. Wrap labels and controls in `.form-group` for optimum spacing.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-6">

          <div class="form-group">

            <label>

              First Name

            </label>

            <input type="text" class="form-control" placeholder="">

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group">

            <label>

              Last Name

            </label>

            <input type="text" class="form-control" placeholder="">

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group">

            <label>

              Email address

            </label>

            <input type="email" class="form-control" placeholder="email@domain.com">

            <p class="form-control-feedback">

              Please provide a valid email.

            </p>

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group">

            <label>

              Password

            </label>

            <input type="password" class="form-control" placeholder="">

            <p class="form-control-feedback">

              Must include at least 1 number and 1 symbol.

            </p>

          </div>

        </div>

        <div class="column-small-12">

          <div class="form-group">

            <label>

              About Me

            </label>

            <textarea class="form-control" rows="3"></textarea>

          </div>

        </div>

        <div class="column-small-12">

          <div class="form-group">

            <label>

              I am a...

            </label>

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="radio-group-a" checked="checked">

              <span class="form-control-toggle-indicator"></span>

              Man

            </label>

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="radio-group-a">

              <span class="form-control-toggle-indicator"></span>

              Woman

            </label>

            <label class="form-control-toggle form-control-toggle-custom">

              <input type="radio" name="radio-group-a">

              <span class="form-control-toggle-indicator"></span>

              Unicorn

            </label>

          </div>

        </div>

      </div>

      <div class="button-collection flush-bottom">

        <button type="submit" class="button button-primary">

          Submit

        </button>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<form class="form flush-bottom">
<div class="row">
  <div class="column-small-6">
    <div class="form-group">
      <label>
        First Name
      </label>
      <input type="text" class="form-control" placeholder="">
    </div>
  </div>
  <div class="column-small-6">
    <div class="form-group">
      <label>
        Last Name
      </label>
      <input type="text" class="form-control" placeholder="">
    </div>
  </div>
</div>
…
<div class="button-collection flush-bottom">
  <button type="submit" class="button button-primary">
    Submit
  </button>
</div>
</form>
```

  </div>

</div>

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

# Control Sizes

Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="form-group">

        <label>

          Small

        </label>

        <input type="text" class="form-control form-control-small" placeholder="Input (Small)">

      </div>

      <div class="form-group">

        <label>

          Default

        </label>

        <input type="text" class="form-control" placeholder="Input (Default)">

      </div>

      <div class="form-group">

        <label>

          Large

        </label>

        <input type="text" class="form-control form-control-large" placeholder="Input (Large)">

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<input type="text" class="form-control form-control-small">

<input type="text" class="form-control">

<input type="text" class="form-control form-control-large">
```

  </div>

</div>

# Control States

## Focus

For form controls, we remove the default `outline` style added by most browsers.  On `:focus` we apply user-defined styling.  Similar styling attributes can be defined for the `:hover` state.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <input type="text" class="form-control focus" id="form-control-focus" placeholder="Placeholder Text">

          </div>

        </div>

      </div>

    </form>

  </div>

</div>

## Disabled

Add the `disabled` boolean attribute on an input to prevent user input and trigger a slightly different look.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-12">

          <div class="form-group flush-bottom">

            <input type="text" class="form-control" placeholder="Placeholder Text" disabled>

          </div>

        </div>

      </div>

    </form>

  </div>

</div>

## Validation

Canvas includes validation states for success and error states for all form elements including `.form-control`, `checkbox`, and `label`.  Simply add class `.form-group-success` or `.form-group-danger` to any `.form-group` and all components inside will reflect the appropriate state styling.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-6">

          <div class="form-group">

            <label>

              Default Input

            </label>

            <input type="text" class="form-control" placeholder="Placeholder">

            <p class="form-control-feedback">

              Example block-level help text here.

            </p>

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group">

            <label>

              Default Select

            </label>

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

        </div>

      </div>

      <div class="row">

        <div class="column-small-6">

          <div class="form-group form-group-success">

            <label>

              Success Input

            </label>

            <input type="text" class="form-control form-control-success" placeholder="Placeholder">

            <p class="form-control-feedback">

              Everything checks out here. Nice job!

            </p>

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group form-group-success">

            <label>

              Success Select

            </label>

            <span class="form-control form-control-success form-control-select">

              <select>

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

      <div class="row">

        <div class="column-small-6">

          <div class="form-group form-group-danger">

            <label>

              Error Input

            </label>

            <input type="text" class="form-control form-control-error" placeholder="Input (Error)">

            <p class="form-control-feedback">

              Sorry this ID already exists. Try another.

            </p>

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group form-group-danger">

            <label>

              Error Select

            </label>

            <span class="form-control form-control-error form-control-select">

              <select>

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
  <label>
    Default Input
  </label>
  <input type="text" class="form-control" placeholder="Placeholder">
  <p class="small flush-bottom">
    Example block-level help text here.
  </p>
</div>

<div class="form-group form-group-success">
  <label>
    Success Input
  </label>
  <input type="text" class="form-control" placeholder="Placeholder">
  <p class="form-control-feedback">
    Looks good.
  </p>
  <p class="small flush-bottom">
    Example block-level help text here.
  </p>
</div>

<div class="form-group form-group-danger">
  <label>
    Danger Input
  </label>
  <input type="text" class="form-control" placeholder="Placeholder">
  <p class="form-control-feedback">
    Sorry this ID already exists. Try another.
  </p>
  <p class="small flush-bottom">
    Example block-level help text here.
  </p>
</div>
```

  </div>

</div>

# Inverse Styling

Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.

<div class="panel">

  <div class="panel-cell panel-cell-dark">

    <form class="form flush-bottom">

      <div class="row">

        <div class="column-small-6">

          <div class="form-group">

            <label class="inverse">

              First Name

            </label>

            <input type="text" class="form-control form-control-inverse" placeholder="">

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group">

            <label class="inverse">

              Last Name

            </label>

            <input type="text" class="form-control form-control-inverse" placeholder="">

          </div>

        </div>

      </div>

      <div class="row">

        <div class="column-small-6">

          <div class="form-group">

            <label class="inverse">

              Email address

            </label>

            <input type="email" class="form-control form-control-inverse" placeholder="email@domain.com">

            <p class="form-control-feedback inverse">

              Please provide a valid email.

            </p>

          </div>

        </div>

        <div class="column-small-6">

          <div class="form-group">

            <label class="inverse">

              Password

            </label>

            <input type="password" class="form-control form-control-inverse" placeholder="">

            <p class="form-control-feedback inverse">

              Must include at least 1 number and 1 symbol.

            </p>

          </div>

        </div>

      </div>

      <div class="row">

        <div class="column-small-12">

          <div class="form-group">

            <label class="inverse">

              About Me

            </label>

            <textarea class="form-control form-control-inverse"></textarea>

          </div>

        </div>

      </div>

      <div class="row">

        <div class="column-small-12">

          <div class="form-group">

            <label class="inverse">

              I am a…

            </label>

            <label class="form-control-toggle inverse form-control-toggle-custom">

              <input type="radio" name="sample-radio-group" checked="">

              <span class="form-control-toggle-indicator"></span>

              Man

            </label>

            <label class="form-control-toggle inverse form-control-toggle-custom">

              <input type="radio" name="sample-radio-group">

              <span class="form-control-toggle-indicator"></span>

              Woman

            </label>

            <label class="form-control-toggle inverse form-control-toggle-custom">

              <input type="radio" name="sample-radio-group">

              <span class="form-control-toggle-indicator"></span>

              Unicorn

            </label>

          </div>

        </div>

      </div>

      <div class="button-collection flush-bottom">

        <button type="submit" class="button button-primary button-stroke button-inverse">

          Submit

        </button>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="form-group">
  <label class="inverse">
    …
  </label>
  <input type="text" class="form-control form-control-inverse">
  <p class="form-control-feedback inverse">
    …
  </p>
</div>
```

  </div>

</div>

# Form Control Feedback

Apply the class `.form-control-feedback` to a standard type block to provide contextual feedback  like help text or hint text to form controls and form control groups.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="form-group flush-bottom">

        <label>

          Input with feedback

        </label>

        <input type="text" class="form-control" placeholder="Placeholder">

        <p class="form-control-feedback">

          Example block-level feedback text here.

        </p>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="form-group">
  <label>
   Input with help text
  </label>
  <input type="text" class="form-control" placeholder="Placeholder">
  <p class="form-control-feedback">
    Example block-level feedback text here.
  </p>
</div>
```

  </div>

</div>

# Form Control Groups

Align elements alongside or inside `.form-control` elements by wrapping them in a `.form-control-group` element. Use the `.form-control-group-add-on` element to position elements.  If you add `.form-control` to the wrapping `.form-control-group` the `.form-control-group-add-on` will live inside the `.form-control` rather than outside it.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <form class="form flush-bottom">

      <div class="form-group">

        <label>

          Input With Add On (Before)

        </label>

        <div class="form-control-group">

          <div class="form-control-group-add-on">

            <button class="button">

              Test

            </button>

          </div>

          <input type="text" class="form-control" placeholder="Placeholder">

        </div>

      </div>

      <div class="form-group">

        <label>

          Input With Add On (After)

        </label>

        <div class="form-control-group">

          <input type="text" class="form-control" placeholder="Placeholder">

          <div class="form-control-group-add-on">

            <button class="button">

              Test

            </button>

          </div>

        </div>

      </div>

      <div class="form-group">

        <label>

          Input With Nested Add On (Before)

        </label>

        <div class="form-control-group form-control">

          <span class="form-control-group-add-on form-control-group-add-on-prepend">

            <span style="display: block; background: black; width: 16px; height: 16px;"></span>

          </span>

          <input type="text" class="form-control" placeholder="Placeholder">

        </div>

      </div>

      <div class="form-group">

        <label>

          Input With Nested Add On (After)

        </label>

        <div class="form-control-group form-control">

          <input type="text" class="form-control" placeholder="Placeholder">

          <span class="form-control-group-add-on form-control-group-add-on-append">

            <span style="display: block; background: black; width: 16px; height: 16px;"></span>

          </span>

        </div>

      </div>

      <div class="form-group flush-bottom">

        <label>

          Input With Nested Add On (Before &amp; After)

        </label>

        <div class="form-control-group form-control">

          <span class="form-control-group-add-on form-control-group-add-on-prepend">

            <span style="display: block; background: black; width: 16px; height: 16px;"></span>

          </span>

          <input type="text" class="form-control" placeholder="Placeholder">

          <span class="form-control-group-add-on form-control-group-add-on-append">

            <span style="display: block; background: black; width: 16px; height: 16px;"></span>

          </span>

        </div>

      </div>

    </form>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Input With Add On Before -->

<div class="form-control-group">
  <div class="form-control-group-add-on">
    …
  </div>
  <input type="text" class="form-control" placeholder="Placeholder">
</div>

<!-- Input With Add On After -->

<div class="form-control-group">
  <input type="text" class="form-control" placeholder="Placeholder">
  <div class="form-control-group-add-on">
    …
  </div>
</div>

<!-- Input With Nested Add On Before -->

<div class="form-control-group form-control">
  <span class="form-control-group-add-on form-control-group-add-on-prepend">
    …
  </span>
  <input type="text" class="form-control" placeholder="Placeholder">
</div>

<!-- Input With Nested Add On After -->

<div class="form-control-group form-control">
  <input type="text" class="form-control" placeholder="Placeholder">
  <span class="form-control-group-add-on form-control-group-add-on-append">
    …
  </span>
</div>

<!-- Input With Nested Add On Before &amp; After -->

<div class="form-control-group form-control">
  <span class="form-control-group-add-on form-control-group-add-on-prepend">
    …
  </span>
  <input type="text" class="form-control" placeholder="Placeholder">
  <span class="form-control-group-add-on form-control-group-add-on-append">
    …
  </span>
</div>
```

  </div>

</div>
