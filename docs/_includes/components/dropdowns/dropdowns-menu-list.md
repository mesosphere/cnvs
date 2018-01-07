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
