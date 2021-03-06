---
layout: post
title:  "Doc to Dev: Site #1 - CSS Part 2"
date:   2016-08-22
---
I made a working website that's not totally ugly!! (insert high fives emoji here)

Check it out:

![Practice Site 082216](/assets/img/082216-1.png)

![Practice Site 082216](/assets/img/082216-2.png)

And now the CSS responsible:
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

/*****HEADER*****/

header {
  height: 800px;
  background-image: url(full-background.png);
  background-size: cover;
}

nav {
  float: right;
  padding: 75px 40px;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 18px;
  color: #828282;
  padding-left: 80px;
}

header h1 {
  font-family: 'Lora', serif;
  font-size: 30px;
  color: #bbc085;
  padding: 50px 0;
}

header h2 {
  width: 975px;
  clear: both;
  font-family: 'Lora', serif;
  font-size: 64px;
  line-height: 1.1;
  color: #9a9b9b;
  padding: 20px 0;
}

header h2 span {
  color: black;
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

/*****CONTACT*****/

#contact {
  background-color: #ebebeb;
}

#contact .full-width {
  padding: 110px 0;
}

#contact-img {
  border: 12px solid #ffffff;
}

#contact h2, #email-header, #socialmedia-header {
  padding-left: 115px;
}

#contact ul {
  padding-left: 140px;
}

#envelope {
  padding: 0 10px 0 115px;
}

#contact h2 {
  font-family: 'Lora', serif;
  font-weight: bold;
  font-size: 36px;
}

#email-header {
  font-size: 29px;
  font-weight: 400;
  margin: -30px 0 5px 0;
}

#socialmedia-header {
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0 0 0;
}

#contact a {
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  color: #c49075;
}

#contact ul {
  list-style: none;
}

#contact ul li {
  display: inline-block;
}

#contact ul img {
  padding-right: 48px;
}
{% endhighlight %}
The good news and bad news is that the layout is really similar to what I was envisioning for my personal site.
Good because it have a jumping off point but bad because I wanted to make something original. I'll just have to put
my own spin on it... coming soon!
