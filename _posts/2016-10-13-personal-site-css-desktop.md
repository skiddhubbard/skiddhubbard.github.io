---
layout: post
title:  "Doc to Dev: Personal Site - CSS for Desktop"
date:   2016-10-13
---
Last but not least, the desktop version.

![Personal Site Desktop CSS](/assets/img/101316.png)

I wrote all the CSS to make the desktop site look just like the PSD I made. Then
when I saw it on the screen live, I scrapped it all!! Just didn't like the way it
was scrolling, didn't like the look of the navigation, I dunno, just didn't like it.
I might come back to it at some point, but for now I'm going to stick with
the tablet version with a couple small changes. I expanded the max width of the
images and also made the text over the images appear on hover.

The CSS for all that:

{% highlight css %}
@media (min-width: 940px) {

/***Header***/

  .logo {
    max-width: 45%;
    margin: 25px auto;
  }

/***Main***/

  .main {
    max-width: 970px;
  }

  .top {
    width: 100%;
  }

  .about-img {
    width: 49%;
    height: 49%;
    max-height: 400px;
    max-width: 475px;
    margin: 0px 1% 1.5% 0px;
  }

  .about h1 {
    width: 49%;
    margin-top: 30%;
    margin-bottom: 0px;
    top: 50%;
  }

  .blog-img {
    width: 49%;
    height: 49%;
    max-height: 400px;
    max-width: 475px;
    margin: 0px 0px 1.5% 1%;
  }

  .blog h1 {
    width: 49%;
    margin-top: 30%;
    margin-bottom: 0px;
    top: 50%;
    left: 50%;
  }

  .contact-crop-img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 970px;
    margin: 0px;
  }

  .bottom h1 {
    top: 65%;
  }

  .written-content {
    width: 100%;
    margin-top: 50px;
  }

  .col-1 {
    width: 48%;
    margin-right: 2%;
    float: left;
  }

  .col-2 {
    width: 48%;
    margin-left: 2%;
    float: left;
  }
}

@media (min-width: 1025px) {

/***Header***/

  .logo {
    max-width: 500px;
  }


/***Main***/

  .about h1 {
    visibility: hidden;
    margin-top: 27%;
  }

  .about:hover h1 {
    visibility: visible;
  }

  .blog h1 {
    visibility: hidden;
    margin-top: 27%;
  }

  .blog:hover h1 {
    visibility: visible;
  }

  .bottom h1 {
    visibility: hidden;
    top: 60%;
  }

  .bottom:hover h1 {
    visibility: visible;
  }
}
{% endhighlight %}
