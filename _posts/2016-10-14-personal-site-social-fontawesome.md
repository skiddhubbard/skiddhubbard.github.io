---
layout: post
title:  "Doc to Dev: Personal Site - Social Icons with Font Awesome"
date:   2016-10-14
---
Worked on the Contact section today, decided to go with Font Awesome for the social
icons. I also changed the location to the bottom of the page instead of under the logo,
ditched the mail icon and just posted my email address.

Final result:
![Social Icons](/assets/img/101416.png)

A little CSS:
{% highlight css %}
#contact .fa{
  text-decoration: none;
}

.social {
  width: 80%;
  margin: 0px auto 5% auto;
  border-top: #333333 solid 1px;
  overflow: auto;
}

.social ul {
  display: block;
  width: 185px;
  font-size: 1.5em;
  list-style: none;
  padding: 0px;
  margin: 0px auto;
}

.social li {
  display: inline;
  padding: 5px 12px;
  float: left;
}

.social a {
  text-decoration: none;
}

@media (min-width: 768px) {

  .fa i {
    float: left;
    clear: both;
  }

  #contact {
    clear: both;
  }

  .social {
    width: 70%;
  }
}

@media (min-width: 940px) {

  .social ul {
    font-size: 3em;
    width: 270px;
  }
}
{% endhighlight %}
