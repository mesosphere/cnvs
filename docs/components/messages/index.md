---
layout: post
id: page-messages
title: Messages
page-header:
  headline: Messages
  description: Messages are an easy way to provide contextual messages or feedback related to a specific event, condition, or user action.
toc: true
---

<p>

  Use messages in your project to convey information, provide tips, communicate success, or even flag and notify the user of errors. Wrap your message in an element with the class <code>.message</code> to apply the default message appearance. Any HTML can live inside a message, though content is typically limited to text and simple actions.

</p>

<div class="panel flush-bottom">

  <div class="panel-cell">

    <div class="message flush-bottom">

      <strong>Message:</strong> This is a relevant message you should read.

    </div>

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block">

<pre class="prettyprint transparent flush lang-html">
&lt;div class="message"&gt;
  &lt;strong&gt;Information:&lt;/strong&gt; This is a relevant message you should read.
&lt;/div&gt;
</pre>

  </div>

</div>

{% include components/messages/messages-states.md %}
{% include components/messages/messages-inverse-styling.md %}
{% include components/messages/messages-content.md %}
{% include components/messages/messages-dismissible.md %}
