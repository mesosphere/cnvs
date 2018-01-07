---
layout: post
id: page-dropdowns
title: Dropdowns
page-header:
  headline: Dropdowns
toc: true
---

Dropdown menus are toggleable, non-invasive, contextual dialogs for displaying lists of links. In CNVS, we've made dropdown menus interactive with the [Bootstrap JavaScript Plugin](http://getbootstrap.com/javascript/#dropdowns). Use the `.dropdown-menu` and expected markup to create a dropdown menu. To toggle the display of a dropdown menu, add the class `.dropdown-toggle` to the triggering element, and wrap both the `.dropdown-toggle` and the `.dropdown-menu` in an element of class `.dropdown`.

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

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="dropdown">
  <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <span class="dropdown-menu" role="menu">
    …
  </span>
</div>
```

  </div>

</div>

{% include components/dropdowns/dropdowns-menu-list.md %}
{% include components/dropdowns/dropdowns-headers.md %}
{% include components/dropdowns/dropdowns-dividers.md %}
{% include components/dropdowns/dropdowns-menu-list-states.md %}
{% include components/dropdowns/dropdowns-menu-inverted.md %}
{% include components/dropdowns/dropdowns-menu-list-item-content.md %}
{% include components/dropdowns/dropdowns-alignment.md %}
