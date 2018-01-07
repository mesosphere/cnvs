<!-- =================================================
BEGIN: Dropdown Menu List Item Content
================================================== -->

<section id="dropdowns-menu-list-item-content">

  <h1>

    Dropdown Menu List Item Content

  </h1>

  <p>

    It may be necessary to place more than just text inside of a dropdown menu list item. For example, you may want a small icon next to the dropdown menu list item label to help better communicate an action or signal selection. Place an element before or after text in a dropdown menu list item and space will be applied between the element(s) and the text.

  </p>

  <div class="message message-warning">

    <strong>Note:</strong> To apply space between elements in a dropdown menu list item, be sure to wrap the label in a <code>span</code> tag with class <code>.dropdown-menu-list-item-label</code>.

  </div>

  <!-- =================================================
  BEGIN: Example
  ================================================== -->

  <div class="panel flush-bottom">

    <div class="panel-cell">

      <div class="button-collection button-collection-align-vertical-center flush-bottom">

        <div class="dropdown force-open">

          <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

            Dropdown

          </button>

          <span class="dropdown-menu dropdown-menu-right" role="menu">

            <span class="dropdown-menu-header">

              Make a selection

            </span>

            <ul class="dropdown-menu-list">

              <li class="selected">

                <a href="#">

                  <i class="icon icon-mini">
                    <svg class="">
                      <use xlink:href="#icons-check"></use>
                    </svg>
                  </i>

                  <span class="dropdown-menu-list-item-label">

                    Option A

                  </span>

                </a>

              </li>

              <li>

                <a href="#">

                  <i class="icon icon-mini">
                  </i>

                  <span class="dropdown-menu-list-item-label">

                    Option B

                  </span>

                </a>

              </li>

              <li>

                <a href="#">

                  <i class="icon icon-mini">
                  </i>

                  <span class="dropdown-menu-list-item-label">

                    Option C

                  </span>

                </a>

              </li>

            </ul>

            <span class="dropdown-menu-divider">
            </span>

            <ul class="dropdown-menu-list">

              <li>

                <a href="#">

                  <i class="icon icon-mini">
                    <svg class="">
                      <use xlink:href="#icons-circle-arrow-up"></use>
                    </svg>
                  </i>

                  <span class="dropdown-menu-list-item-label">

                    Action

                  </span>

                </a>

              </li>

              <li>

                <a href="#">

                  <i class="icon icon-mini">
                    <svg class="">
                      <use xlink:href="#icons-users-plus"></use>
                    </svg>
                  </i>

                  <span class="dropdown-menu-list-item-label">

                    Action

                  </span>

                </a>

              </li>

            </ul>

            <span class="dropdown-menu-divider">
            </span>

            <ul class="dropdown-menu-list">

              <li>

                <a href="#">

                  <span class="dropdown-menu-list-item-label">

                    Action

                  </span>

                  <i class="icon icon-mini">
                    <svg class="">
                      <use xlink:href="#icons-open-external"></use>
                    </svg>
                  </i>

                </a>

              </li>

            </ul>

          </span>

        </div>

      </div>

    </div>

    <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;span class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dLabel"&gt;
  &hellip;
&lt;/span&gt;
</pre>

    </div>

  </div>

  <!-- =================================================
  END: Example
  ================================================== -->

</section>

<!-- =================================================
END: Dropdown Menu List Item Content
================================================== -->
