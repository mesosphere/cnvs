---
layout: post
redirect_from:
  - /layout/
id: page-containers
title: Containers
page-header:
  headline: Containers
  description: Containers provide basic layout functionality. The term "container" has been borrowed from Twitter's Bootstrap, and is meant to imply an element that wraps or "contains" content.
page-navigation:
- label: Fixed-Width Containers
  link: '#containers'
- label: Fluid-Width Containers
  link: '#containers-fluid'
  navigation:
  - label: Fluid-Width Container Options
    link: '#containers-fluid-variants'
---

In Canvas, containers can be used independent of the [Grid System](/layout/grid). Properties such as a width and margin for the container vary depending on both the class and screen resolution. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

{% include layout/containers/containers-fixed.md %}
{% include layout/containers/containers-fluid.md %}
