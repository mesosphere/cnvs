---
layout: post
id: page-icons
title: Icons
page-header:
  headline: Icons
toc: true
---

A simple and easy to use icon class is available in Canvas.  The icon class <code>.icon</code> assumes very little about the actual icon itself, but instead serves as an easily modifiable container in which you can define or place your icon -- whether that icon is an SVG, font, or bitmap.  Canvas does not include icon glyphs or fonts by default, relying on the user to specify how these should be configured.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <i class="icon icon-medium icon-black">
      <svg class="">
        <use xlink:href="#icons-square"></use>
      </svg>
    </i>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<i class='icon icon-medium'></i>
```

  </div>

</div>

# Icon Sizes

Thinks of the `icon` elements as a bounding box in which you can place -- either inside or directly as a background -- any image, SVG, or font.  The bounding box is rectangular, but by default, they are defined as square (1:1).  Canvas provides 5 unique icon sizes (defined below).  The sizes can be easily changed.  Furthermore, these sizes are consider responsive, with the dimensions changing as defined by the user, with changes in screen size.

<table class="table short">

  <thead>

    <tr>

      <th>

        Class

      </th>

      <th>

        Base Size

      </th>

      <th>

        Example

      </th>

    </tr>

  </thead>

  <tbody>

    <tr>

      <td>

        <code>

          .icon-mini

        </code>

      </td>

      <td>

        16x16

      </td>

      <td>

        <i class="icon icon-mini icon-purple">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .icon-small

        </code>

      </td>

      <td>

        24x24

      </td>

      <td>

        <i class="icon icon-small icon-purple">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .icon-medium

        </code>

      </td>

      <td>

        32x32

      </td>

      <td>

        <i class="icon icon-medium icon-purple">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .icon-large

        </code>

      </td>

      <td>

        48x48

      </td>

      <td>

        <i class="icon icon-large icon-purple">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .icon-jumbo

        </code>

      </td>

      <td>

        64x64

      </td>

      <td>

        <i class="icon icon-jumbo icon-purple">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </td>

    </tr>

    <tr>

      <td>

        <code>

          .icon-huge

        </code>

      </td>

      <td>

        96x96

      </td>

      <td>

        <i class="icon icon-huge icon-purple">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </td>

    </tr>

  </tbody>

</table>
