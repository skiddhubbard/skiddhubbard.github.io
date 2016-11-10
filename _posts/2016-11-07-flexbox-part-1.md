---
layout: post
title:  "Doc to Dev: Flexbox Fun Part 1"
date:   2016-11-07
---
Great to move ahead and start learning something new today. And totally wishing
I had known how to use Flexbox before I developed my own site! In today's lesson
I centered this text box over a background image.

Before:

![Flexbox Before Image](/assets/img/110716-1.png)

After:

![Flexbox After Image](/assets/img/110716-2.png)

Then I got to have a little fun making my own! Loved this image and quote.

![Flexbox Original](/assets/img/110716-3.png)

Here's the CSS for it:
{% highlight css %}
html {
    background: url(../img/family-pier.jpeg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
}

body {
    height: 100%;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100%;
    width: 100%;
}

#content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5em;
    line-height: 1.25em;
    border-radius: 10px;
    padding: 0px 30px;
    width: 250px;
    height: 300px;
}

@media (min-width: 768px) {
  #content {
    width: 300px;
  }
}
{% endhighlight %}
