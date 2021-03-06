---
layout: post
title:  "Doc to Dev: Unplugged Site - CSS for Tablet"
date:   2016-09-28
---
Tablet version is in working order! Here's what it looks like:

![Home](/assets/img/092816-1.png)

![Reviews](/assets/img/092816-2.png)

![Detail](/assets/img/092816-3.png)

And the CSS:

{% highlight css %}
@media (min-width: 768px) {

  .main {
    margin-bottom: 100px;
    overflow: auto;
  }

/***Header***/

  #logo {
    width: 45%;
    float: left;
    margin: -15px 0px 10px 3%;
  }

  nav {
    height: 50px;
    padding-top: 10px;
    margin-top: 30px;
  }

  ul {
    padding-left: 40px;
    overflow: auto;
  }

  li {
    border: none;
  }

  li a {
    display: block;
    font-size: 16px;
    float: left;
    margin: -12px 2% 0px 2%;
  }

  .music-note {
    height: 16px;
    width: 17px;
  }

  .headphones {
    height: 16px;
    width: 16px;
  }

  .group-people {
    height: 16px;
    width: 16px;
  }

/***Main Section***/

  .hero-area {
    overflow: auto;
    margin: 10px auto;
  }

  .top-img {
    width: 62%;
    margin-right: 4%;
    float: left;
    clear: both;
  }

  .top-story {
    width: 33%;
    float: left;
  }

  .detail-page-image {
    width: 48%;
    margin-top: 3.5%;
    margin-right: 2%;
    float: left;
    clear: both;
  }

  .detail-page-description {
    width: 48%;
    margin: 0px 0px 0px 2%;
    float: left;
  }

  .review-detail p {
    clear: both;
  }

  .news-detail p {
    clear: both;
  }

/***Sidebar***/

  .sidebar {
    width: 35%;
    margin: 0px 2% 10px 0px;
    float: right;
  }

  .newsletter {
    padding-left: 7%;
  }

  .sidebar-upcoming {
    display: block;
    width: 98%;
    padding-bottom: 20px;
    padding-left: 7%;
    border-bottom: solid 1px #cfcacb;
    margin: auto;
    overflow: auto;
  }

  .sidebar-faq {
    display: block;
    width: 98%;
    padding-bottom: 20px;
    padding-left: 7%;
    border-bottom: solid 1px #cfcacb;
    margin: auto;
    overflow: auto;
  }

  .sidebar-write {
    display: block;
  }

  .sidebar-write h3 {
    width: 64%;
    margin-right: 2%;
    float: left;
  }

  .sidebar-write p {
    width: 64%;
    margin-right: 2%;
    float: left;
    clear: left;
  }

  .sidebar-write a {
    width: 33%;
    float: left;
  }

  .sidebar-detail-pages .newsletter {
    padding: 10px 0px 20px;
    border: none;
    overflow: auto;
  }

  .sidebar-detail-pages .newsletter h2 {
    width: 60%;
    margin: 10px 0px;
    float: left;
  }

  .sidebar-detail-pages input[type=text] {
    width: 60%;
    padding: 0px 2% 0px 2%;
    line-height: 2.5em;
    float: left;
    clear: left;
  }

  .sidebar-detail-pages input[class=submit] {
    width: 33%;
    margin: 0px;
    float: right;
  }

/***Feed***/

  .feed {
    width: 62%;
    margin: 10px 0px 10px 1%;
    border-right: solid 1px #cfcacb;
    border-top: solid 1px #cfcacb;
  }

  .feed-image {
    width: 30%;
    padding: 5px 0px 2% 0px;
  }

  .feed-text {
    width: 65%;
    padding: 0px 2% 0px 3%;
  }

  .feed-reviews-page .feed-text h4 {
    margin-top: 10px;
  }

  .feed-item:last-child {
    border-bottom: none;
  }

/***Footer***/

  .footer {
    border-top: solid 1px #cfcacb;
  }

  #footer-logo {
    width: 30%;
  }
}
{% endhighlight %}
