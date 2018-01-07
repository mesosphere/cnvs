---
layout: post
id: page-typography
title: Typography
page-header:
  headline: Typography
toc: true
---

# Body Text

Body copy, text wrapped in a simple `<p>` tag, lays the foundation for all other text attributes and elements.  Every element of body copy, and really any text, is definable by canvas.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <p class="">

      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.

    </p>

    <p class="flush-bottom">

      Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<p>
  Collaboratively administrate empowered…
</p>

<p>
  Efficiently unleash cross-media information…
</p>
```

  </div>

</div>

## Lead Text

Increase the importance of your body copy by adding the class `.lead`. Lead is only a class, and not an HTML tag, but may be useful when you want to retain the semantic nature of a paragraph, but are not willing to classify it as a heading.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <p class="lead">

      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.

    </p>

    <p class="flush-bottom">

      Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<p class="lead">
  Collaboratively administrate empowered…
</p>

<p>
  Efficiently unleash cross-media information…
</p>
```

  </div>

</div>

## Small Text

For less important body text, add the class `.small`. Small text is useful for legal fine-print, instructional text, or supporting details.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <p>

      Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.

    </p>

    <p class="small flush-bottom">

      Collaboratively administrate empowered markets via plug-and-play networks.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<p>
  Collaboratively administrate empowered…
</p>

<p class="small">
  Efficiently unleash cross-media information…
</p>
```

  </div>

</div>

# Headings

All standard HTML heading tags from `<h1>` through `<h5>` are available. In addition the class `.h1` through `.h5` classes are available, for when you want to match the font styling of a heading but don't want to adjust the tag.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <span class="h1 flush-top">

      h1 Heading Text

    </span>

    <span class="h2">

      h2 Heading Text

    </span>

    <span class="h3">

      h3 Heading Text

    </span>

    <span class="h4">

      h4 Heading Text

    </span>

    <span class="h5">

      h5 Heading Text

    </span>

    <span class="h6 flush-bottom">

      h6 Heading Text

    </span>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<h1>
  h1 Heading Text
</h1>

<h2>
  h2 Heading Text
</h2>

<h3>
  h3 Heading Text
</h3>

<h4>
  h4 Heading Text
</h4>

<h5>
  h5 Heading Text
</h5>

<h6>
  h6 Heading Text
</h6>
```

  </div>

</div>

# Inline Styling

For all text elements, classes are made available to adjust the styling inline.  For example, increase the emphasis of text to convey importance.

## Emphasis

When you want to emphasis the importance the text, use the class `.emphasis`. All text included text elements -- headings, body text, lead -- had added support for emphasized text.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <span class="h1 flush-top">

      Heading with <span class="emphasis">emphasized</span> text

    </span>

    <p class="lead">

      Quickly <span class="emphasis">maximize</span> timely deliverables for deliverables without functional solutions.

    </p>

    <p class="flush-bottom">

      Efficiently unleash <span class="emphasis">cross-media</span> information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<h1 class="flush-top">
  Heading with <span class="emphasis">emphasized</span> text
</h1>

<p class="lead">
  Quickly <span class="emphasis">maximize</span> timely…
</p>

<p class="flush-bottom">
  Efficiently unleash <span class="emphasis">cross-media</span> inf…
</p>
```

  </div>

</div>

## Muted

When you want to demphasis the importance text, use the class `.muted`. All text included text elements -- headings, body text, lead -- had added support for muted text.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <span class="h1 flush-top">

      Heading with <span class="muted">muted</span> text

    </span>

    <p class="lead">

      Quickly <span class="muted">maximize</span> timely deliverables for deliverables without functional solutions.

    </p>

    <p class="flush-bottom">

      Efficiently unleash <span class="muted">cross-media</span> information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<h1 class="flush-top">
  Heading with <span class="muted">muted</span> text
</h1>

<p class="lead">
  Quickly <span class="muted">maximize</span> timely…
</p>

<p class="flush-bottom">
  Efficiently unleash <span class="muted">cross-media</span> inf…
</p>
```

  </div>

</div>

# Inverse Styling

All typographic elements have support for inverted styling.  This is useful when text is resting on a dark background.  Add the class `.inverse` to any text element to leverage the inverted styling.

The inverse styling even has added support for the `.emphasis` and `.muted` inline styling classes.

<div class="panel">

  <div class="panel-cell panel-cell-dark panel-cell-inverse">

    <span class="h1 inverse flush-top">

      h1 Heading Text

    </span>

    <span class="h2 inverse">

      h2 Heading Text

    </span>

    <span class="h3 inverse">

      h3 Heading Text

    </span>

    <span class="h4 inverse">

      h4 Heading Text

    </span>

    <span class="h5 inverse">

      h5 Heading Text

    </span>

    <span class="h6 inverse">

      h6 Heading Text

    </span>

    <p class="lead inverse">

      Dramatically visualize <span class="emphasis">customer</span> directed convergence without revolutionary ROI.

    </p>

    <p class="inverse">

      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.

    </p>

    <p class="inverse flush-bottom">

      Efficiently unleash <span class="muted">cross-media</span> information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<h1 class="inverse">
  h1 Heading Text
</h1>

<p class="lead inverse">
  Dramatically visualize <span class="emphasis">emphasized</span> directed…
</p>

<p class="inverse">
  Collaboratively administrate empowered…
</p>

<p class="inverse">
  Efficiently unleash <span class="muted">cross-media</span> information…
