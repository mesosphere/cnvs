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

{% include components/forms/forms-controls.md %}
{% include components/forms/forms-controls-sizes.md %}
{% include components/forms/forms-controls-states.md %}
{% include components/forms/forms-controls-inverse-styling.md %}
{% include components/forms/forms-controls-feedback.md %}
{% include components/forms/forms-form-control-groups.md %}
