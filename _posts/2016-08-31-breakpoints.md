---
layout: post
title:  "Doc to Dev: Breakpoints"
date:   2016-08-31
---
Today was a quick but important lesson on breakpoints. Wrote just a bit of CSS:

{% highlight css %}
/*----------- Mobile phones larger than 400px wide -----------*/
@media (min-width:400px) {
  body {
    background:red;
  }
}

/*----------- Tablets larger than 768px wide -----------*/
@media (min-width:768px) {
  body {
    background:green;
  }
}

/*----------- Monitors larger than 1200px wide -----------*/
@media (min-width:1200px) {
  body {
    background:blue;
  }
}

/*----------- Large Monitors larger than 1600px wide -----------*/
@media (min-width:1600px) {
  body {
    background:purple;
  }
}
{% endhighlight %}
