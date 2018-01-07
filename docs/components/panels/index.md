---
layout: post
id: page-panels
title: Panels
page-header:
  headline: Panels
  description: A panel is a simple, flexible, and customizable content container. In combination with panel cells, panels can be used to create a wide range of layout and content display options.
toc: true
---

<p>

  To create a new panel use the <code>.panel</code> class. By itself, a panel is pretty basic - offering nothing more than box styling and outer spacing.  Use one or more nested panel cells (<code>.panel-cell</code>) to create a layout that fits your specific project requirements.

</p>

<!-- =================================================
BEGIN: Example
================================================== -->

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="row">

      <div class="column-12 column-small-8 column-small-offset-2 column-medium-8 column-medium-offset-2 column-large-8 column-large-offset-2 column-jumbo-6 column-jumbo-offset-3">

        <div class="panel panel-inline">

          <div class="panel-cell">

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="panel"&gt;
  …
&lt;/div&gt;
</pre>

  </div>

</div>

{% include components/panels/panels-cells.md %}
{% include components/panels/panels-styling.md %}
