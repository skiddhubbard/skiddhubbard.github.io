---
layout: post
title:  "Doc to Dev: Unplugged Site Reviews Page - HTML"
date:   2016-09-12
---
Next page up is the reviews landing page:

![Reviews Landing](/assets/img/091216.png)

The HTML for this page was pretty similar:

{% highlight html%}
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
            <img src="img/wilco.png" alt="Beirut">
          </div>
          <div class="top-story">
            <h2>Beirut's New Album - Their Best Album Yet</h2>
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
        </section>
        <section>
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
              <h5>Review</h5>
            </div>
            <div class="feed-image">
              <img src="img/#"/>
            <div>
            <div class="feed-text">
              <h3>Laura Marling Releases an Electric New Album - Is the Acoustic Gone?</h3>
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
              <h3>The National's New Single - What Does it Say About their Next Album's Sound?</h3>
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
              <h3>alt-J's New Album - Fresh Sound &amp; Possibly Your New Summer Soundtrack</h3>
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
              <h3>The Black Keys - New Album Debut's a Rock &amp; Country Twist</h3>
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
        <script>window.jQuery || document.write('<script src="../js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
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
