---
layout: post
title:  "Doc to Dev: Mobile First and Media Queries"
date:   2016-08-30
---
Next up: mobile first and media queries

So I'm pretty sure we're getting into some really important stuff this lesson. I know I've heard the term "mobile first" used
at developer meetups so I'm trying hard to make sure I'm pounding this stuff into my brain.

But now I'm thinking about the design I have started for my site in the Visual Design course (which was not designed mobile
first) and I find myself asking questions like: What am I going to do with the photos I had planned? Leave them out? Scale
them down? How do I want the menu to look on mobile? Icon vs. a row of text? What about social icons? Keep them only in the
contact section? Have them stay at the top somehow?

Ahhhhh! Head. Spinning.

More to come on that topic. While you wait, here's a media query example from today:
{% highlight css %}
/*---------- Tablet ----------*/
@media (min-width: 768px) {
  header{
    background-color: #7b0094;
    width: 50%;
  }

  #column-1{
    background-color: #4a0059;
  }
  #column-2{
    background-color: #5b006c;
    clear: both;
  }
  #column-3{
    background-color: #6b0080;
    clear: both;
  }
  footer{
    background-color: #7b0094;
    width: 50%;
  }
  .col-3 {
    width: 50%;
  }
/*---------- Desktop ----------*/
@media (min-width: 1200px) {
  header{
    background-color: #262c84;
    width: 33%;
  }

  #column-1{
    background-color: #191d56;
  }
  #column-2{
    background-color: #1d2266;
    clear: both;
  }
  #column-3{
    background-color: #222775;
    clear: both;
  }
  footer{
    background-color: #262c84;
    with: 33%;
  }
  .col-3 {
    width: 33%;
  }
{% endhighlight %}
