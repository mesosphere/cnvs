---
layout: post
id: page-tables
title: Tables
page-header:
  headline: Tables
toc: true
---

For truly tabular data, use the <code>&lt;table&gt;</code> tag and add the class <code>.table</code>.  The table element applies basic stying propeties and padding to the default <code>&lt;table&gt;</code> element.

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
&lt;table class="table"&gt;

  &lt;!--Table Head--&gt;
  &lt;thead&gt;
    &lt;!--Table Row--&gt;
    &lt;tr&gt;
      &lt;!--Table Head Cell--&gt;
      &lt;th&gt;
      &lt;/th&gt;
      &hellip;
    &lt;/tr&gt;
  &lt;/thead&gt;

  &lt;!--Table Body--&gt;
  &lt;tbody&gt;
    &lt;!--Table Row--&gt;
    &lt;tr&gt;
      &lt;!--Table Cell--&gt;
      &lt;td&gt;
      &lt;/td&gt;
      &hellip;
    &lt;/tr&gt;
    &hellip;
  &lt;/tbody&gt;

&lt;/table&gt;
```

  </div>

</div>

{% include content/tables/tables-hover-rows.md %}
{% include content/tables/tables-borderless.md %}
{% include content/tables/tables-flush.md %}
{% include content/tables/tables-conditional-row-states.md %}
{% include content/tables/tables-inverse.md %}
{% include content/tables/tables-sizes.md %}
