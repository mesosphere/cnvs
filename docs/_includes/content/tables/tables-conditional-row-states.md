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
&lt;table class="table table-hover"&gt;
  &hellip;
&lt;/table&gt;
```

  </div>

</div>
