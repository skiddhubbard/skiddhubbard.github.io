---
layout: post
title:  "Doc to Dev: Unplugged Site - Concerts Page"
date:   2016-10-24
---
I'm back! And you're actually reading this on the real life internet right now!
Seems amazing to me - I've been doing so much work on this site locally and finally
have it up and running! I have to give a huge thanks to my husband for the help making
it happen. So, the past week has been a lot of the behind the scenes work and now
I'm back to Skillcrush and wrapping up the Unplugged Site this week!

Here's a peek at the concerts page:
![Unplugged Concerts Page](/assets/img/102416.png)

The HTML:
{% highlight html %}
<!--Header-->
  <header>
    <div id="logo"><a href="../index.html">Unplugged</div>
    <nav>
      <ul>
        <li><a class="active" href="../concerts/index.html"><i class="fa fa-music" aria-hidden="true"></i>
          Concerts</a></li>
        <li><a href="../reviews/index.html"><i class="fa fa-headphones" aria-hidden="true"></i>
          Reviews</a></li>
        <li><a href="../about/index.html"><i class="fa fa-users" aria-hidden="true"></i>
          About Us</a></li>
      </ul>
    </nav>
  </header>
<!--Main Section-->
  <div class="main">
    <section class="concerts">
      <h1>Upcoming Concerts</h1>
      <div class="concert-col-1">
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Laura Marling</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Wilco</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>The National</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Arcade Fire</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Hot Chip</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
      </div>
      <div class="concert-col-2">
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Beirut</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Belle &amp; Sebastian</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>Fanfarlo</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>The Head &amp; The Heart</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
        <div class="feed-concert">
          <div class="concert-date">
            <h1>June<br>15</h1>
          </div>
          <div class="concert-details">
            <p><span>The Black Keys</span><br>
            Bowery Ballroom<br>June 15</p>
            <a href="#" class="btn">Buy Tickets</a>
          </div>
        </div>
      </div>
    </section>
    <section class="sidebar-concert-page">
      <div class="newsletter">
        <h1>Newsletter Signup</h1>
        <form class="newsletter-signup">
          <input type="text"/>
          <input type="submit" class="submit" value="Sign Up"/>
        </form>
      </div>
    </section>
  </div>
<!--Footer-->
  <footer class="footer">
    <div id="footer-logo">Unplugged</div>
  </footer>
{% endhighlight %}

And the CSS:
{% highlight css%}
/***Concerts Page***/

.feed-concert {
  overflow: auto;
  padding-bottom: 15px;
  border-bottom: solid 1px #cfcacb;
}

.concert-date {
  text-transform: uppercase;
  text-align: center;
  line-height: 1.3em;
  width: 70px;
  height: 70px;
  margin: 20px 20px 0px 0px;
  border: solid 2px #cfcacb;
  float: left;
  clear: both;
}

.concert-details {
  width: 70%;
  float: left;
}

.concert-details span {
  font-weight: bold;
}

.concert-details .btn {
  width: 80%;
  background-color: #b21e49;
  box-shadow: 2px 3px #bababa;
}

@media (min-width: 768px) {

  .concert-col-1 {
    width: 50%;
    float: left;
  }

  .concert-col-2 {
    width: 50%;
    float: left;
  }

  .concert-col-1 .feed-concert:last-child {
    border-bottom: none;
  }

  .concert-col-2 .feed-concert:last-child {
    border-bottom: none;
  }

}

@media (min-width: 940px) {

  .concerts {
    overflow: auto;
    width: 71%;
    border-right: solid 1px #cfcacb;
    float: left;
  }

  .concert-col-1 {
    width: 50%;
  }

  .concert-col-2 {
    width: 50%;
  }

  .sidebar-concert-page {
    display: block;
    width: 27%;
    float: left;
  }

}
{% endhighlight %}
