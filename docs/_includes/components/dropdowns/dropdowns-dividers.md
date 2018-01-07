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
