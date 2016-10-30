---
layout: post
title:  "Doc to Dev: Personal Site - CSS for Mobile"
date:   2016-10-11
---
Starting mobile first with the CSS. Here's how it looks so far:

![Personal Site Mobile CSS](/assets/img/101116.png)

And the CSS:

{% highlight css%}
/***Universal Styles***/

@font-face {
  font-family: 'Foxglow';
  src: url('../fonts/Foxglow-Regular.otf');
}

body {
  font-family: 'Playfair Display', serif;
  color: #333333;
}

h1 {
  font-family: 'Foxglow';
  font-weight: normal;
  line-height: 1px;
  color: #e2e1dd;
}

h2 {
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
  font-weight: lighter;
  text-align: center;
  text-transform: uppercase;
  margin: 50px;
}

h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 1.5em;
  font-weight: lighter;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1%;
}

p {
  font-size: 1.25em;
  margin: 0px auto 15px;
}

a {
  color: #333333;
  cursor: default;
  text-decoration: underline;
}

/***Header***/

.logo {
  display: block;
  max-width: 80%;
  margin: 2% auto;
  object-fit: scale-down;
}

/***Main***/

.main {
  width: 94%;
  margin: auto;
}

.about {
  position: relative;
  width: 100%;
  overflow: visible;
}

.about h1 {
  position: absolute;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  top: 65%;
  text-align: center;
  font-size: 10em;
}

.about-img {
  display: block;
  max-width: 100%;
  margin: 4% auto;
}

.blog {
  position: relative;
  width: 100%;
  overflow: visible;
}

.blog h1 {
  position: absolute;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  top: 65%;
  text-align: center;
  font-size: 10em;
}

.blog-img {
  display: block;
  max-width: 100%;
  margin: 4% auto;
}

.contact-square-img {
  display: block;
  max-width: 100%;
  margin: 0px auto 4% auto;
}

.bottom {
  position: relative;
  overflow: auto;
}

.bottom h1 {
  position: absolute;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  top: 65%;
  text-align: center;
  font-size: 10em;
}

#about {
  margin-bottom: 20px;
  overflow: auto;
}

.col-2 {
  margin-bottom: 5%;
}

#contact {
  margin-bottom: 20px;
  overflow: auto;
}

{% endhighlight %}
