---
layout: post
title:  "Doc to Dev: Unplugged Site - Active Navigation Menu"
date:   2016-09-26
---
Took it easy today after yesterday's frustrating experience. Added the code to make the active page on the navigation pink.

![Active Nav](/assets/img/092616.png)

The HTML:
{% highlight html %}
<li><a href="reviews/index.html" class="active">Reviews</a></li>
{% endhighlight %}

The CSS:
{% highlight css %}
li a.active {
  color: #ff1256;
}
{% endhighlight %}
