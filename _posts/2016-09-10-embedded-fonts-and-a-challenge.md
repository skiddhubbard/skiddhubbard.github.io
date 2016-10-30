---
layout: post
title:  "Doc to Dev: Embedded Fonts and a Challenge!"
date:   2016-09-10
---
Taking a welcome break from Visual Design and back to coding! So good to be back at it. This project took a lot of trial and error to finally get it right but it is such an awesome feeling when it works! Here's a snapshot:

![Black and White](/assets/img/091016.png)

That ampersand gave me a few nightmares. Here's the CSS I used to make it happen:

{% highlight css %}
@font-face {
    font-family: 'abril_fatfaceregular';
    src: url('fonts/abrilfatface-regular-webfont.woff2') format('woff2'),
         url('fonts/abrilfatface-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  font-family: 'abril_fatfaceregular';
}

p {
  margin: 0px;
}

div.top {
  height: 180px;
  width: 1150px;
  background-color: white;
  color: black;
  padding-left: 50px;
  padding-top:50px;
}

div.bottom {
  height: 250px;
  width: 1150px;
  background-color: black;
  color: white;
  padding-left: 50px;
  clear: both;
}

div.amp-top {
  height: 80px;
  width: 1200px;
  background-color: white;
  color: white;
}

div.amp-bottom {
  height: 80px;
  width: 1200px;
  background-color: black;
  color: white;
}

.line1 {
  font-size: 30px;
  text-transform: uppercase;
  line-height: 25px;
}

.line2 {
  font-size: 120px;
  margin: 0px;
  line-height: 100px;
}

.line3 {
  font-size: 30px;
  text-transform: uppercase;
  padding-left: 120px;
}

.line4 {
  font-size: 120px;
  line-height: 130px;
  mix-blend-mode: difference;
  margin-left: 50px;
}

.line5 {
  font-size: 36px;
  text-transform: uppercase;
}

.line6 {
  font-size: 120px;
  width: 775px;
  float: left;
  line-height: 100px;
}

.line7 {
  font-size: 36px;
  width: 320px;
  float: left;
  line-height: 34px;
}
{% endhighlight %}
