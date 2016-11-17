---
layout: post
title:  "Doc to Dev: The DOM and a LOL Cat Clock"
date:   2016-11-17
---
![LOL Cat Clock 1](/assets/img/111716.png)

Yep, that's what I made today... a LOL Cat Clock. While it may be a little silly,
I was totally excited to write some JavaScript that actually did something on a
page! Let's hear it for the DOM!!

So, to make this clock, I started with the time JavaScript I had written [a few days ago](/2016/11/14/javascript-keywords-operators-objects.html). I added the HTML and CSS provided by the lesson to my JS Bin and then got to work. I learned how to getElementById(), assign it to a variable and make my message appear by appending innerText. After the messages were all appearing correctly,
I similarly added images to the page. Here's the code:

{% highlight JS%}
var time = new Date().getHours();
var wakeUpTime = 6;
var lunchTime = 13;
var noon = 12;
var napTime = 15;
var evening = 18;
var partyTime = 21;

var timeEventJS = document.getElementById("timeEvent");
var message;
var catImage = document.getElementById("lolCatImg");
var image;

if (time == wakeUpTime)
{
  message = "Wake Up!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
}

else if (time == lunchTime)
{
  message = "Lunch Time!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
}

else if (time == napTime)
{
  message = "Nap Time!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
}

else if (time == partyTime)
{
  message = "Party Time!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
}

else if (time < noon)
{
  message = "Good Morning!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
}

else if (time >= evening)
{
  message = "Good Evening!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
}

else
{
  message = "Good Afternoon!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
}

timeEventJS.innerText = message;
lolCatImg.src = image;
{% endhighlight %}

And that, my friends, is blog post 75! Can't believe how much I've learned. But for today, I'm spent, and feeling a little like this:

![LOL Cat Clock 2](/assets/img/111716-2.png)
