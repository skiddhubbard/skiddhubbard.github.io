---
layout: post
title:  "Doc to Dev: Unplugged Site - FAQ Page and Clean Up"
date:   2016-10-28
---
Last page to write for the Unplugged Site! This one was pretty easy. After I finished
with it, I went back through each page, compared it to the PSD, and made a few
tweaks if needed. I also went back and changed out the icon images with font awesome
and made the links, well, actually link :)

The FAQ Page:
![Unplugged Site FAQ Page](/assets/img/102816.png)

HTML:
{% highlight html %}
<!--Header-->
    <header>
      <div id="logo"><a href="../index.html">Unplugged</div>
      <nav>
        <ul>
          <li><a href="../concerts/index.html"><i class="fa fa-music" aria-hidden="true"></i>
            Concerts</a></li>
          <li><a href="../reviews/index.html"><i class="fa fa-headphones" aria-hidden="true"></i>
            Reviews</a></li>
          <li><a href="../about/index.html"><i class="fa fa-users" aria-hidden="true"></i>
            About Us</a>
            <ul id="sub-nav">
              <li><a class="active" href="#"><i class="fa fa-question-circle" aria-hidden="true"></i>
                FAQ</a></li>
              <li><a href="index.html">Who We Are &amp; Contact</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
<!--Main Content-->
  <div class="main" id="faq">
    <h1>Frequently Asked Questions</h1>
    <div class="feed-item">
      <h2>Can I write for your site?<h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
        odio.</p>
        <p>Email us at hello@unplugged.com</p>
    </div>
    <div class="feed-item">
      <h2>Do you accept concert photography from your readers?<h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
        odio.</p>
        <p>Email us at hello@unplugged.com</p>
    </div>
    <div class="feed-item">
      <h2>Do you accept concert photography from your readers?<h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
        odio.</p>
        <p>Email us at hello@unplugged.com</p>
    </div>
    <div class="feed-item">
      <h2>Do you accept concert photography from your readers?<h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
        odio.</p>
        <p>Email us at hello@unplugged.com</p>
    </div>
  </div>
<!--Footer-->
  <footer class="footer">
    <div id="footer-logo">Unplugged</div>
  </footer>
{% endhighlight %}

This CSS took me HOURS:
{% highlight css%}
/***FAQ Page***/

#faq p {
  font-size: 0.75em;
  font-weight: lighter;
}
{% endhighlight %}
