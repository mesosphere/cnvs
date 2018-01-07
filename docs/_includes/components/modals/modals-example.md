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
