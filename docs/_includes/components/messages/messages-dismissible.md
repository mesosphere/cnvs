# Dismissible Messages

If you wish to give users the ability to dismiss a message, add the class `.message-dismissible` as well as include an element of class `.message-dismissible-indicator` inside your message.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="message message-dismissible">

      <a class="message-dismissible-indicator" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </a>

      <strong>Message:</strong> Maecenas sed diam eget risus varius blandit sit amet non magna.

    </div>

    <div class="message message-success message-dismissible flush-bottom">

      <a class="message-dismissible-indicator" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </a>

      <strong>Message:</strong> Maecenas sed diam eget risus varius blandit sit amet non magna.

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="message message-dismissible">
  <a class="message-dismissible-indicator" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </a>
  <strong>Message:</strong> This is a relevant message you should read.
</div>
```

  </div>

</div>
