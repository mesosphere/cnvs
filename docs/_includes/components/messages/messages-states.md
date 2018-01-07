# Message States

You may wish to display more than the default message type, either to create separation in the importance of various messages or to communicate the state of an action or condition. Message states make this super easy. Append the appropriate state name to the class `.message-*` prefix.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="message">

      <strong>Message:</strong> This is a relevant message you should read.

    </div>

    <div class="message message-information">

      <strong>Information:</strong> This is a message that is more colorful than others.

    </div>

    <div class="message message-success">

      <strong>Success:</strong> You have done some action successfully and should be proud!

    </div>

    <div class="message message-warning">

      <strong>Warning:</strong> Before going further, you may want to stop and read this.

    </div>

    <div class="message message-danger flush-bottom">

      <strong>Danger:</strong> Something is wrong or potentially problematic, please read.

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="message message-information">
  <strong>Information:</strong> This is a message that is more colorful than others.
</div>

<div class="message message-success">
  <strong>Success:</strong> You have done some action successfully and should be proud!
</div>

<div class="message message-warning">
  <strong>Warning:</strong> Before going further, you may want to stop and read this.
</div>

<div class="message message-danger">
  <strong>Danger:</strong> Something is wrong or potentially problematic, please read.
</div>
```

  </div>

</div>
