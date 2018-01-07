# Modal Structure

To create a new modal use the `.modal` class. A modal is composed of 3 primary sections, all of which are optional and can be used interchangeably -- `.modal-header`, `.modal-body`, and `.modal-footer`.  Looking for just the body and footer? It's as simple as not including `.modal-header` in your modal.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="modal modal-inline">

      <div class="modal-header text-align-center">

        `.modal-header`

      </div>

      <div class="modal-body text-align-center">

        `.modal-body`

      </div>

      <div class="modal-footer text-align-center">

        `.modal-footer`

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="modal">
  <div class="modal-header">
    …
  </div>
  <div class="modal-body">
    …
  </div>
  <div class="modal-footer">
    …
  </div>
</div>
```
