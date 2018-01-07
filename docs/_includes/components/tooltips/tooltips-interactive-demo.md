# Interactive Demo

You can include more than body text in a message. Messages can support any HTML content. All type styling will be retained. However, if you add the class `.message-type-styling` to any typographic element, the preferred message type color and styling will be applied. For links, add the class `.message-link` to any `<a>`.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <button type="button" class="button" data-toggle="tooltip" data-placement="top" title="Tooltip on top">

      Tooltip on top

    </button>

    <button type="button" class="button" data-toggle="tooltip" data-placement="right" title="Tooltip on right">

      Tooltip on right

    </button>

    <button type="button" class="button" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">

      Tooltip on bottom

    </button>

    <button type="button" class="button" data-toggle="tooltip" data-placement="left" title="Tooltip on left">

      Tooltip on left

    </button>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="tooltip tooltip-top">
  This is a simple tooltip
</div>
```

  </div>

</div>
