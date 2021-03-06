---
layout: post
title:  "Doc to Dev: Unplugged Site Homepage - CSS for Mobile Part 2"
date:   2016-09-23
---
Coded my HEART OUT today finally finishing up the styles for the mobile homepage. Here's what it looks like:

![Unplugged Mobile Home 1](/assets/img/092316-1.png)
![Unplugged Mobile Home 2](/assets/img/092316-2.png)

Still needs the images but looking promising! Here's ALL the CSS so far:

{% highlight css%}
/***Universal Styles***/

body {
background-color: #eeeeee;
font-family: 'Source Sans Pro';
}

/***Header***/

header {
  width: 100%;
}

#logo {
  width: 90%;
  padding: 10px 0px 8px;
  margin: 0px auto;
  background-color: black;
  opacity: 0.99;
  font-family: 'Sansita One';
  font-size: 48px;
  color: white;
  text-align: center;
}

nav {
  width: 100%;
  background-color: #dddddd;
}

ul {
  list-style: none;
  padding: 16px 0px 0px;
  margin-top: -8px;
}

li {
  text-align: center;
  line-height: 3em;
  border-bottom: solid 1px #cfcacb;
}

li a {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-size: 21px;
  font-weight: 700;
}

#sub-nav {
  display: none;
}

/***Main Section***/

.main {
  width: 96%;
  padding: 0 2%;
  margin: auto;
}

.newsletter {
  border-top: solid 1px #cfcacb;
  border-bottom: solid 1px #cfcacb;
}

.newsletter h2 {
  margin-left: 8px;
}

.newsletter-signup {
  width: 100%;
  margin: auto auto 20px;
}

input[type=text] {
  width: 96%;
  border: #e6e6e6 solid 1px;
  margin: 5px;
  line-height: 2em;
}

input[class=btn] {
  width: 96%;
  margin: 5px;
  background-color: #ff1256;
  box-shadow: 2px 3px #d19aaa;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;
  text-transform: uppercase;
  line-height: 2em;
}

input[type=submit] {
  border: none;
  -webkit-appearance: none;
}

.sidebar-upcoming {
  margin-left: 12px;
}

.sidebar-faq {
  margin-left: 12px;
}

.feed-item {
  overflow: auto;
  border-bottom: solid 1px #cfcacb;
}

.feed-image {
  width: 44%;
  padding: 0 2%;
  float: left;
}

.feed-text {
  width: 44%;
  padding: 0 2%;
  float: left;
  margin-bottom: 10px;
}

.feed-type {
  clear: both;
}

.feed-type h5 {
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.feed-text h4 {
  margin-top: 0px;
}

.sidebar-upcoming {
  display: none;
}

.sidebar-faq {
  display: none;
}

.feed-text p{
  display: none;
}

.byline {
  font-size: 1.15em;
}

.byline span {
  font-weight: bold;
}

/***Footer***/

footer {
  width: 100%;
  clear: both;
}

#footer-logo {
  width: 50%;
  padding: 15px 0px;
  margin: 20px auto 0px;
  background-color: black;
  font-family: 'Sansita One';
  font-size: 30px;
  color: white;
  text-align: center;
}

@media (min-width: 768px) {
  .sidebar-upcoming {
    display: inline;
  }

  .sidebar-faq {
    display: inline;
  }
}

@media (min-width: 940px) {
  .feed-text p{
    display: inline;
  }
}
{% endhighlight %}
