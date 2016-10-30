---
layout: post
title:  "Doc to Dev: Unplugged Site - Navigation Icons"
date:   2016-09-27
---
Finished up the navigation menu today by adding the icons. I found the images on flaticon.com as part of the Font Awesome pack
designed by Dave Gandy (free use requirement - check!). I was able to download the icons as SVG files, then, using Adobe
Illustrator, scaled the icons appropriately. Here's how it turned out:

![Nav Icons](/assets/img/092716.png)

I changed the HTML to the following:
{% highlight html %}
<li><a href="concerts/index.html"><img src="../img/music-note.svg" class="music-note"
  alt="music-note"/>Concerts</a></li>
<li><a href="reviews/index.html" class="active"><img src="../img/headphones.svg"
  class="headphones" alt="headphones"/>Reviews</a></li>
<li><a href="about/index.html"><img src="../img/group-people.svg" class="group-people"
  alt="group-people"/>About Us</a>
{% endhighlight %}

And wrote a little CSS too:
{% highlight css %}
.music-note {
  height: 24px;
  width: 26px;
  padding: 0px 10px 3px 0px;
}

.headphones {
  height: 24px;
  width: 24px;
  padding: 0px 10px 5px 0px;
}

.group-people {
  height: 24px;
  width: 24px;
  padding: 0px 10px 5px 0px;
}
{% endhighlight %}
Finishing up today feeling good about the mobile version and ready to move on to tablet.
