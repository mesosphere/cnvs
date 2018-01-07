---
layout: post
id: page-responsive-utilities
title: Responsive Utilities
page-header:
  headline: Responsive Utilities
  description: Most content and components in CNVS support responsive behavior for scaling either size or spacing.  However, you'll often want to hide and show specific elements of your project based on a given screen resolution.  Similarly, when optimizing your project for printing, you may wish to hide or show components.  Use these useful pre-defined classes to trigger responsive behavior.
toc: true
---

# Responsive Options

The `.hidden-*` class is useful for hiding a given element at a specific screen size.  Replacing the `-*` modifier witd a screen size value (`-mini`, `-small`, `-medium`, `-large`, `-jumbo`) will hide the element at tdat screen-size.  Additionally, appending `-up` and `-down` to the `.hidden-*-` class, will hide a given element up or down respectively at the specified screen-size.

| Class            | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| `.hidden-*`      | Hide the element at the screen size specified by the -* modifier.           |
| `.hidden-*-down` | Hide the element at and below the screen size specified by the -* modifier. |
| `.hidden-*-up`   | Hide the element at and below the screen size specified by the -* modifier. |
{: .table }

## Available Classes

<table class="table table-responsive-utilities-classes">
  <thead>
    <tr>
      <th></th>
      <th class="text-align-center">
        Mini devices<br>
        <small class="flush">Portrait phones (&lt; 480px)</small>
      </th>
      <th class="text-align-center">
        Small devices<br>
        <small class="flush">Landscape phones (≥ 480px)</small>
      </th>
      <th class="text-align-center">
        Medium devices<br>
        <small class="flush">Tablets (≥ 768px)</small>
      </th>
      <th class="text-align-center">
        Large devices<br>
        <small class="flush">Desktops (≥ 992px)</small>
      </th>
      <th class="text-align-center">
        Jumbo devices<br>
        <small class="flush">Desktops (≥ 1400px)</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><code>.hidden-mini-down</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-small-down</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-medium-down</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-large-down</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-jumbo-down</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-mini-up</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-small-up</code></td>
      <td class="is-visible">Visible</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-medium-up</code></td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-large-up</code></td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-hidden">Hidden</td>
      <td class="is-hidden">Hidden</td>
    </tr>
    <tr>
      <td scope="row"><code>.hidden-jumbo-up</code></td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-visible">Visible</td>
      <td class="is-hidden">Hidden</td>
    </tr>
  </tbody>
</table>

# Print Options

Like the responsive class options, there are similar class options for toggling an elements visibility for print. Use the `.visible-print-*` option to make and element visible when the page is printed.  The `-*` modifier is used to specify the display type.  For example, `.visible-print-inline` displays an element as `inline` only when printed.

<table class="table table-bordered table-striped responsive-utility flush-bottom">
  <thead>
    <tr>
      <th>Class</th>
      <th class="text-align-center">Browser</th>
      <th class="text-align-center">Print</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.visible-print-block</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td><code>.visible-print-inline</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td><code>.visible-print-inline-block</code></td>
      <td class="is-hidden">Hidden</td>
      <td class="is-visible">Visible</td>
    </tr>
    <tr>
      <td><code>.hidden-print</code></td>
      <td class="is-visible">Visible</td>
      <td class="is-hidden">Hidden</td>
    </tr>
  </tbody>
</table>
