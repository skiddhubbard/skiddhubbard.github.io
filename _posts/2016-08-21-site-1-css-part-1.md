---
layout: post
title:  "Doc to Dev: Site #1 - CSS Part 1"
date:   2016-08-21
---
That moment when you realize your code is not working all because of one little missing comma.

Facepalm.

Happy to say that all commas are now in place and I have two sections of my practice site styled:

![Practice Site 082116](/assets/img/082116.png)

Here's the CSS:
{% highlight css %}
/*****BASE STYLES*****/

body {
  font-family: 'Source Sans Pro', sans-serif;
}

#about, #work, #contact {
  height: 600px;
}

/*****GRID*****/

.full-width {
  width: 1200px;
  margin: 0 auto;
}

.half-width {
  width: 600px;
  float: left;
}

.third-width {
  width: 400px;
  float: left;
}

/*****ABOUT*****/

#about .full-width {
  padding: 80px 0px;
}

#about h2 {
  font-family: 'Lora', serif;
  font-size: 36px;
  font-weight: bold;
}

#about p {
  color: #7f7f7f;
  font-size: 21px;
  line-height: 40px;
  padding-right: 50px;
}

/*****WORK*****/

#work {
  background-color: #f9ceb7;
  text-align: center;
}

#work .third-width {
  padding: 115px 0px;
}

#work img {
  padding-bottom: 30px;
}

#work h3 {
  font-size: 24px;
  width: 190px;
  margin: 0 auto;
}

#work p {
  font-family: 'Lora', serif;
  font-size: 18px;
  line-height: 2;
  color: #262a2b;
  padding: 0 35px;
}
{% endhighlight %}
Hoping to finish it up tomorrow and start working on my personal site soon.
