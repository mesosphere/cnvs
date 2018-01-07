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
