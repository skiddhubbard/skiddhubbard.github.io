---
layout: post
title:  "Doc to Dev: Rogue Pickings Responsive"
date:   2016-09-01
---
Way more fun today!! Remember back on [08.25.2016](/2016/08/25/rogue-pickings.html) when I coded a site from a Photoshop comp and while I was
proud of the work, I felt a little meh at the end because it wasn't responsive??

I finally got to make it happen!

Here's a couple screenshots - first the mobile version:
![Rogue Mobile](/assets/img/090116-mobile.png)

Now the tablet version:
![Rogue Tablet](/assets/img/090116-tablet.png)

And the new responsive CSS:
{% highlight css %}
html {
	font-size: 16px;
}

body {
	max-width: 1200px;
	margin: 0 auto;
	font-family: Montserrat, Helvetica, Arial, sans-serif;
	font-size: 1em;
}

h1,
h3,
h4 {
	color: black;
	text-transform: uppercase;
}

.top-section,
.bottom-section {
	width: 100%;
	margin: 0 auto;
	clear: both;
}

/***HEADER***/

header {
	width: 100%;
	height: 80px;
	border-bottom: 3px solid #77a466;
	margin: 0 auto;
	font-size: 1em;
}

header h1 {
	font-size: 1.875em;
	text-align: center;
	width: auto;
	padding: 15px 0;
}

header span {
	color: #77a466;
}

header nav {
	float: right;
	text-align: center;
	padding: 20px 0px;
}

header nav a {
	text-decoration: none;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.875em;
	line-height: 1.5;
	padding: 0 100px;
	color:#77a466;
}

/***TOP SECTION***/

.top-section {
	font-size: 1em;
}

.top-section h3 {
	font-size: 1.125em;
	text-align: center;
	padding: 15px;
}

.top-section p {
	padding: 0px 30px;
	line-height: 21px;
	font-size: 0.875em;
}

.main-title h3 {
	text-align: center;
	padding: 5px 30px;
	text-transform: uppercase;
	color: #77a466;
}

.main-image {
	width: 100%;
	height: auto;
	float: left;
	clear: left;
}

.main-image img {
	width: 100%;
	border-bottom: 3px solid #77a466;
	border-top: 3px solid #77a466;
}

.main-title {
	width: 100%;
	height: auto;
	float: left;
}

.main-title p {
	padding: 0px 30px;
	line-height: 25px;
	font-size: 1em;
}

/***BOTTOM SECTION***/

.bottom-section {
	font-size: 1em;
}

.bottom-section h4 {
	font-size: 0.75em;
}

.bottom-section p {
	padding: 0px 30px;
	line-height: 21px;
	font-size: 1em;
}

.section-one,
.section-two,
.section-three {
	width: 100%
	height: auto;
	float: left;
}

.section-one,
.section-two {
}

.section-one h4,
.section-two h4,
.section-three h4 {
	padding: 10px 30px;
}

.menu {
	list-style: none;
	padding: 0px;
}

.menu li {
	padding: 10px 30px;
	color:#77a466;
}

.reviews {
	color: #333;
	line-height: 21px;
	font-size: 1em;
}

.address {
	font-size: 1em;
	line-height: 24px;
}

/***FOOTER***/

footer {
	font-size: 16px;
}

footer h4 {
	font-size: 0.75em;
}

footer {
	width: 100%;
	height: 50px;
	border-top: 3px solid #eee;
	margin: 0 auto;
	clear: both;
	text-align: center;
}

footer span {
	font-family: "Wisdom Script", script;
	text-transform: lowercase;
	color: #77a466;
	font-size: 1.167em;
}

/***TABLET STYLES***/

@media all and (min-width: 768px) {
	header nav {
		width: 100%;
	}

	header nav a {
			padding: 0 10px;
	}

	.section-one,
	.section-two,
	.section-three {
		width: 33%;
	}
}

/***DESKTOP SYTLES***/

@media all and (min-width: 940px) {

	body {
		margin: auto 10px;
	}

	header {
		height: 110px;
	}

	header h1 {
		float: left;
	}

	header nav {
		width: auto;
		text-align: right;
		padding: 45px 0px;
	}

	header nav a {
			padding: 0 10px;
	}

	.main-image img {
		border-top: none;
	}

	.main-title h3 {
		text-align: left;
		padding: 5px 0px;
	}

	.main-title p {
		padding: 0px;
	}

	.section-one,
	.section-two,
	.section-three {
		width: 33%;
	}

	.section-one h4 {
		padding: 10px 0px;
	}

	.menu li {
		padding: 10px 0;
	}
}
{% endhighlight %}
Feelin' like a CSS boss!
