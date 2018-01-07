---
layout: post
id: page-panels
title: Panels
page-header:
  headline: Panels
  description: A panel is a simple, flexible, and customizable content container. In combination with panel cells, panels can be used to create a wide range of layout and content display options.
toc: true
---

To create a new panel use the <code>.panel</code> class. By itself, a panel is pretty basic - offering nothing more than box styling and outer spacing.  Use one or more nested panel cells (<code>.panel-cell</code>) to create a layout that fits your specific project requirements.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="row">

      <div class="column-12 column-small-8 column-small-offset-2 column-medium-8 column-medium-offset-2 column-large-8 column-large-offset-2 column-jumbo-6 column-jumbo-offset-3">

        <div class="panel panel-inline">

          <div class="panel-cell">

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="panel">
  …
</div>
```

  </div>

</div>

# Panel Cell

The panel cell (`.panel-cell`) is the basic building block of panels. Any number of panel cells can be used in a panel.  Panel cells offer a variety of spacing and styling options.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="panel panel-inline">

      <div class="panel-cell text-align-center">

        <code>.panel-cell</code>

      </div>

      <div class="panel-cell text-align-center">

        <code>.panel-cell</code>

      </div>

      <div class="panel-cell text-align-center">

        <code>.panel-cell</code>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="panel">
  <div class="panel-cell">
    …
  </div>
  <div class="panel-cell">
    …
  </div>
  <div class="panel-cell">
    …
  </div>
</div>
```

  </div>

</div>

## Size Modifiers

To adjust the inner padding applied to a panel cell, use one of the available panel-specific size classes. For example, simply using the class `.panel-cell-short` will reduce padding evenly above and below the panel cell.  Use of these modifiers allows you the ability to create unique panel layouts to meet your specific project needs.

| Class                  | Description                              |
| ---------------------- | ---------------------------------------- |
| `.panel-cell-shorter`  | Reduce the vertical margins to 25%.      |
| `.panel-cell-short`    | Reduce the vertical margins to 50%.      |
| `.panel-cell-tall`     | Increase the vertical margins by 150%.   |
| `.panel-cell-taller`   | Increase the vertical margins by 200%.   |
| `.panel-cell-narrower` | Reduce the horizontal margins to 25%.    |
| `.panel-cell-narrow`   | Reduce the horizontal margins to 50%.    |
| `.panel-cell-wide`     | Increase the horizontal margins by 150%. |
| `.panel-cell-wider`    | Increase the horizontal margins by 200%. |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="row">

      <div class="column-12 column-small-6 column-medium-6 column-large-6 column-jumbo-5 column-jumbo-offset-1">

        <div class="panel">

          <div class="panel-cell">

            <h3 class="flush-top">

              Event Name

            </h3>

            <p class="flush-bottom">

              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus.

            </p>

          </div>

          <div class="panel-cell panel-cell-short text-align-center">

            <a href="#" class="button button-primary">

              Learn More &rarr;

            </a>

          </div>

        </div>

      </div>

      <div class="column-12 column-small-6 column-medium-6 column-large-6 column-jumbo-5">

        <div class="panel">

          <div class="layout-box pods-options-size-direction-modifier">

            <div class="layout-box-item layout-box-item-margin">

              <div class="layout-box-item layout-box-item-padding panel-cell">

                <div class="layout-box-item layout-box-item-content">

                  <h3 class="flush-top">

                    Event Name

                  </h3>

                  <p class="flush-bottom">

                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus.

                  </p>

                </div>

              </div>

            </div>

          </div>

          <div class="layout-box pods-options-size-direction-modifier">

            <div class="layout-box-item layout-box-item-margin">

              <div class="layout-box-item layout-box-item-padding panel-cell panel-cell-short">

                <div class="layout-box-item layout-box-item-content text-align-center">

                  <a href="#" class="button button-primary">

                    Learn More &rarr;

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="panel">
  <div class="panel-cell">
    …
  </div>
  <div class="panel-cell panel-cell-short">
    …
  </div>
