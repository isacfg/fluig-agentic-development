# Overview

**Fonte:** [https://style.fluig.com/](https://style.fluig.com/)
**Seção:** overview
**Subseções detectadas:** 2

## Navegação interna

- [Overview](#overview)
- [Plugins Style Guide](#plugins-fluig)

---

# Overview

Welcome to the Style Guide. Here you'll find an extensive material regarding construction and maintenance of visual and business components.

## Getting started

Style Guide is developed to be the main frontend framework for developers.

### Basic HTML usage example

	<div class="fluig-style-guide">
		<!--Some code here-->
	</div>

#### Style guide `div`

For legacy reasons, any application or widget developed using the Style Guide, must be contained in a `div` with the class **"fluig-style-guide"**.

The Style Guide will be applied only in elements inside this **"fluig-style-guide"** `div`.

### Creating forms with Developer Studio using the Style Guide

If you want to create forms using the style guide, you'll need to import the minified CSS and JavaScript files. To import them, follow the example below:

	<head>
	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-flat.min.css">
	<script src="/portal/resources/js/jquery/jquery.js"></script>
	<script src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script src="/portal/resources/js/mustache/mustache-min.js"></script>
	<script src="/style-guide/js/fluig-style-guide.min.js"></script>
	</head>
	<body>
		<div class="fluig-style-guide">
			<!--Some code here-->
		</div>
	</body>

## Documentation

We suggest you to always visit these sections, to be in agreement with standards and best practices of use.

#### CSS

Shows standards of Grids, Forms and functional classes.

[CSS](css.md)

#### Components

Get to know all the components of the Style Guide.

[Go to components](components.md)

#### Business components

Business components and its standards of use.

[Go to Business components](http://tdn.totvs.com/pages/viewpage.action?pageId=160104507)

# Plugins Style Guide

Style Guide provides some plugins to make the development easier. Below we can see the array of plugins.

<table class="table table-bordered table-striped"><thead><tr><th>Plugin</th><th>Version</th><th>Description</th><th>Documentation</th></tr></thead><tbody><tr><th>jQuery</th><td>3.7.1</td><td>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</td><td><a href="https://api.jquery.com/" target="_blank">https://api.jquery.com/</a></td></tr><tr><th>jQuery UI</th><td>1.13.2</td><td>jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you're building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice.</td><td><a href="https://api.jqueryui.com/" target="_blank">https://api.jqueryui.com/</a></td></tr><tr><th>Mustache JS</th><td>2.3.2</td><td>Mustache is a simple web template system with implementations available for Java, JavaScript, and many other languages. Mustache is described as a "logic-less" system because it lacks any explicit control flow statements, like if and else conditionals or for loops; however, both looping and conditional evaluation can be achieved using section tags processing lists and lambdas. Mustache is used mainly for mobile and web applications.</td><td><a href="https://github.com/janl/mustache.js" target="_blank">https://github.com/janl/mustache.js</a> or <a href="http://mustache.github.io/" target="_blank">http://mustache.github.io/</a></td></tr></tbody></table>
