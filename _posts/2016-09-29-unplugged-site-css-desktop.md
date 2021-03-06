---
layout: post
title:  "Doc to Dev: Unplugged Site - CSS for Desktop"
date:   2016-09-29
---
Desktop done too!

![Main](/assets/img/092916-1.png)

![Review](/assets/img/092916-2.png)

![Detail](/assets/img/092916-3.png)

The desktop CSS:
{% highlight css %}
@media (min-width: 940px) {

/***Header***/

  #logo {
    margin-left: 3.5%;
  }

  ul {
    overflow: auto;
    padding-left: 145px;
  }

/***Main Section***/

  .hero-area {
    width: 60%;
    padding: 3% 3% 3% 1%;
    border-right: solid 1px #cfcacb;
    margin-bottom: 0px;
    float: left;
  }

  .top-img {
    width: 100%;
    margin: 0px;
  }

  .top-story {
    width: 100%;
    float: none;
    overflow: auto;
  }

  .detail-page-image {
    width: 100%;
    margin: 0px 0px 20px 0px;
  }

  .detail-page-description {
    width: 100%;
    margin: 1% 0px;
    float: none;
  }

  .review-detail {
    width: 60%;
    padding: 2% 2% 2% 1.5%;
    border-right: solid 1px #cfcacb;
    float: left;
  }

  .news-detail {
    width: 60%;
    padding: 2% 2% 2% 1.5%;
    border-right: solid 1px #cfcacb;
    float: left;
  }

  .review-detail h2 {
    font-size: 2em;
    line-height: 1em;
  }

  .news-detail h2 {
    font-size: 2em;
    line-height: 1em;
  }

/***Sidebar***/

  .sidebar {
    width: 31%;
    margin-bottom: 0px;
    float: left;
  }

  .sidebar-reviews-page {
    width: 31%;
    float: left;
  }

  .newsletter {
    border-top: none;
  }

  .newsletter-reviews {
    display: block;
    width: 100%;
    padding-left: 7%;
    border-bottom: solid 1px #cfcacb;
  }

  .sidebar-upcoming-reviews {
    display: block;
    width: 100%;
    padding-left: 7%;
    border-top: none;
    margin-bottom: 20px;
  }

  .sidebar-faq {
    border: none;
  }

  .sidebar-write {
    display: none;
  }

  .sidebar-detail-pages {
    width: 33%;
    padding: 0px 0px 0px 2%;
    border-bottom: solid 1px #cfcacb;
    margin-top: 2%;
    margin-left: 0px;
    float: left;
  }

  .sidebar-detail-pages .newsletter {
    width: 100%;
    padding: 0px;
    border-bottom: none;
  }

  .sidebar-detail-pages .newsletter h2 {
    width: 100%;
    margin-top: 1%;
  }

  .sidebar-detail-pages input[type=text] {
    width: 100%;
    line-height: 2.5em;
    float: none;
    clear: none;
  }

  .sidebar-detail-pages input[class=submit] {
    width: 100%;
    float: none;
  }

/***Feed***/

  .feed {
    width: 97%;
    border-right: none;
    border-top: solid 1px #cfcacb;
    margin: 10px 2% 10px 1%;
    clear: both;
  }

  .feed-reviews-page {
    width: 97%;
    margin: 10px 2% 10px 1%;
    border-top: solid 1px #cfcacb;
    clear: both;
  }

  .feed-image {
    width: 20%;
  }

  .feed-text {
    width: 70%;
    padding-left: 4%;
  }

  .feed-text p{
    display: inline;
  }

/***Footer***/

  #footer-logo {
    width: 20%;
  }
}
{% endhighlight %}
