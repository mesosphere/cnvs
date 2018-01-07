---
layout: post
id: page-dropdowns
title: Dropdowns
page-header:
  headline: Dropdowns
toc: true
---

<p>

  Dropdown menus are toggleable, non-invasive, contextual dialogs for displaying lists of links. In CNVS, we've made dropdown menus interactive with the <a href="http://getbootstrap.com/javascript/#dropdowns" target="_blank">Bootstrap JavaScript Plugin</a>. Use the <code>.dropdown-menu</code> and expected markup to create a dropdown menu. To toggle the display of a dropdown menu, add the class <code>.dropdown-toggle</code> to the triggering element, and wrap both the <code>.dropdown-toggle</code> and the <code>.dropdown-menu</code> in an element of class <code>.dropdown</code>.

</p>

<!-- =================================================
BEGIN: Example
================================================== -->

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="dropdown force-open">

      <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

        Dropdown

      </button>

      <span class="dropdown-menu" role="menu">

        <ul class="dropdown-menu-list">

          <li>

            <a href="#">

              Action

            </a>

          </li>

          <li>

            <a href="#">

              Another action

            </a>

          </li>

          <li>

            <a href="#">

              Something else here

            </a>

          </li>

        </ul>

      </span>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="dropdown"&gt;
  &lt;button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false"&gt;
    Dropdown
  &lt;/button&gt;
  &lt;span class="dropdown-menu" role="menu"&gt;
    &hellip;
  &lt;/span&gt;
&lt;/div&gt;
</pre>

  </div>

</div>

{% include components/dropdowns/dropdowns-menu-list.md %}
{% include components/dropdowns/dropdowns-headers.md %}
{% include components/dropdowns/dropdowns-dividers.md %}
{% include components/dropdowns/dropdowns-menu-list-states.md %}
{% include components/dropdowns/dropdowns-menu-inverted.md %}
{% include components/dropdowns/dropdowns-menu-list-item-content.md %}
{% include components/dropdowns/dropdowns-alignment.md %}
