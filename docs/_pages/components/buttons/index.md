---
layout: post
id: page-buttons
title: Buttons
page-header:
  headline: Buttons
toc: true
---

Canvas adds support for a range of button states and sizes.  Simply add the `.button` class to any `<a>` or `<button>` to get started.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <a href="#" class="button">

      Simple Button

    </a>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button">
  Simple Button
</a>
```

  </div>

</div>

# Button Sizes

By default, buttons display at a standard size, comparable to that of an input field.  Four additional sizes are available: mini, small, large, and jumbo.  Add classes `.button-mini`, `.button-small`, `.button-large`, and `.button-jumbo` respectively to each button to adjust it's size.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush">

      <a href="#" class="button button-jumbo">

        Jumbo

      </a>

      <a href="#" class="button button-large">

        Large

      </a>

      <a href="#" class="button">

        Default

      </a>

      <a href="#" class="button button-small">

        Small

      </a>

      <a href="#" class="button button-mini">

        Mini

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Jumbo -->
<a href="#" class="button button-jumbo">
  Jumbo
</a>

<!-- Button: Large -->
<a href="#" class="button button-large">
  Large
</a>

<!-- Button: Default -->
<a href="#" class="button">
  Default
</a>

<!-- Button: Small -->
<a href="#" class="button button-small">
  Small
</a>

<!-- Button: Mini -->
<a href="#" class="button button-mini">
  Mini
</a>
```

  </div>

</div>

# Button States

You may wish to display more than the single button type, either to create separation in the importance of various actions or to communicate the state of an action or form.  Button states make this super easy.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button">

        Default

      </a>

      <a href="#" class="button button-primary">

        Primary

      </a>

      <a href="#" class="button button-success">

        Success

      </a>

      <a href="#" class="button button-warning">

        Warning

      </a>

      <a href="#" class="button button-danger">

        Danger

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button">
  Default
</a>

<!-- Button: Primary -->
<a href="#" class="button button-primary">
  Primary
</a>

<!-- Button: Success -->
<a href="#" class="button button-success">
  Success
</a>

<!-- Button: Warning -->
<a href="#" class="button button-warning">
  Warning
</a>

<!-- Button: Danger -->
<a href="#" class="button button-danger">
  Danger
</a>
```

  </div>

</div>

# Button Types

We realize that one button shape and style, even with it's available states, may not be enough for the unique needs of your project.  This is why we've include a number of additional button types: rounded, outlined, link.

## Rounded Button

Add the class `.button-rounded` to any `.button` element to display it with rounded caps.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button button-rounded">

        Default

      </a>

      <a href="#" class="button button-rounded button-primary">

        Primary

      </a>

      <a href="#" class="button button-rounded button-success">

        Success

      </a>

      <a href="#" class="button button-rounded button-warning">

        Warning

      </a>

      <a href="#" class="button button-rounded button-danger">

        Danger

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button button-rounded">
  Default
</a>

<!-- Button: Primary -->
<a href="#" class="button button-rounded button-primary">
  Primary
</a>
```

  </div>

</div>

## Outline Button

Add the class `.button-*-outline` to any `.button` element to display it with a thin outline.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button button-outline">

        Default

      </a>

      <a href="#" class="button button-primary-outline">

        Primary

      </a>

      <a href="#" class="button button-success-outline">

        Success

      </a>

      <a href="#" class="button button-warning-outline">

        Warning

      </a>

      <a href="#" class="button button-danger-outline">

        Danger

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button button-outline">
  Default
</a>

<!-- Button: Primary -->
<a href="#" class="button button-primary-outline">
  Primary
</a>
```

  </div>

</div>

## Link Button

Add the class `.button-*-link` to any `.button` element to display it as "text-only", while retaining the exact size attributes of it's normal button counterpart.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button button-link">

        Default

      </a>

      <a href="#" class="button button-primary-link">

        Primary

      </a>

      <a href="#" class="button button-success-link">

        Success

      </a>

      <a href="#" class="button button-warning-link">

        Warning

      </a>

      <a href="#" class="button button-danger-link">

        Danger

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button button-link">
  Default
</a>

<!-- Button: Primary -->
<a href="#" class="button button-primary-link">
  Primary
</a>
```

  </div>

