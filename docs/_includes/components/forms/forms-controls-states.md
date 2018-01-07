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
