---
layout: post
title:  "Doc to Dev: Personal Site - HTML"
date:   2016-10-10
---
Seriously time to get moving on making my personal site happen. Started with the HTML today.
Pretty basic and will probably need some tweaks moving forward, but good to have some text on a page!

{% highlight html %}
<!--Header-->
  <header id="header">
    <img src="img/script-logo-3.png" class="logo" alt="sarah-kidd-hubbard"/>
  </header>
<!--Main Content-->
  <div class="main">
    <div class="top">
      <div class="about">
        <a href="#about-text"><img src="img/headshot-square.jpg" class="about-img" alt="headshot"/>
        <h1>about</h1></a>
      </div>
      <div class="blog">
        <a href="#blog-text"><img src="img/desk-square.jpg" class="blog-img" alt="computer"/>
        <h1>blog</h1></a>
      </div>
    </div>
    <div class="bottom">
      <a href="#contact-text">
      <img src="img/contact-square.jpg" class="contact-square-img" alt="phone"/>
      <h1>contact</h1>
      </a>
    </div>
    <div class="written-content">
      <section id="about">
        <h2>About</h2>
        <div class="col-1">
          <p>Hi, I'm Sarah. This is some stuff about me.</p>
        </div>
        <div class="col-2">
          <p>And some more info too!</p>
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <h3>sarahjkidd@gmail.com</h3>
        <div class="social">
          <ul>
            <li><a href="https://www.linkedin.com/in/sarah-kidd-hubbard-506a0789?trk=hp-identity-name" target="blank"></a></li>
            <li><a href="https://github.com/skiddhubbard/skiddhubbard.github.io" target="blank"></a></li>
            <li><a href="https://twitter.com/skiddhubbard" target="blank"></a></li>
            <li><a href="https://www.instagram.com/skiddhubbard/" target="blank"></a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
{% endhighlight %}
