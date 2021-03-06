---
layout: post
title:  "Doc to Dev: Unplugged Site - Header & Footer Logo"
date:   2016-09-20
---
Created the logo for the header and footer today. The original HTML included an image for the logo but there was nothing to
extract from the PSD mock-up. It seemed pretty straightforward so I decided to try to make it using just CSS. It ended up
giving me quite a bit of grief but I figured it out! Here's a screenshot of the logo:

![Unplugged Logo](/assets/img/092016.png)

The part where the black overlaps the navigation was the difficult part to figure out. But it gave me the opportunity to learn
about Z-index. And then I got to learn that I couldn't use it in this case because Z-index only works with positioned elements.
So after some research, I found out that you can also change the layering of objects in CSS by adjusting the opacity. And that was the winner here. I also added a negative margin to the navigation list to create the overlap. Here's the CSS:

{% highlight css %}
#logo {
  font-family: 'Sansita One';
  font-size: 48px;
  color: white;
  text-align: center;
  background-color: black;
  padding: 10px 0px 8px;
  margin: 0px auto;
  opacity: 0.99;
}

ul {
  list-style: none;
  padding: 0px;
  padding-top: 16px;
  margin-top: -8px;
}
{% endhighlight %}
