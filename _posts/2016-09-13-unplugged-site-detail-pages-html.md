---
layout: post
title:  "Doc to Dev: Unplugged Site Detail Pages - HTML"
date:   2016-09-13
---
Today was a 2-for-1 because the pages were so similar. The reviews detail page and the news detail page. I'll bore you with
just one of them:

![News Detail](/assets/img/091316.png)

{% highlight html %}
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="../apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="../css/normalize.css">
        <link rel="stylesheet" href="../css/main.css">
        <script src="../js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

<!--Header-->
      <header>
        <h1 id ="logo"><img src="img/header-logo.png" alt="Unplugged"/></h1>
        <nav>
          <ul>
            <li><a href="#">Concerts</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">About Us</a>
              <ul id="sub-nav">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Who We Are &amp; Contact></a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
<!--Main Section-->
      <div class="main">
        <section class="news-detail">
          <img src="img/#" alt="News Image"/>
          <h1>Wilco Announces a New Album and a Summer Tour</h1>
          <ul>
            <li>Author Name</li>
            <li>Date</li>
          </ul>
          <p class="byline"><span>Byline:</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
            bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
            justo commodo. Proin sodales pulvinar tempor.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
            odio.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc
            eget odio.<br>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
            amet lacus accumsan et viverra justo commodo. Proin sodales
            pulvinar tempor. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
            luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
            sapien nunc eget odio.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra justo commodo. Proin
            sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam fermentum, nulla
            luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
            sapien nunc eget odio.<br>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales
            pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
          </section>
          <section class="sidebar">
            <div class="newsletter">
              <h2>Newsletter Signup</h2>
              <form class="newsletter-signup">
                <input type="text"/>
                <input type="submit" class="btn" value="Sign Up"/>
              </form>
            </div>
          </section>
        </div>
<!--Footer-->
        <footer>
          <img id="footer-logo" src="../img/footer-logo.png" alt="Unplugged Logo"/>
        </footer>

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="../js/plugins.js"></script>
        <script src="../js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>
{% endhighlight %}
Fingers crossed we will be adding some CSS to this site soon!
