# Tooltip Positions

You can include more than body text in a message. Messages can support any HTML content. All type styling will be retained. However, if you add the class `.message-type-styling` to any typographic element, the preferred message type color and styling will be applied. For links, add the class `.message-link` to any `<a>`.

| Class            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `.tooltip-below` | Style tooltip to position below reference element.    |
| `.tooltip-right` | Style tooltip to position right of reference element. |
| `.tooltip-left`  | Style tooltip to position left of reference element.  |
{: .table }

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="tooltip">

      Tooltip <a href="#">above</a> element

    </div>

    <div class="tooltip tooltip-bottom">

      Tooltop below element

    </div>

    <div class="tooltip tooltip-right">

      Tooltip to right of element

    </div>

    <div class="tooltip tooltip-left">

      Tooltip to left of element

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="tooltip tooltip-bottom">
  This is a simple tooltip
</div>
```

  </div>

</div>
