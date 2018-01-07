# Grid Options

The column width and position can change based on both screen resolution and class name.  The column count and gutter width are easily modified using Canvas variables.  The grid itself is size independent, the grid column width is defined based on the element wrapping the row.  The only constant size in a grid is the gutter width &mdash; which itself varies based on the width of the viewport.

<table class="table table-bordered table-striped flush-bottom">
  <thead>
    <tr>
      <th></th>
      <th class="text-align-center">
        Mini<br>
        <small class="flush-bottom">Portrait phones (< 480px)</small>
      </th>
      <th class="text-align-center">
        Small<br>
        <small class="flush-bottom">Landscape phones (≥ 480px)</small>
      </th>
      <th class="text-align-center">
        Medium<br>
        <small class="flush-bottom">Tablets (≥ 768px)</small>
      </th>
      <th class="text-align-center">
        Large<br>
        <small class="flush-bottom">Desktops (≥ 992px)</small>
      </th>
      <th class="text-align-center">
        Jumbo<br>
        <small class="flush-bottom">Desktops (≥ 1400px)</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap" scope="row">Grid behavior</th>
      <td>Horizontal at all times</td>
      <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Max Container Width</th>
      <td>None (Auto)</td>
      <td>None (Auto)</td>
      <td>730px</td>
      <td>920px</td>
      <td>1100px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Class prefix</th>
      <td><code>.column-</code></td>
      <td><code>.column-small-</code></td>
      <td><code>.column-medium-</code></td>
      <td><code>.column-large-</code></td>
      <td><code>.column-jumbo-</code></td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row"># of columns</th>
      <td colspan="5">12 (default)</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Gutter width</th>
      <td>12px</td>
      <td>12px</td>
      <td>24px</td>
      <td>32px</td>
      <td>36px</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Nestable</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Offsets</th>
      <td colspan="5">Yes</td>
    </tr>
    <tr>
      <th class="text-nowrap" scope="row">Column ordering</th>
      <td colspan="5">Yes</td>
    </tr>
  </tbody>
</table>
