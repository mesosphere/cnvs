<!-- =================================================
BEGIN: Form Controls
================================================== -->

<section id="forms-controls">

  <h1>

    Form Controls

  </h1>

  <section id="forms-controls-inputs">

    <h2>

      Inputs

    </h2>

    <p>

      Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.

    </p>

    <!-- =================================================
    BEGIN: Example
    ================================================== -->

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

      <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="form-group"&gt;
  &lt;input type="text" class="form-control" placeholder="Placeholder Text"&gt;
&lt;/div&gt;
</pre>

      </div>

    </div>

    <!-- =================================================
    BEGIN: Example
    ================================================== -->

  </section>

  <section id="forms-controls-textarea">

    <h2>

      Textarea

    </h2>

    <p>

      Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.

    </p>

    <!-- =================================================
    BEGIN: Example
    ================================================== -->

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

      <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="form-group"&gt;
  &lt;textarea class="form-control" placeholder="Placeholder Text" rows="4"&gt;&lt;/textarea&gt;
&lt;/div&gt;
</pre>

      </div>

    </div>

    <!-- =================================================
    END: Example
    ================================================== -->

  </section>

  <section id="forms-controls-toggles">

    <h2>

      Checkboxes &amp; Radios

    </h2>

    <p>

      Checkboxes and radios, both staple toggles of the traditional HTML form, share a single class in CNVS, <code>.form-control-toggle</code>, to governs layout and basic styling.  Wrap a checkbox or radio in the class <code>.form-control-toggle</code>, preferrably using a <code>&lt;label&gt;</code> for added context and accessibility.

    </p>

    <!-- =================================================
    BEGIN: Example
    ================================================== -->

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

      <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="form-group"&gt;
  &lt;label class="form-control-toggle"&gt;
    &lt;input type="checkbox"&gt;
    First Option
  &lt;/label&gt;
  &lt;label class="form-control-toggle"&gt;
    &lt;input type="checkbox"&gt;
    Second Option
  &lt;/label&gt;
  &hellip;
&lt;/div&gt;
</pre>

      </div>

    </div>

    <!-- =================================================
    END: Example
    ================================================== -->

    <section id="forms-controls-toggles-custom">

      <h3>

        Custom Checkboxes &amp; Radios

      </h3>

      <p>

        Looking to take your checkbox or radio toggle to the next level? Add the class <code>.form-control-toggle-custom</code> to your exisiting <code>.form-control-toggle</code> wrapped checkbox or radio input.  The <code>&lt;input&gt;</code> is hidden from view, but still available in the DOM for use in your form.  In order to replace the hidden checkbox or radio component with a styled alternate, you must also inject a new element with the class <code>.form-control-toggle-indicator</code>. We recommend a simple <code>&lt;span&gt;</code> for this.

      </p>

      <p>

        For the checkmark icon, as well as the circle icon for radios, we use base64 embedded SVG icons and adjust the color.

      </p>

      <section id="forms-controls-toggles-custom-checkboxes">

        <h4>

          Checkboxes

        </h4>

        <!-- =================================================
        BEGIN: Example
        ================================================== -->

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

          <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;label class="form-control-toggle form-control-toggle"&gt;
  &lt;input type="checkbox" checked /&gt;
  &lt;span class="form-control-toggle-indicator"&gt;&lt;/span&gt;
  First Option
&lt;/label&gt;
</pre>

          </div>

        </div>

        <!-- =================================================
        END: Example
        ================================================== -->

        <p>

          For indetermindate checkboxes, one whose state is neither true nor false, you may leverage the <code>:indeterminate</code> pseudo class.  However, you must use Javascript magic to manually set this property.  Something like this should work: <code>$(element).prop('indeterminate', true)</code>.

        </p>

        <!-- =================================================
        BEGIN: Example
        ================================================== -->

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

        <!-- =================================================
        END: Example
        ================================================== -->

      </section>

      <section id="forms-controls-toggles-custom-radios">

        <h4>

          Radios

        </h4>

        <!-- =================================================
        BEGIN: Example
        ================================================== -->

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

          <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;label class="form-control-toggle form-control-toggle"&gt;
  &lt;input type="radio" /&gt;
  &lt;span class="form-control-toggle-indicator"&gt;&lt;/span&gt;
  First Option
&lt;/label&gt;
&hellip;
</pre>

          </div>

        </div>

        <!-- =================================================
        END: Example
        ================================================== -->

      </section>

      <section id="forms-controls-toggles-custom-disabled">

        <h4>

          Disabled

        </h4>

        <p>

          Using the <code>disabled</code> attribute, placed inline on the checkbox or radio HTML element, will not only make the toggle un-clickable, but also adjusts the appearance to reflect it's inaccessibility.

        </p>

        <!-- =================================================
        BEGIN: Example
        ================================================== -->

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

          <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;label class="form-control-toggle form-control-toggle"&gt;
  &lt;input type="checkbox" disabled /&gt;
  &lt;span class="form-control-toggle-indicator"&gt;&lt;/span&gt;
  First Option
&lt;/label&gt;
</pre>

          </div>

        </div>

        <!-- =================================================
        END: Example
        ================================================== -->

      </section>

    </section>

  </section>

  <section id="forms-controls-selects">

    <h2>

      Selects

    </h2>

    <p>

      Default styling for <code>select</code> elements are available, or mirror custom control styling by wrapping any select in <code>.form-control</code> class and add the additional class <code>.form-control-select</code>.  For selects of type <code>multiple</code> add the class <code>.form-control-select-multiple</code>.

    </p>

    <!-- =================================================
    BEGIN: Example
    ================================================== -->

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

      <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="form-group"&gt;
  &lt;span class="form-control form-control-select"&gt;
    &lt;select&gt;
      &lt;option&gt;1&lt;/option&gt;
      &lt;option&gt;2&lt;/option&gt;
      &lt;option&gt;&hellip;&lt;/option&gt;
    &lt;/select&gt;
  &lt;/span&gt;
&lt;/div&gt;

&lt;div class="form-group"&gt;
  &lt;span class="form-control form-control-select form-control-select-multiple"&gt;
    &lt;select multiple&gt;
      &lt;option&gt;1&lt;/option&gt;
      &lt;option&gt;2&lt;/option&gt;
      &lt;option&gt;&hellip;&lt;/option&gt;
    &lt;/select&gt;
  &lt;/span&gt;
&lt;/div&gt;
</pre>

      </div>

    </div>

    <!-- =================================================
    END: Example
    ================================================== -->

  </section>

</section>

<!-- =================================================
END: Forms Controls
================================================== -->
