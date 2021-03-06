---
layout: post
title:  "Doc to Dev: Holstee Manifesto"
date:   2016-08-18
---
Skillcrush CSS course bonus project: recreate the "Holstee Manifesto" image using HTML & CSS.
Wow, this was tough. Quite a few times during this project, I wanted to slam shut my laptop lid and hang it up.
Web development is seriously HARD. But each time I wanted to just quit this seemingly futile project, I took a break, came
back with a fresh mind struggled through to the finish. So, three attempts and three days later, here's the finished product:

![Holstee 081816](/assets/img/081816.png)

The original on the left and my recreation on the right. While it's not EXACT, I'm pretty proud to have come darn close.

My HTML:
{% highlight html%}
<!DOCTYPE html>
<html>
  <head>
    <title>Holstee Manifesto</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Domine" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
  </head>
  <body>
    <div class="border">
      <div class="div1">
        <p class="line1">This is your</p>
        <p class="line2">Do what you love,</p>
        <p class="line3">and do it often.</p>
      </div>
        <div class="div2">
        <p class="line4">Life.</p>
      </div>
      <div class="div3">
        <p class="line5">If you don't like something, change it.</p>
        <p class="line6">If you don't like your job, quit.</p>
        <p class="line7">If you don't have enough time, stop watching TV.</p>
        <p class="line8">If you are looking for the love of your life, stop;</p>
        <p class="line9">They will be waiting for you when you</p>
        <p class="line10">start doing things you love.</p>
      </div>
      <div class="div4">
        <p class="line11">Stop over analyzing,</p>
        <p class="line12">Life is simple.</p>
      </div>
      <div class="div5">
        <p class="line13">All emotions are beautiful.</p>
        <p class="line14">When you eat, appreciate</p>
        <p class="line15">Every last bite.</p>
      </div>
      <div class="div6">
        <p>Open your mind, arms, and heart to new things
          <br>and people, we are united in our differences.
          <br>Ask the next person you see what their passion is,
          <br>and share your inspiring dream with them.
        </p>
      </div>
      <div class="div7">
        <p class="line20">Travel often;</p>
      </div>
      <div class="div8">
        <p class="line21">Getting lost will</p>
        <p class="line22">help you find yourself.</p>
      </div>
      <div class="div9">
        <p class="line23">Some opportunities only come once, seize them.</p>
        <p class="line24">Life is about the people you meet, and</p>
        <p class="line25">the things you create with them</p>
        <p class="line26">so go out and start creating.</p>
      </div>
      <div class="div10">
        <p class="line27">Life is</p>
        <p class="line27-5">short.</p>
      </div>
      <div class="div11">
        <p class="line28">Live your dream</p>
        <p class="line29">and share</p>
        <p class="line30">your passion.</p>
      </div>
      <div id="title">"The Holstee Manifesto"</div>
      <div id="authors">Written by Dave, Mike &amp; Fabian</div>
      <div id="designer">Design by Rachael</div>
      <div id="website">www.holstee.com/manifesto</div>
    </div>
  </body>
</html>
{% endhighlight %}
And the CSS:
{% highlight css %}
p {
  font-family: 'Domine', serif;
  margin: 0px;
  text-align: justify;
  text-transform: uppercase;
  width: 580px;
}

.border {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  margin: 50px;
  overflow: auto;
  padding: 20px 40px 20px 40px;
  width: 580px;
}

.div1 {
  float:left;
  text-align-last: justify;
  width: 290px;
}

.div2 {
  float: right;
  text-align-last: justify;
  width: 290px;
}

.div3 {
  clear: both;
  text-align-last: justify;
  width: 580px;
}

.div4 {
  float: left;
  text-align-last: justify;
  width: 290px;
}

.div5 {
  float: right;
  margin-left: 10px;
  text-align-last: justify;
  width: 280px;
}

.div6 {
  clear: both;
  font-size: 19px;
  text-align-last: justify;
  width: 580px;
}

.div7 {
  float: left;
  font-size: 34px;
  text-align-last: justify;
  width: 290px;
}

.div8 {
  float: right;
  margin-left: 10px;
  text-align-last: justify;
  width: 280px;
}

.div9 {
  clear: both;
  text-align-last: justify;
  width: 580px;
}

.div10 {
  float: left;
  text-align-last: justify;
  width: 290px;
}

.div11 {
  float: right;
  margin-left: 10px;
  text-align-last: justify;
  width: 280px;
}

.line1 {
  font-size: 40px;
  max-width: 290px;
}

.line2 {
  font-size: 26px;
  max-width: 290px;
}

.line3 {
  font-size: 30px;
  max-width: 290px;
}

.line4 {
  font-size: 116px;
  line-height: 0.92;
  max-width: 290px;
}

.line5 {
  font-size: 25px;
}

.line6 {
  font-size: 31px;
}

.line7 {
  font-size: 18px;
}

.line8 {
  font-size: 18px;
}

.line9 {
  font-size: 22px;
}

.line10 {
  font-size: 31px;
}

.line11 {
  font-size: 22px;
  max-width: 290px;
}

.line12 {
  font-size: 34px;
  max-width: 290px;
}

.line13 {
  font-size: 16px;
  max-width: 280px;
}

.line14 {
  font-size: 16px;
  max-width: 280px;
}

.line15 {
  font-size: 22px;
  max-width: 280px;
}

.line20 {
  max-width: 290px;
}

.line21 {
  font-size: 18px;
  max-width: 280px;
}

.line22 {
  font-size: 16px;
  max-width: 280px;
}

.line23 {
  font-size: 20px;
}

.line24 {
  font-size: 25px;
}

.line25 {
  font-size: 28px;
}

.line26 {
  font-size: 32px;
}

.line27 {
  font-size: 72px;
  line-height: 0.82;
  max-width: 290px;
}

.line27-5 {
  font-size: 78px;
  line-height: 0.82;
  max-width: 290px;
}

.line28 {
  font-size: 29px;
  max-width: 280px;
}

.line29 {
  font-size: 46px;
  max-width: 280px;
}

.line30 {
  font-size: 36px;
  max-width: 280px
}

#title {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 12px;
  margin-top: 4px;
  text-align: left;
  text-transform: uppercase;
  width: 145px;
  float: left;
}

#authors {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  width: 145px;
  float: left;
  clear: right;
}

#designer {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  width: 145px;
  float: left;
  clear: right;
}

#website {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 12px;
  text-align: right;
  text-transform: uppercase;
  width: 145px;
  float: left;
  clear: right;
}
{% endhighlight %}
