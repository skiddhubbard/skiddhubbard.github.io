---
layout: post
title:  "Doc to Dev: Unplugged Site - Signup Button"
date:   2016-09-19
---
Today I worked on the Newsletter Signup section. Using the PSD mock-up provided, I created this using CSS:

![Newsletter Signup](/assets/img/091916.png)

{% highlight css %}
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
{% endhighlight %}