</div>

## Combine Button Types

Want an outlined button that has rounded caps?  Go ahead and combine button classes to yield interesting display combinations.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button button-outline button-rounded">

        Default

      </a>

      <a href="#" class="button button-primary-outline button-rounded">

        Primary

      </a>

      <a href="#" class="button button-success-outline button-rounded">

        Success

      </a>

      <a href="#" class="button button-warning-outline button-rounded">

        Warning

      </a>

      <a href="#" class="button button-danger-outline button-rounded">

        Danger

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button button-outline button-rounded">
  Default
</a>

<!-- Button: Primary -->
<a href="#" class="button button-primary-outline button-rounded">
  Primary
</a>
```

  </div>

</div>

# Inverse Styling

Add the class `.button-inverse` to any `.button` element to leverage inverse styling.

<div class="panel">

  <div class="panel-cell panel-cell-dark">

    <div class="button-collection">

      <a href="#" class="button button-inverse">

        Default

      </a>

      <a href="#" class="button button-primary button-inverse">

        Primary

      </a>

      <a href="#" class="button button-success button-inverse">

        Success

      </a>

      <a href="#" class="button button-warning button-inverse">

        Warning

      </a>

      <a href="#" class="button button-danger button-inverse">

        Danger

      </a>

    </div>

    <div class="button-collection">

      <a href="#" class="button button-outline button-inverse">

        Default

      </a>

      <a href="#" class="button button-primary-outline button-inverse">

        Primary

      </a>

      <a href="#" class="button button-success-outline button-inverse">

        Success

      </a>

      <a href="#" class="button button-warning-outline button-inverse">

        Warning

      </a>

      <a href="#" class="button button-danger-outline button-inverse">

        Danger

      </a>

    </div>

    <div class="button-collection flush-bottom">

      <a href="#" class="button button-link button-inverse">

        Default

      </a>

      <a href="#" class="button button-primary-link button-inverse">

        Primary

      </a>

      <a href="#" class="button button-success-link button-inverse">

        Success

      </a>

      <a href="#" class="button button-warning-link button-inverse">

        Warning

      </a>

      <a href="#" class="button button-danger-link button-inverse">

        Danger

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button button-inverse">
  Default
</a>
```

  </div>

</div>

# Wide Buttons

Use the class `.button-wide` to increase the horizontal padding within a button.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-wide">

        Wide Button

      </a>

      <a href="#" class="button button-primary button-wide">

        Wide Button

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button button-wide">
  Wide Button
</a>
```

  </div>

</div>

# Narrow Buttons

Use the class `.button-narrow` to decrease the horizontal padding within a button.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-narrow">

        Narrow Button

      </a>

      <a href="#" class="button button-primary button-narrow">

        Narrow Button

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button button-narrow">
  Narrow Button
</a>
```

  </div>

</div>

# Flush Buttons

Use the class `.button-flush` to remove the padding within a button. This is useful when you want to assume button like behavior, particulary for `.button-link` styling, but do not want the added space created by the padding.

| Class                      | Description                                   |
| -------------------------- | --------------------------------------------- |
| `.button-flush`            | Remove the padding entirely.                  |
| `.button-flush-horizontal` | Remove the horizontal padding.                |
| `.button-flush-vertical`   | Remove the vertical padding.                  |
| `.button-flush-top`        | Remove the top padding inside of a button.    |
| `.button-flush-right`      | Remove the right padding inside of a button.  |
| `.button-flush-bottom`     | Remove the bottom padding inside of a button. |
| `.button-flush-left`       | Remove the left padding inside of a button.   |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-flush">

        Flush Button

      </a>

      <a href="#" class="button button-primary button-flush">

        Flush Button

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button button-flush">
  Flush Button
</a>
```

  </div>

</div>

# Block Buttons

Use the class `.button-block` when you need a button to fill the entire width of it's parent container.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-block">

        Block Button

      </a>

      <a href="#" class="button button-primary button-block">

        Block Button

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<a href="#" class="button button-block">
  Block Button
</a>
```

  </div>

</div>

## Responsive Block Buttons

