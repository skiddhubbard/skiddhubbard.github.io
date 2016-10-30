---
layout: post
title:  "Doc to Dev: Unplugged Site - CSS Part 1"
date:   2016-09-18
---
Back to the "Unplugged" site I left off on [09.13.2016](/2016/09/13/unplugged-site-detail-pages.html). Started adding some CSS today. The first step was
adding percentages and giving the content a little bit of breathing room. It's hard to appreciate with a screenshot but take
my word, it looks MUCH BETTER.

![Percentages](/assets/img/091816.png)

{% highlight css %}
/***Header***/

header {
  width: 100%;
}

nav {
  width: 100%;
}

#logo {
  width: 90%;
}

/***Main Section***/

.main {
  width: 96%;
  padding: 0 2%;
  margin: auto;
}

/***Footer***/

footer {
  width: 100%;
  clear: both;
}

#footer-logo {
  width: 50%;
}
{% endhighlight %}
