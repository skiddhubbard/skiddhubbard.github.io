---
layout: post
title:  "Doc to Dev: Unplugged Site - CSS Display Property"
date:   2016-09-22
---
Had to figure out how to hide the paragraph and only show the title of the article in the feed on the mobile and tablet
versions of the site. Seems embarrassingly simple, but still knowledge to add to my toolbox. Here's the CSS:

{% highlight css %}
.feed-text p{
  display: none;
}

@media (min-width: 940px) {
  .feed-text p{
    display: inline;
  }
}
{% endhighlight %}
