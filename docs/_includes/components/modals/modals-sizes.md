# Modal Sizes

Two additional modal sizes are provided by CNVS using the class modifiers `.modal-small` and `.modal-large`.  The class modifiers only impact the width of the modal and, if defined in CNVS, the inner padding of the header, body, and footer.

## Small Modal

Use the class modifier `.modal-small` to reduce the width of your modal.

<div class="panel flush-bottom">

  <div class="panel-cell panel-cell-dark">

    <div class="modal modal-small modal-inline">

      <div class="modal-content">

        <div class="modal-header">

          <h4 class="modal-header-title text-align-center flush">

            Modal Header Title

          </h4>

        </div>

        <div class="modal-body">

          <p class="text-align-center flush">

            Maecenas faucibus mollis interdum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.

          </p>

        </div>

        <div class="modal-footer">

          <div class="button-collection flush-bottom flex flex-direction-top-to-bottom flex-align-items-stretch-screen-small flex-direction-left-to-right-screen-small">

            <a href="#" class="button flex-item-align-start-screen-medium flex-item-grow-1-screen-small flex-item-basis-none-screen-small">

              Close

            </a>

            <a href="#" class="button button-primary flex-item-align-end-screen-medium flex-item-grow-1-screen-small flex-item-basis-none-screen-small">

              Submit

            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="modal modal-small modal-inline">
  …
</div>
```

  </div>

</div>

## Large Modal

Use the class modifier `.modal-large` to increase the width of your modal.

<div class="panel flush-bottom">

  <div class="panel-cell panel-cell-dark">

    <div class="modal modal-large modal-inline">

      <div class="modal-content">

        <div class="modal-header">

          <h4 class="modal-header-title flush">

            Modal Header Title

          </h4>

        </div>

        <div class="modal-body">

          <p class="flush">

            Maecenas faucibus mollis interdum. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

          </p>

        </div>

        <div class="modal-footer">

          <div class="button-collection flush-bottom flex flex-direction-top-to-bottom flex-align-items-stretch-screen-small flex-direction-left-to-right-screen-small flex-justify-items-space-between-screen-medium">

            <a href="#" class="button flex-item-align-start-screen-medium flex-item-grow-1-screen-small flex-item-basis-none-screen-small flex-item-grow-0-screen-medium flex-item-basis-auto-screen-medium">

              Close

            </a>

            <a href="#" class="button button-primary flex-item-align-end-screen-medium flex-item-grow-1-screen-small flex-item-basis-none-screen-small flex-item-grow-0-screen-medium flex-item-basis-auto-screen-medium">

              Submit

            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="modal modal-large modal-inline">
  …
</div>
```
