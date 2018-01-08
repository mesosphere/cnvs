---
layout: post
id: page-code
title: Code
page-header:
  headline: Code
toc: true
---

# Inline Code

For inline code, wrap your code in the `code` tag. Be sure to escape HTML angle brackets.

<div class="panel flush-bottom">

  <div class="panel-cell">

    For example, <code>&lt;section&gt;</code> should be wrapped as inline.

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

  </div>

</div>

# Preformatted Code

Use <code><pre></code>s for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.

<div class="panel flush-bottom">

  <div class="panel-cell" markdown="1">
```html
<h1>Page Title</h1>
<p>Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
```
  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<pre class="flush-bottom">
  <h1>Page Title</h1>
  <p>Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
</pre>
```

  </div>

</div>
