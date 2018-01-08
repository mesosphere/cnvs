---
layout: post
id: page-tables
title: Tables
page-header:
  headline: Tables
toc: true
---

For truly tabular data, use the <code><table></code> tag and add the class <code>.table</code>.  The table element applies basic stying propeties and padding to the default <code><table></code> element.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <table class="table flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr>

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr>

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table">

  <!--Table Head-->
  <thead>
    <!--Table Row-->
    <tr>
      <!--Table Head Cell-->
      <th>
      </th>
      …
    </tr>
  </thead>

  <!--Table Body-->
  <tbody>
    <!--Table Row-->
    <tr>
      <!--Table Cell-->
      <td>
      </td>
      …
    </tr>
    …
  </tbody>

</table>
```

  </div>

</div>

# Hover Rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

<div class="panel">

  <div class="panel-cell">

    <table class="table table-hover flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr>

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr>

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-hover">
  …
</table>
```

  </div>

</div>

Add `.table-row-hover-disabled` to any `<tr>` to disable the row hover behavior and styling.

# Borderless Tables

Add `.table-borderless` to remove the outer borders from the table.

| Class                             | Description                                |
| --------------------------------- | ------------------------------------------ |
| `.table-borderless`               | Remove all table borders.                  |
| `.table-borderless-inner`         | Remove all table inner borders.            |
| `.table-borderless-inner-columns` | Remove all table inner vertical borders.   |
| `.table-borderless-inner-rows`    | Remove all table inner horizontal borders. |
| `.table-borderless-outer`         | Remove all table outer borders.            |
| `.table-borderless-outer-columns` | Remove all table outer vertical borders.   |
| `.table-borderless-outer-rows`    | Remove all table outer horizontal borders. |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <table class="table table-borderless-outer table-borderless-inner-columns flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr>

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr>

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-borderless-outer table-borderless-inner-columns">
  …
</table>
```

  </div>

</div>

# Flush Tables

Add `.table-flush` to remove the horizontal padding applied to the first and last cell of a table row.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <table class="table table-flush table-borderless-outer table-borderless-inner-columns flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr>

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr>

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-flush table-borderless-outer table-borderless-inner-columns">
  …
</table>
```

  </div>

</div>

# Conditional Row States

Use contextual classes to color table rows or individual cells.

| Class       | Description                                          |
| ----------- | ---------------------------------------------------- |
| `.selected` | Applies the hover color to a particular row or cell  |
| `.success`  | Indicates a successful or positive action            |
| `.warning`  | Indicates a warning that might need attention        |
| `.danger`   | Indicates a dangerous or potentially negative action |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <table class="table table-hover flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="selected">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr class="">

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr class="success">

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

        <tr class="">

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="warning">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr class="">

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr class="danger">

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

          <tr>

            <td>

              John

            </td>

            <td>

              Ashenden

            </td>

            <td class="active">

              john.ashenden@domain.com

            </td>

            <td>

              802

            </td>

          </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-hover">
  …
</table>
```

  </div>

</div>

# Inverse Styling

Add the class `.table-inverse` to any `.table` element to leverage inverse styling.

<div class="panel">

  <div class="panel-cell panel-cell-dark">

    <table class="table table-inverse table-hover table-borderless-outer table-borderless-inner-columns flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="selected">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr class="">

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr class="success">

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

        <tr class="">

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="warning">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr class="">

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr class="danger">

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

          <tr>

            <td>

              John

            </td>

            <td>

              Ashenden

            </td>

            <td class="active">

              john.ashenden@domain.com

            </td>

            <td>

              802

            </td>

          </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-inverse table-borderless-outer table-borderless-inner-columns">
  …
</table>
```

  </div>

</div>

# Table Sizes

By default, tables display at a standard size.  Additional sizes are available: small and large.  Add classes `.table-small` and `.table-large` respectively to each table to adjust it's size.

<div class="panel">

  <div class="panel-cell">

    <table class="table table-small flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr>

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr>

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-small">
  …
</table>
```

  </div>

</div>

<div class="panel flush-bottom">

  <div class="panel-cell">

    <table class="table table-large flush-bottom">

      <thead>

        <tr>

          <th>

            First Name

          </th>

          <th>

            Last Name

          </th>

          <th class="active">

            Email

          </th>

          <th>

            Commits

          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>

            John

          </td>

          <td>

            Ashenden

          </td>

          <td class="active">

            john.ashenden@domain.com

          </td>

          <td>

            802

          </td>

        </tr>

        <tr class="">

          <td>

            Michael

          </td>

          <td>

            Lunøe

          </td>

          <td class="active">

            michael.lunoe@domain.com

          </td>

          <td>

            2,401

          </td>

        </tr>

        <tr>

          <td>

            Rafael

          </td>

          <td>

            Corral

          </td>

          <td class="active">

            rafael.corral@domain.com

          </td>

          <td>

            1,532

          </td>

        </tr>

        <tr>

          <td>

            Jesse

          </td>

          <td>

            Lash

          </td>

          <td class="active">

            jesse.lash@domain.com

          </td>

          <td>

            104

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<table class="table table-large">
  …
</table>
```

  </div>

</div>
