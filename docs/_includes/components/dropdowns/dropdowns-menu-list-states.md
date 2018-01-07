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
