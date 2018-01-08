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

# Dropdown Menu List

Central to the function of dropdown menu is the dropdown menu list, which, as the name implies, is a collection of related links or actions. A dropdown menu list is create by adding the class `.dropdown-menu-list` to a `ul` or `ol` list element. A dropdown menu may have more than one dropdown menu lists. Headers and dividers are often used to differentiate multiple dropdown menu lists.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

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

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu" role="menu">
  <ul class="dropdown-menu-list">
    <li>
      <a href="#" role="menuitem" tabindex="-1">
        Action
      </a>
    </li>
    …
  </ul>
</span>
```

  </div>

</div>

# Dropdown Headers

Headers are an effective way to label sections of actions in any dropdown menu and to help separate one dropdown menu list from another. Wrap text in the class `.dropdown-menu-header` to give the appearance of a header.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

      <div class="dropdown force-open">

        <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Dropdown

        </button>

        <span class="dropdown-menu" role="menu">

          <span class="dropdown-menu-header">

            Dropdown Header

          </span>

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

          <span class="dropdown-menu-header">

            Dropdown Header

          </span>

          <ul class="dropdown-menu-list">

            <li>

              <a href="#">

                Seperated Link

              </a>

            </li>

          </ul>

        </span>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu" role="menu">
  <span class="dropdown-menu-header">
    Dropdown Header
  </span>
  <ul class="dropdown-menu-list">
    …
  </ul>
</span>
```

  </div>

</div>

# Menu Dividers

Dividers are a simple and effective way to break up a dropdown menu and create obvious separate between sets of dropdown menu lists.  Adding the class `.dropdown-menu-divider` to an empty `span` element is the fastest way to create a dropdown menu divider.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

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

          <span class="dropdown-menu-divider">
          </span>

          <ul class="dropdown-menu-list">

            <li>

              <a href="#">

                Seperated Link

              </a>

            </li>

          </ul>

        </span>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu" role="menu">
  <span class="dropdown-menu-divider">
  </span>
</span>
```

  </div>

</div>

# Dropdown Menu List States

To signal selection or communicate caution in dropdown menu lists, consider taking advantage of the included dropdown menu list item states. Adding the relevant class to any `li` in a `.dropdown-menu-list` will adjust the style of the item to best reflect the intended state.

| Class       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `.selected` | Indicate a selected state for a dropdown menu list item. |
| `.danger`   | Signal danger or caution for a dropdown menu list item.  |
| `.disabled` | Disable a dropdown menu list item.                       |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

      <div class="dropdown force-open">

        <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Dropdown

        </button>

        <span class="dropdown-menu" role="menu">

          <span class="dropdown-menu-header">

            Make a selection

          </span>

          <ul class="dropdown-menu-list">

            <li>

              <a href="#">

                Option A

              </a>

            </li>

            <li class="selected">

              <a href="#">

                Option B

              </a>

            </li>

            <li>

              <a href="#">

                Option C

              </a>

            </li>

          </ul>

          <span class="dropdown-menu-divider">
          </span>

          <ul class="dropdown-menu-list">

            <li class="disabled">

              <a href="#">

                Disabled action

              </a>

            </li>

          </ul>

          <span class="dropdown-menu-divider">
          </span>

          <ul class="dropdown-menu-list">

            <li class="danger">

              <a href="#">

                Danger action

              </a>

            </li>

          </ul>

        </span>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu" role="menu">
  <ul class="dropdown-menu-list">
    …
    <li class="disabled">
      <a href="#">
        Another action
      </a>
    </li>
    …
    <li class="danger">
      <a href="#">
        Danger Link
      </a>
    </li>
    …
  </ul>
</span>
```

  </div>

</div>

# Inverse Styling

Add class `.dropdown-menu-inverse` to a `.dropdown-menu` to inverted it's appearance.

<div class="panel">

  <div class="panel-cell panel-cell-dark">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

      <div class="dropdown force-open">

        <button type="button" class="button dropdown-toggle button-inverse" data-toggle="dropdown" aria-expanded="false">

          Dropdown

        </button>

        <span class="dropdown-menu dropdown-menu-inverse" role="menu">

          <span class="dropdown-menu-header">

            Dropdown Header

          </span>

          <ul class="dropdown-menu-list">

            <li>

              <a href="#">

                Action

              </a>

            </li>

            <li class="disabled">

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

          <span class="dropdown-menu-divider">
          </span>

          <ul class="dropdown-menu-list">

            <li class="danger">

              <a href="#">

                Danger Link

              </a>

            </li>

          </ul>

        </span>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu dropdown-menu-inverse" role="menu">
  …
</span>
```

  </div>

</div>

# Dropdown Menu List Item Content

It may be necessary to place more than just text inside of a dropdown menu list item. For example, you may want a small icon next to the dropdown menu list item label to help better communicate an action or signal selection. Place an element before or after text in a dropdown menu list item and space will be applied between the element(s) and the text.

<div class="message message-warning">

  <strong>Note:</strong> To apply space between elements in a dropdown menu list item, be sure to wrap the label in a `span` tag with class `.dropdown-menu-list-item-label`.

</div>

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

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dLabel">
  …
</span>
```

  </div>

</div>

# Alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `.dropdown-menu-right` to a `.dropdown-menu` to right align the dropdown menu.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

      <div class="dropdown force-open">

        <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Dropdown

        </button>

        <span class="dropdown-menu dropdown-menu-right" role="menu">

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

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<span class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dLabel">
  …
</span>
```

  </div>

</div>
