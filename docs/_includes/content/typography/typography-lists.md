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
