# Responsive Images

## Fill Image `.image-fill`

Images by default assume their source width, though this can be changed in markup by using the `width` and `height` attributes directly on the `<img>` tag. Images are made responsive by adding the class `.image-fill`, setting a `max-width: 100%;` and applying `height: auto;`, filling their parent container.

<div class="panel">

  <div class="panel-cell text-align-center">

    <img class="image-fill" src="holder.js/600x400?auto=yes&bg=323a4e&fg=5b6171">

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<img src="…" class="image-fill">
```

  </div>

</div>

## Fluid Image `.image-fluid`

The `.image-fill` class will force an `img` to fill it's parent. However, you may wish to stop filling the parent container once the image reaches it's original width. To do this use the class `.image-fluid`.  Resize your window and observe how the image below adjusts in size.

<div class="panel">

  <div class="panel-cell">

    <img class="image-fluid center-auto" src="holder.js/600x400?auto=yes&bg=323a4e&fg=5b6171">

  </div>

  <div class="panel-cell panel-cell-light panel-cell-code-block" markdown="1">

```html
<img src="…" class="image-fluid">
```

  </div>

</div>
