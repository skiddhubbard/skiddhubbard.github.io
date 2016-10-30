---
layout: post
title:  "Doc to Dev: Classes and IDs"
date:   2016-08-09
---
So I know that yesterday I said I was going to work on my Visual Design course today but...

I coded instead. I just can't help it! For me, coding >> design. I'm not sure if the creative side of my brain is just
atrophied from years of inactivity, or maybe my brain just isn't wired that way, but the creative part is much more difficult
for me. It's definitely something I need a fresh mind to work on (AKA not after a day of work like now) so hopefully I'll be
able to dive in on weekend mornings while the kids are sucked into TV land.

Today continued with more CSS - classes and IDs. Seems like it is going to be pretty important stuff to know!

Here's what I made:

![CSS 080916](/assets/img/080916.png)

And the code:

{% highlight css %}
h1, p {
  font-family: sans-serif;
}

.cool-quote {
  font-weight: bold;
  color: DarkBlue;
}

#favorite-quote {
  background: pink;
}
{% endhighlight %}
{% highlight html %}
<h1>Some Super Awesome Feminist Quotes</h1>
<p class="cool-quote">
"I myself have never been able to find out precisely what feminism is: I only know that people call me
a feminist whenever I express sentiments that differentiate me from a doormat." - Rebecca West
</p>
<p>
"We cannot all succeed when half of us are held back." - Malala Yousafzai
</p>
<p>
"I am not free while any woman is unfree, even when her shackles are very different from my own."
- Audre Lorde
</p>
<p class="cool-quote" id="favorite-quote">
"Here's to strong women. May we know them. May we be them. May we raise them." - Unknown
</p>
<p>
"I am a woman with thoughts and questions and sh*t to say. I say if I'm beautiful. I say if I'm strong.
You will not determine my story. I will." - Amy Schumer
</p>
{% endhighlight %}
