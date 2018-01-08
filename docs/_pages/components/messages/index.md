---
layout: post
id: page-messages
title: Messages
page-header:
  headline: Messages
  description: Messages are an easy way to provide contextual messages or feedback related to a specific event, condition, or user action.
toc: true
---

Use messages in your project to convey information, provide tips, communicate success, or even flag and notify the user of errors. Wrap your message in an element with the class `.message` to apply the default message appearance. Any HTML can live inside a message, though content is typically limited to text and simple actions.

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="message flush-bottom">

      <strong>Message:</strong> This is a relevant message you should read.

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="message">
  <strong>Information:</strong> This is a relevant message you should read.
</div>
```

  </div>

</div>

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

# Inverse Styling

Add the class `.message-inverse` to any `.message` element to leverage inverse styling.

<div class="panelflush-bottom">

  <div class="panel-cell panel-cell-dark">

    <div class="message message-inverse">

      <strong>Message:</strong> This is a relevant message you should read.

    </div>

    <div class="message message-information message-inverse">

      <strong>Information:</strong> This is a message that is more colorful than others.

    </div>

    <div class="message message-success message-inverse">

      <strong>Success:</strong> You have done some action successfully and should be proud!

    </div>

    <div class="message message-warning message-inverse">

      <strong>Warning:</strong> Before going further, you may want to stop and read this.

    </div>

    <div class="message message-danger message-inverse flush-bottom">

      <strong>Danger:</strong> Something is wrong or potentially problematic, please read.

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<div class="message message-inverse">
  <strong>Information:</strong> This is a message that is more colorful than others.
</div>
```

  </div>

</div>

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
