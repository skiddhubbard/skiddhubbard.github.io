---
layout: post
title:  "Doc to Dev: Rogue Pickings Site"
date:   2016-08-25
---
Back to code after an epic design fail yesterday. Whomp, Whomp. I was given a Photoshop comp and challenged to write the
HTML and CSS. Here is a screenshot of the result. You'll have to take my word that it is On. Point.

![Photoshop Comp 082516](/assets/img/082516.png)

And the code:

{% highlight html %}
<!DOCTYPE html>
  <html>
    <head>
      <title>Rogue Pickings</title>
      <link href="style.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">
    </head>
    <body>
      <header>
        <div class="full width">
          <div class="half-width">
            <h1><span>Rogue</span> Pickings</h1>
          </div>
          <div class="half-width">
            <nav>
              <ul>
                <li>About</li>
                <li>Menu</li>
                <li>Locations</li>
                <li>Gallery</li>
                <li>Reviews</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <div class="full-width">
            <img src="rogue-pickings-image.png" alt="Green Beans Image" id="image"/>
            <h2>Welcome to our little corner of the internet!</h3>
            <p>Welcome to Rogue Pickings, the roaming truck bringing you the freshest
            ingredients and ideas in food. Our team works hard so you can be sure
            our ingredients are always fresh and picked carefully. Our menu changes
            every day and is made with you in mind. We can't wait to come to you!
            Check out our locations to see where you can find us.</p>
          </div>
        </section>
        <div class="full-width">
          <section id="menu">
            <div class="third-width">
              <h4>Today's Specials</h4>
              <ul>
                <li>Flaming Hummus &amp; Falafel Salad</li>
                <li>Sizzling Bean Burrito</li>
                <li>Green Gloves Tamales</li>
              </ul>
            </div>
          </section>
          <section id="reviews">
            <div class="third-width">
              <h4>Our Awesome Reviews</h4>
              <p>"I got so excited about the yumminess of the falafel salad that I am
                typing this review as I inhale my lunch. Yes it is that good....
                Service was super friendly and quick. Can't wait to see you Rogue
                Pickings again tomorrow."</p>
            </div>
          </section>
          <section id="contact">
            <div class="third-width">
              <h4>Contact Us</h4>
                <p>1001 Potrero Avenue<br>
                  San Franciso, CA 94110<br>
                  (415)206-9000</p>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div class="full-width">
          <h3>Powered by lots of <span>fresh</span> ingredients</h3>
        </div>
      </footer>
    </body>
  </html>
{% endhighlight %}
{% highlight css %}
/***BASE STYLES***/

body {
  font-family: 'Montserrat', sans-serif;
  max-width: 1200px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

/***GRID***/

.full-width {
  width: 1200px;
  margin: 0 auto;
}

.half-width {
  width: 50%;
  float: left;
}

.third-width {
  width: 33%;
  float: left;
}

/***HEADER***/

h1 {
  font-size: 30px bold;
  text-transform: uppercase;
}

h1 span {
  color: #77a466;
}

nav ul li {
  color: #77a466;
  font-size: 14px bold;
  text-transform: uppercase;
  display: inline-block;
  list-style-type: none;
  margin: 0px;
  padding: 8px; left;
}

nav ul {
  padding: 0px;
}

nav {
  float: right;
}

/***MAIN***/

h2 {
  color: #77a466;
  font-size: 18px bold;
  line-height: 1.5;
  text-transform: uppercase;
}

h4 {
  font-size: 12px bold;
  line-height: 1.7;
  text-transform: uppercase;
}

main ul {
  color: #77a466;
  line-height: 2;
  list-style-type: none;
  display: inline;
  margin: 0px;
  padding: 0px;
}

#image {
  border-top: solid 5px #77a466;
  border-bottom: solid 5px #77a466
}

#menu .third-width {
  padding-left: 0px;
}

#reviews .third-width {
  width: 28%;
  padding-right: 60px;
}

/***FOOTER***/

h3 {
  font-size: 16px bold;
  text-transform: uppercase;
  text-align: center;
  clear: both;
  padding-top: 30px;
}

h3 span {
  font-family: 'Satisfy', cursive;
  color: #77a466;
  text-transform: lowercase;
  font-size: 20px;
}
{% endhighlight %}
Only problem is that it is not responsive. And that's driving me crazy. Moving on to responsive design next week!
