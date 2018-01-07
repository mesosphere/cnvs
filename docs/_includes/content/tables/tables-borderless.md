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
&lt;table class="table table-borderless-outer table-borderless-inner-columns"&gt;
  &hellip;
&lt;/table&gt;
```

  </div>

</div>
