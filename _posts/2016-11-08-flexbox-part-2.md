---
layout: post
title:  "Doc to Dev: Flexbox Fun Part 2"
date:   2016-11-07
---
Today things got a little more challenging with Flexbox. The lesson started with
arranging some generic divs on a page:

![Flexbox Boxes](/assets/img/110816-1.png)

And then using that as a template, I recreated this site:

![Flexbox Site](/assets/img/110816-2.png)

The CSS looks like this:

{% highlight css %}
html {
    background-color: #fff;
    height: 100%;
    width: 100%;
}
body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    padding: 0 2em;
    font-size: 1.25em;
    height: 100%;
    color: #fff;
}
header, footer {
    background-color: #222;
    height: 80px;
    width: 100%;

}
.main {
    background-color: #ccc;
    height: 250px;
    width: 100%;
}
header, footer, .main {
  display: flex;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
    font-weight: bold;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
}

.div-1, .div-2, .div-3 {
    color: #fff;
    line-height: 1.5em;
    font-size: 1.6em;
    background-color: #f16059;
    width: 30%;
    height: 200px;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}
{% endhighlight %}