</div>
```

  </div>

</div>

## Size Direction Modifiers

Add `-top`, `-right`, `-bottom`, or `-left` to the end of the size modifier class to adjust margin only in the direction implied by the direction modifier.

| Class                  | Description                                   |
| ---------------------- | --------------------------------------------- |
| `.panel-cell-*-top`    | Adjust margin above the panel-cell.           |
| `.panel-cell-*-right`  | Adjust margin to the right of the panel-cell. |
| `.panel-cell-*-bottom` | Adjust margin below the panel-cell.           |
| `.panel-cell-*-left`   | Adjust margin to the left of the panel-cell.  |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="row">

      <div class="column-12 column-small-6 column-medium-6 column-large-6 column-jumbo-5 column-jumbo-offset-1">

        <div class="panel">

          <div class="panel-cell panel-cell-taller-bottom panel-cell-wider-right">

            <h3 class="flush-top">

              Event Name

            </h3>

            <p class="flush-bottom">

              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus.

            </p>

          </div>

        </div>

      </div>

      <div class="column-12 column-small-6 column-medium-6 column-large-6 column-jumbo-5">

        <div class="panel">

          <div class="layout-box pods-options-size-direction-modifier">

            <div class="layout-box-item layout-box-item-margin">

              <div class="layout-box-item layout-box-item-padding panel-cell panel-cell-taller-bottom panel-cell-wider-right">

                <div class="layout-box-item layout-box-item-content">

                  <h3 class="flush-top">

                    Event Name

                  </h3>

                  <p class="flush-bottom">

                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="panel">
  <div class="panel-cell panel-cell-taller-bottom panel-cell-wider-right">
    …
  </div>
</div>
```

  </div>

</div>

# Panel Styling

Panel support supplied by CNVS is largely limited to layout, leaving much of the styling preference up to the individual or team utilizing panels in their specific project.  However, we have include some basic styling options to make panels immediately useful out-of-the-box.

## Inverse Panels

Panel support supplied by CNVS is largely limited to layout, leaving much of the styling preference up to the individual or team utilizing panels in their specific project.  However, we have include some basic styling options to make panels immediately useful out-of-the-box.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="row">

      <div class="column-12 column-small-8 column-small-offset-2 column-medium-8 column-medium-offset-2 column-large-8 column-large-offset-2 column-jumbo-6 column-jumbo-offset-3">

        <div class="panel panel-inverse">

          <div class="panel-cell">

          </div>

          <div class="panel-cell">

          </div>

          <div class="panel-cell">

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="panel panel-inverse">
  …
</div>
```

  </div>

</div>

## Panel Cell Styling

Panel support supplied by CNVS is largely limited to layout, leaving much of the styling preference up to the individual or team utilizing panels in their specific project.  However, we have include some basic styling options to make panels immediately useful out-of-the-box.

| Class                    | Description                           |
| ------------------------ | ------------------------------------- |
| `.panel-cell-borderless` | Remove all borders from panel cell.   |
| `.panel-cell-light`      | Add a light background to panel cell. |
| `.panel-cell-dark`       | Add a dark background to panel cell.  |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="row">

      <div class="column-12 column-small-8 column-small-offset-2 column-medium-8 column-medium-offset-2 column-large-8 column-large-offset-2 column-jumbo-6 column-jumbo-offset-3">

        <div class="panel">

          <div class="panel-cell panel-cell-borderless panel-cell-short-bottom text-align-center">

            <span class="h4 flush">

              Frontend Developer

            </span>

          </div>

          <div class="panel-cell flush-top">

            <p class="text-align-center flush">

              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo vol luctus.

            </p>

          </div>

          <div class="panel-cell panel-cell-light panel-cell-short text-align-center">

            <a href="#" class="button button-success button-rounded">

              Apply Today &rarr;

            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="panel">
  <div class="panel-cell panel-cell-borderless panel-cell-short-bottom">
    …
  </div>
  <div class="panel-cell flush-top">
    …
  </div>
  <div class="panel-cell panel-cell-dark panel-cell-short">
    …
  </div>
</div>
```

  </div>

</div>