</p>
```

  </div>

</div>

# Alignment

Align text using the supplied alignment classes.  By default text is aligned left.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <p class="text-align-left">

      Left aligned text. Cartibulum ercisco buglossa montepessulanus bicrotum cosidero auricolor menda boo bubo pernot io anilis lento infrequens cit circumvolutor crux. Congregalis chrysoprassos vanesco carptor galbanus veles septimpliciter corripio assuo bua arferia?

    </p>

    <p class="text-align-center">

      Center aligned text. Cartibulum ercisco buglossa montepessulanus bicrotum cosidero auricolor menda boo bubo pernot io anilis lento infrequens cit circumvolutor crux. Congregalis chrysoprassos vanesco carptor galbanus veles septimpliciter corripio assuo bua arferia?

    </p>

    <p class="text-align-right">

      Right aligned text. Cartibulum ercisco buglossa montepessulanus bicrotum cosidero auricolor menda boo bubo pernot io anilis lento infrequens cit circumvolutor crux. Congregalis chrysoprassos vanesco carptor galbanus veles septimpliciter corripio assuo bua arferia?

    </p>

    <p class="text-align-justify">

      Justify aligned text. Cartibulum ercisco buglossa montepessulanus bicrotum cosidero auricolor menda boo bubo pernot io anilis lento infrequens cit circumvolutor crux. Congregalis chrysoprassos vanesco carptor galbanus veles septimpliciter corripio assuo bua arferia?

    </p>

    <p class="text-align-nowrap">

      No wrap text. Cartibulum ercisco buglossa montepessulanus bicrotum cosidero auricolor menda boo bubo pernot io anilis lento infrequens cit circumvolutor crux. Congregalis chrysoprassos vanesco carptor galbanus veles septimpliciter corripio assuo bua arferia?

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<p class="text-align-left">
  Left aligned text.
</p>

<p class="text-align-center">
  Center aligned text.
</p>

<p class="text-align-right">
  Right aligned text.
</p>

<p class="text-align-justify">
  Justify aligned text.
</p>

<p class="text-align-nowrap">
  No wrap text.
</p>
```

  </div>

</div>

# Transformation

Transform text in components with text capitalization classes.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <p class="text-uppercase">

      Uppercase text

    </p>

    <p class="text-lowercase">

      Lowercase text.

    </p>

    <p class="text-capitalize">

      Capitalized text.

    </p>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<p class="text-uppercase">
  Uppercase text
</p>

<p class="text-lowercase">
  Lowercase text.
</p>

<p class="text-capitalize">
  Capitalized text.
</p>
```

  </div>

</div>

# Lists

Align text using the supplied alignment classes.  By default text is aligned left.

## Ordered Lists

A list of items in which the order does explicitly matter.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <ol class="flush-bottom I">

      <li>

        Lorem ipsum dolor sit amet

      </li>

      <li>

        Consectetur adipiscing elit

      </li>

      <li>

        Integer molestie lorem at massa

      </li>

      <li>

        Facilisis in pretium nisl aliquet

      </li>

      <li>

        Nulla volutpat aliquam velit

        <ol class="a">

          <li>

            Phasellus iaculis neque

          </li>

          <li>

            Purus sodales ultricies

          </li>

          <li>

            Vestibulum laoreet porttitor sem

          </li>

          <li>

            Ac tristique libero volutpat at

          </li>

        </ol>

      </li>

      <li>

        Faucibus porta lacus fringilla vel

      </li>

      <li>

        Aenean sit amet erat nunc

      </li>

      <li>

        Eget porttitor lorem

      </li>

    </ol>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<ol>
  <li>
    …
  </li>
</ol>
```

  </div>

</div>

## Unordered Lists

A list of items in which the order does not explicitly matter.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <ul class="flush-bottom">

      <li>

        Lorem ipsum dolor sit amet

      </li>

      <li>

        Consectetur adipiscing elit

      </li>

      <li>

        Integer molestie lorem at massa

      </li>

      <li>

        Facilisis in pretium nisl aliquet

      </li>

      <li>

        Nulla volutpat aliquam velit

        <ul>

          <li>

            Phasellus iaculis neque

          </li>

          <li>

            Purus sodales ultricies

          </li>

          <li>

            Vestibulum laoreet porttitor sem

          </li>

          <li>

            Ac tristique libero volutpat at

          </li>

        </ul>

      </li>

      <li>

        Faucibus porta lacus fringilla vel

      </li>

      <li>

        Aenean sit amet erat nunc

      </li>

      <li>

        Eget porttitor lorem

      </li>

    </ul>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<ul>
  <li>
    …
  </li>
</ul>
```

  </div>

</div>

## Unstyled Lists

Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <ul class="list-unstyled flush-bottom">

      <li>

        Lorem ipsum dolor sit amet

      </li>

      <li>

        Consectetur adipiscing elit

      </li>

      <li>

        Integer molestie lorem at massa

      </li>

      <li>

        Facilisis in pretium nisl aliquet

      </li>

      <li>

        Nulla volutpat aliquam velit

        <ul>

          <li>

            Phasellus iaculis neque

          </li>

          <li>

            Purus sodales ultricies

          </li>

          <li>

            Vestibulum laoreet porttitor sem

          </li>

          <li>

            Ac tristique libero volutpat at

          </li>

        </ul>

      </li>

      <li>

        Faucibus porta lacus fringilla vel

      </li>

      <li>

        Aenean sit amet erat nunc

      </li>

      <li>

        Eget porttitor lorem

      </li>

    </ul>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<ul class="list-unstyled">
  <li>
    …
  </li>
</ul>
```

  </div>

</div>

## Inline Lists

Display list `<li>` inline rather than vertical stacked using the class `.list-inline` on any `<ul>` or `<ol>`.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <ul class="list-inline flush-bottom">

      <li>

        List item

      </li>

      <li>

        List item

      </li>

      <li>

        List item

      </li>

      <li>

        List item

      </li>

      <li>

        List item

      </li>

    </ul>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<ul class="list-inline">
  <li>
    …
  </li>
</ul>
```

  </div>

</div>
