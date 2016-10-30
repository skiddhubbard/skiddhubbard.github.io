---
layout: post
title:  "Doc to Dev: Personal Site - CSS for Tablet"
date:   2016-10-12
---
Tablet styles are done!

![Personal Site Tablet CSS](/assets/img/101216.png)

I ended up adding another image to the HTML for the contact section. I'm sure there is
probably a better way but I could not figure out how to change the image size using just CSS.
Going to need some more time on that task. For now, here's the CSS:

{% highlight css %}

@media (min-width: 768px) {

/***Header***/

  .logo {
    max-width: 50%;
    margin: 2% auto;
  }

/***Main***/

  .top {
    width: 685px;
    margin: auto;
    overflow: auto;
  }

  .about-img {
    width: 335px;
    height: 335px;
    object-fit: cover;
    vertical-align: middle;
    margin: 4% 7.5px 15px 0px;
    float: left;
  }

  .about h1 {
    width: 335px;
    top: 220px;
  }

  .blog-img {
    width: 335px;
    height: 335px;
    object-fit: cover;
    vertical-align: middle;
    margin: 4% 0px 15px 7.5px;
    float: left;
  }

  .blog h1 {
    width: 335px;
    top: 220px;
    left: 350px;
  }

  .contact-square-img {
    display: none;
  }

  .contact-crop-img {
    display: block;
    width: 685px;
    height: 335px;
    object-fit: cover;
    vertical-align: middle;
    margin: 0px auto 4% auto;
    clear: both;
  }

  .bottom h1 {
    top: 55%
  }

  .written-content {
    width: 685px;
    margin: 100px auto 0px;
  }

  .col-1 {
    width: 320px;
    margin-right: 15px;
    margin-bottom: 5%;
    float: left;
  }

  .col-2 {
    width: 320px;
    margin-left: 15px;
    float: left;
  }

  #contact {
    clear: both;
  }
}
{% endhighlight %}