Optional classes are available when you need a button to fill it's parent container only below a specific screen size.  Add `.button-block-below-screen-*`, replacing `*` with `-mini`, `-small`, `-medium`, or `-large`.  Try it out.  Resize this browser window and observe when the buttons below switch to their Block view.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection button-collection-align-middle flush-bottom">

      <a href="#" class="button button-block button-block-below-screen-small">

        Block Button (Mini)

      </a>

      <a href="#" class="button button-block button-block-below-screen-medium">

        Block Button (Small)

      </a>

      <a href="#" class="button button-block button-block-below-screen-large">

        Block Button (Medium)

      </a>

      <a href="#" class="button button-block button-block-below-screen-jumbo">

        Block Button (Large)

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Block Button: When Smaller than Screen Mini-->
<a href="#" class="button button-block button-block-below-screen-small">
  Block Button (Mini)
</a>

<!-- Block Button: When Smaller than Screen Small-->
<a href="#" class="button button-block button-block-below-screen-medium">
  Block Button (Small)
</a>

<!-- Block Button: When Smaller than Screen Medium-->
<a href="#" class="button button-block button-block-below-screen-large">
  Block Button (Medium)
</a>

<!-- Block Button: When Smaller than Screen Large-->
<a href="#" class="button button-block button-block-below-screen-jumbo">
  Block Button (Large)
</a>
```

  </div>

</div>

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

# Button Controls

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with our buttons plugin.

## Toggle Buttons

Add `data-toggle="button"` to activate toggling on a single button.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <button type="button" class="button button-primary" data-toggle="button" aria-pressed="false" autocomplete="off">

      Toggle Button

    </button>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<button type="button" class="button button-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Toggle Button
</button>
```

  </div>

</div>

## Checkbox &amp; Radio Button Groups

Add `data-toggle="buttons"` to a `.btn-group` containing checkbox or radio inputs to enable toggling in their respective styles.

### Checkbox Button Groups

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-group" data-toggle="buttons">

      <label class="button button-primary active">

        <input type="checkbox" autocomplete="off" checked> Checkbox 1

      </label>

      <label class="button button-primary">

        <input type="checkbox" autocomplete="off"> Checkbox 2

      </label>

      <label class="button button-primary">

        <input type="checkbox" autocomplete="off"> Checkbox 3

      </label>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="button-group" data-toggle="buttons">
  <label class="button button-primary active">
    <input type="checkbox" autocomplete="off" checked> Checkbox 1
  </label>
  <label class="button button-primary">
    <input type="checkbox" autocomplete="off"> Checkbox 2
  </label>
  <label class="button button-primary">
    <input type="checkbox" autocomplete="off"> Checkbox 3
  </label>
</div>
```

  </div>

</div>

### Radio Button Groups

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-group" data-toggle="buttons">

      <label class="button button-primary active">

        <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1

      </label>

      <label class="button button-primary">

        <input type="radio" name="options" id="option1" autocomplete="off"> Radio 2

      </label>

      <label class="button button-primary">

        <input type="radio" name="options" id="option1" autocomplete="off"> Radio 3

      </label>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="button-group" data-toggle="buttons">
  <label class="button button-primary active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1
  </label>
  <label class="button button-primary">
    <input type="radio" name="options" id="option1" autocomplete="off"> Radio 2
  </label>
  <label class="button button-primary">
    <input type="radio" name="options" id="option1" autocomplete="off"> Radio 3
  </label>
</div>
```

  </div>

</div>

# Button Content

By default, buttons are defined so that all content will display vertically centered inside the button.  However, it may be necessary to place more than just text inside of a button.  For example, you may want a small icon next to the button label.  Space will be applied between child elements of a button automatically.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="button-collection flush-bottom">

      <a href="#" class="button">

        <i class="icon icon-mini">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

        <span>

          Button

        </span>

      </a>

      <a href="#" class="button">

        <span>

          Button

        </span>

        <i class="icon icon-mini">
          <svg class="">
            <use xlink:href="#icons-square"></use>
          </svg>
        </i>

      </a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<!-- Button: Default -->
<a href="#" class="button">
  <i class="icon icon-mini"></i>
  <span>Button</span>
</a>
```

  </div>

</div>
