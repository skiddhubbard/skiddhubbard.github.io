---
layout: post
title:  "Doc to Dev: Unplugged Site - More Buttons"
date:   2016-09-25
---
![Button Before](/assets/img/092516-1.png)

OK, that little "FIND OUT MORE" button up there. Whew (imagine exasperated look).

Why, why, why will you not take on the specified width I have given you, little box?

Well, because the person writing the code for you is an idiot and didn't display you as a block element. HOURS later, she
realized the problem. Oy. Live and learn.

See WORKING! button below:

![Button After](/assets/img/092516-2.png)

Here's the CSS for the button:
{% highlight css %}
.btn {
  display: block;
  width: 100%;
  margin: 0px 0px 0px -2px;
  background-color: #ff1256;
  box-shadow: 2px 3px #d19aaa;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 2.3em;
}
{% endhighlight %}
