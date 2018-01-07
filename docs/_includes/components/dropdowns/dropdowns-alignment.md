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
