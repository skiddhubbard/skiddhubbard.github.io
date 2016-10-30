---
layout: post
title:  "Doc to Dev: Unplugged Site Homepage - HTML"
date:   2016-09-11
---
Starting up a new project today - building a responsive site for a music news site. Starting with the HTML and working my way
forward. My class suggested using the HTML boilerplate. Not sure if this is a good or bad practice but hopefully I'll find
out soon when I get out into the the real world of development. Here's the start of the homepage:

![Unplugged Home](/assets/img/091116.png)

Not so pretty just yet but trying to remember this is a work in progress. Here's the HTML:

{% highlight html %}
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
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
          <section class="hero-area">
            <div class="top-img">
              <img src="img/wilco.png" alt="Wilco">
            </div>
            <div class="top-story">
              <h2>Wilco Announces a New Album and Summer Tour</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
              </p>
            </div>
          </section>
          <section>
          <section class="sidebar">
            <div class="newsletter">
              <h2>Newsletter Signup</h2>
              <form class="newsletter-signup">
                <input type="text"/>
                <input type="submit" class="btn" value="Sign Up"/>
              </form>
            </div>
            <div class="sidebar-upcoming">
              <h2>Upcoming Concerts</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean euismod bibendum laoreet.
              </p>
              <a href="#" class="btn">See All</a>
            </div>
            <div class="sidebar-faq">
              <h2>Frequently Asked Questions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet..
              </p>
              <a href="#" class="btn">See all</a>
            </div>
          </section>
          <section class="feed">
          <h4>Recent News and Reviews</h4>
            <div class="feed-item">
              <div class="feed-type">
                <h5>News</h5>
              </div>
              <div class="feed-image">
                <img src="img/#"/>
              <div>
              <div class="feed-text">
                <h3>Arcade Fire Hints About A New Side Project - What Will It Be?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam fermentum,
                  nulla luctus pharetra vulputate, felis tellus mollis orci,
                  sed rhoncus sapien nunc eget odio.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-type">
                <h5>News</h5>
              </div>
              <div class="feed-image">
                <img src="img/#"/>
              <div>
              <div class="feed-text">
                <h3>Our Roundup of 2015's Top Summer Festivals &amp; Free Shows</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam fermentum,
                  nulla luctus pharetra vulputate, felis tellus mollis orci,
                  sed rhoncus sapien nunc eget odio.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-type">
                <h5>News</h5>
              </div>
              <div class="feed-image">
                <img src="img/#"/>
              <div>
              <div class="feed-text">
                <h3>Laura Marling and Johnny Flynn are Teaming Up again - Will it be an Album or a Single?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam fermentum,
                  nulla luctus pharetra vulputate, felis tellus mollis orci,
                  sed rhoncus sapien nunc eget odio.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-type">
                <h5>Review</h5>
              </div>
              <div class="feed-image">
                <img src="img/#"/>
              <div>
              <div class="feed-text">
                <h3>Mumford and Sons New Album "Wilder Minds" - Oh Yes! or Oh No!?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam fermentum,
                  nulla luctus pharetra vulputate, felis tellus mollis orci,
                  sed rhoncus sapien nunc eget odio.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-type">
                <h5>Review</h5>
              </div>
              <div class="feed-image">
                <img src="img/#"/>
              <div>
              <div class="feed-text">
                <h3>Jose Gonzalez's New Album "Vestiges &amp; Claws" - Hit or Miss?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam fermentum,
                  nulla luctus pharetra vulputate, felis tellus mollis orci,
                  sed rhoncus sapien nunc eget odio.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-type">
                <h5>News</h5>
              </div>
              <div class="feed-image">
                <img src="img/#"/>
              <div>
              <div class="feed-text">
                <h3>The National Surprises Us with a New Single - Will a New Album Follow?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                  lacus accumsan et viverra justo commodo. Proin sodales
                  pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam fermentum,
                  nulla luctus pharetra vulputate, felis tellus mollis orci,
                  sed rhoncus sapien nunc eget odio.
                </p>
              </div>
            </div>
          </section>
        </div>
<!--Footer-->
        <footer>
          <img id="footer-logo" src="img/footer-logo.png" alt="Unplugged Logo"/>
        </footer>

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

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
