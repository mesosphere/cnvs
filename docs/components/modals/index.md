---
layout: post
id: page-modals
title: Modals
page-header:
  headline: Modals
  description: Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.
toc: true
---

Use the class `.modal` in combination with one or more nested layout components to quickly create a new modal.  Below is an example of simple modal with a header, body, and footer.

<div class="panel flush-bottom">

  <div class="panel-cell panel-cell-dark">

    <div class="modal modal-inline">

      <div class="modal-header">

        <h4 class="modal-header-title flush">

          Join Our Mailing List

        </h4>

      </div>

      <div class="modal-body">

        <p>

          Stay updated on the latest news and releases from CNVS. Join our mailing list today. We hate spam too.

        </p>

        <div class="form flush-bottom">

          <div class="row">

            <div class="column-small-6">

              <div class="form-group flush-bottom-screen-small">

                <label>

                  Full Name

                </label>

                <input class="form-control" type="text">

              </div>

            </div>

            <div class="column-small-6">

              <div class="form-group flush-bottom-screen-small">

                <label>

                  Email

                </label>

                <input class="form-control" type="email">

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="modal-footer">

        <div class="button-collection flush-bottom flex flex-direction-top-to-bottom flex-align-items-stretch-screen-small flex-direction-left-to-right-screen-small flex-justify-items-space-between-screen-medium">

          <a href="#" class="button button-primary flex-item-order-1-screen-small flex-item-grow-1-screen-small flex-item-basis-none-screen-small flex-item-align-end-screen-medium flex-item-grow-0-screen-medium flex-item-basis-auto-screen-medium">

            Submit

          </a>

          <a href="#" class="button flex-item-order-0-screen-small flex-item-grow-1-screen-small flex-item-basis-none-screen-small flex-item-align-start-screen-medium flex-item-grow-0-screen-medium flex-item-basis-auto-screen-medium">

            Close

          </a>

        </div>

      </div>

    </div>

  </div>

</div>

# Example

Use a button or link to trigger the display of a modal.  CNVS uses the class `.fade` to hide the modal.  Adding the class `.in` to `.fade` will display the modal in.  You can easily override these class styles to create unique keyframe sequences for your project.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <a href="#" class="button" data-toggle="modal" data-target="#myModal">Show Modal</a>

    <div class="modal fade" id="myModal">

      <div class="modal-header">

        <h4 class="modal-header-title flush">

          Join Our Mailing List

        </h4>

      </div>

      <div class="modal-body">

        <p>

          Stay updated on the latest news and releases from CNVS. Join our mailing list today. We hate spam too.

        </p>

        <div class="form flush-bottom">

          <div class="row">

            <div class="column-small-6">

              <div class="form-group flush-bottom-screen-small">

                <label>

                  Full Name

                </label>

                <input class="form-control" type="text">

              </div>

            </div>

            <div class="column-small-6">

              <div class="form-group flush-bottom-screen-small">

                <label>

                  Email

                </label>

                <input class="form-control" type="email">

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="modal-footer">

        <div class="button-collection flush-bottom flex flex-direction-top-to-bottom flex-align-items-stretch-screen-small flex-direction-left-to-right-screen-small flex-justify-items-space-between-screen-medium">

          <a href="#" class="button button-primary flex-item-order-1-screen-small flex-item-grow-1-screen-small flex-item-basis-none-screen-small flex-item-align-end-screen-medium flex-item-grow-0-screen-medium flex-item-basis-auto-screen-medium">

            Submit

          </a>

          <a href="#" class="button flex-item-order-0-screen-small flex-item-grow-1-screen-small flex-item-basis-none-screen-small flex-item-align-start-screen-medium flex-item-grow-0-screen-medium flex-item-basis-auto-screen-medium" data-dismiss="modal">

            Close

          </a>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button" data-toggle="modal" data-target="#myModal">Show Modal</a>

<div class="modal fade" id="myModal">
  …
</div>
```

  </div>

</div>

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
