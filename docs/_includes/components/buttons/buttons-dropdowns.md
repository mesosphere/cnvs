# Button Dropdowns

Use any button to trigger a dropdown menu by placing it within a `.btn-group` and providing the proper menu markup.

## Single Button Dropdowns

Turn a button into a dropdown toggle with some basic markup changes.

<div class="panel panel-overflow">

  <div class="panel-cell">

    <div class="button-group">

      <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

        Toggle Button

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
<div class="button-group">
  <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    Toggle Button
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
```

  </div>

</div>

## Button Dropdown Sizes

Button dropdowns work with buttons of all sizes.

<div class="panel panel-overflow">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

      <div class="button-group">

        <button type="button" class="button button-jumbo dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Jumbo

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

      <div class="button-group">

        <button type="button" class="button button-large dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Large

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

      <div class="button-group">

        <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Medium

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

      <div class="button-group">

        <button type="button" class="button button-small dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Small

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

      <div class="button-group">

        <button type="button" class="button button-mini dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Mini

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
<div class="button-collection">
  <div class="button-group">
    <button type="button" class="button button-jumbo dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      Jumbo
    </button>
    <span class="dropdown-menu" role="menu">
      …
    </span>
  </div>

  <div class="button-group">
    <button type="button" class="button button-large dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      Large
    </button>
    <span class="dropdown-menu" role="menu">
      …
    </span>
  </div>

  <div class="button-group">
    <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      Medium
    </button>
    <span class="dropdown-menu" role="menu">
      …
    </span>
  </div>

  <div class="button-group">
    <button type="button" class="button button-small dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      Small
    </button>
    <span class="dropdown-menu" role="menu">
      …
    </span>
  </div>

  <div class="button-group">
    <button type="button" class="button button-mini dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
      Mini
    </button>
    <span class="dropdown-menu" role="menu">
      …
    </span>
  </div>
</div>
```

  </div>

</div>

## Styled Button Dropdown

Button dropdowns work with all supported button styles. Add .button-stroke or any other included button style class to your button dropdown element. You can even combine styles.

<div class="panel panel-overflow">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-vertical-center flush-bottom">

      <div class="button-group">

        <button type="button" class="button dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

      <div class="button-group">

        <button type="button" class="button button-stroke dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

      <div class="button-group">

        <button type="button" class="button button-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

      <div class="button-group">

        <button type="button" class="button button-stroke button-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

      <div class="button-group">

        <button type="button" class="button button-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

      <div class="button-group">

        <button type="button" class="button button-success button-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

      <div class="button-group">

        <button type="button" class="button button-danger button-rounded button-stroke dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

          Button

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

</div>
