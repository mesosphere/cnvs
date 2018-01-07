# Message Content

You can include more than body text in a message. Messages can support any HTML content. All type styling will be retained. However, if you add the class `.message-type-styling` to any typographic element, the preferred message type color and styling will be applied. For links, add the class `.message-link` to any `<a>`.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="message message-danger flush-bottom">

      <h3 class="flush-top message-type-style">

        Some Important Headline

      </h3>

      <p>

        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

      </p>

      <a href="#" class="message-link">Sure, let's do that thing</a>

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="message message-danger">
  <h3 class="message-type-style">
    Some Important Headline
  </h3>
  <p>
    Cras justo odio …
  </p>
  <a href="#" class="message-link">Sure, let's do that thing</a>
</div>
```

  </div>

</div>
