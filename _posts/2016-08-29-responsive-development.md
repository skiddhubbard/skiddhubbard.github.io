---
layout: post
title:  "Doc to Dev: Responsive Development"
date:   2016-08-29
---
Today's lesson jumped in to Responsive Web Development a little more. I learned the difference between static, fluid,
adaptive and responsive sites and transformed a couple simple sites from static to fluid.

Here's an example:

{% highlight html %}
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
  </head>

  <body>
    <div id="wrapper">
      <header> </header>
      <div class="col-3 grey-1"></div>
      <div class="col-3 grey-2"></div>
      <div class="col-3 grey-3"></div>
      <div class="clear"></div>
      <footer></footer>
    </div>
  </body>
</html>
{% endhighlight %}

{% highlight css %}
html, body{
  margin:0px;
}
.clear{
  clear:both;
}
#wrapper{
  max-width: 960px;
  width:100%;
  margin:auto;
}
/*---------- HEADER ----------*/
header{
  height:300px;
  width:100%;
  background:#e3e3e3;
}
/*---------- CONTENT AREA ----------*/
.col-3{
  width:33.33%;
  height:320px;
  float:left;
}
.grey-1{
  background:#d5d5d5;
}
.grey-2{
  background:#c4c4c4;
}
.grey-3{
  background:#b7b7b7;
}
/*---------- FOOTER ----------*/
footer{
  width:100%;
  height:30px;
   background:#e3e3e3;
}
{% endhighlight %}
And I tested out the code using that handy little phone icon in Chrome DevTools. Seriously, how cool is that little guy???
