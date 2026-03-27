# Miscellaneous

**Fonte:** [https://style.fluig.com/miscellaneous.html](https://style.fluig.com/miscellaneous.html)
**Seção:** miscellaneous
**Subseções detectadas:** 15

## Navegação interna

- [More info](#filter-source-object-info)
- [About](#about)
- [Add to calendar](#addToCalendar)
- [Carousel](#carousel)
- [Code Editor](#code-editor)
- [Color Picker](#color-picker)
- [Cropper](#cropper)
- [Filter](#filter)
- [Organizational Chart](#fluig-orgchart)
- [Player](#player)
- [Rich Editor](#rich-editor)
- [Rating Stars](#ratingStars)
- [Sounds](#sounds)
- [Tags Cloud](#tagscloud)
- [Treeview](#treeview)

---

# About

Miscellaneous components are loaded on demand, so you'll have to import specific CSS and JavaScript files to use each one.

## Importing files

### Using miscellaneous components with Studio

If you want to create forms using miscellaneous components, first you'll need to import the basic Style Guide files:

	<!DOCTYPE html>
	<html>
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
	</html>

After doing this, you'll just need to import the corresponding CSS and JavaScript files of each component in your form. You can find some examples in the documentation of each component below.

Enjoy!

# Add to calendar

AddToCalendar is a component to Calendar button and Event Management.

## Basic configuration

        FLUIGC.addToCalendar(target, settings);

### Creating addtocalendar with Developer Studio using the Style Guide

If you want to create forms and use the addtocalendar component, you'll need to import the minified CSS and JavaScript files.

    	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-addtocalendar.min.css">
        <script src="/style-guide/js/fluig-style-guide-addtocalendar.min.js"></script>

### Using addtocalendar in widgets

To use the addtocalendar component in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigaddtocalendar

## Live demo

### HTML

	<div id="target"></div>

### Javascript

Below is the basic configuration to use Add to Calendar.

	FLUIGC.addToCalendar('#target', {
	    start: '01/02/2015 09:00 AM',
	    end: '01/02/2015 11:00 AM',
	    title: 'Title of the event',
	}, function(err, data) {
	    // DO SOMETHING (error or success)
	});

## Live demo

### HTML

	<div id="target"></div>

### Can be used a template

<script type="text/template" class="add-to-calendar-image-template">
	<img src="images/upload\_image.png">
</script>

Below is the complete configuration to use Add to Calendar.

	var template = $('.add-to-calendar-image-template').html(),
	var data = {pathToImage: 'images/upload\_image.png'};
	var htmlTemplate = Mustache.render(template, data);
	FLUIGC.addToCalendar('#target', {
	    start: '01/02/2015 09:00 AM',
	    end: '01/02/2015 11:00 AM',
	    title: 'Title of the event',
	    html: htmlTemplate,
        timezone: 'America/Sao\_Paulo',
        description: '

## Description of the event

',
        location: 'Eiffel Tower, Paris',
        organizer: 'John Johnson',
        organizer\_email: 'your@email.com',
        facebook\_event: 'https://www.facebook.com/events/000000000000000',
        all\_day\_event: 'false',
        advanced: {
            mouse      : false,
            outlook    : false,
            google     : false,
            yahoo      : true,
            outlookcom : false,
            appleical  : false,
            facebook   : false,
            dropdown   : {order:"yahoo, facebook, appleical"}
        }
	}, function(err, data) {
	    // DO SOMETHING (error or success)
	});

### Settings to Object

The settings object has the following attributes:

<table class="table table-bordered table-stripped"><thead><tr><th class="col-xs-2 text-center">Option</th><th class="col-xs-2 text-center">Type</th><th class="col-xs-2 text-center">Default</th><th class="col-xs-6 text-center">Description</th></tr></thead><tbody><tr><td>html</td><td><code>String</code></td><td><code>null</code></td><td>This attribute accepts a html value. Thus, a picture replaced the default button.</td></tr><tr><td>start</td><td><code>String</code></td><td><code>MM/DD/YYYY</code></td><td>Event start date. Mandatory. Format: "MM/DD/YYYY" or "DD/MM/YYYY".</td></tr><tr><td>end</td><td><code>String</code></td><td><code>MM/DD/YYYY</code></td><td>Event end date. Mandatory. Format: "MM/DD/YYYY" or "DD/MM/YYYY".</td></tr><tr><td>timezone</td><td><code>String</code></td><td><code>null</code></td><td>Timezone of the event, eg. "Europe/Paris".</td></tr><tr><td>title</td><td><code>String</code></td><td><code>null</code></td><td>Title of the event. Mandatory.</td></tr><tr><td>description</td><td><code>HTML</code></td><td><code>''</code></td><td>Description of the event. Maximum 500 characters recommended.</td></tr><tr><td>location</td><td><code>String</code></td><td><code>''</code></td><td>Event location</td></tr><tr><td>organizer</td><td><code>String</code></td><td><code>''</code></td><td>Event organizer</td></tr><tr><td>organizer_email</td><td><code>String</code></td><td><code>''</code></td><td>Event organizer e-mail</td></tr><tr><td>facebook_event</td><td><code>String</code></td><td><code>''</code></td><td>Link to event on Facebook, eg. https://www.facebook.com/events/703782616363133</td></tr><tr><td>all_day_event</td><td><code>Boolean</code></td><td><code>false</code></td><td>All day event, eg "true" or "false".</td></tr><tr><td>date_format</td><td><code>String</code></td><td><code>null</code></td><td>Format of the date in "start" and "end", eg "MM/DD/YYYY". Values can be "MM/DD/YYYY" or "DD/MM/YYYY". If "date_format" is not specified, the default format "MM/DD/YYYY" will be applied. Mandatory.</td></tr><tr><td>advanced</td><td>object</td><td>''</td><td>Are the options passed to the extra script after the included script in “The Button”. Please see the "Settings to Object advanced" table.</td></tr></tbody></table>

#### The advanced settings are set for all component instances on the same screen.

### Settings to Object advanced

The advanced object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>mouse</td><td><code>Boolean</code></td><td><code>false</code></td><td>Show options dropdown on mouseover.</td></tr><tr><td>outlook</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show option in dropdown.</td></tr><tr><td>google</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show option in dropdown.</td></tr><tr><td>yahoo</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show option in dropdown.</td></tr><tr><td>outlookcom</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show option in dropdown.</td></tr><tr><td>appleical</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show option in dropdown.</td></tr><tr><td>facebook</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show option in dropdown. To use this feature, previously should be be created an event on facebook page. After creation, you must copy the url of the event and set it in the 'facebook_event' attribute. eg. https://www.facebook.com/events/703782616363133</td></tr><tr><td>dropdown</td><td><code>Object</code></td><td><code>''</code></td><td>Sort order of the items in the dropdown. eg. <code>{order:"yahoo, facebook, appleical"}</code>. The items of this object must be defined in 'advanced' attribute with the value <code>true</code>.</td></tr></tbody></table>

# Carousel

A slideshow component for cycling through elements, like a carousel. **Nested carousels are not supported.**

## Basic configuration

	FLUIGC.carousel(target, settings);

## Live demo

### Creating carousel with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the carousel component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-carousel.min.css">
	<script src="/style-guide/js/fluig-style-guide-carousel.min.js"></script>

### Using carousel in widgets

To use carousel in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigcarousel

### Usage

	<div id="carousel-example-generic"></div>

	var images = \[
		{
			src: './images/bnr-carousel-img-01.jpg',
			alt: 'First image',
			title: 'First image',
			description: 'First image description',
			linktarget: '\_blank',
			linkhref: 'http://www.fluig.com',
			linktext: 'fluig'
		},
		{
			src: './images/bnr-carousel-img-02.jpg',
			alt: 'Second image',
			title: 'Second image',
			description: 'Second image description',
			linktarget: '\_blank',
			linkhref: 'http://style.fluig.com',
			linktext: 'Style Guide'
		}
	\];
	
	var settings = {
		id: 'myFluigCarouselExample',
		images: images,
		indicators: true,
		startIndex: 0,
		interval: 5000
	};
	
	var carousel = FLUIGC.carousel('#carousel-example-generic', settings);

### Carousel options

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Option</th><th>Type</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>'fluigCarousel_' + a random integer</td><td>The id of the carousel.</td></tr><tr><td>images</td><td>array of objects</td><td>[]</td><td>The array of images.</td></tr><tr><td>indicators</td><td>boolean</td><td>true</td><td>The <code>ol</code> circle indicators for each image, placed near the bottom of the carousel.</td></tr><tr><td>startIndex</td><td>integer</td><td>0</td><td>The array index of the first image to be loaded.</td></tr><tr><td>interval</td><td>integer/boolean</td><td>5000</td><td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td></tr><tr><td>template</td><td>string</td><td>null</td><td>The Mustache template, in HTML format, to be rendered on each node.</td></tr><tr><td>maxHeight</td><td>string</td><td>400px</td><td>The height of the gallery and the max-height of the images.</td></tr><tr><td>resize</td><td>boolean</td><td>false</td><td>Resize the gallery according to the current image.</td></tr><tr><td>autoSize</td><td>boolean</td><td>false</td><td>Resize the image to fill all available space.</td></tr></tbody></table>

### Image object options

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Option</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>src</td><td>string</td><td>The image URL.</td></tr><tr><td>alt</td><td>string</td><td>The image alternate text.</td></tr><tr><td>title</td><td>string</td><td>The image title</td></tr><tr><td>description</td><td>string</td><td>The image description</td></tr><tr><td>linktarget</td><td>string</td><td>If filled, defines which window will open page configured in linkhref.</td></tr><tr><td>linkhref</td><td>string</td><td>If filled, will be placed in the href="" attribute of an <code>a</code> tag, that behaves like a button.</td></tr><tr><td>linktext</td><td>string</td><td>The text of the <code>a</code> tag</td></tr></tbody></table>

### Methods

#### .pause()

Stops the carousel from cycling through items.

#### .play()

Cycles through the carousel items from left to right.

#### .next()

Cycles to the next item.

#### .prev()

Cycles to the previous item.

#### .goTo(index)

Cycles the carousel to a particular frame (0 based, similar to an array).

### Events

#### fluig.carousel.slide

This event fires when the `slide` instance method is invoked.

	carousel.on('fluig.carousel.slide', function(){
		// Do something
	});

### Using caption templates

In carousel, you can set a Mustache template to render inside the `div class="caption"` of each image.

	<script type="text/template" class="my\_template\_img\_caption">
		<h3>{{title}}</h3>
		<p>{{description}}</p>
		<a class="btn btn-info btn-lg" href="{{linkhref}}">{{linktext}}</a>
	</script>

### Caption template demo

	<script type="text/template" class="my\_caption\_template\_carousel">
		<h1>{{templateTitle}}</h1>
	</script>

	var images2 = \[
		{
			src: './images/bnr-carousel-img-01.jpg',
			alt: 'First image',
			templateTitle: 'Caption template first image'
		},
		{
			src: './images/bnr-carousel-img-02.jpg',
			alt: 'Second image',
			templateTitle: 'Caption template second image'
		}
	\];
	
	var settings = {
		id: 'myFluigCarouselExample2',
		images: images2,
		indicators: true,
		startIndex: 0,
		interval: 5000,
		template: '.my\_caption\_template\_carousel'
	};
	
	var carousel = FLUIGC.carousel('#carousel-example-caption-template', settings);

# Code Editor

The Code Editor component allows you to edit code directly over the web. It matches some features and performance of native editors such as Sublime, Vim and TextMate.

## Basic configuration

	var editor = FLUIGC.codeeditor(target, settings);

## Live demo with JavaScript

var x = 100; var text = "hello, world"; console.log(x); alert(text);

	var x = 100;
	var text = "hello, world";
	
	console.log(x);
	alert(text);

	var editor = FLUIGC.codeeditor("editor-javascript");

## Live demo with HTML

<h1>Hello, world!</h1> <p>This is a simple HTML example.</p>

<div id="editor-html" style="position:relative; width:100%; height:300px">
	<h1>Hello, world!</h1>
	<p>This is a simple HTML example.</p>
</div>

	var editor = FLUIGC.codeeditor("editor-html");

## Live demo with CSS

body { background-color: lightblue; } p { color: darkblue; font-size: 18px; }

	body {
		background-color: lightblue;
	}

	p {
		color: darkblue;
		font-size: 18px;
	}

	var editor = FLUIGC.codeeditor("editor-css");

### Using Code Editor component with Developer Studio

If you want to add the Code Editor component in forms, you'll need to import the minified JavaScript file.

	<script src="/style-guide/js/fluig-style-guide-codeeditor.min.js"></script>

### Using Code Editor in widgets

To use Code Editor in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigcodeeditor

## Settings

	var settings = {
		mode: 'javascript'
	};

#### Code editor theme

The editor theme is automatically set according to the platform mode (light or dark). Manual configuration is not available.

<table class="table table-bordered table-striped"><thead><tr><th class="col-xs-2 text-center">Option</th><th class="col-xs-2 text-center">Type</th><th class="col-xs-2 text-center">Default</th><th class="col-xs-6 text-center">Description</th></tr></thead><tbody><tr><td>mode</td><td><code>String</code></td><td><code>'javascript'</code></td><td>Allows to choose the programming language that will be used in the editor. Programming languages available: <code>javascript</code>, <code>html</code> and <code>css</code>.</td></tr></tbody></table>

## Methods

### .setValue()

Sets the editor content

	editor.setValue();

### .getValue()

Get the editor content

	editor.getValue();

### .getTextRange()

Get selected text

	editor.session.getTextRange(editor.getSelectionRange());

### .insert()

Insert at cursor

	editor.insert("Something cool");

### .getCursor()

Get the current cursor line and column

	editor.selection.getCursor();

### .gotoLine()

Go to a line

	editor.gotoLine(lineNumber);

### .getLength()

Get total number of lines

	editor.session.getLength();

### .setTabSize()

Set the default tab size

	editor.getSession().setTabSize(4);

### .setUseWrapMode()

Toggle word wrapping

	editor.getSession().setUseWrapMode(true);

### .setHighlightActiveLine()

Set line highlighting

	editor.setHighlightActiveLine(false);

### .setShowPrintMargin()

Set the print margin visibility

	editor.setShowPrintMargin(false);

### .setReadOnly()

Set the editor to read-only

	editor.setReadOnly(true)

# Color Picker

Create color pickers directly from inputs.

## Basic configuration

	FLUIGC.colorpicker(target, settings);

## Live demo

### Creating color pickers with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the Color Picker component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-colorpicker.min.css">
	<script src="/style-guide/js/fluig-style-guide-colorpicker.min.js"></script>

### Using Color Picker in widgets

To use Color Picker in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigcolorpicker

### Usage

	<input class="form-control" id="colorpicker-example-generic" type="text" name="colorpicker-example-generic" value="#58595B" />

	var settings = {
		changeDelay: 200,
		control: 'wheel',
		defaultValue: '#58595b',
		inline: false,
		letterCase: 'lowercase',
		opacity: true,
		position: 'bottom left',
		customColorNames: {
			'mycustomcolor': '#123456'
		}
	} 
	var myColorPicker = FLUIGC.colorpicker('#colorpicker-example-generic', settings);

## Settings

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">Type</th><th style="width: 18%;">Default value</th><th>Description</th></tr></thead><tbody><tr><td>changeDelay</td><td>int</td><td>10</td><td>The time, in milliseconds, to defer the change event from firing while the user makes a selection. This is useful for preventing the change event from firing frequently as the user drags the color picker around. The default value is 0 (no delay). If your change callback features something resource-intensive (such as an AJAX request), you’ll probably want to set this to at least 200.</td></tr><tr><td>control</td><td>string</td><td>'hue'</td><td>Determines the type of control. Valid options are <code>hue</code>, <code>brightness</code>, <code>saturation</code>, and <code>wheel</code>.</td></tr><tr><td>defaultValue</td><td>string</td><td>''</td><td>To force a default color, set this to a valid hex string. When the user clears the control, it will revert to this color.</td></tr><tr><td>inline</td><td>boolean</td><td>false</td><td>Set to <code>true</code> to force the color picker to appear inline.</td></tr><tr><td>letterCase</td><td>string</td><td>'lowercase'</td><td>Determines the letter case of the hex code value. Valid options are <code>uppercase</code> or <code>lowercase</code>.</td></tr><tr><td>opacity</td><td>boolean</td><td>false</td><td>Set to <code>true</code> to enable the opacity slider (Use the input element's <code>data-opacity</code> attribute to set a preset value).</td></tr><tr><td>position</td><td>string</td><td>'bottom left'</td><td>Sets the position of the dropdown. Valid options are <code>bottom left</code>, <code>bottom right</code>, <code>top left</code>, and <code>top right</code>.</td></tr><tr><td>customColorNames</td><td>object</td><td>''</td><td>CSS has some defined color names, like <code>red</code>, <code>blue</code> and <code>yellow</code>. This options lets you give an object with some custom color names and their matching hex. For example: <code>'mycustomcolor': '#123456'</code>. After you type 'mycustomcolor', it will change the input value to '#123456'.</td></tr></tbody></table>

## Methods

  
RGB String  RGBA String  Value  Set value '#0000ff'  Destroy

### .rgbObject

Returns an object containing red, green, blue, and alpha properties that correspond to the control's current value.

	var rgbObject = myColorPicker.rgbObject();

### .rgbString & .rgbaString

Returns an RGB or RGBA string suitable for use in your CSS.

	var rgbString = myColorPicker.rgbString();
	var rgbaString = myColorPicker.rgbaString();

### .settings

Gets or sets a control's settings. If new settings are passed in, the control will destroy and re-initialize itself with any new settings overriding the old ones.

	var colorPickerSettings = myColorPicker.settings();

### .value

Gets or sets a control's color value. To use this method as a setter, pass data in as a hex value. (You can also obtain this value by checking the input element's value attribute.)

	var colorPickerValue = myColorPicker.value();

### .destroy

Returns the input element to its original, uninitialized state.

	myColorPicker.destroy();

## Events

### fluig.colorpicker.change

Fires when the value of the color picker changes.

	myColorPicker.on('fluig.colorpicker.change', function(data){
		console.log(data.element); //reference the original input element.
		console.log(data.hex); 
		console.log(data.opacity);
	});

### fluig.colorpicker.show

Fires when the color picker is shown.

	myColorPicker.on('fluig.colorpicker.show', function(data){
		console.log(data.element); //reference the original input element.
	});

### fluig.colorpicker.hide

Fires when the color picker is hidden.

	myColorPicker.on('fluig.colorpicker.hide', function(data){
		console.log(data.element); //reference the original input element.
	});

# Cropper

A simply image cropping component.

## Basic configuration

	FLUIGC.cropper(target, settings);

## Live demo

![](./images/bnr-carousel-img-01.jpg)

	<img id="cropper-generic-example" src="./images/bnr-carousel-img-01.jpg">

	var myCropper = FLUIGC.cropper('#cropper-generic-example');

### Using cropper with Developer Studio

If you want to create forms and use the Cropper component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-cropper.min.css">
	<script src="/style-guide/js/fluig-style-guide-cropper.min.js"></script>

### Using Cropper in widgets

To use the Cropper component in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigcropper

## Settings

	settings = {
	    aspectRatio: NaN,
	    data: null,
	    preview: '',
	    strict: true,
	    responsive: true,
	    checkImageOrigin: true,
	    modal: true,
	    guides: true,
	    center: true,
	    highlight: true,
	    background: true,
	    autoCrop: true,
	    autoCropArea: 0.8,
	    dragCrop: true,
	    movable: true,
	    rotatable: true,
	    scalable: true,
	    zoomable: true,
	    mouseWheelZoom: true,
	    wheelZoomRatio: 0.1,
		touchDragZoom: true,
	    cropBoxMovable: true,
	    cropBoxResizable: true,
	    doubleClickToggle: true,
	    minCanvasWidth: 0,
	    minCanvasHeight: 0,
	    minCropBoxWidth: 0,
	    minCropBoxHeight: 0,
	    minContainerWidth: 200,
	    minContainerHeight: 100,
	    build: null,
	    built: null,
	    cropstart: null,
	    cropmove: null,
	    cropend: null,
	    crop: null,
	    zoom: null
	}

<table class="table table-bordered table-stripped"><thead><tr><th class="col-xs-2 text-center">Option</th><th class="col-xs-2 text-center">Type</th><th class="col-xs-2 text-center">Default</th><th class="col-xs-6 text-center">Description</th></tr></thead><tbody><tr><td>aspectRatio</td><td><code>Number</code></td><td><code>NaN</code></td><td>Set the aspect ratio of the crop box. By default, the crop box is free ratio.</td></tr><tr><td>data</td><td><code>Object</code></td><td><code>null</code></td><td>The previous cropped data if you had stored, will be passed to setData method automatically.</td></tr><tr><td>preview</td><td><code>String</code></td><td><code>''</code></td><td>jQuery selector. Add extra elements (containers) for previewing. The maximum width is the initial width of preview container. The maximum height is the initial height of preview container. If you set an aspectRatio option, be sure to set the preview container with the same aspect ratio.</td></tr><tr><td>strict</td><td><code>Boolean</code></td><td><code>true</code></td><td>In strict mode, the canvas (image wrapper) cannot be smaller than the container, and the crop box cannot be outside of the canvas (image wrapper).</td></tr><tr><td>responsive</td><td><code>Boolean</code></td><td><code>true</code></td><td>Rebuild the cropper when resize the window.</td></tr><tr><td>modal</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show the black modal above the image and under the crop box.</td></tr><tr><td>guides</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show the dashed lines above the crop box.</td></tr><tr><td>center</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show the center indicator above the crop box.</td></tr><tr><td>highlight</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show the white modal above the crop box (highlight the crop box).</td></tr><tr><td>background</td><td><code>Boolean</code></td><td><code>true</code></td><td>Show the grid background of the container.</td></tr><tr><td>autoCrop</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to crop the image automatically when initialize.</td></tr><tr><td>autoCropArea</td><td><code>Number</code></td><td><code>0.8</code> (80% of the image)</td><td>A number between 0 and 1. Define the automatic cropping area size (percentage).</td></tr><tr><td>dragCrop</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to remove the current crop box and create a new one by dragging over the image.</td></tr><tr><td>movable</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to move the image.</td></tr><tr><td>rotatable</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to rotate the image.</td></tr><tr><td>scalable</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to scale the image.</td></tr><tr><td>zoomable</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to zoom the image.</td></tr><tr><td>mouseWheelZoom</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to zoom the image by wheeling mouse.</td></tr><tr><td>wheelZoomRatio</td><td><code>Number</code></td><td><code>0.1</code></td><td>Define zoom ratio when zoom the image by wheeling mouse.</td></tr><tr><td>touchDragZoom</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to zoom the image by dragging touch.</td></tr><tr><td>cropBoxMovable</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to move the crop box.</td></tr><tr><td>cropBoxResizable</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to resize the crop box.</td></tr><tr><td>doubleClickToggle</td><td><code>Boolean</code></td><td><code>true</code></td><td>Enable to toggle drag mode between "crop" and "move" when double click on the cropper.</td></tr><tr><td>minContainerWidth</td><td><code>Number</code></td><td><code>200</code></td><td>The minimum width of the container.</td></tr><tr><td>minContainerHeight</td><td><code>Number</code></td><td><code>100</code></td><td>The minimum height of the container.</td></tr><tr><td>minCanvasWidth</td><td><code>Number</code></td><td><code>0</code></td><td>The minimum width of the canvas (image wrapper).</td></tr><tr><td>minCanvasHeight</td><td><code>Number</code></td><td><code>0</code></td><td>The minimum height of the canvas (image wrapper).</td></tr><tr><td>minCropBoxWidth</td><td><code>Number</code></td><td><code>0</code></td><td>The minimum width of the crop box.</td></tr><tr><td>minCropBoxHeight</td><td><code>Number</code></td><td><code>0</code></td><td>The minimum height of the crop box.</td></tr><tr><td>build</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "build.cropper" event.</td></tr><tr><td>built</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "built.cropper" event.</td></tr><tr><td>cropstart</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "cropstart.cropper" event.</td></tr><tr><td>cropmove</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "cropmove.cropper" event.</td></tr><tr><td>cropend</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "cropend.cropper" event.</td></tr><tr><td>crop</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "crop.cropper" event.</td></tr><tr><td>zoom</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "zoom.cropper" event.</td></tr></tbody></table>

## Methods

Methods in the cropper component are used in a particular way, as shown in the example code below:

	var myCropperMethods = myCropper.initMethods();
	myCropperMethods.cropper('rotate', 45);

#### Saving the `initMethods` method

You'll need to save the `initMethods()` function into a variable (as shown above), and then use this variable plus the `.cropper` method to run the methods listed below.

### enable

Enable (unfreeze) the cropper.

	myCropperMethods.cropper('enable');

### disable

Disable (freeze) the cropper.

	myCropperMethods.cropper('disable');

### destroy

Destroy the cropper and remove the instance from the image.

	myCropperMethods.cropper('destroy');

### reset

Reset the image and crop box to their initial states.

	myCropperMethods.cropper('reset');

### clear

Clear the crop box.

	myCropperMethods.cropper('clear');

### replace

**Argument type:** `string`. Replace the image's `src` and rebuild the cropper.

	myCropperMethods.cropper('replace', '/img/new-img.jpg');

### rotate

**Argument type:** `number`. Receives a positive number to rotate clockwise, or a negative number to rotate counterclockwise.

	myCropperMethods.cropper('rotate', 45);

### zoom

**Argument type:** `number`. Zoom in: requires a positive number (ratio > 0). Zoom out: requires a negative number (ratio < 0).

	myCropperMethods.cropper('zoom', 0.1);

### move

**Arguments type:** `number`. The first argument moves the canvas in the horizontal direction. The second argument moves the canvas in vertical direction.

	myCropperMethods.cropper('move', 1, -1);

### scale

**Arguments type:** `number`. The first argument makes the scaling factor to apply on the abscissa of the image. The second argument makes the scaling factor to apply on the ordinate of the image.

	myCropperMethods.cropper('scale', 1, -1);

### getData

Output the cropped area position and size data (base on the original image). Pass a `boolean` argument as `true` to get rounded values.

Properties of the returned `object`:

-   `x`: the offset left of the cropped area
-   `y`: the offset top of the cropped area
-   `width`: the width of the cropped area
-   `height`: the height of the cropped area
-   `rotate`: the rotated degrees of the image
-   `scaleX`: the scaling factor to apply on the abscissa of the image
-   `scaleY`: the scaling factor to apply on the ordinate of the image

	myCropperMethods.cropper('getData'); //returns an object with rectangled values
	myCropperMethods.cropper('getData', true); //returns an object with rounded values

### setData

**Argument type:** `Object`. Change the cropped area position and size with new data (base on the original image). To construct the `data`, see the properties of the `getData` method.

#### Note

Only available in strict mode.

	myCropperMethods.cropper('setData', data);

### getContainerData

Returns the container size data (width and height).

	myCropperMethods.cropper('getContainerData');

### getImageData

Returns the image position, size and other related data.

	myCropperMethods.cropper('getImageData');

### getCanvasData

Returns the canvas (image wrapper) position and size data (left, top, width and height).

	myCropperMethods.cropper('getCanvasData');

### setCanvasData

**Argument type:** `Object`. Change the canvas (image wrapper) position and size with new data (left, top, width and height).

	myCropperMethods.cropper('setCanvasData', {left: 0, top: 0, width: 200, height: 100});

### getCropBoxData

Returns the crop box position and size data (left, top, width and height).

	myCropperMethods.cropper('getCropBoxData');

### setCropBoxData

**Argument type:** `Object`. Change the crop box position and size with new data (left, top, width and height).

	myCropperMethods.cropper('setCropBoxData', {left: 0, top: 0, width: 200, height: 100});

## Events

Functions (to run when events are triggered) should be passed as options within the construction of the Cropper component, as follows:

<table class="table table-bordered table-stripped"><thead><tr><th class="col-xs-2 text-center">Option</th><th class="col-xs-2 text-center">Type</th><th class="col-xs-2 text-center">Default</th><th class="col-xs-6 text-center">Description</th></tr></thead><tbody><tr><td>build</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "build.cropper" event.</td></tr><tr><td>built</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "built.cropper" event.</td></tr><tr><td>cropstart</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "cropstart.cropper" event.</td></tr><tr><td>cropmove</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "cropmove.cropper" event.</td></tr><tr><td>cropend</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "cropend.cropper" event.</td></tr><tr><td>crop</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "crop.cropper" event.</td></tr><tr><td>zoom</td><td><code>Function</code></td><td><code>null</code></td><td>A shortcut of the "zoom.cropper" event.</td></tr></tbody></table>

Below you can find the events description of the Cropper component.

### build

This event fires when a cropper instance starts to load an image.

	build: function(){
		//Your code
	}

### built

This event fires when a cropper instance has built completely.

	built: function(){
		//Your code
	}

### cropstart

This event fires when the canvas (image wrapper) or the crop box starts to change.

	cropstart: function(e){
		console.log(e.type); // cropstart
		console.log(e.namespace); // cropper
		console.log(e.action); // ...
		console.log(e.originalEvent.pageX);

		// Prevent to start cropping, moving, etc if necessary
 		if (e.action === 'crop') {
			e.preventDefault();
		}
	}

### cropmove

This event fires when the canvas (image wrapper) or the crop box is changing.

	cropmove: function(e){
		//See cropstart event
	}

### cropend

This event fires when the canvas (image wrapper) or the crop box stops to change.

	cropend: function(e){
		//See cropstart event
	}

### crop

This event fires when the canvas (image wrapper) or the crop box changed.

	crop: function(e){
		// About these properties, see the getData method.
		console.log(e.x);
		console.log(e.y);
		console.log(e.width);
		console.log(e.height);
		console.log(e.rotate);
		console.log(e.scaleX);
		console.log(e.scaleY);
	}

### zoom

This event fires when a cropper instance starts to zoom in or zoom out its canvas (image wrapper). **e.ratio**: the current zoom ratio (ratio > 0 means zoom in, ratio < 0 means zoom out).

	zoom: function(e){
		var maxRatio = 10;
		var imageData = $(this).cropper('getImageData');
		var currentRatio = imageData.width / imageData.naturalWidth;

		// Zoom in
		if (e.ratio > 0 && currentRatio > maxRatio) {

			// Prevent zoom in
			e.preventDefault();
	
			// Fit the max zoom ratio
			$(this).cropper('setCanvasData', {
				width: imageData.naturalWidth \* maxRatio
			});
		}
		
		// Zoom out
		// ...
	}

# Filter

It is a joint of two JavaScript components: Autocomplete and Datatable. They were combined to provide a solution where the user can compare between a set of results using the Datatable, then select the ones to fill in the autocomplete input.

## Basic configuration

	FLUIGC.filter(target, settings);

## Live demo with REST

### Creating filter with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the filter component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
	<script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>

### Using filter in widgets

To use filter in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigfilter

### Usage

#### In HTML

	<!--The input text element, to be transformed in a filter.-->
	<input id="filter-example-generic" type="text" name="filter-example-generic"/>

#### In JavaScript with REST

	var settings = {
		source: {
			url: '/example/rest',
			contentType: 'application/json',
			root: 'content',
			pattern: '',
			limit: 10,
			offset: 0,
			patternKey: 'pattern',
			limitkey: 'limit',
			offsetKey: 'offset'
		},
		displayKey: 'name',
		multiSelect: true,
		style: {
			tableSelectedLineClass: 'info'
		},
		table: {
			header: \[
				{
					'title': 'ID',
					'size': 'col-xs-3'
				},
				{
					'title': 'Name',
					'size': 'col-xs-9',
					'dataorder': 'name',
					'standard': true
				}
			\],
			renderContent: \['id', 'name'\]
		}
	};

	var filter = FLUIGC.filter('#filter-example-generic', settings);

## Live demo with source array

#### In HTML

	<input id="filter-example-array" type="text" name="filter-example-array"/>

#### In JavaScript with source array

	var source = \[{
		company: 'Wonka Industries',
		id: 1
	}, {
		company: 'Acme Corp',
		id: 2
	}, {
		company: 'Stark Industries',
		id: 3
	}, {
		company: 'Ollivander\\'s Wand Shop',
		id: 4
	}, {
		company: 'Wayne Enterprises',
		id: 5
	}, {
		company: 'Cheers',
		id: 6
	}, {
		company: 'Gekko & Co',
		id: 7
	}\];

	var settingsExampleArray = {
		source: source,
		displayKey: 'company',
		multiSelect: true,
		style: {
			tableSelectedLineClass: 'info'
		},
		table: {
			header: \[{
				'title': 'company',
				'size': 'col-xs-9',
				'dataorder': 'company',
				'standard': true
			}\],
			renderContent: \['company'\]
		}
	};

	var filter = FLUIGC.filter('#filter-example-array', settingsExampleArray);

## Using with Datasets

	...

	initFilter: function() {

		var users = this.getDatasetUsers();

		var settingsExampleDataset = {
			source: users,
			displayKey: 'colleagueName',
			multiSelect: true,
			style: {
				tableSelectedLineClass: 'info'
			},
			table: {
				header: \[{
					'title': 'colleagueName',
					'size': 'col-xs-9',
					'dataorder': 'colleagueName',
					'standard': true
				}\],
				renderContent: \['colleagueName'\]
			}
		};
	
		var filter = FLUIGC.filter('#filter-example-dataset', settingsExampleDataset);
	},

	getDatasetUsers: function() {

		try {
				// Busca o dataset de usuários
				var dataset = DatasetFactory.getDataset('colleague');
				var users = dataset.values;
				return users;
		} catch(error) {
				console.error(error);
				return \[\];
		}
	}

	...
	

## Options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">Required</th><th style="width: 18%;">Type</th><th style="width: 18%;">Default value</th><th>Description</th></tr></thead><tbody><tr><td>displayKey</td><td>Required</td><td>string</td><td>'value'</td><td>For a given suggestion object, determines the string representation of it. This will be used when setting the value of the input control after a suggestion is selected. Can be either a key string or a function that transforms a suggestion object into a string. When a <strong>local array</strong> is used, this key is used to make the filter pattern.</td></tr><tr><td>style</td><td>Optional</td><td>object</td><td>undefined</td><td>Receives an object containing the style options of the component. More information at the following section "Style options".</td></tr><tr><td>table</td><td>Required</td><td>object</td><td>undefined</td><td>Receives an object containing the settings for the rendered datatable. More information at the following section "Table options".</td></tr><tr><td>tableHeight</td><td>Optional</td><td>string</td><td>'260px'</td><td>The height of the container of the table.</td></tr><tr><td>source</td><td>Required</td><td>object</td><td>undefined</td><td>Receives an object with the settings for the listing service or a local array. <a href="#filter-source-object-info">More info</a>.</td></tr><tr><td>multiSelect</td><td>Optional</td><td>boolean</td><td>false</td><td>Allows multiple items.</td></tr><tr><td>searchTimeout</td><td>Optional</td><td>number</td><td>200</td><td>Receives the waiting time to make the request. This is important not to open a request for each character typed.</td></tr><tr><td>minLength</td><td>Optional</td><td>number</td><td>1</td><td>The minimum character length needed before suggestions start getting rendered.</td></tr><tr><td>tagMaxWidth</td><td>Optional</td><td>string or number</td><td>200</td><td>Maximum size of the tag (without regard to remove).</td></tr></tbody></table>

## Table options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">Type</th><th style="width: 18%;">Default value</th><th>Description</th></tr></thead><tbody><tr><td>header</td><td>object</td><td>''</td><td>Explained better at the following section "Settings to array of objects header".</td></tr><tr><td>formatData</td><td>function</td><td>''</td><td>Function to process the data before they are rendered, thus being able to format them if necessary;</td></tr><tr><td>renderContent</td><td>array or string</td><td>''</td><td>This attribute is required, can be an array with the keys of the object or CSS class of a mustache template.</td></tr></tbody></table>

## Settings to array of objects header

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>''</td><td>Title for the table header.</td></tr><tr><td>dataorder</td><td>string</td><td>''</td><td>Value that will be sent to the server for ordering. This value is concatenated with ASC or DESC.</td></tr><tr><td>standard</td><td>boolean</td><td>''</td><td>Default value ordering.</td></tr><tr><td>size</td><td>string</td><td>''</td><td>Define a CSS class to apply to the column width. Ex .: 'col-md-2'.</td></tr><tr><td>display</td><td>boolean</td><td>true</td><td>If this attribute is set to "false", this column will be hidden.</td></tr></tbody></table>

## Source option

The `source option` can receive an object with the **REST settings** or a **local array** with the objects that will be listed.

#### Note

When using a **local array**, the component does **not enable pagination**.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 20%;">Name</th><th style="width: 20%;">Type</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>Used to indicate the URL of the API access.</td></tr><tr><td>contentType</td><td>string</td><td>Used to indicate the resource file type. Example: <code>application/json</code></td></tr><tr><td>root</td><td>string</td><td>Used to indicate the primary property of the API return where the values to be listed are located. Example: <code>content</code>.</td></tr><tr><td>pattern</td><td>string</td><td>Used to indicate the value that the filter will be made in the API.</td></tr><tr><td>limit</td><td>number</td><td>Used to indicate the threshold value of items returned in the search. Example: <code>10</code>.</td></tr><tr><td>offset</td><td>number</td><td>Used to indicate the search start value. Example: <code>0</code>.</td></tr><tr><td>patternKey</td><td>string</td><td>Used to indicate the name of the key that will be made the filter in the API. Example: <code>pattern</code>.</td></tr><tr><td>limitkey</td><td>string</td><td>Used to indicate the name of the key that will be made the limit of items returned in the search. Example: <code>limit</code>.</td></tr><tr><td>offsetKey</td><td>string</td><td>Used to indicate the name of the key that will be the beginning of the search. Example: <code>offset</code>.</td></tr></tbody></table>

## Style options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">Type</th><th style="width: 18%;">Default value</th><th>Description</th></tr></thead><tbody><tr><td>templateTag</td><td>string</td><td>''</td><td>The selector for the autocomplete tag template.</td></tr><tr><td>templateSuggestion</td><td>string</td><td>''</td><td>The selector for the autocomplete suggestion template.</td></tr><tr><td>templateTipMessage</td><td>string</td><td>''</td><td>The selector for the autocomplete tip message template.</td></tr><tr><td>tableSelectedLineClass</td><td>string</td><td>''</td><td>CSS class used to table selected lines.</td></tr><tr><td>tableStyle</td><td>string</td><td>''</td><td>Receives the waiting time to make the request. This is important not to open a request for each character typed.</td></tr><tr><td>filterIconClass</td><td>string</td><td>'fluigicon-zoom-in'</td><td>Defines a CSS class to apply to the table. Ex .: 'table-hover table-bordered table-striped'.</td></tr></tbody></table>

## Methods

### .add(item)

Adds a tag.

	var item = {name: 'Brazil'};
	filter.add(item);

### .removeAll()

Removes all tags.

	filter.removeAll();

### .getSelectedItems()

Return tags items in input.

	filter.getSelectedItems();

### .reload(settings)

Reload the filter component with new settings.

	var settings = {
		/\* New settings component filter \*/
	};
	filter.reload(settings);

### .focus()

Applies the focus event to the component by opening the list of suggestions for searching.

	filter.focus();

### .disable(disable)

Disables the filter component, not allowing the tags to be edited.

	// Enabling
	filter.disable(false);

	//Disabling
	filter.disable(true);

### .open()

Open the list of suggestions for searching.

	filter.open();

### .close()

Close the list of suggestions for searching.

	filter.close();

  

Add item Remove all Get selected items Reload Focus Disable Enable Open Close

	<div class="row">
		<div class="col-md-12">
			<input id="filter-example-methods" type="text" name="filter-example-methods"/>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-md-12">
			<button type="button" class="btn btn-default" data-filter-add-item>Add item</button>
			<button type="button" class="btn btn-default" data-filter-remove-all>Remove all</button>
			<button type="button" class="btn btn-default" data-filter-get-selected-items>Get selected items</button>
			<button type="button" class="btn btn-default" data-filter-reload>Reload</button>
			<button type="button" class="btn btn-default" data-filter-focus>Focus</button>
			<button type="button" class="btn btn-default" data-filter-disable>Disable</button>
			<button type="button" class="btn btn-default" data-filter-enable>Enable</button>
			<button type="button" class="btn btn-default" data-filter-open>Open</button>
			<button type="button" class="btn btn-default" data-filter-close>Close</button>
		</div>
	</div>

	var filterExampleMethods = FLUIGC.filter('#filter-example-methods', settings);
	
	/\* method: add(item) \*/
	$(document).on('click', '\[data-filter-add-item\]', function(ev) {
		var item = {
			name: 'Brazil'
		};
		filterExampleMethods.add(item);
	});
	
	/\* method: removeAll() \*/
	$(document).on('click', '\[data-filter-remove-all\]', function(ev) {
		filterExampleMethods.removeAll();
	});

	/\* method: getSelectedItems() \*/
	$(document).on('click', '\[data-filter-get-selected-items\]', function(ev) {
		var items = filterExampleMethods.getSelectedItems();

		FLUIGC.toast({
			title: 'Item selected: ',
			message: JSON.stringify(items),
			type: 'success'
		});
	});

	/\* method: reload(settings) \*/
	$(document).on('click', '\[data-filter-reload\]', function(ev) {
		filterExampleMethods.reload(settings);
	});

	/\* method: focus() \*/
	$(document).on('click', '\[data-filter-focus\]', function(ev) {
		filterExampleMethods.focus();
	});

	/\* method: disable(true) \*/
	$(document).on('click', '\[data-filter-disable\]', function(ev) {
		filterExampleMethods.disable(true);
	});

	/\* method: disable(false) \*/
	$(document).on('click', '\[data-filter-enable\]', function(ev) {
		filterExampleMethods.disable(false);
	});

	/\* method: open() \*/
	$(document).on('click', '\[data-filter-open\]', function(ev) {
		filterExampleMethods.open();
	});

	/\* method: close() \*/
	$(document).on('click', '\[data-filter-close\]', function(ev) {
		filterExampleMethods.close();
	});

## Events

#### Avoid two filters in the same parent

The events listener of each filter is the first parent HTML element of it. If you have two filters in the same parent, you must put each one inside a particular `span`. Otherwise, the event will trigger to both.

### fluig.filter.load.complete

Triggered just after the filter component is ready.

	filter.on('fluig.filter.load.complete', function() {
		//Do something
	});

### fluig.filter.item.added

Triggered just after an item got added.

	filter.on('fluig.filter.item.added', function(data) {
		//Do something
	});

### fluig.filter.beforeItemAdd

Triggered just after an item got added.

	filter.on('fluig.filter.beforeItemAdd', function() {
		//Do something
	});

### fluig.filter.selected

Triggered just after an item got added.

	filter.on('fluig.filter.selected', function() {
		//Do something
	});

### fluig.filter.beforeItemRemove

Triggered just after an item got removed.

	filter.on('fluig.filter.beforeItemRemove', function() {
		//Do something
	});

### fluig.filter.itemRemoved

Triggered just after an item got removed.

	filter.on('fluig.filter.itemRemoved', function() {
		//Do something
	});

### fluig.filter.blur

Triggered just after the filter component is closed.

	filter.on('fluig.filter.blur', function() {
		//Do something
	});

### fluig.filter.closed

Triggered just after the filter component is closed.

	filter.on('fluig.filter.closed', function() {
		//Do something
	});

### fluig.filter.focus

Triggered just after the filter component is opened or clicked.

	filter.on('fluig.filter.focus', function() {
		//Do something
	});

### fluig.filter.opened

Triggered just after the filter component is opened or clicked.

	filter.on('fluig.filter.opened', function() {
		//Do something
	});

	<input id="filter-example-generic2" type="text" name="filter-example-generic"/>

	var filter2 = FLUIGC.filter('#filter-example-generic2', settings);

	filter2.on('fluig.filter.load.complete', function () {
		var item = { name: 'Argentina' };
		filter2.add(item);
	});

	filter2.on('fluig.filter.item.added', function (data) {
		FLUIGC.toast({
			title: 'Item selected: ',
			message: data.item.name,
			type: 'success'
		});
	});

# Organizational Chart

Organizational Chart forks the jQuery Org Chart plugin, providing a Style Guide user interface to show companies' organizational charts.

## Basic configuration

	FLUIGC.orgChart(target, settings);

## Live demo

### Creating organizational charts with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the organizational chart component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-orgchart.min.css">
	<script src="/style-guide/js/fluig-style-guide-orgchart.min.js"></script>

### Using organizational charts in widgets

To use organizational charts in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigorgchart

### Usage

#### In HTML

	<div id="orgChart"> </div> <!--The target, where the organizational chart will be placed.-->

#### In JavaScript

#### ID parameter

The ID parameter must be declared to each of the objects, otherwise, the organizational chart will not work.

	var testData = \[
	    {id: 1, img: './images/logo-demo-map.png', name: 'My Organization', parent: 0},
	    {id: 2, img: './images/user\_picture.png', name: 'Person 1', description: "CEO", parent: 1},
	    {id: 3, img: './images/user\_picture.png', name: 'Person 2', description: "Division 1 VP", parent: 2},
	    {id: 4, img: './images/user\_picture.png', name: 'Person 3', description: "Division 2 VP", parent: 2},
	    {id: 6, img: './images/user\_picture.png', name: 'Person 4', description: "Division 1 Director", parent: 3},
	    {id: 7, img: './images/user\_picture.png', name: 'Person 5', description: "Division 1 Director", parent: 3},
	    {id: 8, img: './images/user\_picture.png', name: 'Person 6', description: "Division 2 Director", parent: 4}
	\];
	var settings = {
	    data: testData
	}
	var testOrgChart = FLUIGC.orgChart('#orgChart', settings);
	testOrgChart.on('fluig.orgchart.node.click', function(node){
		FLUIGC.toast({
	        title: 'Node clicked: ',
	        message: node.data.name,
	        type: 'success'
	    });
	});

### Options

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>Array of objects</td><td>The nodes of the organizational chart.</td></tr><tr><td>template</td><td>string</td><td>Optional, the Mustache template, in HTML format, to be rendered on each node.</td></tr></tbody></table>

### Methods

#### .addNodes(data)

Add elements to the organizational chart.

**Example:** Adding 3 child elements to the "Division 1 Director" node:

	var dataChildren = \[
	    {id: 7, img: './images/user\_picture.png', name: 'Person 7', description: "Division 1 Manager", parent: 6},
	    {id: 8, img: './images/user\_picture.png', name: 'Person 8', description: "Division 1 Manager", parent: 6},
	    {id: 9, img: './images/user\_picture.png', name: 'Person 9', description: "Division 1 Manager", parent: 6}
	\];
	testOrgChart.addNodes(dataChildren);

#### .deleteNodes(id)

Remove child elements from the specified node.

**Example:** Removing childs from the "Division 1 Director" node:

	testOrgChart.deleteNodes(6);

#### Methods demo

	var testOrgChart2 = FLUIGC.orgChart('#orgChart2', settings);
	testOrgChart2.on('fluig.orgchart.node.click', function(node){
		if(node.children.length == 0){
			var dataChilds = \[
			    {id: Math.ceil(Math.random()\*1000), img: './images/user\_picture.png', name: 'Person', description: "Analyst", parent: node.data.id},
			    {id: Math.ceil(Math.random()\*1000), img: './images/user\_picture.png', name: 'Person', description: "Analyst", parent: node.data.id},
			    {id: Math.ceil(Math.random()\*1000), img: './images/user\_picture.png', name: 'Person', description: "Analyst", parent: node.data.id}
			\];
			testOrgChart2.addNodes(dataChilds);
		}else{
			testOrgChart2.deleteNodes(node.data.id);
		}
	});

### Events

#### fluig.orgchart.node.click

This event is fired when a node is clicked, and returns the clicked node object.

	testOrgChart2.on('fluig.orgchart.node.click', function(node){
		console.log(node);
		// Do something
	});

### Using templates

In organizational charts, you can set a template to render inside of each node, instead of using the default template.

	<script type="text/template" class="my\_template\_orgchart">
		<div class="media">
			{{#img}}<a class="pull-left" href="#"><img class="img-rounded media-object" src="{{img}}"></a>{{/img}}
			<div class="media-body">
				{{#name}}<h4 class="media-heading">{{name}}</h4>{{/name}}
				{{#description}}<p>{{description}}</p>{{/description}}
				{{#email}}<p>{{email}}</p>{{/email}}
			</div>
		</div>
	</script>

	var testDataTemplate = \[
	    {id: 1, img: './images/logo-demo-map.png', name: 'My Organization', parent: 0},
	    {id: 2, img: './images/user\_picture.png', name: 'Person 1', description: "CEO", email: 'person1@fluig.com', parent: 1},
	    {id: 3, img: './images/user\_picture.png', name: 'Person 2', description: "Division 1 VP", email: 'person2@fluig.com', parent: 2},
	    {id: 4, img: './images/user\_picture.png', name: 'Person 3', description: "Division 2 VP", email: 'person3@fluig.com', parent: 2},
	    {id: 6, img: './images/user\_picture.png', name: 'Person 4', description: "Division 1 Director", email: 'person4@fluig.com', parent: 3},
	    {id: 7, img: './images/user\_picture.png', name: 'Person 5', description: "Division 1 Director", email: 'person5@fluig.com', parent: 3},
	    {id: 8, img: './images/user\_picture.png', name: 'Person 6', description: "Division 2 Director", email: 'person6@fluig.com', parent: 4}
	\];
	var settingsTemplate = {
	    data: testDataTemplate,
	    template: '.my\_template\_orgchart'
	}
	var testOrgChartTemplate = FLUIGC.orgChart('#orgChartTemplate', settingsTemplate);
	testOrgChartTemplate.on('fluig.orgchart.node.click', function(node){
		FLUIGC.toast({
	        title: 'Node clicked: ',
	        message: node.data.name,
	        type: 'success'
	    });
	});

# Player

Component for playing some videos in the system.

## Basic configuration

	FLUIGC.player(target, urlVideo);

## Live demo

### Using videos with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the player component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-player.min.css">
	<script src="/style-guide/js/fluig-style-guide-player.min.js"></script>

### Video formats

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Browser</th><th>ogg</th><th>mp4</th><th>webm</th><th>m3u8</th><th>flv</th><th>avi</th><th>wmv</th></tr></thead><tbody><tr><td>Internet Explorer</td><td>-</td><td>9.0</td><td>-</td><td>-</td><td>9.0</td><td>9.0</td><td>9.0</td></tr><tr><td>Firefox</td><td>3.5</td><td>35.0</td><td>4.0</td><td>-</td><td>35.0</td><td>-</td><td>-</td></tr><tr><td>Chrome</td><td>3.0</td><td>3.0</td><td>6.0</td><td>-</td><td>3.0</td><td>-</td><td>-</td></tr></tbody></table>

#### Windows Media Player plugin.

The .avi and .wmv video formats are supported only in Internet Explorer, which uses a plugin windows media player to run. The width and height settings are specific to the native plugin.

### Using player in widgets

To use player in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigplayer

## Usage

	// usage with SuperWidget
	
	...
	
	// variable local of the widget which will be stored the component instance
	myPlayer: null,
	
	init: function() {
	
		// storing the component instance
		this.myPlayer = FLUIGC.player('#player-example', './videos/player-example.mp4', {
			fullscreen: false,
			volume: 0.5
		});
		
		...
	},
	
	...
	
	functionResume: function() {
	
		// Resume the video
		this.myPlayer.resume();
		
		...
	},
	
	functionPause: function() {
	
		// Pause the video
		this.myPlayer.pause(function(){
			// action on pause video
		});
		
		...
	},
	
	...
	
	...

There is another way to use the player, but you may not use the options and methods with it. Check out the example:

	<div class="flowplayer">
	   <video>
	      <source src="./videos/player-example.mp4">
	   </video>
	</div>

### Keyboard options

<table class="table table-bordered table-striped table-responsive"><thead><tr><th class="col-md-6">Key</th><th class="col-md-6">Action</th></tr></thead><tbody><tr><td>space</td><td>play/pause</td></tr><tr><td>esc</td><td>stop</td></tr><tr><td>shift + left/right arrow</td><td>slower/faster</td></tr><tr><td>up/down arrow</td><td>volume</td></tr><tr><td>m</td><td>mute</td></tr><tr><td>left/right arrow</td><td>seek</td></tr></tbody></table>

### Player options

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Option</th><th>Type</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td>muted</td><td>boolean</td><td>false</td><td>Whether player should start in muted state. Use this option instead of the muted.</td></tr><tr><td>volume</td><td>decimal (Range 0 - 1)</td><td>1</td><td>The initial volume level.</td></tr><tr><td>debug</td><td>boolean</td><td>false</td><td>Show debug messages on the console. Causes errors if window.console is not present.</td></tr><tr><td>fullscreen</td><td>boolean</td><td>true</td><td>Whether fullscreen is enabled.</td></tr><tr><td>ratio</td><td>decimal</td><td>1/2</td><td>A decimal number representing the height of the player in proportion to its width. You usually want to change this setting for videos with a different aspect ratio than 1/2. You can override this by explicitly setting the height CSS property for the container in which case the player height stays the same on all devices and screen sizes.</td></tr><tr><td>bufferTime</td><td>int</td><td>3</td><td>Specifies how long to buffer messages before starting to display the stream. Affects the Flash engine only.</td></tr><tr><td>autoplay</td><td>boolean</td><td>false</td><td>Will start the playback automatically.</td></tr><tr><td>width</td><td>int</td><td>350</td><td>Sets the width of the player, only when using the windows media player plugin (.avi and .wmv formats in internet explorer).</td></tr><tr><td>height</td><td>int</td><td>300</td><td>Sets the height of the player, only when using the windows media player plugin (.avi and .wmv formats in internet explorer)</td></tr></tbody></table>

## Methods

### .fullscreen()

Toggles between native fullscreen mode and initial screen size. When native fullscreen support is not present the player expands to the full size of the browser window. Note: Many browsers allow this method to work only from events which are triggered by user interaction, like "click", and not for example from player events like "ready" which happen at moments undetermined by the user.

	myPlayer.fullscreen();

### .mute(flag)

mute() without argument toggles between muted and normal state. mute(true) mutes and mute(false) unmutes.

	myPlayer.mute();
	myPlayer.mute(true);

### .play(index)

Plays the clip of a playlist specified in the zero based index argument. For example: play(0) plays the first clip.

	myPlayer.play(0);

### .resume()

Resumes playback.

	myPlayer.resume();

### .stop()

Pauses playback and seeks to the beginning of the video.

	myPlayer.stop();

### .volume()

Set the volume level to a decimal value between 0 (no volume) - 1 (full volume).

	myPlayer.volume(0.7);

### .pause(callback)

Pauses playback.

	myPlayer.pause(function(){});

### .speed(rate, callback)

Sets the speed level to the given rate. 1 = normal speed less than 1 = slow motion greater than 1 = fast forward The callback is executed once after the speed has changed.

	myPlayer.speed(1, function(){});

# Rich Editor

The Rich Editor component is a WYSIWYG (What You See Is What You Get) text editor, which means the text being edited looks as similar as possible to the results users have when publishing it.

  

<table class="table table-bordered table-striped"><thead><tr><th>Plugin</th><th>Version</th><th>Description</th><th>Documentation</th></tr></thead><tbody><tr><th>Kendo UI</th><td>v2025.1.227</td><td>jQuery Rich Text Editor<br>Use the jQuery Editor to write and format rich text content in a familiar editor experience. Add predefined CSS classes or create your own custom tools, buttons, dropdowns or dialogs.</td><td><a href="https://www.telerik.com/kendo-jquery-ui/rich-text-editor" target="_blank">https://www.telerik.com/kendo-jquery-ui/rich-text-editor</a></td></tr></tbody></table>

## Basic configuration

		FLUIGC.richeditor(target, settings);

## Live demo

		var editor = FLUIGC.richeditor('rich-editor-example-1');

### Using Rich Editor component with Developer Studio

If you want to add the Rich Editor component in forms, you'll need to import the minified CSS and JavaScript files.

		<script type="text/javascript" src="/style-guide/js/fluig-style-guide-richeditor.min.js" ></script>

### Using Rich Editor in widgets

To use Rich Editor in widgets, you must inform the following line in the `application.info` file of your widget:

		application.resource.component.1=fluigricheditor

## Settings

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th class="col-xs-2 text-center">Option</th><th class="col-xs-2 text-center">Type</th><th class="col-xs-2 text-center">Default</th><th class="col-xs-4 text-center">Description</th><th class="col-xs-2 text-center">Status</th></tr></thead><tbody><tr><td>resize_enabled</td><td><code>Boolean</code></td><td><code>false</code></td><td>Enables editor resizing</td><td>Supported</td></tr><tr><td>imageTypesList</td><td><code>Array</code></td><td><code>false</code></td><td>List of available actions to add images</td><td>Supported</td></tr><tr><td>videoTypesList</td><td><code>Array</code></td><td><code>false</code></td><td>List of available actions to add videos</td><td>Supported</td></tr><tr><td>hideLocalImageAndVideoButton</td><td><code>Boolean</code></td><td><code>false</code></td><td>Hides the local image and video upload button</td><td>Supported</td></tr><tr><td>withHtmlStructure</td><td><code>Boolean</code></td><td><code>true</code></td><td>Keeps the outer HTML structure (e.g., <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, etc.)</td><td>Supported</td></tr><tr><td>enforceXhtmlSelfClosing</td><td><code>Boolean</code></td><td><code>false</code></td><td>Enforces self-closing tags for void elements (e.g., <code>&lt;img&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;br&gt;</code>)</td><td>Supported</td></tr><tr><td>height</td><td><code>Number</code></td><td><code>false</code></td><td>Editor height in pixels. If not set, the editor adjusts its height automatically</td><td>Supported</td></tr><tr><td>width</td><td><code>Number</code></td><td><code>false</code></td><td>Editor width in pixels. If not set, the editor adjusts its width automatically</td><td>Supported</td></tr><tr><td>language</td><td><code>String</code></td><td><code>'pt_BR'</code></td><td>Sets the editor language. Available options: 'pt_BR', 'en_US', 'es'</td><td>Supported</td></tr><tr><td>removePlugins</td><td><code>String</code></td><td><code>''</code></td><td>RichEditor plugins to be removed</td><td>Supported</td></tr><tr><td>localImageCallback</td><td><code>Function</code></td><td><code>undefined</code></td><td>Callback triggered when a local image is added. Receives the image path as parameter</td><td>Supported</td></tr><tr><td>localVideoCallback</td><td><code>Function</code></td><td><code>undefined</code></td><td>Callback triggered when a local video is added. Receives the video path as parameter</td><td>Supported</td></tr><tr><td>localImageAdded</td><td><code>Function</code></td><td><code>undefined</code></td><td>Callback triggered when a local image is added. Receives the image path as parameter</td><td class="danger">Deprecated</td></tr><tr><td>localVideoAdded</td><td><code>Function</code></td><td><code>undefined</code></td><td>Callback triggered when a local video is added. Receives the video path as parameter</td><td class="danger">Deprecated</td></tr><tr><td>focus</td><td><code>Boolean</code></td><td><code>false</code></td><td>Focuses the editable area.</td><td>Supported</td></tr><tr><td>pasteCleanupCss</td><td><code>Boolean</code></td><td><code>false</code></td><td>Remove <code>style</code> and <code>class</code> attributes from the pasting content.</td><td>Supported</td></tr><tr><td>pasteCleanupAll</td><td><code>Boolean</code></td><td><code>false</code></td><td>All HTML tags are stripped leaving only the text in the content.</td><td>Supported</td></tr><tr><td>readOnly</td><td><code>Boolean</code></td><td><code>false</code></td><td>If enabled, the editor disables the editing and hide the tool bar.</td><td>Supported</td></tr><tr><td>resizable.content</td><td><code>Object</code></td><td><code>false</code></td><td>Allows resizing the content of the Editor using the mouse.</td></tr><tr><td>stylesheets</td><td><code>Array</code></td><td><code>['/css/animalia-icons.min.css', '/css/fluig-style-guide-flat.min.css']</code></td><td>Allows custom stylesheets to be included within the editing area. This setting is applicable only when the Editor is initialized from a textarea and a contenteditable iframe is generated.</td><td>Supported</td></tr><tr><td>tools</td><td><code>Array</code></td><td></td><td>A collection of <a>tools</a> that are used to interact with the Editor. Tools may be switched on by specifying their name. Custom tools and tools that require configuration are defined as objects.<br>See more tools at '<i>Tools commands</i>'.</td><td>Supported</td></tr></tbody></table>

## Local Media (Images and Videos)

The rich text component allows inserting images and videos directly into the content. However, when using local media (files inserted from the user’s computer, for example), **it is the developer’s responsibility to implement the upload process to the Fluig ECM**.

To support this, the component provides specific callbacks that can be used to customize and control the media upload flow.

Refer to the "[Media Upload to ECM](https://tdn.totvs.com/x/N730Ow)" documentation for complete implementation examples.

If you don’t want to offer the option to insert local media, you can hide these buttons using the configuration property:

	hideLocalImageAndVideoButton: true

## Tools commands

### The available editor commands are:

<table class="table table-bordered table-striped"><tbody><tr><td>Basic text formatting</td><td><code>bold, italic, underline, strikethrough, subscript, superscript</code></td></tr><tr><td>Font and color</td><td><code>fontName, fontSize, foreColor, backColor</code></td></tr><tr><td>Alignment</td><td><code>justifyLeft, justifyCenter, justifyRight, justifyFull</code></td></tr><tr><td>Spacing</td><td><code>lineHeight</code></td></tr><tr><td>Lists</td><td><code>insertUnorderedList, insertOrderedList, indent, outdent</code></td></tr><tr><td>Links</td><td><code>createLink, unlink</code></td></tr><tr><td>Table editing</td><td><code>tableWizard, createTable, addColumnLeft, addColumnRight, addRowAbove, addRowBelow, deleteRow, deleteColumn</code></td></tr><tr><td>Structural markup and styles</td><td><code>formatting, cleanFormatting</code></td></tr><tr><td>Snippets</td><td><code>insertHtml</code></td></tr><tr><td>HTML code view</td><td><code>customViewHtml</code></td></tr><tr><td>Format painter</td><td><code>copyFormat, applyFormat</code></td></tr><tr><td>Formatting marks</td><td><code>formattingMarks</code></td></tr></tbody></table>

Example - add grouped tools collection using multi array:

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
		tools: \[
			\[
				"bold",
				"italic",
				"underline",
				"strikethrough"
			\],
			\[
				"justifyLeft",
				"justifyCenter",
				"justifyRight",
				"justifyFull"
			\],
			\[
				"insertUnorderedList",
				"insertOrderedList",
				"indent",
				"outdent"
			\]\]
		});

Example - add a separator between tools:

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			tools: \[
				"bold",
				"italic",
				"underline",
				"strikethrough",
				{ name: "separator1", type: "separator" },
				"justifyLeft",
				"justifyCenter",
				"justifyRight",
				"justifyFull",
				{ name: "separator2", type: "separator" },
				"insertUnorderedList",
				"insertOrderedList",
				"indent",
				"outdent"
			\]
		});

Example - add built-in and custom buttons to the tools collection:

		var editor = FLUIGC.richeditor('rich-editor-example-live-demo', {
			tools: \[
				"bold", "italic", "underline",
				{
					name: "custom",
					template: 'Custom'
				}
			\]
		});

## Methods

### `.getValue()` - get value

Returns a `string` with the source code (HTML format).

		editor.getValue();

### `.setValue(content)` - set value

Replaces all the source code (HTML format) with the new one passed in the method.

		var editor = FLUIGC.richeditor('rich-editor-example-1');
		editor.setValue("

Rich Editor example: set data.

");

		/\* The result can be observed in the DevTools(F12) console of the browser. \*/
		console.log(editor.getValue()); // logs "

Rich Editor example: set data.

"

#### String with HTML code

You must pass a string with the HTML code. the `.setValue()` method will replace the whole source code of the editor.

### Get/Set example

Get data

Set data

## Events

### change

Fires when Editor is blurred and its content has changed.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			change: function() {
				console.log(this.value());
			}
		});

### paste

Fires before the content is pasted in the Editor.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			paste: function(e) {
				console.log(e.html);
			}
		});

### keyup

Fires when the user releases a keyboard key.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			keyup: function(e) {
				console.log("keyup : keyCode=", e.keyCode);
			}
		});

### keydown

Fires when the user depresses a keyboard key. Triggered multiple times if the user holds the key down.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			keydown: function(e) {
				console.log("keydown : keyCode=", e.keyCode);
			}
		});

### select

Fires when the Editor selection has changed.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			select: function(e) { }
		});

### externalPlugins

Defines a list of custom plugins that will be added to the editor. Each plugin can display a button with text or an icon, and will execute a custom callback when clicked.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			externalPlugins: \[{
				id: "plugin-text",
				title: "My plugin text button",
				callback: function (editor) {
					console.log("Logic when clicking on the plugin's text button", editor);
				}
			},{
				id: "plugin-icon",
				icon: "link",
				callback: function (editor) {
					console.log("Logic when clicking on the plugin icon button", editor);
				}
			}\],
		});

#### Icons list

The list of icons available for use in externalPlugins can be found at [Kendo UI Icons](https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/).

### localImageCallback

Callback executed automatically after local image upload is successfully completed. It is called only when the upload is successful and when there are valid images.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			localImageCallback: function (editor, images, arrayFile) {
				console.log("Images: ", editor, images, arrayFile)
			}
		});

<table class="table table-bordered table-striped"><tbody><tr><td>editor</td><td>Object</td><td>Editor instance. Can be used to insert or manipulate content.</td></tr><tr><td>images</td><td>Array</td><td>List of objects with uploaded and validated images.</td></tr><tr><td>arrayFile</td><td>Array</td><td>Files originally selected in the upload input.</td></tr></tbody></table>

### localVideoCallback

Callback executed automatically after local videos have been successfully uploaded. It is called only when the upload is successful and when there are valid videos.

		var editor = FLUIGC.richeditor('rich-editor-example-1', {
			localVideoCallback: function (editor, videos, arrayFile) {
				console.log("Videos: ", editor, videos, arrayFile)
			}
		});

<table class="table table-bordered table-striped"><tbody><tr><td>editor</td><td>Object</td><td>Editor instance. Can be used to insert or manipulate content.</td></tr><tr><td>videos</td><td>Array</td><td>List of objects with uploaded and validated videos.</td></tr><tr><td>arrayFile</td><td>Array</td><td>Files originally selected in the upload input.</td></tr></tbody></table>

# Rating Stars

Ratings stars displays icons to user select the best option with the related issue.

## Basic configuration

        FLUIGC.stars(target, settings);

## Live demo

### Creating rating stars with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the rating component, you'll need to import the minified JavaScript file.

        <link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-ratingstars.min.css">
        <script src="/style-guide/js/fluig-style-guide-ratingstars.min.js"></script>

### Using rating stars in widgets

To use rating stars in widgets, you must inform the following line in the `application.info` file of your widget:

        application.resource.component.1=fluigratingstars

### Usage

#### In HTML

        <div class="my-rating"></div> <!--The element to be transformed.-->

#### In JavaScript

        FLUIGC.stars(".my-rating", {
            stars: 5,
            // Other options
        });

## Options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">Required</th><th style="width: 18%;">Type</th><th style="width: 18%;">Default value</th><th>Description</th></tr></thead><tbody><tr><td>stars</td><td>Optional</td><td>number</td><td>5</td><td>Max number of stars to be selected</td></tr><tr><td>value</td><td>Optional</td><td>number</td><td>0</td><td>Number of stars to initialize as selected</td></tr><tr><td>text</td><td>Optional</td><td>array of strings</td><td>undefined</td><td>Each string is the description for each star</td></tr><tr><td>color</td><td>Optional</td><td>string</td><td>Fluig color</td><td>Icon font color</td></tr><tr><td>sizeClass</td><td>Optional</td><td>string</td><td>icon-sm</td><td>Icon size class</td></tr><tr><td>emptyIcon</td><td>Optional</td><td>string</td><td>fluigicon fluigicon-star-empty</td><td>Icon font class when not selected</td></tr><tr><td>filledIcon</td><td>Optional</td><td>string</td><td>fluigicon fluigicon-star</td><td>Icon font class when selected</td></tr></tbody></table>

### Stars numbers

        FLUIGC.stars(".rating-numbers", {
            stars: 8,
            value: 3,
            text: \['Star 1', 'Star 2', 'Star 3', 'Star 4', 'Star 5', 'Star 6', 'Star 7', 'Star 8'\]
        });

### Using other icons

        FLUIGC.stars(".other-rating-icons", {
            emptyIcon: 'fluigicon fluigicon-exclamation-sign',
            filledIcon: 'fluigicon fluigicon-exclamation-sign-on',
        });

## Methods

### .on(event, callback)

Attach an event handler function for events.

        var starsCallback = FLUIGC.stars(".rating-callback");
        starsCallback.on("click", function(obj) {
            FLUIGC.toast({
                title: 'Node clicked!',
                message: "Callback from star!",
                type: 'success'
            });
        });

# Sounds

Component for playing some sounds in the system.

## Basic configuration

	FLUIGC.sounds(soundName);

## Available sounds

-   [Play](# "Play")
    
    ### fluigsounds-drop
    
-   [Play](# "Play")
    
    ### fluigsounds-bell
    

### Using sounds with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the sounds component, you'll need to import the minified CSS and JavaScript files.

	<script src="/style-guide/js/fluig-style-guide-sounds.min.js"></script>

### Using sounds in widgets

To use sounds in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigsounds

## Usage

	// usage with SuperWidget
	
	...
	
	// variable local of the widget which will be stored the component instance
	mySound: null,
	
	init: function() {
	
		// storing the component instance
		this.mySound = FLUIGC.sounds('fluigsounds-drop');
		
		...
	},
	
	...
	
	someFuncNotify: function() {
	
		// playing the sound
		this.mySound.play();
		
		...
	},
	
	...

## Methods

### .play()

Play sound.

	mySound.play();

### .pause()

Pause sound.

	mySound.pause();

### .stop()

Stop sound.

	mySound.stop();

### .increaseVolume()

Increase volume sound.

	mySound.increaseVolume();

### .decreaseVolume()

Decrease volume sound.

	mySound.decreaseVolume();

### .mute()

Mute sound.

	mySound.mute();

# Tags Cloud

The Tags Cloud is a plugin that builds word clouds.

## Basic configuration

        FLUIGC.tagscloud(target, words, settings);

### Creating tagscloud with Developer Studio using the Style Guide

If you want to create forms and use the tagscloud component, you'll need to import the minified CSS and JavaScript files.

    	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-tagscloud.min.css">
        <script src="/style-guide/js/fluig-style-guide-tagscloud.min.js"></script>

### Using tagscloud in widgets

To use the tagscloud component in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigtagscloud

## Live demo

### No conf

Default configuration, no special parameters for words.

### HTML

The minimum height is 300px. This property is default if the value of the height is smaller or not informed.

 	<div id="cloud"></div>

### Javascript

	var words = \[
						{text: "Lorem", weight: 13},
						{text: "Ipsum", weight: 10.5},
						{text: "Dolor", weight: 9.4},
						{text: "Sit", weight: 8},
						{text: "Amet", weight: 6.2},
						{text: "Consectetur", weight: 5},
						{text: "Adipiscing", weight: 4.5},
						{text: "elit", weight: 3},
						{text: "sed", weight: 3.5},
						{text: "eiusmod", weight: 2.4},
						{text: "tempor", weight: 8},
						{text: "labore", weight: 5},
						{text: "dolore", weight: 8},
						{text: "magna", weight: 7}
					\];
		
		FLUIGC.tagscloud('#cloud',words);

## Live demo

### Links

The three biggest words have links.

### HTML

 	<div id="cloud"></div>

### Javascript

Below is the basic configuration to use Tags Cloud.

	var words = \[
						{{text: "Lorem", weight: 13, link: '#'},
						{text: "Ipsum", weight: 10.5, link: '#'},
						{text: "Dolor", weight: 9.4, link: '#'},
						/\* ... \*/
					\];
		
		FLUIGC.tagscloud('#cloud',words);

## Live demo

### Shape

This cloud is rectangular!

		
		FLUIGC.tagscloud('#cloud',words, {
			shape: 'rectangular'
		});

## Live demo

### Custom colors & size via JS

A custom array of colors is given to the plugin in addition to min and max font size.

### Javascript

	FLUIGC.tagscloud('#cloud',words, {
  classPattern: null,
  colors: \["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"\],
  fontSize: {
    from: 0.1,
    to: 0.02
  }
});

## Live demo

### Event handlers

A click event is attached to the first word.

### Javascript

	var words = \[
  {text: "Lorem", weight: 13, handlers: {
    click: function() {
      alert('You clicked the word !');
    }
  }},
  {text: "Ipsum", weight: 10.5},
  {text: "Dolor", weight: 9.4},
  /\* ... \*/
\];

FLUIGC.tagscloud('#cloud',words);

## Live demo

### Update

Click the "Update" button to remove some words from the list, with non null delay.

Update

### Javascript

	var words = \[
						{{text: "Lorem", weight: 13, link: '#'},
						{text: "Ipsum", weight: 10.5, link: '#'},
						{text: "Dolor", weight: 9.4, link: '#'},
						/\* ... \*/
					\];
	
	var intanceTagsCloug = FLUIGC.tagscloud('#cloud',words);
		
		$('#update-demo').on('click', function() {
			words.splice(-5);
			intanceTagsCloug.update(words);
		});

## Settings

### Cloud options

You can provide an object of options has second parameter.

		FLUIGC.tagscloud('#cloud', words, {
  			width: 500,
  			height: 350
		});

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">Type</th><th style="width: 18%;">Default value</th><th>Description</th></tr></thead><tbody><tr><td>width</td><td>integer</td><td></td><td>Fixed width of the container, will default to container current width</td></tr><tr><td>height</td><td>integer</td><td></td><td>Fixed height of the container, will default to container current height</td></tr><tr><td>center</td><td>object</td><td>{x: 0.5, y:0.5}</td><td>Position of the center of the cloud relatively to the container</td></tr><tr><td>autoResize</td><td>boolean</td><td>false</td><td>If the container has dynamic dimensions, set this option to <cod>true to update the cloud when the window is resized</cod></td></tr><tr><td>steps</td><td>integer</td><td>10</td><td>Number of "steps" to map the words on, depending on their weight (see Colors &amp; sizes section)</td></tr><tr><td>classPattern</td><td>string</td><td>'w{n}'</td><td>Pattern used to generate the CSS class added to each word. <code>{n}</code> is replaced by the weight of the word (from 1 to <code>steps</code>)</td></tr><tr><td>afterCloudRender</td><td>function</td><td>null</td><td>Function called after the whole cloud is fully rendered. <code>this</code> is the container jQuery object</td></tr><tr><td>delay</td><td>integer</td><td>0 or 10</td><td>Number of milliseconds to wait between each word draw. Defaults to <code>10</code> if there are 50 words or more to avoid browser freezing during rendering. Can also be used for neat display animation!</td></tr><tr><td>shape</td><td>string</td><td>'elliptic'</td><td>Cloud shape, <code>'elliptic'</code> or <code>'rectangular'</code></td></tr><tr><td>removeOverflowing</td><td>boolean</td><td>true</td><td>Don't render words which would overflow the container</td></tr><tr><td>encodeURI</td><td>boolean</td><td>true</td><td>Encode special characters in words link</td></tr><tr><td>colors</td><td>array | function</td><td>[]</td><td>Colors used instead of CSS declaration (see Colors &amp; sizes section), can be:<ul><li>An array of colors from most to less important</li><li>A function taking a step number as only parameter and returning a valid CSS color</li></ul></td></tr><tr><td>fontSize</td><td>array | function</td><td>[]</td><td>Text sizes used instead of CSS declaration (see Colors &amp; sizes section), can be:<ul><li>An array of sizes (px, em or %) from most to less important</li><li>An object with <code>from</code> and <code>to</code> values, expressed in fraction of container width (eg: <code>0.1</code>, <code>0.04</code>)</li><li>A function taking the container width, the container height and a step number as parameters and returning a valid CSS font size</li></ul></td></tr></tbody></table>

## Colors & sizes

There are two ways to customize the cloud look and feel: pure CSS or JS configuration.

#### CSS customization

The plugin will add to each word of the cloud a CSS class based on `classPattern`. There will be `steps` classes. With the default configuration these classes are `w10, w9, w8, w7, w6, w5, w4, w3, w2, w1`.

The included CSS file jqcloud.css is intended as an example and a base on which you can develop your own style.

#### JS customization

colors and `fontSize` parameters to directly inform the plugin which style to apply to the words./p>

## Methods

### update

Use the update method to dynamically change the list of words in the cloud.

	var myInstance = FLUIGC.tagscloud('#cloud',words);
	myInstance.update(new\_words);

### destroy

Completely destroy the cloud and it's data.

	var myInstance = FLUIGC.tagscloud('#cloud',words);
	myInstance.destroy();

# Treeview

## Basic configuration

	FLUIGC.treeview(target, settings);

## Live demo

-   item1 with key and tooltip
-   item2
-   Folder _with some_ children
    -   Sub-item 3.1
        -   Sub-item 3.1.1
        -   Sub-item 3.1.2
    -   Sub-item 3.2
        -   Sub-item 3.2.1
        -   Sub-item 3.2.2
-   Document with some children (expanded on init)
    -   Sub-item 4.1 (active and focus on init)
        -   Sub-item 4.1.1
        -   Sub-item 4.1.2
    -   Sub-item 4.2
        -   Sub-item 4.2.1
        -   Sub-item 4.2.2

	<div id="myTreeview">
		<ul id="treeData" style="display: none;">
      <li id="id1" title="Look, a tool tip!">item1 with key and tooltip
      <li id="id2">item2
      <li id="id3" class="folder">Folder <em>with some</em> children
        <ul>
          <li id="id3.1">Sub-item 3.1
            <ul>
              <li id="id3.1.1">Sub-item 3.1.1
              <li id="id3.1.2">Sub-item 3.1.2
            </ul>
          <li id="id3.2">Sub-item 3.2
            <ul>
              <li id="id3.2.1">Sub-item 3.2.1
              <li id="id3.2.2">Sub-item 3.2.2
            </ul>
        </ul>
      <li id="id4" class="expanded">Document with some children (expanded on init)
        <ul>
          <li id="id4.1"  class="active focused">Sub-item 4.1 (active and focus on init)
            <ul>
              <li id="id4.1.1">Sub-item 4.1.1
              <li id="id4.1.2">Sub-item 4.1.2
            </ul>
          <li id="id4.2">Sub-item 4.2
            <ul>
              <li id="id4.2.1">Sub-item 4.2.1
              <li id="id4.2.2">Sub-item 4.2.2
            </ul>
        </ul>
    </ul>
	</div>

	var myTreeview = FLUIGC.treeview('#myTreeview');

### Creating treeviews with Developer Studio using the Style Guide

If you want to create forms using the style guide and add the treeview component, you'll need to import the minified CSS and JavaScript files.

	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-treeview.min.css">
	<script src="/style-guide/js/fluig-style-guide-treeview.min.js"></script>

### Using treeviews in widgets

To use treeviews in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigtreeview

## REST example

### Expected data

The ajax service is expected to return valid JSON data:

	\[{"title": "Node 1", "key": "1"},
	 {"title": "Folder 2", "key": "2", "folder": true, "children": \[
	    {"title": "Node 2.1", "key": "3"},
	    {"title": "Node 2.2", "key": "4"}
	  \]}
	\]

### Passing Tree Meta Data

It is possible to pass additional tree meta-data along with the list of children:

		{
		  foo: "bar",
		  baz: 17,
		  children: \[
		    {title: "Node 1", key: "1"},
		    {title: "Folder 2", key: "2", folder: true, children: \[
		      {title: "Node 2.1", key: "3"},
		      {title: "Node 2.2", key: "4"}
		      \]
		    }
		  \]
		}

The additional properties will be added to the trees `data` object:

		alert(tree.data.foo); // "bar"

### Handle custom data formats

To handle custom data formats (like the given example), the `formatData` callback allows to modify node data before it is added to the tree. `data` contains a reference to original data as returned by the ajax request. It may be modified in-place.

	var formatData = function(ev, data) {
		for (var i = 0; i < data.length; i++) {
			data.content\[i\].title = data.content\[i\].name;
			data.content\[i\].key = data.content\[i\].code;
		}
		return data.content;
	};

	var settings2 = {
		showCheckbox : false,
		source : {
			url : './sample-list',
			contentType : 'application/json',
			pattern : '',
			limit : 10,
			offset : 0
		},
		formatData : formatData
	};
	var myTreeview2 = FLUIGC.treeview('#myTreeview2', settings2);

## Example with array of objects, lazy load and drag n' drop

	<div id="myTreeview3"></div>

	var settings3 = {
		source : \[{
			title : "Planets",
			key : "1",
			folder : true,
			children : \[{
				title : "Mercury",
				key : "3",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Venus",
				key : "4",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Earth",
				key : "5",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Mars",
				key : "6",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Jupiter",
				key : "7",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Saturn",
				key : "8",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Uranus",
				key : "9",
				iconclass : "fluigicon fluigicon-globe"
			}, {
				title : "Neptune",
				key : "10",
				iconclass : "fluigicon fluigicon-globe"
			}\]
		}, {
			title : "Countries",
			key : "2",
			folder : true,
			lazy : true
		}\],
		formatData : formatData,
		lazyLoad : function(event, data) {
			console.log(data.node);
			data.result = {
				url : "./sample-list",
				contentType : 'application/json',
				data : {
					//Your options to the rest service
				}
			};
		},
		draggable: {
			enabled: true,
			onDrop : function(node, data) {
				console.log(node);
				console.log(data);
				return true;
			}
		}
	};
	var myTreeview3 = FLUIGC.treeview('#myTreeview3', settings3);

## Applying style to the dragging element

	<div id="myTreeview4"></div>

	var settings4 = {
		showCheckbox: false,
		source: {
			url: './sample-list',
			contentType: 'application/json',
			pattern: '',
			limit: 10,
			offset: 0
		},
		formatData: formatData,
		draggable: {
			enabled: true,
			onDragStart: function (node, data) {
				// Apply the bg-success class to the dragging element
				node.span.children\[2\].classList.add('bg-success');
			}
		}
	};
	var myTreeview4 = FLUIGC.treeview('#myTreeview4', settings4);

## Treeview options

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default value</th><th class="col-xs-6">Description</th></tr></thead><tbody><tr><td>icons</td><td>Object</td><td>As shown in the example code above</td><td>Allows to modify the default treeview icons.</td></tr><tr><td>draggagle</td><td>Object</td><td><code>{enabled : false, onDrop : null, onDragStart : null, onDragEnter : null }</code></td><td>Receives an object to manage or drag and drop elements. Read the detailed documentation (Treeview draggagle option) below.</td></tr><tr><td>source</td><td>Array or Object</td><td>null</td><td>The array of objects or the Ajax settings object.</td></tr><tr><td>showIcons</td><td>Boolean</td><td>true</td><td>Show or hide icons.</td></tr><tr><td>keyboard</td><td>Boolean</td><td>true</td><td>Allows navigation with the keyboard.</td></tr><tr><td>multiSelect</td><td>Boolean</td><td>false</td><td>Allows multiple selection.</td></tr><tr><td>formatData</td><td>Object</td><td>null</td><td>Allows to modify node data before it is added to the tree. <code>data</code> contains a reference to original data as returned by the ajax request.</td></tr><tr><td>lazyLoad</td><td>function</td><td>null</td><td>Single nodes may be marked 'lazy'. These nodes will generate ajax request when expanded for the first time. Lazy loading allows to present hierarchical structures of infinite size in an efficient way.</td></tr></tbody></table>

## Treeview draggagle option

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default value</th><th class="col-xs-6">Description</th></tr></thead><tbody><tr><td>enabled</td><td>Boolean</td><td>false</td><td>Allows drag and drop.</td></tr><tr><td>onDragStart</td><td>function</td><td>null</td><td>Method called when starting drag and drop.</td></tr><tr><td>onDragEnter</td><td>function</td><td>null</td><td>Method called when passing the dragged element over another element.</td></tr><tr><td>onDrop</td><td>function</td><td>null</td><td>Method called when dropping the dragged element onto another element.</td></tr></tbody><tbody></tbody></table>

	var settings = {
		icons : {
			doc : "fluigicon fluigicon-file",
			docOpen : "fluigicon fluigicon-file",
			checkbox : "fluigicon fluigicon-unchecked",
			checkboxSelected : "fluigicon fluigicon-checked",
			checkboxUnknown : "fluigicon fluigicon-share",
			dragHelper : "fluigicon fluigicon-play",
			dropMarker : "fluigicon fluigicon-arrow-right",
			error : "fluigicon fluigicon-warning-sign",
			expanderClosed : "fluigicon fluigicon-plus-sign",
			expanderLazy : "fluigicon fluigicon-plus-sign", // fluigicon-expand
			expanderOpen : "fluigicon fluigicon-minus-sign", // fluigicon-collapse-down
			folder : "fluigicon fluigicon-folder-close",
			folderOpen : "fluigicon fluigicon-folder-open",
			loading : "fluigicon fluigicon-time"
		},
		draggable : {
			enabled : false,
			onDrop : null
		}
		source : null,
		showIcons : true,
		showCheckbox : false,
		keyboard : true,
		multiSelect : true,
		formatData : null,
		lazyLoad : null
	}

## Node options

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th class="col-xs-6">Description</th></tr></thead><tbody><tr><td>children</td><td>Array</td><td>Optional array of child nodes.</td></tr><tr><td>data</td><td>Object</td><td>All unknown properties from constructor will be copied to 'node.data'.</td></tr><tr><td>expanded</td><td>Boolean</td><td>Initial expansion state.</td></tr><tr><td>focus</td><td>Boolean</td><td>(Initialization only, but will not be stored with the node).</td></tr><tr><td>folder</td><td>Boolean</td><td>Folders have different default icons.</td></tr><tr><td>hideCheckbox</td><td>Boolean</td><td>Remove checkbox for this node.</td></tr><tr><td>icon</td><td>Boolean | String</td><td>Boolean value overrides the tree option of the same name. A string value is used as 'src' attribute for a <code>img</code> tag.</td></tr><tr><td>iconclass</td><td>String</td><td>Class names added to the node icon markup to allow custom icons or glyphs (separate with space, e.g. "fluigicon fluigicon-user").</td></tr><tr><td>key</td><td>String</td><td>Unique key for this node (auto-generated if omitted)</td></tr><tr><td>lazy</td><td>Boolean</td><td>Lazy folders call the 'lazyLoad' on first expand to load their children.</td></tr><tr><td>selected</td><td>Boolean</td><td>Initial selection state.</td></tr><tr><td>title</td><td>String</td><td>Node text (may contain HTML tags).</td></tr><tr><td>tooltip</td><td>String</td><td>Will be added as 'title' attribute, thus enabling a tooltip.</td></tr><tr><td>unselectable</td><td>Boolean</td><td>Prevent selection using mouse or keyboard.</td></tr></tbody></table>

## Events

### fluig.treeview.activate

'data.content.node' was activated.

	myTreeview.on('fluig.treeview.activate', function(data){
		console.log(data.content);
	});

### fluig.treeview.beforeActivate

'data.content.node' is about to be (de)activated. Return `false` to prevent default processing.

	myTreeview.on('fluig.treeview.beforeActivate', function(data){
		console.log(data.content);
	});

### fluig.treeview.beforeExpand

'data.content.node' is about to tbe collapsed/expanded. Return `false` to prevent default processing.

	myTreeview.on('fluig.treeview.beforeExpand', function(data){
		console.log(data.content);
	});

### fluig.treeview.beforeSelect

'data.content.node' is about to tbe (de)selected. Return `false` to prevent default processing.

	myTreeview.on('fluig.treeview.beforeSelect', function(data){
		console.log(data.content);
	});

### fluig.treeview.blur

'data.content.node' lost keyboard focus.

	myTreeview.on('fluig.treeview.blur', function(data){
		console.log(data.content);
	});

### fluig.treeview.blurTree

'data.content.tree' lost keyboard focus.

	myTreeview.on('fluig.treeview.blurTree', function(data){
		console.log(data.content);
	});

### fluig.treeview.click

'data.content.node' was clicked. Return `false` to prevent default processing, i.e. activating, expanding, selecting, etc.

	myTreeview.on('fluig.treeview.click', function(data){
		console.log(data.content);
	});

### fluig.treeview.collapse

'data.content.node' was collapsed.

	myTreeview.on('fluig.treeview.collapse', function(data){
		console.log(data.content);
	});

### fluig.treeview.dblclick

'data.content.node' was double-clicked. Return `false` to prevent default processing, i.e. expanding, etc.

	myTreeview.on('fluig.treeview.dblclick', function(data){
		console.log(data.content);
	});

### fluig.treeview.deactivate

'data.content.node' was deactivated.

	myTreeview.on('fluig.treeview.deactivate', function(data){
		console.log(data.content);
	});

### fluig.treeview.expand

'data.content.node' was expanded.

	myTreeview.on('fluig.treeview.expand', function(data){
		console.log(data.content);
	});

### fluig.treeview.focus

'data.content.node' received keyboard focus.

	myTreeview.on('fluig.treeview.focus', function(data){
		console.log(data.content);
	});

### fluig.treeview.focusTree

'data.content.tree' received keyboard focus.

	myTreeview.on('fluig.treeview.focusTree', function(data){
		console.log(data.content);
	});

### fluig.treeview.loadChildren

Node data was loaded.

	myTreeview.on('fluig.treeview.loadChildren', function(data){
		console.log(data.content);
	});

### fluig.treeview.loadError

A load error occurred. Return `false` to prevent default processing.

	myTreeview.on('fluig.treeview.loadError', function(data){
		console.log(data.content);
	});

### fluig.treeview.select

'data.content.node' was selected.

	myTreeview.on('fluig.treeview.select', function(data){
		console.log(data.content);
	});
