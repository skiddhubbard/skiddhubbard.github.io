---
layout: post
title:  "Doc to Dev: Unplugged Site - About Page"
date:   2016-10-26
---
Two more pages to go!! The about page gave me the opportunity to review iframes,
feels like forever ago that I first learned about them. I also learned how to make
responsive square images using the background image and padding-bottom trick.
I actually read about that when I was making my personal site but couldn't quite
figure it out so it's good to know it does work and I can do it!

Here's the page:
![Unplugged Site About Page](/assets/img/101616.png)

The HTML:
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
        <li><a class="active" href="../about/index.html"><i class="fa fa-users" aria-hidden="true"></i>
          About Us</a>
          <ul id="sub-nav">
            <li><a href="faq.html"><i class="fa fa-question-circle" aria-hidden="true"></i>
              FAQ</a></li>
            <li><a class="active" href="#">Who We Are &amp; Contact</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
<!--Main Section-->
  <div class="main">
    <section class="contact">
      <div class="contact-text">
        <h1>Contact Us</h1>
        <p><span>Email: </span>hello@unplugged.com</p>
        <p><span>Telephone: </span>555.555.5555</p>
        <p class="address"><span>Address:</span></p>
        <p class="address">12 Noname Street<br>Brooklyn, NY 11200</p>
      </div>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.0308819382885!2d-73.94617338443551!3d40.65124964926647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b6765431fb5%3A0x414c80d4281c999e!2s3523+Church+Ave%2C+Brooklyn%2C+NY+11203!5e0!3m2!1sen!2sus!4v1477531472086" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </section>
    <section class="mission">
      <h1>Mission Statement</h1>
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
        eget odio.
    </section>
    <section class="team">
      <h1>Meet the Team</h1>
      <div class="team-img" id="team-img-1"></div>
      <div class="team-text">
        <h2 class="team-name">Jack Smith</h2>
        <p class="team-title">Editor-in-Chief</p>
        <p class="team-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc
        eget odio.</p>
      </div>
      <div class="team-img" id="team-img-2"></div>
      <div class="team-text">
        <h2 class="team-name">Lana Walters</h2>
        <p class="team-title">Webmaster</p>
        <p class="team-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc
        eget odio.</p>
      </div>
      <div class="team-img" id="team-img-3"></div>
      <div class="team-text">
        <h2 class="team-name">Willow White</h2>
        <p class="team-title">Photographer</p>
        <p class="team-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
        accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc
        eget odio.</p>
      </div>
    </section>
  </div>
<!--Footer-->
  <footer class="footer">
    <div id="footer-logo">Unplugged</div>
  </footer>
{% endhighlight %}

The CSS:
{% highlight css%}
/***About Page***/

#sub-nav {
  padding-top: 0px;
  margin-top: 0px;
  border-top: solid 1px #cfcacb;
}

#sub-nav li:last-child {
  border-bottom: none;
}

.contact span {
  font-weight: bolder;
  margin-right: 5px;
}

.address {
  float: left;
  margin-top: 0px;
}

.map-container {
  position: relative;
  border: solid 1px #cfcacb;
  height: 0;
  overflow: hidden;
  clear: left;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mission {
  clear: both;
}

.team {
  overflow: auto;
  padding-bottom: 50px;
  border-bottom: solid 1px #cfcacb;
}

.team-img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 40%;
  padding-bottom: 40%;
  float: left;
  clear: both;
  margin: 0px 20px 20px 0px;
  border: 1px solid #ccc;
}

#team-img-1 {
  background-image: url(../img/jack.jpg);
}

#team-img-2 {
  background-image: url(../img/lana.jpg);
}

#team-img-3 {
  background-image: url(../img/willow.jpg);
}

.team-text {
  float: left;
  clear: right;
}

.team-text h2 {
  margin-top: 0px;
}

.team-description {
  display: none;
}

@media (min-width: 768px) {
  #sub-nav {
    width: 280px;
    padding: 15px 0px 15px 38px;
    border: none;
  }

  #sub-nav li a {
    padding-left: 20px;
  }

  .contact {
    border-top: solid 1px #cfcacb;
    margin-top: 20px;
  }

  .contact-text {
    width: 25%;
    float: left;
  }

  .map-container {
    position: relative;
    padding-bottom: 45%;
    margin: 15px;
    height: 0;
    width: 70%;
    overflow: hidden;
    float: left;
    clear: none;
  }

  .mission {
    padding: 5px 0px;
    border-top: solid 1px #cfcacb;
    border-bottom: solid 1px #cfcacb;
  }

  .team {
    padding-bottom: 0px;
    border-bottom: none;
  }
}

@media (min-width: 940px) {
  #sub-nav {
    padding-right: 43px;
  }

  .team-text {
    width: 57%;
  }

  .team-description {
    display: inline;
  }
}
{% endhighlight %}
