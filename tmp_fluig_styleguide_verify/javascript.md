# JavaScript

**Fonte:** [https://style.fluig.com/javascript.html](https://style.fluig.com/javascript.html)
**Seção:** javascript
**Subseções detectadas:** 92

## Navegação interna

- [Name of Category 1 10](#collapseCategory1)
- [Name of subCategory 1 from Category 1 6](#collapseSubCat1)
- [Name of subSubCategory 1 from subCategory 1 6](#collapseSubSubCat1)
- [Name of subCategory 2 from Category 1 2](#collapseSubCat2)
- [Name of Category 2 2](#collapseCategory2)
- [Default Collapse](#default-collapse-tab)
- [Collapsible Group Item #1](#collapseOne)
- [Collapsible Group Item #2](#collapseTwo)
- [Collapsible Group Item #3](#collapseThree)
- [Collapsible Group Item 1](#collapseOneExemple)
- [Collapsible Group Item 2](#collapseTwoExemple)
- [Collapsible Group Item 3](#collapseThreeExemple)
- [isolated scroll](#isolated-scroll)
- [Home](#home)
- [Profile](#profile)
- [@fat](#dropdown1)
- [@mdo](#dropdown2)
- [Tab 1](#tab1)
- [Tab 2](#tab2)
- [Tab 3](#tab3)
- [Super Widget](#super-widget)
- [Autocomplete](#fluig-autocomplete)
- [Back To Top](#back-to-top)
- [Back To Bottom](#back-to-bottom)
- [Buttons](#buttons)
- [Example uses](#buttons-examples)
- [Usage](#buttons-usage)
- [Calendar](#fluig-calendar)
- [Examples](#fluig-calendar-examples)
- [Collapse](#collapse)
- [Example accordion](#collapse-examples)
- [Usage](#collapse-usage)
- [Continuous Scroll](#fluig-continuous-scroll)
- [Examples](#fluig-continuous-scroll-examples)
- [Usage](#fluig-continuous-scroll-usage)
- [Copy](#fluig-copy)
- [Examples](#fluig-copy-examples)
- [Confirm, Alert and Error messages](#alerts)
- [Example confirms](#alerts-examples)
- [Example error messages](#error-examples)
- [Datatable](#fluig-datatable)
- [Examples](#fluig-datatable-examples)
- [Usage](#fluig-datatable-usage)
- [Dropdowns](#dropdowns)
- [Examples](#dropdowns-examples)
- [Usage](#dropdowns-usage)
- [Desktop Notification](#desktop-notification)
- [Editable](#editable)
- [Input form with clear](#input-form-clear)
- [Loading](#fluig-loading)
- [Examples](#fluig-loading-examples)
- [Modals](#modals)
- [Basic configuration](#modals-basic-config)
- [Examples](#modals-examples)
- [Usage](#modals-usage)
- [Header actions](#modals-header-actions)
- [Modal without header and footer](#modals-without-header-and-footer)
- [Optional sizes](#modals-optional-sizes)
- [Message Page](#messagepage)
- [Password](#password)
- [Periodical Executor](#periodicalExecutor)
- [Popover](#popover)
- [Examples](#popover-examples)
- [Usage](#popovers-usage)
- [Allowed Tags and Attributes in content](#allowed-tags-and-attributes)
- [Sidebar](#sidebar)
- [About](#sidebar-about)
- [Usage](#sidebar-usage)
- [Examples](#sidebar-examples)
- [Sliders](#slider)
- [Examples](#slider-examples)
- [Storage](#storage)
- [Switch button](#switch-button)
- [Examples](#toast-examples)
- [Time Interaction](#time-interaction)
- [Toast](#toast)
- [Usage](#toast-usage)
- [Togglable tabs](#tabs)
- [Example tabs](#tabs-examples)
- [Usage](#tabs-usage)
- [Tooltip](#tooltip)
- [Basic example](#tooltip-example)
- [Four directions](#tooltip-example-directions)
- [Utilities](#utilities)
- [About](#utilities-about)
- [Usage](#utilities-usage)
- [.scrollTo(target, duration)](#scroll-to)
- [Wizard Modal](#wizard-modal)
- [Basic configuration](#wizard-modal-basic-config)
- [Examples](#wizard-modal-examples)
- [Usage](#wizard-modal-usage)
- [Loading Html Element Example](#loading-html-element-example)

---

# Super Widget

The Super Widget wraps many common behaviors at the client side development of widgets, which proposes a standard development for both client side and server side developers.

## Introduction

Super Widget works as a JavaScript super class, most like the class inheritance of Java or any other Object Oriented Language.

To create widgets, in one of the steps the developer might create one or more JavaScript files to communicate with the server side and ensure that the loaded widget have an unique instance.

Super Widget has been created to prevent repeated code and ensure good practices of JavaScript development (avoiding that each developer codes the JS file in his own way).

## Basic Structure

var MyWidget = SuperWidget.extend({

	//method triggered when the widget loads
	init: function() {
	},
 
	//widget variables
	instanceId: null,
	DOM: null,
 
	//standard function of the widget
	someFunc: function() {
	}
});

Once the widget `MyWidget` is created, you'll have just to instance it. The example below shows a widget created in a `.ftl` file, inside a slot of a `layout.ftl` file:

<div id="myWidget\_${instanceId}" class="fluig-style-guide wcm-widget-class super-widget" data-params="MyWidget.instance({param1: ${p1}})">
    <!--widget body -->
</div>

Understanding each attribute

#### The id

id="myWidget\_${instanceId}"

#### ID Standard

The id attribute needs to be formatted as `nome_${instanceId}`. The function `loadWidgets()` (more detailed below) parses this values and use them on the widget instance.

#### The data-params

data-params="MyWidget.instance({param1: ${p1}})"

#### `data-params` attribute

The data-params attribute holds the JavaScript code that instantiates the widget.

The widget name must be indicated just following the instance method.

The method param `instance` is optional. If filled, it needs to be an object `{}` and each of it's attributes **will be attributes of the instance** of the widget.

For example, if you instantiate your widget like this:

#### Widget instance example:

<div id="socialPoster\_${instanceId}" class="fluig-style-guide wcm-widget-class super-widget" data-params="SocialPoster.instance({alias: 'Willian'})">
    <!--widget body -->
</div>

The instance `socialPoster_233` will be crated. So, the "alias" attribute can be reached like this:

#### Widget instance result example:

var alias = socialPoster\_233.alias;

## Bindings

The **Super Widget** proposes an unique and transparent way of binding events to HTML elements. The advantages of this technique is that, if a better binding way comes up, the developer might not need to change it's code, that will be changed in the **Super Widget** core.

The example below associates the function `saveUser()` to the element `<button data-save-user>` once it's clicked:

#### Binding example

var MyWidget = SuperWidget.extend({
	bindings: {
		local: {
			'save-user': \['click\_saveUser'\]
		},
		global: {}
	},

	...

	/\*
	el: Object of the HTML element
	ev: Object of the event triggered
	\*/
	saveUser: function(el, ev) {
		//your code here
	}
});

The **Super widget** has two objects inside the `bindings` object, called `local` and `global`.

Inside these objects we can have bindings with the key/value format, writing the element `data` attribute as the key, and an array of strings as the value.

Each element in the set of the array must have an event (like, `click`, `keyup`, etc.) followed by an underline (`_`) and the name of the function that will be triggered. In our example: `click_saveUser`.

Each function specified in this array must be declared inside the widget function, as showed in the example above. The bindings functions of the **Super Widget** always have two objects: `el` e `ev`. The first one is the pure element object (no jQuery here), and the second one is the object of the event.

Inside this context, the reference `this` refers to the instance of the widget. So, if you call the function `validateData()` inside your bindings function, for example, you can use `this.validateData()`.

### Local object

For performance reasons, when binding inside the local object, the **Super Widget** searchs for elements inside the `<div>` element of the widget, which is faster than searching the whole HTML document.

Local bindings are the most common use in widgets.

### Global object

Bindings inside the global objects tells the **Super Widget** to search for the element in the whole HTML document.

There are basically two situations for global bindings:

-   In case the developer needs to reach an element outside the scope of the widget;
-   Components or plugins limitations. For example, reaching an element inside a modal.

## Working with REST

Most of the `REST` services have a JavaScript map created by the `WCM`. The **Super Widget** has an alias for these functions.

But keep in mind that `REST` services that don't have maps created by the `WCM` must be called explicity as `AJAX`.

The **Super Widget** creates two functions to work with `REST` services:

-   **this.rest** (recommended): Makes an asynchronous call to the server;
-   **this.restSync** (not recommended): Makes a synchronous call to the server.

#### Example: **this.rest**

saveUser: function(el, ev) {
	var username = $('#username').val(),
		email = $('#email').val(),
		service = SocialAPI.UserService.SAVE,
		options = \[username, email\];

	this.rest(service, options, function(data) {
		//success!
	}, function(err, txt, status) {
		//error saving data
	});
}

Note that the rest function has 4 arguments:

-   **service:** The service object mapped by `WCM`;
-   **options:** The data expected to be returned by `REST` service in the format of an array of elements;
-   **successCallback:** Function triggered when the operation performs successfully;
-   **errorCallback:** Function triggered to handle fails (optional).

#### Example: **this.restSync**

saveUser: function(el, ev) {
	var username = $('#username').val(),
		email = $('#email').val(),
		service = SocialAPI.UserService.SAVE,
		options = \[username, email\],
		response;

	try {
		response = this.restSync(service, options);
		//do anything with the response
	} catch(err) {
		//error handling
	}
}

The restSync function has only two arguments:

-   **service:** The service object mapped by `WCM`;
-   **options:** The data expected to be returned by `REST` service in the format of an array of elements;

As it is synchronous, an error callback function is not necessary. You might use try/catch.

# Autocomplete

Autocomplete and Tags Input are jQuery plugins providing a Style Guide user interface to manage autocomplete and tags.

## Basic configuration

	FLUIGC.autocomplete(target, options, callback);

## Live demo with Tag and Autocomplete

Search states of EUA. Ex. California 

### Usage

#### In HTML

	<input type="text" class="form-control" id="exampleTagAutocomplete">

#### In JavaScript

	var myTagAutocomplete = FLUIGC.autocomplete('#exampleTagAutocomplete', {
		source: {
			url: 'myrest/list',
			limit: 10,
			offset: 0,
			root: 'content'
		},
		displayKey: 'description',
		type: 'tagAutocomplete'
	});

## Live demo without rest call

Search states of EUA. Ex. California 

### Usage

#### In HTML

    <input type="text" class="form-control" id="exampleAutocomplete">

#### In JavaScript

	$(document).ready(function () {

		/\* Local data \*/
		var states = \[
			'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
			'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
			'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
			'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
			'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
			'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
		\];

		/\* Instantiated new autocomplete \*/
		var myAutocomplete = FLUIGC.autocomplete('#exampleAutocomplete', {
			source: substringMatcher(states),
			name: 'cities',
			displayKey: 'description',
			type: 'tagAutocomplete'
		});
	});

	/\* Function used to filter the data \*/
	function substringMatcher(strs) {
		return function findMatches(q, cb) {
			var matches, substrRegex;

			matches = \[\];

			substrRegex = new RegExp(q, 'i');

			$.each(strs, function (i, str) {
				if (substrRegex.test(str)) {
					matches.push({
						description: str
					});
				}
			});
			cb(matches);
		};
	}

## Live full demo

Search repositories in GitHub. Ex. fluig 

### Usage

#### In HTML

	<input type="text" class="form-control" id="exampleFullTagAutocomplete">
	
	<!-- Templates -->
	<script type="text/template" class="tag-example-template">
		<img width="14" height="14" src="{{owner.avatar\_url}}"> {{full\_name}} - <i>Forks: {{forks\_count}}</i>
	</script>
	
	<script type="text/template" class="suggestion-example-template">
		<img width="14" height="14" src="{{owner.avatar\_url}}"> {{full\_name}} - <i>Forks: {{forks\_count}}</i>
	</script>

#### In JavaScript

	var fullTagAutocomplete = FLUIGC.autocomplete('#exampleFullTagAutocomplete', {
		highlight: true,
		minLength: 1,
		hint: true,
		searchTimeout: 100,
		type: 'tagAutocomplete',
		name: 'cities',
		tagClass: 'tag-warning',
		maxTags: 3,
		allowDuplicates: false,
		onTagExists: function (item, tag) {
			FLUIGC.toast({
				message: 'This tag already exists',
				type: 'danger'
			});
			$(tag).hide().fadeIn();
		},
		onMaxTags: function (item, tag) {
			FLUIGC.toast({
				message: 'You have reached the maximum number of tags.',
				type: 'danger'
			});
		},
		displayKey: 'name',
		templates: {
			tag: '.tag-example-template',
			suggestion: '.suggestion-example-template'
		},
		source: {
			url: 'https://api.github.com/search/repositories',
			limit: 10,
			offset: 0,
			limitKey: 'limit',
			patternKey: 'q',
			root: 'items'
		},
		tagRemoveCss: {
			'margin': '5px 0 0 8px'
		},
		tagMaxWidth: 400
	}, function (err, data) {
		// something with err or data.
		if (err) {
			try {
				errMessage = JSON.parse(err.responseText.message);
				errMessage = errMessage.message ? err.responseText.message : err.responseText;
			} catch (e) {
				errMessage = 'Could not list the repositories.';
			}
			FLUIGC.toast({
				message: errMessage,
				type: 'danger'
			});
		}
	});

#### We recommend that the REST service is built considering the parameters of paging, searching and sorting.

http://SERVER:PORT/application?offset=0&limit=20&orderby=NAME\_ASC&pattern=yourtext

## Live demo only Autocomplete

Search repositories in GitHub. Ex. fluig 

### Usage

#### In HTML

	<input type="text" class="form-control" id="exampleAutocomplete1">

#### In JavaScript

	var myAutocomplete = FLUIGC.autocomplete('#exampleAutocomplete1', {
		source: {
			url: 'https://api.github.com/search/repositories',
			limit: 10,
			offset: 0,
			limitKey: 'limit',
			patternKey: 'q',
			root: 'items'
		},
		highlight: true,
		displayKey: 'description',
		type: 'autocomplete'
	});

## Live demo only Tags

Type something and then press "," or "enter" to create a tag. 

### Basic usage

#### In HTML

	<input type="text" class="form-control" id="exampleTag">

#### In JavaScript

	var myTag = FLUIGC.autocomplete('#exampleTag', {
		tagClass: 'tag-primary'
	});

### State tags

It is possible to change the color of the tag using the style-guide states, passing the class of the desired state in the "tagClass" parameter.

Tag default 

Tag primary 

Tag success 

Tag danger 

Tag info 

Tag warning 

Tag neutral 

## Example using input group button with Tag Autocomplete

Valor

-   Valor1
-   Valor2
-   Valor3

### Usage

#### In HTML

	<div class="input-group">
		<div class="input-group-btn">
			<button type="button" class="btn btn-primary dropdown-toggle" id="btn-autocomplete-value" data-toggle="dropdown">
				Valor
				<span class="flaticon flaticon-chevron-down icon-xs"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<li class="fs-cursor-pointer"><a>Valor1</a></li>
				<li class="fs-cursor-pointer"><a>Valor2</a></li>
				<li class="fs-cursor-pointer"><a>Valor3</a></li>
			</ul>
		</div>
		<input type="text" class="form-control" id="exampleInputGroupTagAutocomplete">
	</div>

	var myTag = FLUIGC.autocomplete('#exampleInputGroupTagAutocomplete', {
		source: substringMatcher(states),
		name: 'cities',
		displayKey: 'description',
		highlight: true,
		type: 'tagAutocomplete'
	});

## Example using input group button with Autocomplete

Valor

-   Valor1
-   Valor2
-   Valor3

### Usage

#### In HTML

	<div class="input-group">
		<div class="input-group-btn">
			<button type="button" class="btn btn-primary dropdown-toggle" id="btn-autocomplete-value" data-toggle="dropdown">
				Valor
				<span class="flaticon flaticon-chevron-down icon-xs"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<li class="fs-cursor-pointer"><a>Valor1</a></li>
				<li class="fs-cursor-pointer"><a>Valor2</a></li>
				<li class="fs-cursor-pointer"><a>Valor3</a></li>
			</ul>
		</div>
		<input type="text" class="form-control" id="exampleInputGroupAutocomplete">
	</div>

	var myTag = FLUIGC.autocomplete('#exampleInputGroupAutocomplete', {
		source: substringMatcher(states),
		name: 'cities',
		displayKey: 'description',
		highlight: true,
		type: 'autocomplete'
	});

## Options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">required</th><th style="width: 18%;">type</th><th style="width: 18%;">default</th><th>Description</th></tr></thead><tbody><tr><td>type</td><td>false</td><td>string</td><td>'tag'</td><td>Type of component. Availables: tag, autocomplete and tagAutocomplete.</td></tr><tr><td>displayKey</td><td>Required in type autocomplete and tagAutocomplete.</td><td>string</td><td>'value'</td><td>For a given suggestion object, determines the string representation of it. This will be used when setting the value of the input control after a suggestion is selected. Can be either a key string or a function that transforms a suggestion object into a string.</td></tr><tr><td>templates</td><td>false</td><td>object</td><td>undefined</td><td>Receives an object containing the dial to the template tags, suggestions and tip message.</td></tr><tr><td>source</td><td>true</td><td>object or function</td><td>undefined</td><td>Receives an object with the settings for the listing service or a function that returns an array of objects.</td></tr><tr><td>searchTimeout</td><td>false</td><td>number</td><td>200</td><td>Receives the waiting time to make the request. This is important not to open a request for each character typed.</td></tr><tr><td>highlight</td><td>false</td><td>boolean</td><td>false</td><td>If true, when suggestions are rendered, pattern matches for the current query in text nodes will be wrapped in a strong element with tt-highlight class.</td></tr><tr><td>minLength</td><td>false</td><td>number</td><td>1</td><td>The minimum character length needed before suggestions start getting rendered.</td></tr><tr><td>hint</td><td>false</td><td>boolean</td><td>true</td><td>If false, the Autocomplete will not show a hint.</td></tr><tr><td>tagClass</td><td>false</td><td>string or function</td><td>'tag-primary'</td><td>Classname for the tags, or a function(item) returning a classname.</td></tr><tr><td>maxTags</td><td>false</td><td>number</td><td>undefined</td><td>When set, no more than the given number of tags are allowed to add. When maxTags is reached, a class 'bootstrap-tagsinput-max' is placed on the Autocomplete element.</td></tr><tr><td>allowDuplicates</td><td>false</td><td>boolean</td><td>false</td><td>When true, the same tag can be added multiple times.</td></tr><tr><td>onTagExists</td><td>false</td><td>function</td><td>function(item, $tag) { $tag.hide().fadeIn(); }</td><td>Function invoked when trying to add an item which allready exists. By default, the existing tag hides and fades in.</td></tr><tr><td>onMaxTags</td><td>false</td><td>function</td><td>undefined</td><td>Function invoked when trying to add a tag and already there is a maximum number of added tags.</td></tr><tr><td>name</td><td>Optional in type autocomplete and tagAutocomplete.</td><td>string</td><td>undefined</td><td>The name of the dataset.</td></tr><tr><td>tagRemoveCss</td><td>Optional in type tag and tagAutocomplete.</td><td>object</td><td>undefined</td><td>Object with css formatting to be applied to the element remove.</td></tr><tr><td>tagMaxWidth</td><td>Optional in type tag and tagAutocomplete.</td><td>string or number</td><td>200</td><td>Maximum size of the tag (without regard to remove).</td></tr><tr><td>autoLoading</td><td>Optional in type autocomplete and tagAutocomplete.</td><td>boolean</td><td>true</td><td>When you enter you see a loading in the field.</td></tr></tbody></table>

## Methods for tagAutocomplete and tag type

### .add(data)

Adds a tag.

	var tagData = {
		description: 'Arizona'
	};
	myTagAutocomplete.add(tagData);

### .update(data)

Updates a tag.

	var tagData = {
		description: 'Arizona'
	};
	myTagAutocomplete.update(tagData);

### .remove(data)

Removes a tag.

	var tagData = {
		description: 'Arizona'
	};
	myTagAutocomplete.remove(tagData);

### .removeAll()

Removes all tags.

	myTagAutocomplete.removeAll();

### .focus()

Sets focus in the Autocomplete.

	myTagAutocomplete.focus();

### .input()

Returns the Autocomplete's internal <input />, which is used for adding tags. You could use this to add your own Autocomplete behaviour for example.

	myTagAutocomplete.input();

### .refresh()

Refreshes the tags input UI. This might be usefull when you're adding objects as tags. When an object's text changes, you'll have to refresh to update the matching tag's text.

	myTagAutocomplete.refresh();

### .destroy()

Removes Autocomplete behaviour.

	myTagAutocomplete.destroy();

### .items()

Return tags items in input.

	myTagAutocomplete.items();

## Methods for Autocomplete type

### .destroy()

Removes Autocomplete functionality and reverts the input element back to its original state.

	myAutocomplete.destroy();

### .open()

Opens the dropdown menu of Autocomplete. Note that being open does not mean that the menu is visible. The menu is only visible when it is open and has content.

	myAutocomplete.open();

### .close()

Closes the dropdown menu of Autocomplete.

	myAutocomplete.close();

### .val()

Returns the current value of the Autocomplete. The value is the text the user has entered into the input element.

	myAutocomplete.val();

### .val(val)

Sets the value of the Autocomplete. This should be used in place of .val().

	var myValue = 'Alabama';
	myAutocomplete.val(myValue);

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th style="width: 25%;">Available for</th><th>Description</th></tr></thead><tbody><tr><td>fluig.autocomplete.cursorchanged</td><td>autocomplete and tagAutocomplete.</td><td>Triggered when the dropdown menu cursor is moved to a different suggestion.</td></tr><tr><td>fluig.autocomplete.opened</td><td>autocomplete and tagAutocomplete.</td><td>Triggered when the dropdown menu of a autocomplete is opened.</td></tr><tr><td>fluig.autocomplete.closed</td><td>autocomplete and tagAutocomplete.</td><td>Triggered when the dropdown menu of a autocomplete is closed.</td></tr><tr><td>fluig.autocomplete.selected</td><td>autocomplete and tagAutocomplete.</td><td>Triggered when a suggestion from the dropdown menu is selected.</td></tr><tr><td>fluig.autocomplete.autocompleted</td><td>autocomplete and tagAutocomplete.</td><td>Triggered when the query is autocompleted. Autocompleted means the query was changed to the hint.</td></tr><tr><td>fluig.autocomplete.beforeItemAdd</td><td>tag and tagAutocomplete.</td><td>Triggered just before an item gets added.</td></tr><tr><td>fluig.autocomplete.itemAdded</td><td>tag and tagAutocomplete.</td><td>Triggered just after an item got added.</td></tr><tr><td>fluig.autocomplete.beforeItemUpdate</td><td>tag and tagAutocomplete.</td><td>Triggered just before an item gets updated.</td></tr><tr><td>fluig.autocomplete.itemUpdated</td><td>tag and tagAutocomplete.</td><td>Triggered just after an item got updated.</td></tr><tr><td>fluig.autocomplete.beforeItemRemove</td><td>tag and tagAutocomplete.</td><td>Triggered just before an item gets removed.</td></tr><tr><td>fluig.autocomplete.itemRemoved</td><td>tag and tagAutocomplete.</td><td>Triggered just after an item got removed.</td></tr></tbody></table>

#### Get data of the selected item.

All events receive as argument the 'event' object. In it is contained the 'item' attribute to the information of the selected element.

#### Getting item object and tagClass to make any changes using SuperWidget

	var widgetExample = SuperWidget.extend({
		myAutocomplete: null,
		bindings: {
			local: {
				'my-tag-autocomplete': \['fluig.autocomplete.itemAdded\_someFunc'\]
			}
		},
		init: function () {
			this.myTagAutocomplete = FLUIGC.autocomplete('#my-tag-autocomplete', {
				...
				// comp config
				...
			});
		},
		someFunc: function (el, ev) {
			var that = this,
				item = ev.item
				;

			// method can access that returns a boolean
			this.serviceCanAccess(function (canAccess) {
				if (canAccess) {
					item.tagClass = 'tag tag-success';
				} else {
					item.tagClass = 'tag tag-danger';
				}

				// updates the tag with the new tag class
				that.myTagAutocomplete.update(item);
			});
		}
	});

# Back To Top

Scroll Back to Top is a plugin to add a button that appears only when users scroll down the page allowing them to scroll to the top of the page.

## Javascript

	var myVar = FLUIGC.backToTop(options);

## Examples

### Basic configuration

By default, the component does not require any initial setup, simply initializes it as in the example below.

	var myComp = FLUIGC.backToTop();

### Advanced configuration

	var myComp = FLUIGC.backToTop({
		offset: 250,
		width: '200px',
		height: '50px',
		style: 'danger',
		opacity: .8,
		horizontalAlign: 'center',
		verticalAlign: 'bottom',
		horizontalDistance: '15px',
		verticalDistance: '15px',
		iconType: 'fluigicon-arrow-up',
		labelType: '',
		buttonSize: 'md',
		iconSize: 'sm',
		scrollDuration: 500,
		fadeDuration: 500,
		zIndex: 1050,
		scrollTo: 'body',
		scrollToOffset: 0
	});

### Basic configuration listening events

	var myComp = FLUIGC.backToTop({
		horizontalAlign: 'left',
		offset: 400
	});
	
	myComp.on('fsshow.backtotop', function(ev) {
		// code
	});

### Basic configuration invoking methods

	var myComp = FLUIGC.backToTop({
		horizontalAlign: 'left',
		offset: 400
	});
	
	// toogle component
	myComp.toogle();

## Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 15%;">Type</th><th style="width: 15%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>offset</td><td>number</td><td>100</td><td>Distance from the top of the page where the button will be shown or hidden.</td></tr><tr><td>width</td><td>string</td><td>'auto'</td><td>Button width.</td></tr><tr><td>height</td><td>string</td><td>'auto'</td><td>Button height.</td></tr><tr><td>style</td><td>string</td><td>'primary'</td><td>Button style <code>'default', 'primary', 'success', 'info', 'warning', 'danger' or 'link'</code>.</td></tr><tr><td>opacity</td><td>number</td><td>1</td><td>Opacity button.</td></tr><tr><td>horizontalAlign</td><td>string</td><td>'right'</td><td>Horizontal position button <code>'left', 'center' or 'right'</code>.</td></tr><tr><td>verticalAlign</td><td>string</td><td>'bottom'</td><td>Vertical position button <code>'top' or 'bottom'</code>.</td></tr><tr><td>horizontalDistance</td><td>string</td><td>'15px'</td><td>Horizontal button distance from the corner of the window.</td></tr><tr><td>verticalDistance</td><td>string</td><td>'15px'</td><td>Vertical button distance from the corner of the window.</td></tr><tr><td>iconType</td><td>string</td><td>'fluigicon-arrow-up'</td><td>Class icon that appears on the button.</td></tr><tr><td>labelType</td><td>string</td><td>''</td><td>Text that appears on the button.</td></tr><tr><td>buttonSize</td><td>string</td><td>'md'</td><td>Button size <code>'lg', 'md', 'sm' or 'xs'</code>.</td></tr><tr><td>iconSize</td><td>string</td><td>'sm'</td><td>Size icon <code>'xs', 'sm', 'md', 'lg', 'xl', 'txs', 'tsm', 'tmd' or 'tlg'</code>.</td></tr><tr><td>scrollDuration</td><td>number</td><td>500</td><td>Duration of the scroll animation time.</td></tr><tr><td>fadeDuration</td><td>number</td><td>500</td><td>Duration of the button display animation time.</td></tr><tr><td>zIndex</td><td>number</td><td>1050</td><td>Button z-index.</td></tr><tr><td>scrollTo</td><td>string</td><td>'body'</td><td>Element in which the plugin is based to position the top of the scroll.</td></tr><tr><td>scrollToOffset</td><td>number</td><td>0</td><td>Distance from the top in relation to the scrollTo setting element.</td></tr></tbody></table>

## Methods

### .on(event, callback)

Attach an event handler function for events to the component.

	myComp.on('fsshow.backtotop', function(ev) {
		// DO SOMETHING
	});

### .show()

Shows the button.

	myComp.show();

### .hide()

Hide the button.

	myComp.hide();

### .toggle()

Toogle the button.

	myComp.toggle();

### .destroy()

Destroy the button instance.

	myComp.destroy();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fsshown.backtotop</td><td>This event fires immediately when the show instance method is called.</td></tr><tr><td>fsshow.backtotop</td><td>This event is fired when the component has been made visible to the user (will wait for CSS transitions to complete).</td></tr><tr><td>fshidden.backtotop</td><td>This event is fired immediately when the hide instance method has been called.</td></tr><tr><td>fshide.backtotop</td><td>This event is fired when the component has finished being hidden from the user (will wait for CSS transitions to complete).</td></tr><tr><td>fsclick.backtotop</td><td>This event is fired when the component is clicked.</td></tr><tr><td>fsstartscroll.backtotop</td><td>This event is fired when the scroll animations is initialized.</td></tr><tr><td>fsendscroll.backtotop</td><td>This event is fired when the scroll animations is finalized.</td></tr></tbody></table>

### Example

Example of use.

		myComp.on('fsshown.backtotop', function(ev) {
			// DO SOMETHING
		});

# Back To Bottom

Scroll Back to bottom is a plugin that creates a button inside the target element, when it's clicked, scroll this element vertically down.

## Javascript

	var myVar = FLUIGC.backToBottom(options);

## Examples

### Basic configuration

By default, the component does not require any initial setup, simply initializes it as in the example below.

	var myComp = FLUIGC.backToBottom();

### Advanced configuration

	var myComp = FLUIGC.backToBottom({
		width: 'auto',
		height: 'auto',
		style: 'primary',
		opacity: 1,
		horizontalAlign: 'right',
		verticalAlign: 'top',
		horizontalDistance: '25px',
		verticalDistance: '20px',
		iconType: 'fluigicon-arrow-down',
		labelType: '',
		buttonSize: 'md',
		iconSize: 'sm',
		scrollDuration: 800,
		fadeDuration: 500,
		target: 'body'
	});

### Basic configuration listening events

	var myComp = FLUIGC.backToBottom({
		horizontalAlign: 'left',
	});
	
	myComp.on('fsshow.backtobottom', function(ev) {
		// code
	});

### Basic configuration invoking methods

	var myComp = FLUIGC.backToBottom({
		horizontalAlign: 'left',
	});
	
	// toogle component
	myComp.toogle();

## Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 15%;">Type</th><th style="width: 15%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>width</td><td>string</td><td>'auto'</td><td>Button width.</td></tr><tr><td>height</td><td>string</td><td>'auto'</td><td>Button height.</td></tr><tr><td>style</td><td>string</td><td>'primary'</td><td>Button style <code>'default', 'primary', 'success', 'info', 'warning', 'danger' or 'link'</code>.</td></tr><tr><td>opacity</td><td>number</td><td>1</td><td>Opacity button.</td></tr><tr><td>horizontalAlign</td><td>string</td><td>'right'</td><td>Horizontal position button <code>'left', 'center' or 'right'</code>.</td></tr><tr><td>verticalAlign</td><td>string</td><td>'bottom'</td><td>Vertical position button <code>'top' or 'bottom'</code>.</td></tr><tr><td>horizontalDistance</td><td>string</td><td>'15px'</td><td>Horizontal button distance from the corner of the window.</td></tr><tr><td>verticalDistance</td><td>string</td><td>'15px'</td><td>Vertical button distance from the corner of the window.</td></tr><tr><td>iconType</td><td>string</td><td>'fluigicon-arrow-up'</td><td>Class icon that appears on the button.</td></tr><tr><td>labelType</td><td>string</td><td>''</td><td>Text that appears on the button.</td></tr><tr><td>buttonSize</td><td>string</td><td>'md'</td><td>Button size <code>'lg', 'md', 'sm' or 'xs'</code>.</td></tr><tr><td>iconSize</td><td>string</td><td>'sm'</td><td>Size icon <code>'xs', 'sm', 'md', 'lg', 'xl', 'txs', 'tsm', 'tmd' or 'tlg'</code>.</td></tr><tr><td>scrollDuration</td><td>number</td><td>500</td><td>Duration of the scroll animation time.</td></tr><tr><td>fadeDuration</td><td>number</td><td>500</td><td>Duration of the button display animation time.</td></tr><tr><td>zIndex</td><td>number</td><td>1050</td><td>Button z-index.</td></tr><tr><td>Target</td><td>string</td><td>'body'</td><td>This element will receive the action. It must have the property overflow: scroll.</td></tr></tbody></table>

## Methods

### .on(event, callback)

Attach an event handler function for events to the component.

	myComp.on('fsshow.backtobottom', function(ev) {
		// DO SOMETHING
	});

### .show()

Shows the button.

	myComp.show();

### .hide()

Hide the button.

	myComp.hide();

### .toggle()

Toogle the button.

	myComp.toggle();

### .destroy()

Destroy the button instance.

	myComp.destroy();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fsshown.backtobottom</td><td>This event fires immediately when the show instance method is called.</td></tr><tr><td>fsshow.backtobottom</td><td>This event is fired when the component has been made visible to the user (will wait for CSS transitions to complete).</td></tr><tr><td>fshidden.backtobottom</td><td>This event is fired immediately when the hide instance method has been called.</td></tr><tr><td>fshide.backtobottom</td><td>This event is fired when the component has finished being hidden from the user (will wait for CSS transitions to complete).</td></tr><tr><td>fsclick.backtobottom</td><td>This event is fired when the component is clicked.</td></tr><tr><td>fsstartscroll.backtobottom</td><td>This event is fired when the scroll animations is initialized.</td></tr><tr><td>fsendscroll.backtobottom</td><td>This event is fired when the scroll animations is finalized.</td></tr></tbody></table>

### Example

Example of use.

		myComp.on('fsshown.backtobottom', function(ev) {
			// DO SOMETHING
		});

# Buttons

## Example uses

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

#### Stateful

Add `data-loading-text="Loading..."` to use a loading state on a button.

Loading state

<button type="button" id="loading-example-btn" data-loading-text="Loading..." class="btn btn-primary">
Loading state
</button>
<script type="text/javascript">
	$('#loading-example-btn').click(function() {
		var btn = $(this);
		btn.button('loading');
		$.ajax(...).always(function () {
			btn.button('reset');
		});
	});
</script>

#### Single toggle

Add `data-toggle="button"` to activate toggling on a single button.

Single toggle

<button type="button" class="btn btn-primary" data-toggle="button">Single toggle</button>

#### Checkbox

Add `data-toggle="buttons"` to a group of checkboxes for checkbox style toggling on btn-group.

#### Pre-checked options need `.active`

For pre-checked options, you must add the `.active` class to the input's `label` yourself.

 Option 1 (pre-checked) Option 2  Option 3

<div class="btn-group" data-toggle="buttons">
	<label class="btn btn-primary active">
	<input type="checkbox" checked> Option 1 (pre-checked)
	</label>
	<label class="btn btn-primary">
	<input type="checkbox"> Option 2
	</label>
	<label class="btn btn-primary">
	<input type="checkbox"> Option 3
	</label>
</div>

#### Radio

Add `data-toggle="buttons"` to a group of radio inputs for radio style toggling on btn-group.

#### Preselected options need `.active`

For preselected options, you must add the `.active` class to the input's `label` yourself.

 Option 1 (preselected) Option 2  Option 3

<div class="btn-group" data-toggle="buttons">
	<label class="btn btn-primary active">
		<input type="radio" name="options" id="option1" checked> Option 1 (preselected)
	</label>
	<label class="btn btn-primary">
		<input type="radio" name="options" id="option2"> Option 2
	</label>
	<label class="btn btn-primary">
		<input type="radio" name="options" id="option3"> Option 3
	</label>
</div>

## Usage

Enable buttons via JavaScript:

$('.btn').button();

### Markup

Data attributes are integral to the button plugin. Check out the example code below for the various markup types.

### Options

_None_

### Methods

#### $().button('toggle')

Toggles push state. Gives the button the appearance that it has been activated.

#### Auto toggling

You can enable auto toggling of a button by using the `data-toggle` attribute.

<button type="button" class="btn btn-primary" data-toggle="button">...</button>

#### $().button('loading')

Sets button state to loading - disables button and swaps text to loading text. Loading text should be defined on the button element using the data attribute `data-loading-text`.

<button id="loading-example-btn" type="button" class="btn btn-primary" data-loading-text="loading stuff...">...</button>
<script type="text/javascript">
	$('#loading-example-btn').click(function () {
		var btn = $(this);
		btn.button('loading');
		$.ajax(...).always(function() {
			btn.button('reset');
		});
	});
</script>

#### Cross-browser compatibility

Firefox persists form control states across page loads. A workaround for this is to use `autocomplete="off"`.

#### $().button('reset')

Resets button state - swaps text to original text.

#### $().button(string)

Resets button state - swaps text to any data defined text state.

<button type="button" class="btn btn-primary" data-complete-text="finished!" >...</button>
<script type="text/javascript">
	$('.btn').button('complete');
</script>

# Calendar

## Examples

Calendar helps in creating date and time fields. With some settings you can use this component for fields that need this kind of data.

### Live demo

Below are some examples of component usage with different settings.

Calendar - Default 

### HTML

	<input type="text" id="MY\_SELECTOR" />

### Javascript

	var mySimpleCalendar = FLUIGC.calendar('#MY\_SELECTOR');

Calendar with functions 

setMinDate setMaxDate show disable enable setDate getDate getTimestampDate

### HTML

	<input type="text" id="MY\_SELECTOR" />

### Javascript

	var mySpanishCalendar = FLUIGC.calendar('#MY\_SELECTOR', {
		language: 'es'
	});
	$('#button-setMinDate').on('click', function() {
		mySpanishCalendar.setMinDate(new Date("june 12, 2014"));
	});
	
	$('#button-setMaxDate').on('click', function() {
		mySpanishCalendar.setMaxDate(new Date("july 12, 2014"));
	});
	
	$('#button-show').on('click', function() {
		mySpanishCalendar.show();
	});
	
	$('#button-disable').on('click', function() {
		mySpanishCalendar.disable();
	});
	
	$('#button-enable').on('click', function() {
		mySpanishCalendar.enable();
	});
	
	$('#button-setDate').on('click', function() {
		mySpanishCalendar.setDate("10/23/2014");
	});
	
	$('#button-getDate').on('click', function() {
		console.log(mySpanishCalendar.getDate());
	});
	
	$('#button-getTimestampDate').on('click', function() {
		console.log(mySpanishCalendar.getTimestampDate());
	});

Name 

Email address 

Birthday 

### HTML

	<form role="form">
	    <div class="form-group">
	        <label for="name">Name</label>
	        <input type="text" class="form-control" id="name" placeholder="Enter name">
	    </div>
	    <div class="form-group">
	        <label for="email">Email address</label>
	        <input type="email" class="form-control" id="email" placeholder="Enter email">
	    </div>
	    <div class="form-group">
	        <label for="MY\_SELECTOR">Birthday</label>
	        <input type="text" id="MY\_SELECTOR" placeholder="Enter birthday">
	    </div>
	</form>

### Javascript

		var birthday = FLUIGC.calendar('#MY\_SELECTOR');

Only Date

Only Time

Date and Time 

### HTML

	<div class="form-group">
	    <label for="only-date">Only Date</label>
	    <div class="input-group date" id="MY\_SELECTOR1">
	        <input type="text" class="form-control" placeholder="Only Date">
	        <span class="input-group-addon">
	        	<span class="fluigicon fluigicon-calendar"></span>
	        </span>
	    </div>
	</div>
	<div class="form-group">
	    <label for="only-time">Only Time</label>
	    <div class="input-group date" id="MY\_SELECTOR2">
	        <input type="text" class="form-control" placeholder="Only Time">
	        <span class="input-group-addon">
	        	<span class="fluigicon fluigicon-time"></span>
	        </span>
	    </div>
	</div>
	<div class="form-group">
	    <label for="date-time">Date and Time</label>
	    <input type="text" class="form-control" id="MY\_SELECTOR3" placeholder="Date and Time">
	</div>

### Javascript

	var onlyDate = FLUIGC.calendar('#MY\_SELECTOR1', {
	    pickDate: true,
	    pickTime: false
	});
	var onlyTime = FLUIGC.calendar('#MY\_SELECTOR2', {
	    pickDate: false,
	    pickTime: true
	});
	var dateTime = FLUIGC.calendar('#MY\_SELECTOR3', {
	    pickDate: true,
	    pickTime: true,
	    sideBySide: true
	});

### Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>pickDate</td><td>boolean</td><td>true</td><td>Disables the date picker.</td></tr><tr><td>pickTime</td><td>boolean</td><td>false</td><td>Disables the time picker.</td></tr><tr><td>useMinutes</td><td>boolean</td><td>true</td><td>Disables the minutes picker.</td></tr><tr><td>useSeconds</td><td>boolean</td><td>true</td><td>Disables the seconds picker.</td></tr><tr><td>useCurrent</td><td>boolean</td><td>true</td><td>When true, picker will set the value to the current date/time.</td></tr><tr><td>minuteStepping</td><td>int</td><td>1</td><td>Set the minute stepping.</td></tr><tr><td>minDate</td><td>string</td><td>''</td><td>Set a minimum date.</td></tr><tr><td>maxDate</td><td>string</td><td>Defaults to today +100 years</td><td>Set a maximum date.</td></tr><tr><td>showToday</td><td>boolean</td><td>true</td><td>Shows the today indicator.</td></tr><tr><td>language</td><td>string</td><td>If present, use WCMAPI.getLocale(), otherwise uses standard 'pt-br'.</td><td>Sets language locale.</td></tr><tr><td>defaultDate</td><td>string</td><td>''</td><td>Sets a default date, accepts js dates, strings and moment objects.</td></tr><tr><td>disabledDates</td><td>array</td><td>''</td><td>An array of dates that cannot be selected.</td></tr><tr><td>enabledDates</td><td>array</td><td>''</td><td>An array of dates that can be selected.</td></tr><tr><td>useStrict</td><td>boolean</td><td>false</td><td>Use "strict" when validating dates.</td></tr><tr><td>sideBySide</td><td>boolean</td><td>false</td><td>Show the date and time picker side by side.</td></tr><tr><td>daysOfWeekDisabled</td><td>array</td><td>''</td><td>For example use daysOfWeekDisabled: [0,6] to disable weekends.</td></tr><tr><td>setDisabledDates</td><td>array</td><td>''</td><td>disable one or more specific dates</td></tr></tbody></table>

Below an example with possible configurations.

### Javascript

		var myCalendar = FLUIGC.calendar('#MY\_SELECTOR', {
			pickDate: true, 
			pickTime: false, 
			useMinutes: true, 
			useSeconds: true, 
			useCurrent: true,
			minuteStepping: 1,
			minDate: '1/1/2014',
			maxDate: '1/1/2015',
			showToday: true,
			language: 'pt-br',
			defaultDate: "",
			disabledDates: \[\],
			enabledDates: \[\],
			useStrict: false,
			sideBySide: false,
			daysOfWeekDisabled: \[\],
            setDisabledDates: \['01/09/2022', '01/10/2022'\]
		});

### Methods

#### .formatDate(date, \[pattern\], \[locale\])

Formats a Date object into a date/time string

		FLUIGC.calendar.formatDate(new Date(), 'L LTS', 'pt');
		FLUIGC.calendar.formatDate(new Date(), 'L');
		FLUIGC.calendar.formatDate(new Date(), undefined, 'en');
		FLUIGC.calendar.formatDate(new Date());

Date and time formats are specified by date and time pattern strings. Within date and time pattern strings, letters from 'A' to 'Z' and from 'a' to 'z' are interpreted as pattern tokens representing the components of a date or time string. All other characters are not interpreted, they're simply copied into the output string during formatting. The following pattern tokens are defined:

<table class="table table-bordered table-striped"><thead><tr><th></th><th>Token</th><th>Output</th></tr></thead><tbody><tr><td><b>Month</b></td><td>M</td><td>1 2 ... 11 12</td></tr><tr><td></td><td>MM</td><td>01 02 ... 11 12</td></tr><tr><td></td><td>MMM</td><td>Jan Feb ... Nov Dec</td></tr><tr><td></td><td>MMMM</td><td>January February ... November December</td></tr><tr><td><b>Quarter</b></td><td>Q</td><td>1 2 3 4</td></tr><tr><td><b>Day of Month</b></td><td>D</td><td>1 2 ... 30 31</td></tr><tr><td></td><td>DD</td><td>01 02 ... 30 31</td></tr><tr><td><b>Day of Year</b></td><td>DDD</td><td>1 2 ... 364 365</td></tr><tr><td></td><td>DDDD</td><td>001 002 ... 364 365</td></tr><tr><td><b>Day of Week</b></td><td>d</td><td>0 1 ... 5 6</td></tr><tr><td></td><td>ddd</td><td>Sun Mon ... Fri Sat</td></tr><tr><td></td><td>dddd</td><td>Sunday Monday ... Friday Saturday</td></tr><tr><td><b>Week of Year</b></td><td>W</td><td>1 2 ... 52 53</td></tr><tr><td></td><td>WW</td><td>01 02 ... 52 53</td></tr><tr><td><b>Year</b></td><td>YY</td><td>70 71 ... 29 30</td></tr><tr><td></td><td>YYYY</td><td>1970 1971 ... 2029 2030</td></tr><tr><td><b>AM/PM</b></td><td>A</td><td>AM PM</td></tr><tr><td></td><td>a</td><td>am pm</td></tr><tr><td><b>Hour</b></td><td>H</td><td>0 1 ... 22 23</td></tr><tr><td></td><td>HH</td><td>00 01 ... 22 23</td></tr><tr><td></td><td>h</td><td>1 2 ... 11 12</td></tr><tr><td></td><td>hh</td><td>01 02 ... 11 12</td></tr><tr><td><b>Minute</b></td><td>m</td><td>0 1 ... 58 59</td></tr><tr><td></td><td>mm</td><td>00 01 ... 58 59</td></tr><tr><td><b>Second</b></td><td>s</td><td>0 1 ... 58 59</td></tr><tr><td></td><td>ss</td><td>00 01 ... 58 59</td></tr></tbody></table>

Because preferred formatting differs based on locale, there are a few tokens that can be used to format a moment based on its locale:

<table class="table table-bordered table-striped"><thead><tr><th></th><th>Token</th><th>Output</th></tr></thead><tbody><tr><td><b>Time</b></td><td>LT</td><td>8:30 PM</td></tr><tr><td><b>Time with seconds</b></td><td>LTS</td><td>8:30:25 PM</td></tr><tr><td><b>Month numeral, day of month, year</b></td><td>L</td><td>09/04/1986</td></tr><tr><td></td><td>l</td><td>9/4/1986</td></tr><tr><td><b>Month name, day of month, year</b></td><td>LL</td><td>September 4 1986</td></tr><tr><td></td><td>ll</td><td>Sep 4 1986</td></tr><tr><td><b>Month name, day of month, year, time</b></td><td>LLL</td><td>September 4 1986 8:30 PM</td></tr><tr><td></td><td>lll</td><td>Sep 4 1986 8:30 PM</td></tr><tr><td><b>Month name, day of month, day of week, year, time</b></td><td>LLLL</td><td>Thursday, September 4 1986 8:30 PM</td></tr><tr><td></td><td>llll</td><td>Thu, Sep 4 1986 8:30 PM</td></tr></tbody></table>

# Collapse

### About

Get base styles and flexible support for collapsible components like accordions and navigation.

## Collapse Treeview Mode

Transforms the accordion into a collapsible tree structure, supporting nested categories and subcategories. Only one item per level can be expanded at a time, providing a clean, organized view for hierarchical content.

#### [Name of Category 1 10](#collapseCategory1)

# Processo de aprovação de contrato

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

# Processo de aprovação de contrato

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

#### [Name of subCategory 1 from Category 1 6](#collapseSubCat1)

# Processo de aprovação de contrato

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

#### [Name of subSubCategory 1 from subCategory 1 6](#collapseSubSubCat1)

# Processo de aprovação de contrato

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

#### [Name of subCategory 2 from Category 1 2](#collapseSubCat2)

# Processo de aprovação de contrato

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

#### [Name of Category 2 2](#collapseCategory2)

# Processo de aprovação de contrato

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

<div class="panel-group treeview-collapse" id="accordion-treeview">
	<!-- Category 1 -->
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a class="collapse-icon up" data-toggle="collapse" data-parent="#accordion-treeview"
					href="#collapseCategory1">
					Name of Category 1
					<span class="label label-default">10</span>
				</a>
			</h4>
		</div>
		<div id="collapseCategory1" class="panel-collapse collapse in">
			<div class="panel-body">
				<!-- Card 1 -->
				<div class="card card-horizontal">
					<div class="card-thumb">
						<i class="illustration illustration-layout-group illustration-md"
							aria-hidden="true"></i>
					</div>
					<div class="card-body">
						<h1 class="card-title">Processo de aprovação de contrato</h1>
						<p class="card-small-text">José da Silva</p>
						<p class="card-small-text">08/10/1990</p>
						<p class="card-small-text">v1.0</p>
						<div class="card-list-items">
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-lock icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-trash icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-star icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons bg-warning" title="Icon title">
								<i class="flaticon flaticon-cloud-download icon-sm" aria-hidden="true"></i>
							</span>
							<div class="btn-group">
								<button type="button" class="btn btn-link btn-sm dropdown-toggle"
									data-toggle="dropdown">
									<i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
								</button>
								<ul class="dropdown-menu dropdown-menu-right" role="menu">
									<li><a href="#">Visualizar página</a></li>
									<li><a href="#">Editar página</a></li>
									<li><a href="#">Excluir página</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="card card-horizontal">
					<div class="card-thumb">
						<i class="illustration illustration-layout-group illustration-md"
							aria-hidden="true"></i>
					</div>
					<div class="card-body">
						<h1 class="card-title">Processo de aprovação de contrato</h1>
						<p class="card-small-text">José da Silva</p>
						<p class="card-small-text">08/10/1990</p>
						<p class="card-small-text">v1.0</p>
						<div class="card-list-items">
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-lock icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-trash icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-star icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons bg-warning" title="Icon title">
								<i class="flaticon flaticon-cloud-download icon-sm" aria-hidden="true"></i>
							</span>
							<div class="btn-group">
								<button type="button" class="btn btn-link btn-sm dropdown-toggle"
									data-toggle="dropdown">
									<i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
								</button>
								<ul class="dropdown-menu dropdown-menu-right" role="menu">
									<li><a href="#">Visualizar página</a></li>
									<li><a href="#">Editar página</a></li>
									<li><a href="#">Excluir página</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- Subcategoria 1 -->
				<div class="panel-group" id="subAccordion1">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title">
								<a class="collapse-icon" data-toggle="collapse" data-parent="#subAccordion1"
									href="#collapseSubCat1">
									Name of subCategory 1 from Category 1
									<span class="label label-default">6</span>
								</a>
							</h4>
						</div>
						<div id="collapseSubCat1" class="panel-collapse collapse">
							<div class="panel-body">
								<!-- Sub card 1 -->
								<div class="card card-horizontal">
									<div class="card-thumb">
										<i class="illustration illustration-layout-group illustration-md"
											aria-hidden="true"></i>
									</div>
									<div class="card-body">
										<h1 class="card-title">Processo de aprovação de contrato</h1>
										<p class="card-small-text">José da Silva</p>
										<p class="card-small-text">08/10/1990</p>
										<p class="card-small-text">v1.0</p>
										<div class="card-list-items">
											<span class="card-list-item card-list-item-icons"
												title="Icon title">
												<i class="flaticon flaticon-lock icon-sm"
													aria-hidden="true"></i>
											</span>
											<span class="card-list-item card-list-item-icons"
												title="Icon title">
												<i class="flaticon flaticon-trash icon-sm"
													aria-hidden="true"></i>
											</span>
											<span class="card-list-item card-list-item-icons"
												title="Icon title">
												<i class="flaticon flaticon-star icon-sm"
													aria-hidden="true"></i>
											</span>
											<span class="card-list-item card-list-item-icons bg-warning"
												title="Icon title">
												<i class="flaticon flaticon-cloud-download icon-sm"
													aria-hidden="true"></i>
											</span>
											<div class="btn-group">
												<button type="button"
													class="btn btn-link btn-sm dropdown-toggle"
													data-toggle="dropdown">
													<i class="flaticon flaticon-more-vert icon-md"
														aria-hidden="true"></i>
												</button>
												<ul class="dropdown-menu dropdown-menu-right" role="menu">
													<li><a href="#">Visualizar página</a></li>
													<li><a href="#">Editar página</a></li>
													<li><a href="#">Excluir página</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div class="panel-group" id="subSubAccordion1">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a class="collapse-icon" data-toggle="collapse"
													data-parent="#subSubAccordion1" href="#collapseSubSubCat1">
													Name of subSubCategory 1 from subCategory 1
													<span class="label label-default">6</span>
												</a>
											</h4>
										</div>
										<div id="collapseSubSubCat1" class="panel-collapse collapse">
											<div class="panel-body">
												<!-- Sub card 1 -->
												<div class="card card-horizontal">
													<div class="card-thumb">
														<i class="illustration illustration-layout-group illustration-md"
															aria-hidden="true"></i>
													</div>
													<div class="card-body">
														<h1 class="card-title">Processo de aprovação de contrato
														</h1>
														<p class="card-small-text">José da Silva</p>
														<p class="card-small-text">08/10/1990</p>
														<p class="card-small-text">v1.0</p>
														<div class="card-list-items">
															<span class="card-list-item card-list-item-icons"
																title="Icon title">
																<i class="flaticon flaticon-lock icon-sm"
																	aria-hidden="true"></i>
															</span>
															<span class="card-list-item card-list-item-icons"
																title="Icon title">
																<i class="flaticon flaticon-trash icon-sm"
																	aria-hidden="true"></i>
															</span>
															<span class="card-list-item card-list-item-icons"
																title="Icon title">
																<i class="flaticon flaticon-star icon-sm"
																	aria-hidden="true"></i>
															</span>
															<span
																class="card-list-item card-list-item-icons bg-warning"
																title="Icon title">
																<i class="flaticon flaticon-cloud-download icon-sm"
																	aria-hidden="true"></i>
															</span>
															<div class="btn-group">
																<button type="button"
																	class="btn btn-link btn-sm dropdown-toggle"
																	data-toggle="dropdown">
																	<i class="flaticon flaticon-more-vert icon-md"
																		aria-hidden="true"></i>
																</button>
																<ul class="dropdown-menu dropdown-menu-right"
																	role="menu">
																	<li><a href="#">Visualizar página</a></li>
																	<li><a href="#">Editar página</a></li>
																	<li><a href="#">Excluir página</a></li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Subcategoria 2 -->
				<div class="panel-group" id="subAccordion2">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title">
								<a class="collapse-icon" data-toggle="collapse" data-parent="#subAccordion2"
									href="#collapseSubCat2">
									Name of subCategory 2 from Category 1
									<span class="label label-default">2</span>
								</a>
							</h4>
						</div>
						<div id="collapseSubCat2" class="panel-collapse collapse">
							<div class="panel-body">
								<!-- Card 2 -->
								<div class="card card-horizontal">
									<div class="card-thumb">
										<i class="illustration illustration-layout-group illustration-md"
											aria-hidden="true"></i>
									</div>
									<div class="card-body">
										<h1 class="card-title">Processo de aprovação de contrato
										</h1>
										<p class="card-small-text">José da Silva</p>
										<p class="card-small-text">08/10/1990</p>
										<p class="card-small-text">v1.0</p>
										<div class="card-list-items">
											<span class="card-list-item card-list-item-icons"
												title="Icon title">
												<i class="flaticon flaticon-lock icon-sm"
													aria-hidden="true"></i>
											</span>
											<span class="card-list-item card-list-item-icons"
												title="Icon title">
												<i class="flaticon flaticon-trash icon-sm"
													aria-hidden="true"></i>
											</span>
											<span class="card-list-item card-list-item-icons"
												title="Icon title">
												<i class="flaticon flaticon-star icon-sm"
													aria-hidden="true"></i>
											</span>
											<span class="card-list-item card-list-item-icons bg-warning"
												title="Icon title">
												<i class="flaticon flaticon-cloud-download icon-sm"
													aria-hidden="true"></i>
											</span>
											<div class="btn-group">
												<button type="button"
													class="btn btn-link btn-sm dropdown-toggle"
													data-toggle="dropdown">
													<i class="flaticon flaticon-more-vert icon-md"
														aria-hidden="true"></i>
												</button>
												<ul class="dropdown-menu dropdown-menu-right" role="menu">
													<li><a href="#">Visualizar página</a></li>
													<li><a href="#">Editar página</a></li>
													<li><a href="#">Excluir página</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Category 2 -->
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a class="collapse-icon" data-toggle="collapse" data-parent="#accordion-treeview"
					href="#collapseCategory2">
					Name of Category 2
					<span class="label label-default">2</span>
				</a>
			</h4>
		</div>
		<div id="collapseCategory2" class="panel-collapse collapse">
			<div class="panel-body">
				<!-- Card 2 -->
				<div class="card card-horizontal">
					<div class="card-thumb">
						<i class="illustration illustration-layout-group illustration-md"
							aria-hidden="true"></i>
					</div>
					<div class="card-body">
						<h1 class="card-title">Processo de aprovação de contrato
						</h1>
						<p class="card-small-text">José da Silva</p>
						<p class="card-small-text">08/10/1990</p>
						<p class="card-small-text">v1.0</p>
						<div class="card-list-items">
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-lock icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-trash icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons" title="Icon title">
								<i class="flaticon flaticon-star icon-sm" aria-hidden="true"></i>
							</span>
							<span class="card-list-item card-list-item-icons bg-warning" title="Icon title">
								<i class="flaticon flaticon-cloud-download icon-sm" aria-hidden="true"></i>
							</span>
							<div class="btn-group">
								<button type="button" class="btn btn-link btn-sm dropdown-toggle"
									data-toggle="dropdown">
									<i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
								</button>
								<ul class="dropdown-menu dropdown-menu-right" role="menu">
									<li><a href="#">Visualizar página</a></li>
									<li><a href="#">Editar página</a></li>
									<li><a href="#">Excluir página</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

## Example accordion

Using the collapse plugin, we built a simple accordion by extending the panel component.

-   [Default Collapse](#default-collapse-tab)

#### [Collapsible Group Item #1](#collapseOne)

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

#### [Collapsible Group Item #2](#collapseTwo)

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

#### [Collapsible Group Item #3](#collapseThree)

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

<div class="panel-group" id="accordion">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a class="collapse-icon up" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
				Collapsible Group Item #1
				</a>
			</h4>
		</div>
		<div id="collapseOne" class="panel-collapse collapse in">
			<div class="panel-body">
				Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
			</div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a class="collapse-icon" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
				Collapsible Group Item #2
				</a>
			</h4>
		</div>
		<div id="collapseTwo" class="panel-collapse collapse">
			<div class="panel-body">
				Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
			</div>
		</div>
	</div>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a class="collapse-icon" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
				Collapsible Group Item #3
				</a>
			</h4>
		</div>
		<div id="collapseThree" class="panel-collapse collapse">
			<div class="panel-body">
				Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
			</div>
		</div>
	</div>
</div>

You can also use the plugin without the accordion markup. Make a button toggle the expanding and collapsing of another element.

<button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#demo">
simple collapsible
</button>
<div id="demo" class="collapse in">...</div>

## Example new accordion layout

Using the new layout of the collapse plugin, we built a new accordion layout by extending the panel component.

#### [Collapsible Group Item 1](#collapseOneExemple)

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

#### [Collapsible Group Item 2](#collapseTwoExemple)

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

#### [Collapsible Group Item 3](#collapseThreeExemple)

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.

Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh arial, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

### Using the new layout

To use the new layout it is necessary to add some things to the component header. First add the `.clean-collapse` class, then add the **"collapse-text" tag**, as shown in the example below:

-   `div class="panel-group clean-collapse" id="accordion" div` the class "clean-collapse"
-   `p class="collapse-text">exemple. p` the text below title

<div class="panel-group clean-collapse" id="accordion">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a class="collapse-icon" data-toggle="collapse" data-parent="#accordion" href="#collapseOneExemple">
				Collapsible Group Item 1
				</a>
			</h4>
			<p class="collapse-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
		</div>
	</div>
</div>

## Usage

The collapse plugin uses a few classes to handle the heavy lifting:

-   `.collapse` hides the content
-   `.collapse.in` shows the content
-   `.collapsing` is added when the transition starts, and removed when it finishes

These classes can be found in `component-animations.less`.

Add icon arrows:

-   `.collapse-icon` arrow down
-   `.collapse-icon .up` changes direction arrow to up when the content is visible

These classes can be found in `fluig-collapse.less`.

### Via data attributes

Just add `data-toggle="collapse"` and a `data-target` to element to automatically assign control of a collapsible element. The `data-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `in`.

To add accordion-like group management to a collapsible control, add the data attribute `data-parent="#selector"`. Refer to the demo to see this in action.

### Via JavaScript

Enable manually with:

$('.collapse').collapse();

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-parent=""`.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 100px;">Name</th><th style="width: 50px;">type</th><th style="width: 50px;">default</th><th>description</th></tr></thead><tbody><tr><td>parent</td><td>selector</td><td>false</td><td>If selector then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this dependent on the <code>panel</code> class)</td></tr><tr><td>toggle</td><td>boolean</td><td>true</td><td>Toggles the collapsible element on invocation</td></tr></tbody></table>

### Methods

#### .collapse(options)

Activates your content as a collapsible element. Accepts an optional options `object`.

$('#myCollapsible').collapse({
	toggle: false
});

#### .collapse('toggle')

Toggles a collapsible element to shown or hidden.

#### .collapse('show')

Shows a collapsible element.

#### .collapse('hide')

Hides a collapsible element.

### Events

Style Guide's collapse class exposes a few events for hooking into collapse functionality.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 150px;">Event Type</th><th>Description</th></tr></thead><tbody><tr><td>show.bs.collapse</td><td>This event fires immediately when the <code>show</code> instance method is called.</td></tr><tr><td>shown.bs.collapse</td><td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td></tr><tr><td>hide.bs.collapse</td><td>This event is fired immediately when the <code>hide</code> method has been called.</td></tr><tr><td>hidden.bs.collapse</td><td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td></tr></tbody></table>

$('#myCollapsible').on('hidden.bs.collapse', function() {
	// do something…
})

# Continuous Scroll

"Continuous scroll" allows trigger an event when a scroll is completed.

## Examples

#### Can be applied to a div element

Can be applied to a 'div' element and the developer decides that event will be triggered upon reaching the end.

### Example continuous scroll

Continuous scroll applied to a list

## Usage

The plugin continuous scroll can be applied on a div element that has fixed height and scroll enabled. Should apply the plugin to the element that has the scroll and write the desired action in the callback function.

#### We recommend using Mustache

Mustache is a specification template that does not use logic, ie, does not have statements with if, for, while etc, throughout its construction is based on tags.

#### Note

It is recommended that you use along with the continuous scroll component [isolated scroll](#isolated-scroll) component.

A mustache template:

	<div data-your-scroll-content>
		<script type="text/template" class="tpl-continuous-scroll">
			{{#items}}
				<a href="#" class="list-group-item">{{item}}</a>
		    {{/items}}
		</script>
	</div>

Make a selector in the element `.tpl-continuous-scroll` that returns the template. The variable 'view' should receive the data to be rendered and then invoke the 'render' function Mustache. The return of this function is to be added to an element on the page.

		var tpl = $('.tpl-continuous-scroll').html(),
			html,
			view = data;
		html = Mustache.render(tpl, view);
		$('\[data-your-scroll-content\]').html(html);

Make a selector in the element `data-your-scroll-content` and invoke `onScrollEnd(callback)` function.

		$('\[data-your-scroll-content\]').onScrollEnd(function() {
			// do something…
		});

Enable for a window object:

		$(window).onScrollEnd(function() {
			// do something…
		});

# Copy

## Examples

Copy allows you to copy some content to the clipboard.

### Live demo

Below are some examples of component usage.

Copy the link

### HTML

	<button type="button" id="MY\_ID" data-clipboard-text="Text to be copied" class="btn btn-link">Copy</button>

### Javascript

	FLUIGC.copy('#MY\_ID', {
   	    copyMessage: 'Content copied to the clipboard!',
   	    destroy: false,
   	}, function(err, data) {
   	    // DO SOMETHING (error or success)
   	});

### Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>copyMessage</td><td>string</td><td>Copied text to clipboard</td><td>The message that will be displayed by a toast when copying the content to the clipboard.</td></tr><tr><td>destroy</td><td>boolean</td><td>false</td><td>Destroy the copy element from the specified target after first click. Clears the copy events and objects.</td></tr></tbody></table>

# Confirm, Alert and Error messages

## Example confirms

Show confirm

## Usage

The component `FLUIGC.message.confirm` component extends `FLUIGC.modal`, ie has the same component settings.

FLUIGC.message.confirm({
	message: 'Want to delete this gallery?',
	title: 'Remove gallery',
	labelYes: 'Remove',
	labelNo: 'Cancel'
}, function(result, el, ev) {
	//Callback action executed by the user...
	
	//result: Result chosen by the user...
	//el: Element (button) clicked...
	//ev: Event triggered...
	
	this.someFunc();
});

Unique configurations to confirm the component.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>labelYes</td><td>String</td><td>"Yes"</td><td>Label the confirmation (yes) the modal button.</td></tr><tr><td>labelNo</td><td>String</td><td>"No"</td><td>Label the dropout (no) the modal button.</td></tr></tbody></table>

## Example alerts

Show alert

## Usage

The component `FLUIGC.message.confirm` component extends `FLUIGC.modal`, ie has the same component settings.

FLUIGC.message.alert({
	message: 'Gallery removed successfully.',
	title: 'Message',
	label: 'OK'
}, function(el, ev) {
	//Callback action executed by the user...
	
	//el: Element (button) clicked...
	//ev: Event triggered...
	
	this.someFunc();
});

Unique configurations of the alert component.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>"OK"</td><td>Label the single button on the component.</td></tr></tbody></table>

## Example error messages

Show error

## Usage

The component `FLUIGC.message.error` extends `FLUIGC.modal`, ie has the same component settings. It can show advanced details from the specified error.

FLUIGC.message.error({
	title: 'Error Title',
	message: 'Oops, something went wrong!',
	details: 'An error occurred in your request. Status: 500.'
}, function(el, ev) {
	//Callback action executed by the user...

	//el: Element (button) clicked...
	//ev: Event triggered...

	this.someFunc();
});

Unique configurations of the error message component.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>details</td><td>String</td><td>-</td><td>Advanced detail from the specified error.</td></tr></tbody></table>

# Datatable

## Examples

Datatables helps in creating tables with pagination and search capabilities. With some settings you can create data grids by setting an array of objects or a URL REST service.

### Live demo with continuous scroll and add data button

By clicking on the buttons below, you can add, remove or edit records. You can also fill in the search field and press the "ENTER" button to view results and also use the scroll bar for paging.

### Javascript

Below is the configuration to add records

	addRow: function(el, ev) {
		var row = {
			id: "11",
			name: "Santa Catarina",
			uf: "SC"
		};

		this.myTable.addRow(0, row);
	}

Below is the configuration to remove records

	delRow: function(el, ev) {
		var itemsToRemove = this.myTable.selectedRows();

		if (itemsToRemove.length > 0) {
			for (var i = 0; i <= itemsToRemove.length; i++) {
				this.myTable.removeRow(this.myTable.selectedRows()\[0\]);
			}
		}

		FLUIGC.toast({
			title: '',
			message: "Removed element",
			type: 'success'
		});

	}

Below is the configuration to edit and update records

	editRow: function(el, ev) {
		var row = this.myTable.getRow(this.myTable.selectedRows()\[0\]);
		this.myTable.updateRow(this.myTable.selectedRows()\[0\], row, '.template\_datatable\_edit');
		$('#datatable-input-id').val(row.id);
		$('#datatable-input-name').val(row.name);
		$('#datatable-input-uf').val(row.uf);

		$('\[data-datatable-edit-row\]').prop("disabled", true);

	},

	updaterow: function(el, ev) {
		var editedRow = {
			id: $('#datatable-input-id').val(),
			name: $('#datatable-input-name').val(),
			uf: $('#datatable-input-uf').val()
		};
		this.myTable.updateRow(this.myTable.selectedRows()\[0\], editedRow);

		$('\[data-datatable-edit-row\]').prop("disabled", false);

		FLUIGC.toast({
			title: '',
			message: "Edited!",
			type: 'success'
		});
	},

Below is the configuration to hide one column

	hideColumn: function(el, ev) {
		var index = 1;
		this.myTable.hideColumn(index);
	}

Below is the configuration to show one column hidden

	showColumn: function(el, ev) {
		var index = 1;
		this.myTable.showColumn(index);
	}

Below is the configuration to reload table

	reload: function(el, ev) {
		this.myTable.reload();
	}

Below is the configuration to show information a line

	selected: function(el, ev) {
		var index = this.myTable.selectedRows()\[0\];
		var selected = this.myTable.getRow(index);
		FLUIGC.toast({
			title: '',
			message: "{\\"id\\" :" + selected.id + ", \\"name\\" :" + selected.name + " , \\"uf\\" :" + selected.uf + "}",
			type: 'success'
		});

	}

Below is an link example to code above.

Example

### Live demo with navigation buttons

Below is an example of a datatable with paging with navigation buttons.

destroy create

## Usage

#### Note

It is recommended that you use along with the datatable component [isolated scroll](#isolated-scroll) component.

To use the Datatable component, you must create a DIV element. Then enter the ID of this element to the constructor of the component. In the settings you can inform the way that the data is received, the titles of headers, lines will be set up with multi selection, enable or disable features of paging and search.

### HTML

Just create a div element.

	<div id="target"></div>

### Javascript

Below is the basic configuration to use Datatable.

var myTable = FLUIGC.datatable('#target', {
    dataRequest: mydata,
    renderContent: \['id', 'name', 'uf'\],
    header: \[
        {'title': 'Código'},
        {'title': 'Nome'},
        {'title': 'UF'}
    \]
}, function(err, data) {
    // DO SOMETHING (error or success)
});

Below is a complete example of how to build a datatable with dataset implementing search and reload.

#### Access to full example

We are providing a new API for dataset, the following link shows the example of how to use it.

var testDatatable = SuperWidget.extend({
	myTable: null,
	tableData: null,
	dataInit: null,

	init: function() {
		this.loadTable();
	},

	loadTable: function() {
		var that = this;
		that.myTable = FLUIGC.datatable('#idtable' + "\_" + that.instanceId, {
		    dataRequest: DatasetFactory.getDataset('colleague', null,null,null).values,
    	    renderContent: \['colleagueName', 'login', 'mail', 'defaultLanguage'\],
    	    header: \[
    	        {'title': 'colleagueName'},
    	        {'title': 'login'},
    	        {'title': 'mail'},
    	        {'title': 'defaultLanguage'}
    	    \],
    	    search: {
				enabled: true,
				onlyEnterkey: true,
				onSearch: function(res) {
					if (!res) {
						that.myTable.reload(dataInit);
					}
					var dataAll = that.myTable.getData();
					var search = dataAll.filter(function(el) {
						return el.colleagueName.toUpperCase().indexOf(res.toUpperCase()) >= 0
							|| el.login.toUpperCase().indexOf(res.toUpperCase()) >= 0
							|| el.mail.toUpperCase().indexOf(res.toUpperCase()) >= 0;
					});
					if (search && search.length) {
						that.myTable.reload(search);
					} else {
						FLUIGC.toast({
							title: 'Searching: ',
							message: 'No results',
							type: 'success'
						});
					}
				}
			},
			navButtons: {
				enabled: false,
			},
		}, function(err, data) {
			if(data) {
				dataInit = data;
			}
			else if (err) {
				FLUIGC.toast({
					message: err,
					type: 'danger'
				});
			}
		});
	}
});

### REST example

#### The paging and sorting feature can only be used in a datatable with a **REST service**. Pagination and sorting doesn't support static data or an array of objects.

Below is the complete configuration to use Datatable with a REST service.

var myTable = FLUIGC.datatable('#target', {
    dataRequest: {
        url: 'http://THE\_URL\_FOR\_REST\_SERVICE',
        options: {
            contentType:'application/json',
            dataType: 'json',
            crossDomain: true,
            cache: false
        },
        root: 'myRoot',
        limit: 5,
        offset: 0,
        patternKey: 'text',
        limitkey: 'per\_page',
        offsetKey: 'page',
        formatData: function(data) {
        	// Process
        	return data;
        }
    },
    renderContent: '.my\_template',
    header: \[
        {
        	'title': 'Código',
            'dataorder': 'CODIGO',
            'size': 'col-md-2',
            'display': false
        },
        {
        	'title': 'Nome',
        	'dataorder': 'NOME',
        	'standard': true,
        	'size': 'col-md-7',
        },
        {
        	'title': 'UF',
        	'dataorder': 'UF',
        	'size': 'col-md-5',
        }
    \],
    multiSelect: true,
    classSelected: 'danger',
    search: {
        enabled: true,
        onSearch: function(response) {
            // DO SOMETHING
        },
        onlyEnterkey: true,
        searchAreaStyle: 'col-md-3'
    },
    scroll: {
        target: '#example-with-continuos-scroll-and-data-button',
        enabled: true,
        onScroll: function() {
            // DO SOMETHING
        }
    },
    actions: {
        enabled: true,
        template: '.my\_template\_area\_actions',
        actionAreaStyle: 'col-md-9'
    },
    navButtons: {
        enabled: false,
        forwardstyle: 'btn-warning',
        backwardstyle: 'btn-warning',
    },
    emptyMessage: '

No data to display.

',
    tableStyle: 'table-striped',
    draggable: {
	    enabled: true,
	    onDrag: function(dragInfo) {
	        // Do something
	        return false; // If it returns false, will cancel the draggable
	    }
	}
}, function(err, data) {
    // DO SOMETHING (error or success)
});

Below is the complete configuration to use Datatable with a REST service and with data parameter.

var myTable = FLUIGC.datatable('#target', {
    dataRequest: {
        url: 'http://THE\_URL\_FOR\_REST\_SERVICE',
        options: {
            contentType:'application/json',
            dataType: 'json',
            crossDomain: true,
            cache: false,
            data: JSON.stringify({'datasetId' : 'dataset', 'filter' : {'Parameter': 'value'}}),
        },
        root: 'myRoot',
        limit: 5,
        offset: 0,
        patternKey: 'text',
        limitkey: 'per\_page',
        offsetKey: 'page',
        formatData: function(data) {
         // Process
         return data;
        }
    },
    renderContent: '.my\_template',
    header: \[
        {
         'title': 'Código',
            'dataorder': 'CODIGO',
            'size': 'col-md-2',
            'display': false
        },
        {
         'title': 'Nome',
         'dataorder': 'NOME',
         'standard': true,
         'size': 'col-md-7',
        },
        {
         'title': 'UF',
         'dataorder': 'UF',
         'size': 'col-md-5',
        }
    \],
    multiSelect: true,
    classSelected: 'danger',
    search: {
        enabled: true,
        onSearch: function(response) {
            // DO SOMETHING
        },
        onlyEnterkey: true,
        searchAreaStyle: 'col-md-3'
    },
    scroll: {
        target: '#target',
        enabled: true,
        onScroll: function() {
            // DO SOMETHING
        }
    },
    actions: {
        enabled: true,
        template: '.my\_template\_area\_actions',
        actionAreaStyle: 'col-md-9'
    },
    navButtons: {
        enabled: false,
        forwardstyle: 'btn-warning',
        backwardstyle: 'btn-warning',
    },
    emptyMessage: '

No data to display.

',
    tableStyle: 'table-striped',
    draggable: {
     enabled: true,
     onDrag: function(dragInfo) {
         // Do something
         return false; // If it returns false, will cancel the draggable
     }
 }
}, function(err, data) {
    // DO SOMETHING (error or success)
});

### Mustache Template

Below is the basic template to use Datatable.

<script type="text/template" class="template\_datatable">
	<tr>
		<td class="col-md-1"><input type="checkbox" class="form-checkbox-input" {{#checked}}checked{{/checked}}></td>
		<td>{{id}}</td>
		<td class="col-md-1"><span class='label label-{{status}}'>{{status}}</span>{{/status}}></td>
		<td>{{name}}</td>
		<td>{{state}}</td>
		<td>{{uf}}</td>
		<td></td>
	</tr>
</script>

Below is the basic template to buttons area

<script type="text/template" class="template\_area\_buttons">
	<button class="btn btn-primary" data-your-action-1>Action 1</button>
	<button class="btn btn-primary" data-your-action-2>Action 2</button>
</script>

Below is the basic template to edit a row.

<script type="text/template" class="template\_datatable\_edit">
    <tr>
        <td>
			<input type="text" value="{{id}}">
		</td>
        <td>
			<input type="text" value="{{name}}">
		</td>
        <td>
			<select class="form-control" value="{{uf}}">
				...
			</select>
		</td>
		<td>
			<button class="btn btn-default" data-your-action-3>update</button>
		</td>
    </tr>
</script>

#### Do **not** put the _<script type="text/template"/>_ element **inside** the datatable's _<div/>_ element.

Below are some examples of datatable actions

	$('YOUR\_SELECTOR').on('click', '\[data-your-add-button\]', function(ev) {
		var row = {id: "30", name: "Alabama", uf: "AL"};
		myTable.addRow(0, row);
	});

	$('YOUR\_SELECTOR').on('click', '\[data-your-edit-button\]', function(ev) {
		var row = myTable.getRow(myTable.selectedRows()\[0\]);
		myTable.updateRow(myTable.selectedRows()\[0\], row, '.template\_datatable\_edit');
		$('YOUR-SELECTOR-TO-ID').val(row.id);
		$('YOUR-SELECTOR-TO-NAME').val(row.name);
		$('YOUR-SELECTOR-TO-UF').val(row.uf);
		$('\[data-your-action-3\]').click(function(e) {
	    	var editedRow = {
				id: $('YOUR-SELECTOR-TO-ID').val(),
		        name: $('YOUR-SELECTOR-TO-NAME').val(),
		        uf: $('YOUR-SELECTOR-TO-UF').val()
		    };
			myTable.updateRow(myTable.selectedRows()\[0\], editedRow);
	    });
	});

	$('YOUR\_SELECTOR').on('click', '\[data-your-del-button\]', function(ev) {
		var itemsToRemove = myTable.selectedRows();
        if(itemsToRemove.length > 0) {
            for(var i = 0; i <= items.length; i++) {
                myTable.removeRow(myTable.selectedRows()\[0\]);
            }
        }
	});

	$('YOUR\_SELECTOR').on('click', '\[data-your-reload-button\]', function(ev) {
		myTable.reload();
	});

	$('YOUR\_SELECTOR').on('click', '\[data-your-show-column-button\]', function(ev) {
		myTable.showColumn(index);
	});

	$('YOUR\_SELECTOR').on('click', '\[data-your-hide-column-button\]', function(ev) {
		myTable.hideColumn(index);
	});

	$('YOUR\_SELECTOR').on('click', '\[data-your-selected-row-button\]', function(ev) {
		var index = myTable.selectedRows()\[0\];
        var selected = myTable.getRow(index);
	});

### Settings Object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>dataRequest</td><td>string or array of objects</td><td>''</td><td>This attribute is required, can be an array of objects or an object that points to a URL (REST service). Please see the "Settings to Object dataRequest" table.</td></tr><tr><td>renderContent</td><td>array or string</td><td>''</td><td>This attribute is required, can be an array with the keys of the object or CSS class of a mustache template.</td></tr><tr><td>header</td><td>array of objects</td><td>Object literal keys received in dataRequest</td><td>This attribute is optional, must be an array of objects with attrs header for the table. The header has the title attribute. Please see the "Settings to array of objects header" table.</td></tr><tr><td>multiSelect</td><td>boolean</td><td>false</td><td>Allows you to enable multi row selection.</td></tr><tr><td>classSelected</td><td>string</td><td>active</td><td>It's a CSS class used to paint the line.</td></tr><tr><td>search</td><td>object</td><td>''</td><td>Enables the search field (always available). You can disable it via the "enabled" attribute passing the value false. You can also implement your own search function via the "onSearch" attribute. Please see the "Settings to object search" table.</td></tr><tr><td>scroll</td><td>object</td><td>''</td><td>Enables the use of continuous scroll (always available). You can disable it via the "enabled" attribute passing the false value. You can also implement your own function continuously scroll through the "onScroll" attribute. Please see the "Settings to object scroll" table.</td></tr><tr><td>actions</td><td>object</td><td>''</td><td>Allows an area to be enabled to render buttons. Please see the "Settings to object actions" table.</td></tr><tr><td>emptyMessage</td><td>string</td><td>Message default</td><td>Allows you to set a default message if there is no data to be loaded.</td></tr><tr><td>navButtons</td><td>object</td><td>''</td><td>Allows you to enable navigation buttons for paging, if only the 'scroll' attribute is setted to false.</td></tr><tr><td>tableStyle</td><td>string</td><td>''</td><td>Defines a CSS class to apply to the table. Ex .: 'table-hover table-bordered table-striped'.</td></tr><tr><td>draggable</td><td>object</td><td>''</td><td>Allows you to enable drag and drop functionality.</td></tr></tbody></table>

#### Mobile columns option

When rendered on mobile devices, the datatable has a button with a small panel to show/hide it's columns, for better reading. For this purpose, you can use the `mobileMainColumns` option to set which columns will be displayed by default when rendering on mobile devices. The expected param is an array of the indexes of the desired columns.

#### Overwrites column display option

When configured, the `mobileMainColumns` option overwrites the `display` option setted for each column on the `header` option.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>mobileMainColumns</td><td>array of integers</td><td>[ ]</td><td>An array of the indexes of the desired columns, to be displayed on mobile devices.</td></tr></tbody></table>

### Settings to Object dataRequest

#### We recommend that the REST service is built considering the parameters of paging, searching and sorting.

http://SERVER:PORT/application?offset=0&limit=20&orderby=NAME\_ASC&pattern=yourtext

#### When the datatable is configured to use a REST service and if you want to paging, you must enter the value of the LIMIT attribute. The datatable change this value by adding one (+1) to calculate whether there will be a next page for navButtons. On request the return list is changed returned the correct number per page.

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>''</td><td>It is the URL for a Rest Service.</td></tr><tr><td>options</td><td>object</td><td>''</td><td>Are the options passed to the ajax request. Please see the "Settings to Object options" table.</td></tr><tr><td>root</td><td>string</td><td>''</td><td>Root of the object that has the data that will be rendered.</td></tr><tr><td>limit</td><td>int</td><td>30</td><td>Maximum of records returned per page.</td></tr><tr><td>offset</td><td>int</td><td>0</td><td>Records to skip before returning records.</td></tr><tr><td>orderKey</td><td>string</td><td>orderby</td><td>Key name to order.</td></tr><tr><td>orderAscKey</td><td>string</td><td>_ASC</td><td>Key name to ascending order.</td></tr><tr><td>orderDescKey</td><td>string</td><td>_DESC</td><td>Key name to descending order.</td></tr><tr><td>orderDirectionKey</td><td>string</td><td>''</td><td>Key name to order direction. If provided, the orderAscKey and orderDescKey options will be sent as a separate parameter.</td></tr><tr><td>patternKey</td><td>string</td><td>pattern</td><td>Key name to pattern.</td></tr><tr><td>limitkey</td><td>string</td><td>limit</td><td>Key name to limit.</td></tr><tr><td>offsetKey</td><td>string</td><td>offset</td><td>Key name to offset.</td></tr><tr><td>formatData</td><td>function</td><td>''</td><td>Function to process the data before they are rendered, thus being able to format them if necessary;</td></tr></tbody></table>

### Settings to Object options

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>contentType</td><td>string</td><td>application/json</td><td>The type of data that you're expecting back from the server. See more: <a href="http://api.jquery.com/jQuery.ajax">http://api.jquery.com/jQuery.ajax</a></td></tr></tbody></table>

### Settings to array of objects header

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>''</td><td>Title for the table header.</td></tr><tr><td>dataorder</td><td>string</td><td>''</td><td>Value that will be sent to the server for ordering. This value is concatenated with ASC or DESC.</td></tr><tr><td>standard</td><td>boolean</td><td>''</td><td>Default value ordering.</td></tr><tr><td>size</td><td>string</td><td>''</td><td>Define a CSS class to apply to the column width. Ex .: 'col-md-2'.</td></tr><tr><td>display</td><td>boolean</td><td>true</td><td>If this attribute is set to "false", this column will be hidden.</td></tr></tbody></table>

### Settings to object search

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>enabled</td><td>boolean</td><td>true</td><td>Is always enabled. if you want to disable it set it to false.</td></tr><tr><td>onSearch</td><td>function</td><td>Internal function</td><td>Internal function that does request according to url parameters and configured. If this parameter is entered, the search will be implemented by the developer.</td></tr><tr><td>onlyEnterKey</td><td>boolean</td><td>''</td><td>If this parameter is entered, the search will be fired while typing.</td></tr><tr><td>searchAreaStyle</td><td>string</td><td>''</td><td>Defines a CSS class to apply to the search area. Ex .: 'col-md-3'.</td></tr><tr><td>minLength</td><td>integer</td><td>''</td><td>Defines a minimum search length to apply the search</td></tr></tbody></table>

### Settings to object scroll

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>target</td><td>string</td><td>window</td><td>Should be informed a CSS class. If not entered will be considered scroll the page.</td></tr><tr><td>enabled</td><td>boolean</td><td>true</td><td>Is always enabled. if you want to disable it set it to false.</td></tr><tr><td>onScroll</td><td>function</td><td>Internal function</td><td>Internal function that does automatic paging using the component continuous scroll. If this parameter is entered, the search will be implemented by the developer.</td></tr></tbody></table>

### Settings to object actions

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>enabled</td><td>boolean</td><td>true</td><td>Is always enabled. if you want to disable it set it to false.</td></tr><tr><td>template</td><td>string</td><td>''</td><td>Should be informed the CSS class of a mustache template.</td></tr><tr><td>actionAreaStyle</td><td>string</td><td>''</td><td>Defines a CSS class to apply in the area of actions. Ex .: 'col-md-9'.</td></tr></tbody></table>

### Settings to object navButtons

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>enabled</td><td>boolean</td><td>true</td><td>Is always enabled. if you want to disable it set it to false.</td></tr><tr><td>forwardstyle</td><td>string</td><td>btn-default</td><td>Should be informed the CSS class of a navigation button forward.</td></tr><tr><td>backwardstyle</td><td>string</td><td>btn-default</td><td>Should be informed the CSS class of a navigation button backward.</td></tr></tbody></table>

### Settings to object draggable

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>enabled</td><td>boolean</td><td>true</td><td>Is always enabled. if you want to disable it set it to false.</td></tr><tr><td>onDrag</td><td>function</td><td>''</td><td>Function that allows access to the moved items. Returns an object containing data, lastPosition, newPosition and targetPosition.</td></tr></tbody></table>

## Methods

#### .addPage(newData, template, isSearch)

Adds a new page. Must pass the new data. Can be informed a CSS class of a mustache template. If isAppend parameter is specified, the page will be added to the end, otherwise the content will be replaced.

	myTable.addPage(data);
	myTable.addPage(data, '.my\_template');

#### .addRow(index, newData, template)

Adds a new row. Must pass the index and the object to be added. Can be informed a CSS class of a mustache template.

	myTable.addRow(0, data); // Insert at index 0 of the table
	myTable.addRow(3, data); // Insert the index 3 of the table
	myTable.addRow(null, data); // Insert at end of table
	myTable.addRow(0, data, '.my\_template'); // Insert with mustache template
	myTable.addRow(3, data, '.my\_template');
	myTable.addRow(null, data, '.my\_template');

#### .reload(newData, template)

Reloads the table. The newDat and template parameters are optional. If newData is passed, it will be reloaded with the new data. Can be informed a CSS class of a mustache template.

	myTable.reload(); // Reloads table keeping state
	myTable.reload(data); // Reloads the table passing new data
	myTable.reload(data, '.my\_template'); // Reloads the table passing new data and a template

#### .removeRow(index)

Remove line passing the index

	myTable.removeRow(0);

#### .removeRows(arrayIndex)

Remove the table items that are passed through an array;

	myTable.removeRows(arrayIndex);

#### .updateRow(index, newData, template)

Updates the row with a optional CSS class of a mustache template

	myTable.updateRow(n, data); // Updates the row passing the index
	myTable.updateRow(n, data, '.my\_template'); // Updates the row with a template

#### .getRow(index, isHtml)

Returns a row as an object. If the isHtml parameter is passed, returns as HTML.

	myTable.getRow(1);
	myTable.getRow(2, true);

#### .selectedRows()

Returns an array of index of the selected rows.

	myTable.selectedRows();

#### .nextPage(limit, offset)

Returns the next page from the limit and offset informed.

	myTable.nextPage(5, 5);

#### .getClassSelected()

Returns CSS class used in the selection of rows.

	myTable.getClassSelected();

#### .getData()

Returns Array of objects loaded.

	myTable.getData();

#### .showColumns()

Shows all columns are hidden.

	myTable.showColumns();

#### .showColumn(index)

Show column passing the index.

	myTable.showColumn(0);

#### .hideColumn(index)

Hide the column passing the index.

	myTable.hideColumn(index);

#### .showLoading(target)

Shows an image while some content is loaded.

	myTable.showLoading();
	myTable.showLoading(target);

#### .hideLoading(index)

Hides the image displayed after some content is loaded.

	myTable.hideLoading();

#### .on(event, callback)

Attach an event handler function for events to the datatable.

var myTable = FLUIGC.datatable('#target', {
    dataRequest: mydata,
    renderContent: \['id', 'name', 'uf'\],
    header: \[
        {'title': 'Código'},
        {'title': 'Nome'},
        {'title': 'UF'}
    \]
}, function(err, data) {
    // DO SOMETHING (error or success)
});

	myTable.on('fluig.datatable.loadcomplete', function() {});
	myTable.on('fluig.datatable.onselectrow', function(data) { /\* use the data.selectedIndex \*/});
	myTable.on('fluig.datatable.drag.start', function(ev, data) {});
	myTable.on('fluig.datatable.drag.end', function(ev, data) {});
	myTable.on('fluig.datatable.scroll', function() {});
	myTable.on('fluig.datatable.search', function(ev, data) {});
	myTable.on('fluig.datatable.forward', function() {});
	myTable.on('fluig.datatable.backward', function() {});

#### .destroy()

Removes Datatable functionality and reverts the input element back to its original state.

	myTable.destroy();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.datatable.loadcomplete</td><td>Triggered when the datatable was loaded.</td></tr><tr><td>fluig.datatable.onselectrow</td><td>Triggered when a row is clicked. Returns an object data. The data.selectedIndex returns an array with the selected rows</td></tr><tr><td>fluig.datatable.drag.start</td><td>Triggered when sorting starts. Returns an object with following attributes: lastPosition and data.</td></tr><tr><td>fluig.datatable.drag.end</td><td>Triggered when sorting has stopped. Returns an object with following attributes: lastPosition, newPosition, targetPosition and data.</td></tr><tr><td>fluig.datatable.scroll</td><td>Triggered when a scroll is completed.</td></tr><tr><td>fluig.datatable.search</td><td>Triggered when the search is requested. Returns the text entered in the search.</td></tr><tr><td>fluig.datatable.forward</td><td>Triggered when the forward button is clicked.</td></tr><tr><td>fluig.datatable.backward</td><td>Triggered when the backward button is clicked.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.datatable.loadcomplete

This event is fired when the table was fully loaded.

var myTable = FLUIGC.datatable('#target', {
    dataRequest: mydata,
    renderContent: \['id', 'name', 'uf'\],
    header: \[
        {'title': 'Código'},
        {'title': 'Nome'},
        {'title': 'UF'}
    \]
}, function(err, data) {
    // DO SOMETHING (error or success)
});

	myTable.on('fluig.datatable.loadcomplete', function() {
		// Do something
	});

#### fluig.datatable.onselect

This event is fired when a row is selected.

	myTable.on('fluig.datatable.onselectrow', function(data) {
		// the data.selectedIndex returns an array with the selected rows
	});

#### Main callback

This callback will treat error return and also success.

	var myTable = FLUIGC.datatable('#target', {
	    dataRequest: mydata,
	    renderContent: \['id', 'name', 'uf'\],
	    header: \[
	        {'title': 'Código'},
	        {'title': 'Nome'},
	        {'title': 'UF'}
	    \]
	}, function(err, data) {
		// DO SOMETHING (Treat the error or success)
    });

# Dropdowns

## Examples

Add dropdown menus to nearly anything with this simple plugin, including the navbar, tabs, and pills.

### Within a navbar

Toggle navigation [Project Name](#)

-   [Dropdown](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)
-   [Dropdown 2](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)

-   [Dropdown 3](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)

### Within pills

-   [Regular link](#)
-   [Dropdown](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)
-   [Dropdown 2](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)
-   [Dropdown 3](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)

## Usage

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.open` class on the parent list item. When opened, the plugin also adds `.dropdown-backdrop` as a click area for closing dropdown menus when clicking outside the menu. Note: The `data-toggle=dropdown` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

### Via data attributes

Add `data-toggle="dropdown"` to a link or button to toggle a dropdown.

<div class="dropdown">
	<a data-toggle="dropdown" href="#">Dropdown trigger</a>
	<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
		...
	</ul>
</div>

To keep URLs intact, use the `data-target` attribute instead of `href="#"`.

<div class="dropdown">
	<a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="#">
	Dropdown <span class="caret"></span>
	</a>
	<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
		...
	</ul>
</div>

### Via JavaScript

Call the dropdowns via JavaScript:

$('.dropdown-toggle').dropdown();

#### `data-toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element.

### Options

_None_

### Methods

#### $().dropdown('toggle')

Toggles the dropdown menu of a given navbar or tabbed navigation.

### Events

All dropdown events are fired at the `.dropdown-menu`'s parent element.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 150px;">Event Type</th><th>Description</th></tr></thead><tbody><tr><td>show.bs.dropdown</td><td>This event fires immediately when the show instance method is called. The toggling anchor element is available as the <code>relatedTarget</code> property of the event.</td></tr><tr><td>shown.bs.dropdown</td><td>This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete). The toggling anchor element is available as the <code>relatedTarget</code> property of the event.</td></tr><tr><td>hide.bs.dropdown</td><td>This event is fired immediately when the hide instance method has been called. The toggling anchor element is available as the <code>relatedTarget</code> property of the event.</td></tr><tr><td>hidden.bs.dropdown</td><td>This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete). The toggling anchor element is available as the <code>relatedTarget</code> property of the event.</td></tr></tbody></table>

$('#myDropdown').on('show.bs.dropdown', function () {
	// do something…
});

# Desktop Notification

Desktop Notification allows you the ability to launch desktop notifications directly from your web applications.

## Javascript

	var myVar = FLUIGC.notification(options);

## Examples

### Live demo

The example below shows the notification when you click in the button.

Notify me!

	var notification = FLUIGC.notification({
		title: "Desktop Notification",
		body: "Now is " + FLUIGC.calendar.formatDate(new Date()),
		tag: new Date().getTime(),
		icon: 'images/user\_picture.png'
	});
	notification.show();

#### When the component will be used in the browser that doesn't supports Notifications API, the desktop notification not will be showed in the desktop only in the browser.

## Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th>description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>The title of the notification as specified in the options parameter of the constructor.</td></tr><tr><td>body</td><td>string</td><td>The body string of the notification as specified in the options parameter of the constructor.</td></tr><tr><td>tag</td><td>string</td><td>The ID of the notification (if any) as specified in the options parameter of the constructor.</td></tr><tr><td>icon</td><td>string</td><td>The URL of the image used as an icon of the notification as specified in the options parameter of the constructor.</td></tr></tbody></table>

## Methods

### .on(event, callback)

Attach an event handler function for events to the desktop notification.

	notification.on('click', function(ev) {
		// DO SOMETHING
	});

### .show()

Shows the desktop notification.

	notification.show();

### .requestPermission()

Requests permission to show desktop notifications from fluig.

	notification.requestPermission();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>A handler for the show event. It is triggered when the notification is displayed.</td></tr><tr><td>click</td><td>A handler for the click event. It is triggered each time the user clicks on the notification.</td></tr><tr><td>error</td><td>A handler for the error event. It is triggered each time the notification encounters an error.</td></tr><tr><td>close</td><td>A handler for the close event. It is triggered when the user closes the notification.</td></tr></tbody></table>

### Example

Example of use.

		notification.on('click', function(ev) {
			window.open(pageUrl, pageName);
		});

# Editable

This component allows you to create editable elements on your page.

## Javascript

	var editable = FLUIGC.editable(target, options);

User state:

California

## Examples

### Basic usage

#### In HTML:

	<label id="user-name">John Lennon</label>

#### In JavaScript:

	var editable = FLUIGC.editable('#user-name');

#### Result:

John Lennon

### Advanced usage

#### In HTML:

	<p id="user-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

#### In JavaScript:

	var editable = FLUIGC.editable('#user-description', {
		type: 'textarea',
		name: 'user-description',
		title: 'Enter your description'
	});

#### Result:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 15%;">Type</th><th style="width: 15%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>anim</td><td>string</td><td>false</td><td>Animation speed (inline mode only).</td></tr><tr><td>autotext</td><td>string</td><td>'auto'</td><td>Allows to automatically set element's text based on it's value. Can be <code>auto|always|never</code>. Useful for select and date. For example, if dropdown list is <code>{1: 'a', 2: 'b'}</code> and element's value set to <code>1</code>, it's html will be automatically set to <code>'a'</code>.<br><code>auto</code> - text will be automatically set only if element is empty.<br><code>always|never</code> - always(never) try to set element's text.</td></tr><tr><td>defaultValue</td><td>string|object</td><td>null</td><td>Value that will be displayed in input if original field value is empty (<code>null|undefined|''</code>).</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>Sets disabled state of editable.</td></tr><tr><td>emptyclass</td><td>string</td><td>editable-empty</td><td>Css class applied when editable text is empty.</td></tr><tr><td>emptytext</td><td>string</td><td>'Empty'</td><td>Text shown when element is empty.</td></tr><tr><td>highlight</td><td>string|boolean</td><td>#FFFF80</td><td>Color used to highlight element after update. Implemented via CSS3 transition, works in modern browsers.</td></tr><tr><td>name</td><td>string</td><td>null</td><td>Action when user clicks outside the container. Can be <code>cancel|submit|ignore</code>.<br>Setting <code>ignore</code> allows to have several containers open.</td></tr><tr><td>toggle</td><td>string</td><td>'click'</td><td>How to toggle editable. Can be <code>click|dblclick|mouseenter|manual</code>.<br>When set to <code>manual</code> you should manually call <code>show/hide</code> methods of editable.<br><strong>Note</strong>: if you call <code>show</code> or <code>toggle</code> inside <strong>click</strong> handler of some DOM element, you need to apply <code>e.stopPropagation()</code> because containers are being closed on any click on document.</td></tr><tr><td>type</td><td>string</td><td>'text'</td><td>Type of input. Can be <code>text|textarea|select|date|checklist</code> and more.</td></tr></tbody></table>

## Methods

### .on(event, callback)

Attach an event handler function for events to the component.

	editable.on('fsshown.editable', function(ev) {
		// DO SOMETHING
	});

### .activate()

Activates input of visible container (e.g. set focus).

	editable.activate();

### .destroy()

Removes editable feature from element.

	editable.destroy();

### .disable()

Disables editable.

	editable.disable();

### .enable()

Enables editable.

	editable.enable();

### .getValue(isSingle)

Returns current values of editable elements.  
Note that it returns an **object** with name-value pairs, not a value itself. It allows to get data from several elements.  
If value of some editable is `null` or `undefined` it is excluded from result object. When param `isSingle` is set to **true** - it is supposed you have single element and will return value of editable instead of object.  
`isSingle` Bool whether to return just value of single element

	editable.getValue(isSingle);

### .hide()

Hides container with form.

	editable.hide();

### .setValue(value, convertStr)

Hides container with form.  
`value` Mixed new value.  
`convertStr` Boolean whether to convert value from string to internal format.

	editable.setValue(value, convertStr);

### .show(closeAll)

Shows container with form.  
`closeAll` Boolean Whether to close all other editable containers when showing this one. Default true.

	editable.show(closeAll);

### .toggle(closeAll)

Toggles container visibility (show / hide).  
`closeAll` Boolean Whether to close all other editable containers when showing this one. Default true.

	editable.toggle(closeAll);

### .toggleDisabled()

Toggles enabled / disabled state of editable element.

	editable.toggleDisabled();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 20%;">Name</th><th style="width: 20%;">Callback parameters</th><th>Description</th></tr></thead><tbody><tr><td>fshidden.editable</td><td><ul><li><strong>event</strong> <i>Object</i> event object;</li><li><strong>reason</strong> <i>String</i> Reason caused hiding. Can be <code>save|cancel|onblur|nochange|manual</code>;</li></ul></td><td>Fired when container was hidden. It occurs on both save or cancel.</td></tr><tr><td>fsinit.editable</td><td><ul><li><strong>event</strong> <i>Object</i> event object;</li><li><strong>editable</strong> <i>Object</i> editable instance (as here it cannot accessed via data('editable'));</li></ul></td><td>Fired when element was initialized by <code>FLUIGC.editable()</code> method.</td></tr><tr><td>fssave.editable</td><td><ul><li><strong>event</strong> <i>Object</i> event object</li><li><strong>params</strong> <i>Object</i> additional params<ul type="circle" style="margin-left: 20px"><li><strong>newValue</strong> <i>Mixed</i> submitted value</li><li><strong>response</strong> <i>Object</i> ajax response</li></ul></li></ul></td><td>Fired when new value was submitted.</td></tr><tr><td>fsshown.editable</td><td><ul><li><strong>event</strong> <i>Object</i> event object</li></ul></td><td>Fired when container is shown and form is rendered (for select will wait for loading dropdown options).</td></tr></tbody></table>

### Example

Example of use.

		editable.on('fshidden.editable', function(ev) {
			var reason = ev.reason;
			
			if(reason) {
				// DO SOMETHING
			}
		});

# Input form with clear

Form component that enables a button to clear entered text when it has a value.

<form role="form" autocomplete="off">
    <div class="form-group has-feedback form-with-clear">
        <input name="search-form-example" class="form-control" type="text" placeholder="Search...">
        <i class="flaticon flaticon-search icon-sm form-control-feedback" aria-hidden="true"></i>
    </div>
</form>

# Loading

## Examples

Loading helps in displaying a message for the user while waiting for the loading of some resource. You can display a text or an image to the user, telling you which area will be blocked.

### Live demo

Below is an example applied to the **window** with **text message**.

### Javascript

				// Component construction by setting the window with text message.
				var myLoading1 = FLUIGC.loading(window, {
					textMessage: 'Carregando'
				});

Click the button below to see the loading example with **text message**. For more details see the Settings object:

See Example

Below is an example applied to the window object.

### Javascript

				// Component construction by setting the window.
				var myLoading2 = FLUIGC.loading(window);
				// We can show the message of loading
				myLoading2.show();
				// We can hide the message of loading
				myLoading2.hide();

Click the button below to see the loading example in the **window**:

See Example

Below is an example applied to a Html element.

### Html

			<div id="YOUR-SELECTOR">
				<p>Any content here.</p>
			</div>

### Javascript

			// Component construction by setting one div.
			var myLoading3 = FLUIGC.loading('#YOUR-SELECTOR');
			// We can show the message of loading
			myLoading3.show();
			// We can hide the message of loading
			myLoading3.hide();

Panel heading

Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.

<table class="table table-striped"><thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><td>3</td><td>Larry</td><td>the Bird</td><td>@twitter</td></tr></tbody></table>

Click the button below to see the loading in a html element. In the above example, the loading is applied to the panel container.

See Example

### Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>textMessage</td><td>string</td><td>'Loading...'</td><td>Message that appears.</td></tr><tr><td>title</td><td>string</td><td>''</td><td>Title string; only used when theme == true</td></tr><tr><td>css</td><td>object</td><td>''</td><td>Styles for the message when blocking</td></tr><tr><td>overlayCSS</td><td>object</td><td>''</td><td>Styles for the overlay.</td></tr><tr><td>cursorReset</td><td>string</td><td>''</td><td>Style to replace wait cursor before unblocking.</td></tr><tr><td>baseZ</td><td>int</td><td>''</td><td>z-index for the blocking overlay.</td></tr><tr><td>centerX</td><td>boolean</td><td>true</td><td>Set these to true to have the message automatically centered.</td></tr><tr><td>centerZ</td><td>boolean</td><td>true</td><td>Set these to true to have the message automatically centered.</td></tr><tr><td>bindEvents</td><td>boolean</td><td>true</td><td>Enable if you want key and mouse events to be disabled for content that is blocked.</td></tr><tr><td>fadeIn</td><td>int</td><td>''</td><td>FadeIn time in millis; set to 0 to disable fadeIn on block.</td></tr><tr><td>fadeOut</td><td>int</td><td>''</td><td>FadeOut time in millis; set to 0 to disable fadeOut on unblock.</td></tr><tr><td>timeout</td><td>int</td><td>''</td><td>Time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock.</td></tr><tr><td>showOverlay</td><td>boolean</td><td>true</td><td>Disable if you don't want to show the overlay.</td></tr><tr><td>showBackground</td><td>boolean</td><td>false</td><td>Enable if you want the white background to appear without the text.</td></tr><tr><td>onBlock</td><td>callback function</td><td>null</td><td>Callback method invoked when fadeIn has completed and blocking message is visible.</td></tr><tr><td>onUnBlock</td><td>callback function</td><td>null</td><td>callback method invoked when unblocking has completed; the callback is passed the element that has been unblocked.</td></tr><tr><td>ignoreIfBlocked</td><td>boolean</td><td>false</td><td>if it is already blocked, then ignore it (don't unblock and reblock)</td></tr></tbody></table>

Below an example with possible configurations.

### Javascript

	var myLoading = FLUIGC.loading('#YOUR-SELECTOR', {
		textMessage:  '

# Please wait...

', 
		title: null,
		css: {
		    padding:        0,
		    margin:         0,
		    width:          '30%',
		    top:            '40%',
		    left:           '35%',
		    textAlign:      'center',
		    color:          '#000',
		    border:         '3px solid #aaa',
		    backgroundColor:'#fff',
		    cursor:         'wait'
		},
		overlayCSS:  { 
		    backgroundColor: '#000', 
		    opacity:         0.6, 
		    cursor:          'wait' 
		}, 
		cursorReset: 'default',
		baseZ: 1000,
		centerX: true,
		centerY: true,
		bindEvents: true,
		fadeIn:  200,
		fadeOut:  400,
		timeout: 0,
		showOverlay: true, 
		onBlock: null,
		onUnblock: null,
		ignoreIfBlocked: false
	});

# Modals

## Basic configuration

	FLUIGC.modal(options, callback);

## Examples

Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.

#### Mobile device caveats

There are some caveats regarding using modals on mobile devices. [See our browser support docs](../getting-started/#support-fixed-position-keyboards) for details.

### Static example

A rendered modal with header, body, and set of actions in the footer.

×Close

#### Title

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

Close Save

#### The modal component uses Mustache templates.

Mustache is a specification template that does not use logic, ie, does not have statements with if, for, while etc, throughout its construction is based on tags.

### Live demo

By clicking the button below, you invoked the modal component:

Launch demo modal

## Usage

To use the modal component, you must create an HTML element and add a 'data' attribute. Then do a bind on the attribute and invoke the function FLUIGC.modal.

### HTML

Create an HTML element that will trigger the event to invoke the modal and add a 'data' attribute.

	<button class="btn btn-primary btn-lg" data-your-modal>
		Launch modal
	</button>

### JavaScript

Bind the element from the 'selector' the 'data' attribute and then just invoke the modal component `FLUIGC.modal(settings);`

var myModal = FLUIGC.modal({
	title: 'Title',
	content: '

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

',
	id: 'fluig-modal',
	actions: \[{
		'label': 'Save',
		'bind': 'data-open-modal',
	},{
		'label': 'Close',
		'autoClose': true
	}\]
}, function(err, data) {
	if(err) {
		// do error handling
	} else {
		// do something with data
	}
});

## Header actions

It is possible with the modal to add more actions to the header, in addition to the close button.

Launch modal with header actions

var myModal = FLUIGC.modal({
	title: 'Title',
	content: '

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

',
	id: 'fluig-modal-header-actions',
	actions: \[{
		label: 'Salvar',
		bind: 'data-save-modal',
	}, {
		label: 'Fechar',
		autoClose: true
	}\],
    headerActions: \[{
    	icon: 'flaticon-zoom-out',
		bind: 'data-search-zoom-out',
    }, {
    	icon: 'flaticon-search-zoom',
		bind: 'data-search-zoom',
    }\]
});

It is also possible to define child actions for the header icon.

Launch modal with header child actions

FLUIGC.modal({
	title: 'Title',
	content: '

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

',
	id: 'fluig-modal-header-actions-2',
	actions: \[{
		label: 'Salvar',
		bind: 'data-save-modal',
	}, {
		label: 'Fechar',
		autoClose: true
	}\],
	headerActions: \[{
		icon: 'flaticon-more-vert',
		childActions: \[{
			label: 'Zoom in',
			bind: 'data-search-zoom-in'
		}, {
			label: 'Zoom out',
			bind: 'data-search-zoom-out'
		}\]
	}\]
});

## Modal without header and footer

It is also possible to create a modal without the header and/or without the footer.

Launch modal with header child actions

var modalHf = FLUIGC.modal({
	content: 'Fechar modal',
	id: 'fluig-modal-without-hf',
	showHeader: false,
	showFooter: false,
});

// example bind to close modal
$(document).on('click', '\[data-close-modal-hf\]', function(ev) {
	modalHf.remove();
});

## Optional sizes

Modals have three optional sizes, available via size parameter.

Full modal Large modal Small modal

var myModal = FLUIGC.modal({
	title: 'Title',
	content: '

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

',
	id: 'fluig-modal',
	size: 'full | large | small'
	actions: \[{
		'label': 'Save',
		'bind': 'data-open-modal',
	},{
		'label': 'Close',
		'autoClose': true
	}\]
}, function(err, data) {
	if(err) {
		// do error handling
	} else {
		// do something with data
	}
});

## Dialog Example

Open dialog

### HTML

<div class="comp-show-dialog">
	<button class="btn btn-primary btn-lg" data-comp-show-dialog>
		Open dialog
	</button>
</div>

<script type="text/template" class="comp-show-dialog-tpl">
	<div class="fs-align-items-center fs-display-flex fs-flex-direction-column fs-md-gap fs-sm-padding-vertical">
		<img is="theme-illustrations" src="/style-guide/images/illustrations/tasks.svg" title="tasks" width="100">
		<h5 class="fs-no-margin">Title dialog</h5>
		<p class="fs-no-margin text-center">Message dialog.</p>
		<div class="fs-display-flex fs-sm-gap">
			<button class="btn btn-default" data-dismiss="modal">Close</button>
			<button class="btn btn-primary" >Save</button>
		</div>
	</div>
</script>

### JAVASCRIPT

	var template = $('.comp-show-dialog-tpl').html();
	FLUIGC.modal({
		content: Mustache.render(template),
		id: 'fluig-dialog',
		size: "small",
		showHeader: false,
		showFooter: false
	});

## Opening a modal within another modal

There are cases where it will be necessary to open a modal within another, see how the component behaves:

Modal 01

### Settings Object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>'Style guide'</td><td>It is the title that is displayed in modal.</td></tr><tr><td>content</td><td>Can be an object, a string in HTML format, a Mustache template or return a call to "renderpartial".</td><td>""</td><td>It is the content that will be injected into the body of the modal. Can be an object, a text, a Mustache template or 'HTML' content returned by a call to 'WCMAPI.convertFtlAsync ()' for example. If the content is an object, it must inform the parameters to render a widget.</td></tr><tr><td>id</td><td>String</td><td>'fluig-modal'</td><td>The id that will be assigned to the modal.</td></tr><tr><td>showHeader</td><td>Boolean</td><td>true</td><td>Controls whether or not the modal header will be displayed.</td></tr><tr><td>showFooter</td><td>Boolean</td><td>true</td><td>Controls whether or not the modal footer will be displayed.</td></tr><tr><td>actions</td><td>Array</td><td>[]</td><td>Receives an Array of configuration objects for each button.</td></tr><tr><td>headerActions</td><td>Array</td><td>[]</td><td>Receives an Array of configuration objects for each header action button.</td></tr><tr><td>headerContent</td><td>Receives a string in HTML format or a Mustache template.</td><td>""</td><td>This is the content that will be injected into the modal header, next to the close button. It can be text, a Mustache template or 'HTML'.</td></tr><tr><td>headerContent</td><td>Boolean</td><td>false</td><td>It is a dividing line that stands between the header and the content.</td></tr><tr><td>size</td><td>String</td><td>""</td><td>Receives a string containing the size of the modal. The available options are "large", "small" or empty. Empty it gets the default size.</td></tr><tr><td>formModal</td><td>Boolean</td><td>false</td><td>Responsible for informing the modal is the standard form or not. If true, it receives all the default behavior of a form such as "enter" on your keyboard to submit the form event.</td></tr></tbody></table>

### Settings to Object content

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>widgetCode</td><td>string</td><td>''</td><td>It's the code of the widget. Ex .: 'sociallike'.</td></tr><tr><td>ftl</td><td>string</td><td>''</td><td>It's the 'FTL' widget file to be processed. Ex .: 'view.ftl'.</td></tr><tr><td>data</td><td>Object</td><td>''</td><td>It is the configuration object for processing the widget. Ex .: sociableId, listType, customInstance.</td></tr></tbody></table>

#### Modal combined with convertFtlAsync

Rendering of widgets available only on pages.

### JavaScript

Configuration using the feature convertFtlAsync

var myModal = FLUIGC.modal({
	title: 'title',
	content: {
		widgetCode: 'myWidget', 
		ftl: 'view.ftl',
		data: {
			sociableId: 0001,
			listType: 'SOCIABLE',
			customInstance: WCMAPI.generateId()
		}
	},
	id: 'fluig-modal',
	actions: \[{
		'label': 'Save',
		'bind': 'data-open-modal',
	},{
		'label': 'Cancel',
		'bind': 'data-open-modal',
		'close': true
	}\]
}, function(err, data) {
	if(err) {
		// do error handling
	} else {
		// do something with data
	}
});

#### Attention formModal true:

If the parameter is true `formModal` we need to change the main event of the button to click for submit in action execution.

Example in SuperWidget: `'save-user': ['submit_saveUser']`

### Action parameter

Settings available in the `actions` parameter.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>""</td><td>The label of the button in question.</td></tr><tr><td>bind</td><td>String</td><td>""</td><td><code>data atribute</code> that will be added to the button so that you can do in bind <code>js/SuperWidget</code>.</td></tr><tr><td>classType</td><td>String</td><td>For the first button of the modal, default is <code>btn-primary</code>, to the other is <code>btn-default</code></td><td>Receives a default class style guide for visually format (color) button.</td></tr><tr><td>buttonType</td><td>String</td><td>"button"</td><td>Receives what is the button type. Types "button" and "submit" are available.</td></tr><tr><td>autoClose</td><td>Boolean</td><td>false</td><td>If true, automatically closes the modal.</td></tr><tr><td>actionClose</td><td>Boolean</td><td>false</td><td>If true, adds the same attribute added in the parameter <code>bind</code> the close button (x) in the modal header to listen the same event.</td></tr></tbody></table>

### Header action parameter

Settings available in the `headerActions` parameter.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>String</td><td>""</td><td>Class of the flaticon that will be used in the action. <strong>Only flaticons are allowed</strong>.</td></tr><tr><td>bind</td><td>String</td><td>""</td><td><code>data atribute</code> that will be added to the button so that you can do in bind <code>js/SuperWidget</code>.</td></tr><tr><td>childActions</td><td>Array</td><td>[]</td><td>Receives an Array of configuration objects for each child header action button in the format <code>{ label: 'Label', bind: 'data-bind' }</code>.</td></tr></tbody></table>

#### Attention with binds

All binds made ​​the buttons on the modal should be added in `global` of binds the SuperWidget.

## Methods

### .remove()

Manually removes a modal. Returns to the caller before the modal has actually been hidden (i.e. before the hidden.bs.modal event occurs).

	myModal.remove();

### .isOpen()

Checks whether the modal is open or not on the page. Returns a boolean.

	myModal.isOpen();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>show.bs.modal</td><td>This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.</td></tr><tr><td>shown.bs.modal</td><td>This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the relatedTarget property of the event.</td></tr><tr><td>hide.bs.modal</td><td>This event is fired immediately when the hide instance method has been called.</td></tr><tr><td>hidden.bs.modal</td><td>This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).</td></tr><tr><td>loaded.bs.modal</td><td>This event is fired when the modal has loaded content using the remote option.</td></tr></tbody></table>

# Message Page

Message Pages are feedback screens for the user, which, unlike common modes, allow for dynamic and presentable multiple action options. They may be about the type of success, error, warning or information. The operation of the component is simple. When the Message Page screen is displayed, the element configured as **target** will be hidden until the Message Page is closed (except when the user is redirected to another page through a Message Page link).

## Usage

### HTML Declaration

A div ('message-page') is declared, which will serve as a container for the contents of the Message Page, and another div that will be hidden when the Message Page is activated ('target-message-page').

		<div id="message-page"></div>
		<div id="target-message-page">
				<span>Content to be manipulated...</span>
		</div>

### Statement in JS

See below an example of how the component must be started based on the ids of the components from the previous example. In this scenario, nothing occurs because only the Message Page component was created.

		var settings = {
				element: '#message-page', 
				target: '#target-message-page', 
				title: 'title',
				description: 'description',
				header: 'header',
				transitionEffect: true,
				messageType: 'default',
				links: \[{
					description: 'link 1',
					bind: 'data-bind-to-my-method'
				}, {
					description: 'link 2.',
					href: "http://www.fluig.com"
				}\],
				actionClose: {
					label: "back",
					bind: 'data-bind-method-to-close',
					href: '#'
				}
			};
			messagePage = FLUIGC.messagePage(settings);

##### After the component is created, the manipulation can be done with the following methods:

Displays the Message Page and hides the target:

		messagePage.show();

Hides the Message Page and displays the target:

		messagePage.hide();

### Parameters of the Component

The component accepts the following parameters:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 10%;">type</th><th style="width: 10%;">html</th><th style="width: 25%;">default</th><th style="width: 25%;">description</th><th style="width: 15%;">required</th></tr></thead><tbody><tr><td>element</td><td>string</td><td>does not accept</td><td>''</td><td>This parameter corresponds to the selector of the element that will contain the Message Page.</td><td>true</td></tr><tr><td>target</td><td>string</td><td>does not accept</td><td>''</td><td>Content that will be manipulated (hidden or displayed) by Message Page.</td><td>true</td></tr><tr><td>title</td><td>string</td><td>accepts</td><td>''</td><td>Title of the Message Page.</td><td>true</td></tr><tr><td>description</td><td>string</td><td>accepts</td><td>''</td><td>Description of the Message Page.</td><td>true</td></tr><tr><td>header</td><td>string</td><td>accepts</td><td>''</td><td>Title of the Message Page options list.</td><td>true</td></tr><tr><td>transitionEffect</td><td>boolean</td><td>does not accept</td><td>false</td><td>Transition effect between Message Page screens and manipulative content.</td><td>false</td></tr><tr><td>messageType</td><td>string</td><td>does not accept</td><td>default</td><td>Type of Message Page, currently the options are <b>default</b> and <b>success</b>. <b>Success</b> mode has an image as background.</td><td>false</td></tr><tr><td>links</td><td>array of objects</td><td>does not accept</td><td>''</td><td>List of options that will be displayed in the Message Page. The attributes of the object passed as parameters are the following: <b>description</b> that corresponds to the description of the item in the list, <b>bind</b> that refers to some method that the user wants to execute, and <b>href</b> that corresponds to the url that the user will be redirected after clicking the <b>description</b>. The <b>bind attribute</b> has precedence over the <b>href</b>.</td><td>true</td></tr><tr><td>actionClose</td><td>object</td><td>does not accept</td><td>''</td><td>Object with parameters that will be set in the Message Message close option.</td><td>true</td></tr></tbody></table>

## Example:

HTML Code

		<div id="message-page"></div>
		<div id="target-message-page">
			<h3>Product Registration</h3>
			<div>
			    <div class="form-group">
			      <label for="name">Name:</label>
			      <input type="text" class="form-control" id="target-mp-name" name="target-mp-name">
			    </div>
			    <div class="form-group">
			      <label for="Description">Description:</label>
			      <input type="text" class="form-control" id="target-mp-description"  name="target-mp-description">
			    </div>
			    <button class="btn btn-primary" data-show-message-page>Save</button>
		   </div>
		</div>		

Javascript Code

		var settings = {
			title: "Produto cadastrado com sucesso.",
			description: "Para visualizar os detalhes acesse a [página do produto.](#)",
			header: 'O que você deseja fazer?',
			transitionEffect: true,
			messageType: 'success',
			links: \[{
				description: 'Executar meu método',
				bind: 'data-run-my-method'
			}, {
				description: 'Ir ao Fluig',
				href: "http://www.fluig.com"
			}\],
			actionClose: {
				label: "Voltar",
				bind: 'data-close-message-page'
			}
		};

		messagePage = FLUIGC.messagePage(settings);
		
		$(document).on('click', '\[data-show-message-page\]', function(ev) {
			messagePage.show();
		});
		
		$(document).on('click', '\[data-close-message-page\]', function(ev) {
			messagePage.hide();
		});
		
		$(document).on('click', '\[data-run-my-method\]', function(ev) {
			alert("Started from Message Page")
		});

Live Demo

### Product Registration

Name: 

Description: 

Save

# Password

This component allows you to hide values.

## Javascript

    var password = FLUIGC.password(target, options);

Value:

## Examples

### Basic usage

#### In HTML:

    <input type="password" id="value" value="123" class="form-control"/>

#### In JavaScript:

    var password = FLUIGC.password('#value');

#### Result:

### Advanced usage

#### In HTML:

    <input type="password" id="data" value="abc" class="form-control"/>

#### In JavaScript:

    var password = FLUIGC.password('#data', {
        eyeClass: 'fluigicon',
        eyeOpenClass: 'fluigicon-eye-open',
        eyeCloseClass: 'fluigicon-key'
    });

#### Result:

## Settings object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 15%;">Type</th><th style="width: 15%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>placement</td><td>string</td><td>after</td><td>The placement of show/hide icon, can be 'before' or 'after'.</td></tr><tr><td>message</td><td>string</td><td>Click here to show/hide password</td><td>The tooltip of show/hide icon.</td></tr><tr><td>eyeClass</td><td>string</td><td>fluigicon</td><td>Base eye icon class.</td></tr><tr><td>eyeOpenClass</td><td>string</td><td>fluigicon-unlock</td><td>Open eye icon class.</td></tr><tr><td>emptyclass</td><td>string</td><td>editable-empty</td><td>Css class applied when editable text is empty.</td></tr><tr><td>eyeCloseClass</td><td>string</td><td>fluigicon-lock</td><td>Close eye icon class.</td></tr></tbody></table>

## Methods

### .on(event, callback)

Attach an event handler function for events to the component.

	password.on('fshide.password', function(ev) {
		// DO SOMETHING
	});

### .show()

Manually show the password.

	password.show();

### .hide()

Manually hide the password.

    password.hide();

### .toggle()

Manually toggle the password.

    password.toggle();

### .val()

Get the current value of the password or set the value of password.

    password.val('val'); // set value
    password.val(); //get value

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 20%;">Name</th><th style="width: 20%;">Callback parameters</th><th>Description</th></tr></thead><tbody><tr><td>fsshow.password</td><td><ul><li><strong>event</strong> <i>Object</i> event object;</li></ul></td><td>This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.</td></tr><tr><td>fshide.password</td><td><ul><li><strong>event</strong> <i>Object</i> event object;</li></ul></td><td>This event is fired immediately when the hide instance method has been called.</td></tr></tbody></table>

### Example

Example of use.

        pass.on('fshide.password', function(ev){
        // DO SOMETHING
        });

# Periodical Executor

Periodical Executer allows you to perform actions defined by the user at any given time interval.

### Javascript

	var myVar = FLUIGC.periodicalExecutor(callback, frequency);

## Examples

### Live demo

The example below shows the value of an element being incremented every 1 second.

-   0 Incrementing...

Start Stop Restart

### Javascript

	var periodicalExecutor = FLUIGC.periodicalExecutor(function() {
		// for this example increment the value here
	}, 1);

## Methods

#### .start()

starts the count to trigger the execution.

	periodicalExecutor.start();

#### .stop()

Stops execution.

	periodicalExecutor.stop();

#### .restart()

Resets the count to trigger the execution again.

	periodicalExecutor.restart();

# Popover

Add small overlays of content, like those on the iPad, to any element for housing secondary information.

Popovers whose both title and content are zero-length are never displayed.

#### Popovers in button groups and input groups require special setting

When using popovers on elements within a `.btn-group` or an `.input-group`, you'll have to specify the option `container: 'body'` (documented below) to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the popover is triggered).

#### Don't try to show popovers on hidden elements

Invoking `$(...).popover('show')` when the target element is `display: none;` will cause the popover to be incorrectly positioned.

#### Popovers on disabled elements require wrapper elements

To add a popover to a `disabled` or `.disabled` element, put the element inside of a `<div>` and apply the popover to that `<div>` instead.

#### Multiple-line links

Sometimes you want to add a popover to a hyperlink that wraps multiple lines. The default behavior of the popover plugin is to center it horizontally and vertically. Add `white-space: nowrap;` to your anchors to avoid this.

## Examples

### Static popover

Four options are available: top, right, bottom, and left aligned.

### Popover top

Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

### Popover right

Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

### Popover bottom

Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

### Popover left

Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Click to toggle popover Hover to toggle popover

## Usage

Enable popovers via JavaScript:

		<button type="button" class="btn btn-lg btn-danger bs-docs-popover-click" data-toggle="popover" title="" data-content="And here's some amazing content. It's very simple. Click?" data-original-title="Popover title">Click to toggle popover</button>
	    <button type="button" class="btn btn-lg btn-danger bs-docs-popover-hover" data-toggle="popover" title="" data-content="And here's some amazing content. It's very simple. Hover?" data-original-title="Popover title">Hover to toggle popover</button>

		FLUIGC.popover('.bs-docs-popover-hover',{trigger: 'hover', placement: 'auto'});
		FLUIGC.popover('.bs-docs-popover-click',{ trigger: 'click', placement: 'auto'});

A rendered popover with scroll applied on the container.

Click to toggle popover scroll

		<button type="button" class="btn btn-lg btn-danger bs-docs-popover-scroll" data-toggle="popover" title="" data-content="And here's some amazing content. It's very simple. Click?" data-original-title="Popover title">Click to toggle popover scroll</button>

		FLUIGC.popover('.bs-docs-popover-scroll',{ trigger: 'click', placement: 'right', maxheight: '200px'});

### Allowed Tags and Attributes in content

For security reasons, only the HTML tags and attributes described in the table below are permitted. Any html content other than this will be removed on popover initialization.

<table class="table table-bordered table-striped"><thead><tr><th>Tag</th><th>Allowed attributes</th><th>Note</th></tr></thead><tbody><tr><td>All Allowed Tags</td><td>title, class, dir, id, lang, role, aria-*, data-*</td><td>These attributes are accepted for all permitted tags, in addition to those described below for each tag.</td></tr><tr><td>a</td><td>target, href, rel</td><td></td></tr><tr><td>area</td><td>All Attributes</td><td></td></tr><tr><td>b</td><td>All Attributes</td><td></td></tr><tr><td>br</td><td>All Attributes</td><td></td></tr><tr><td>col</td><td>All Attributes</td><td></td></tr><tr><td>code</td><td>All Attributes</td><td></td></tr><tr><td>div</td><td>All Attributes</td><td></td></tr><tr><td>em</td><td>All Attributes</td><td></td></tr><tr><td>hr</td><td>All Attributes</td><td></td></tr><tr><td>h1</td><td>All Attributes</td><td></td></tr><tr><td>h2</td><td>All Attributes</td><td></td></tr><tr><td>h3</td><td>All Attributes</td><td></td></tr><tr><td>h4</td><td>All Attributes</td><td></td></tr><tr><td>h5</td><td>All Attributes</td><td></td></tr><tr><td>h6</td><td>All Attributes</td><td></td></tr><tr><td>i</td><td>All Attributes</td><td></td></tr><tr><td>img</td><td>src, alt, width, height</td><td></td></tr><tr><td>li</td><td>All Attributes</td><td></td></tr><tr><td>ol</td><td>All Attributes</td><td></td></tr><tr><td>p</td><td>All Attributes</td><td></td></tr><tr><td>pre</td><td>All Attributes</td><td></td></tr><tr><td>s</td><td>All Attributes</td><td></td></tr><tr><td>small</td><td>All Attributes</td><td></td></tr><tr><td>span</td><td>All Attributes</td><td></td></tr><tr><td>sub</td><td>All Attributes</td><td></td></tr><tr><td>sup</td><td>All Attributes</td><td></td></tr><tr><td>strong</td><td>All Attributes</td><td></td></tr><tr><td>u</td><td>All Attributes</td><td></td></tr><tr><td>ul</td><td>All Attributes</td><td></td></tr><tr><td>iframe</td><td>frameborder, width, height</td><td></td></tr><tr><td>table</td><td>All Attributes</td><td></td></tr><tr><td>tr</td><td>All Attributes</td><td></td></tr><tr><td>td</td><td>All Attributes</td><td></td></tr><tr><td>div</td><td>All Attributes</td><td></td></tr><tr><td>tbody</td><td>All Attributes</td><td></td></tr><tr><td>thead</td><td>All Attributes</td><td></td></tr><tr><td>emojis-component</td><td>All Attributes</td><td></td></tr><tr><td>icons-component</td><td>All Attributes</td><td></td></tr><tr><td>progress-bar-component</td><td>All Attributes</td><td></td></tr><tr><td>smart-ellipsis</td><td>All Attributes</td><td></td></tr><tr><td>upload-component</td><td>All Attributes</td><td></td></tr><tr><td>script</td><td>type="text/template"</td><td>Only template scripts are allowed.</td></tr></tbody></table>

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 100px;">Name</th><th style="width: 100px;">Type</th><th style="width: 50px;">Default</th><th>Description</th></tr></thead><tbody><tr><td>animation</td><td>boolean</td><td>true</td><td>Apply a CSS fade transition to the popover</td></tr><tr><td>container</td><td>string | false</td><td>false</td><td><p>Appends the popover to a specific element. Example: <code>container: 'body'</code>. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element -&nbsp;which will prevent the popover from floating away from the triggering element during a window resize.</p></td></tr><tr><td>content</td><td>string | function</td><td>''</td><td><p>Default content value if <code>data-content</code> attribute isn't present.</p><p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p></td></tr><tr><td>delay</td><td>number | object</td><td>0</td><td><p>Delay showing and hiding the popover (ms) - does not apply to manual trigger type</p><p>If a number is supplied, delay is applied to both hide/show</p><p>Object structure is: <code>delay: { "show": 500, "hide": 100 }</code></p></td></tr><tr><td>html</td><td>boolean</td><td>false</td><td>Insert HTML into the popover. If false, jQuery's <code>text</code> method will be used to insert content into the DOM. Use text if you're worried about XSS attacks.</td></tr><tr><td>placement</td><td>string | function</td><td>'right'</td><td><p>How to position the popover - top | bottom | left | right | auto.<br>When "auto" is specified, it will dynamically reorient the popover. For example, if placement is "auto left", the popover will display to the left when possible, otherwise it will display right.</p><p>When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The <code>this</code> context is set to the popover instance.</p></td></tr><tr><td>selector</td><td>string</td><td>false</td><td>If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See <a href="https://github.com/twbs/bootstrap/issues/4215">this</a> and <a href="http://jsfiddle.net/fScua/">an informative example</a>.</td></tr><tr><td>template</td><td>string</td><td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-title"&gt;&lt;/h3&gt;&lt;div class="popover-content"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td><td><p>Base HTML to use when creating the popover.</p><p>The popover's <code>title</code> will be injected into the <code>.popover-title</code>.</p><p>The popover's <code>content</code> will be injected into the <code>.popover-content</code>.</p><p><code>.arrow</code> will become the popover's arrow.</p><p>The outermost wrapper element should have the <code>.popover</code> class.</p></td></tr><tr><td>title</td><td>string | function</td><td>''</td><td><p>Default title value if <code>title</code> attribute isn't present.</p><p>If a function is given, it will be called with its <code>this</code> reference set to the element that the popover is attached to.</p></td></tr><tr><td>trigger</td><td>string</td><td>'click'</td><td>How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.</td></tr><tr><td>viewport</td><td>string | object</td><td>{ selector: 'body', padding: 0 }</td><td><p>Keeps the popover within the bounds of this element. Example: <code>viewport: '#viewport'</code> or <code>{ "selector": "#viewport", "padding": 0 }</code></p></td></tr><tr><td>maxheight</td><td>string | object</td><td>''</td><td><p>Set the max-height value to the container, to add scroll-bars if necessary. Example: <code>maxheight: '200px'</code></p></td></tr></tbody></table>

# Sidebar

## About

Display a vertical sidebar rendering a static content or a widget using a freemarker template.

## Usage

	FLUIGC.sidebar(options);

## Examples

### Static example

A rendered sidebar with header, body, and set of actions in the footer.

	FLUIGC.sidebar({
		title: 'Sidebar title',
		content: '

## Sidebar content

',
		actions: \[{
			'label': 'Save',
			'bind': 'data-save',
		}, {
			'label': 'Close',
			'bind': 'data-close',
			'autoClose': true
		}, {
			'label': 'Link',
			'bind': 'data-link',
			'flaticon': 'link',
			'btnLink': true,
		}\],
	});

### Live demo

By clicking the button below, you can invoke the sidebar component:

Launch sidebar demo

### Settings Object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>'Style guide'</td><td>It is the title that is displayed in sidebar.</td></tr><tr><td>content</td><td>String to render or a object with parameters</td><td>""</td><td>It is the content that will be injected into the body of the sidebar. It can be a static text or a HTML content. But if you inform an appCode, this it will be the data object used to render your widget.</td></tr><tr><td>appCode</td><td>String</td><td>null</td><td>The application.code of your widget that will be rendered inside of the sidebar.</td></tr><tr><td>width</td><td>String</td><td>564px</td><td>Receives a string containing the size of the sidebar, including the measure type.</td></tr><tr><td>actions</td><td>Array</td><td>[]</td><td>It receives an array of configuration objects for each button. If it is empty, it will not display the footer.</td></tr><tr><td>backdrop</td><td>Boolean</td><td>false</td><td>Sets whether the backdrop will appear</td></tr></tbody></table>

#### Right bar has been depreciated

Has been replaced by the sidebar.

# Sliders

## Examples

Sliders are `input` tags without "type", transformed into the Slider component.

### Basic example

Click on the "Init" button, to transform the input into a Slider.

  
  
Init

	<input id="MySliderInput">
	<button class="btn btn-primary" onclick="FLUIGC.slider.init('#MySliderInput');">Init</button>

#### init()

The Slider must be started, by calling the method `FLUIGC.slider.init('selector');`.

The selector must be an `input` tag without the "type" attribute.

### Options

Options can be passed either as a data (data-slider-foo) attribute, or as part of an object in the slider call. The only exception here is the formatter argument - that can not be passed as a data- attribute.

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Name</th><th align="center">Type</th><th align="center">Default</th><th align="left">Description</th></tr></thead><tbody><tr><td>id</td><td align="center">string</td><td align="center">''</td><td align="left">set the id of the slider element when it's created</td></tr><tr><td>min</td><td align="center">float</td><td align="center">0</td><td align="left">minimum possible value</td></tr><tr><td>max</td><td align="center">float</td><td align="center">10</td><td align="left">maximum possible value</td></tr><tr><td>step</td><td align="center">float</td><td align="center">1</td><td align="left">increment step</td></tr><tr><td>precision</td><td align="center">float</td><td align="center">number of digits after the decimal of <em>step</em> value</td><td align="left">The number of digits shown after the decimal. Defaults to the number of digits after the decimal of <em>step</em> value.</td></tr><tr><td>orientation</td><td align="center">string</td><td align="center">'horizontal'</td><td align="left">set the orientation. Accepts 'vertical' or 'horizontal'</td></tr><tr><td>value</td><td align="center">float,array</td><td align="center">5</td><td align="left">initial value. Use array to have a range slider.</td></tr><tr><td>range</td><td align="center">bool</td><td align="center">false</td><td align="left">make range slider. Optional if initial value is an array. If initial value is scalar, max will be used for second value.</td></tr><tr><td>tooltip</td><td align="center">string</td><td align="center">'show'</td><td align="left">whether to show the tooltip on drag, hide the tooltip, or always show the tooltip. Accepts: 'show', 'hide', or 'always'</td></tr><tr><td>tooltip_separator</td><td align="center">string</td><td align="center">':'</td><td align="left">tooltip separator</td></tr><tr><td>tooltip_split</td><td align="center">bool</td><td align="center">false</td><td align="left">if false show one tootip if true show two tooltips one for each handler</td></tr><tr><td>reversed</td><td align="center">bool</td><td align="center">false</td><td align="left">whether or not the slider should be reversed</td></tr><tr><td>enabled</td><td align="center">bool</td><td align="center">true</td><td align="left">whether or not the slider is initially enabled</td></tr><tr><td>formatter</td><td align="center">function</td><td align="center">returns the plain value</td><td align="left">formatter callback. Return the value wanted to be displayed in the tooltip</td></tr></tbody></table>

### Hour-range example

Click on the "Init" button to start the hour-range slider.

 init

	<input id="MySliderInput">
	<button class="btn btn-primary" onclick="FLUIGC.slider.init('#MySliderInput');">Init</button>

### Methods

**NOTE:**Optional parameters are italicized.

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Function</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>getValue</td><td>selector</td><td>Get the current value from the slider</td></tr><tr><td>setValue</td><td>selector, newValue, <em>triggerSlideEvent</em></td><td>Set a new value for the slider. If optional triggerSlideEvent parameter is <em>true</em>, the 'slide' event will be triggered.</td></tr><tr><td>destroy</td><td>selector</td><td>Properly clean up and remove the slider instance</td></tr><tr><td>disable</td><td>selector</td><td>Disables the slider and prevents the user from changing the value</td></tr><tr><td>enable</td><td>selector</td><td>Enables the slider</td></tr><tr><td>toggle</td><td>selector</td><td>Toggles the slider between enabled and disabled</td></tr><tr><td>isEnabled</td><td>selector</td><td>Returns true if enabled, false if disabled</td></tr><tr><td>refresh</td><td>selector</td><td>Refreshes the current slider</td></tr></tbody></table>

Each button below triggers a single function of the Slider component. The "init" and the "destroy" buttons respectively starts and ends the slider.

  
  
init get value set value "7" destroy

	<input id="MySliderInput3" data-slider-min="0" data-slider-max="10" data-slider-value="5">
	<button class="btn btn-primary" onclick="FLUIGC.slider.init('#MySliderInput3');">init</button>
	<button class="btn btn-default" onclick="FLUIGC.toast({message: FLUIGC.slider.getValue('#MySliderInput3')});"">get value</button>
	<button class="btn btn-default" onclick="FLUIGC.slider.setValue('#MySliderInput3', 7);">set value "7"</button>
	<button class="btn btn-danger" onclick="FLUIGC.slider.destroy('#MySliderInput3');">destroy</button>

### The Formatter option

The formatter option must be passed as key/value of an object (JSON), in which the value is a callback. Either way, all of the other options can be passed as key/values of an object (JSON), instead of using the data attribute.

Below you'll find an example of an executed JavaScript code, starting a slider with JSON options.

  
  

	var options = {
		min: 0,
		max: 24,
		range: true,
		value: \[8,17\],
		step: 0.5,
		formatter: function(value) {
			return 'From ' + value\[0\] + ' to ' + value\[1\];
		}
	};
	
	FLUIGC.slider.init('#MySliderInput4', options);

### Events

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>onSlide</td><td>Developer may give a function to be triggered when the slider is dragged. 'this' refers to the DOM element.</td></tr><tr><td>onSlideSendScope</td><td>Use this event when you need the original JavaScript instance of the slider element. You'll be able to use this instance in the called function.</td></tr><tr><td>onSlideStart</td><td>Developer may give a function to be triggered when the dragging starts. 'this' refers to the DOM element.</td></tr><tr><td>onSlideStartSendScope</td><td>Use this event when you need the original JavaScript instance of the slider element. You'll be able to use this instance in the called function.</td></tr><tr><td>onSlideStop</td><td>Developer may give a function to be triggered when the dragging stops. 'this' refers to the DOM element.</td></tr><tr><td>onSlideStopSendScope</td><td>Use this event when you need the original JavaScript instance of the slider element. You'll be able to use this instance in the called function.</td></tr></tbody></table>

FLUIGC.slider.onSlideStop(selector, function(slideEvent){
  console.log(this); // DOM element
  console.log(slideEvent); // Slide stop event
});

FLUIGC.slider.onSlideStopSendScope(selector, scope, function(selector, slideEvent, scope){
  console.log(selector); // DOM element
  console.log(slideEvent); // Slide stop event
  console.log(scope); // the original JavaScript scope. For example: The SuperWidget instance where the switch button has been triggered
});

# Storage

The Storage provides mechanisms by which browsers can securely store key/value pairs, in a much more intuitive fashion than using cookies.

## Storage concepts and usage

The two mechanisms within Storage are as follows:

-   sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).
-   localStorage does the same thing, but persists even when the browser is closed and reopened.

These mechanisms are available via the FLUIGC.sessionStorage and FLUIGC.localStorage properties (to be more precise, in supporting browsers the Window object implements the WindowLocalStorage and WindowSessionStorage objects, which the localStorage and sessionStorage properties hang off) — invoking one of these will create an instance of the Storage object, through which data items can be set, retrieved and removed. A different Storage object is used for the sessionStorage and localStorage for each origin — they function and are controlled separately.

## Examples

Example of use with sessionStorage.

	var storage = 'my data';
	
	// storing the value
	FLUIGC.sessionStorage.setItem('myStorage', storage);
	
	// retrieving the value
	FLUIGC.sessionStorage.getItem('myStorage');

Example of use with localStorage.

	var storage = 'my data';
	
	// storing the value
	FLUIGC.localStorage.setItem('myStorage', storage);
	
	// retrieving the value
	FLUIGC.localStorage.getItem('myStorage');

## Methods

### .setItem()

Stores an item.

	FLUIGC.localStorage.setItem();
	FLUIGC.sessionStorage.setItem();

### .removeItem()

Remove any items.

	FLUIGC.localStorage.removeItem();
	FLUIGC.sessionStorage.removeItem();

### .getItem()

Returns an item.

	FLUIGC.localStorage.getItem();
	FLUIGC.sessionStorage.getItem();

### .clear()

Clears all stored data.

	FLUIGC.localStorage.clear();
	FLUIGC.sessionStorage.clear();

# Switch button

## Examples

Switch buttons are checkbox or radio transformed into the Switcher component.

### Basic example

Click on the "Init" button, to transform the checkbox into a switch button.

  
  
Init

	<input id="MySwitchButtonCheckbox" type="checkbox">
	<button class="btn btn-primary" onclick="FLUIGC.switcher.init('#MySwitchButtonCheckbox');">Init</button>

#### init()

The Switch Button must be started, by calling the method `FLUIGC.switcher.init('selector');`.

The selector must be checkbox or radio.

### Methods

Each button below triggers a single function of the Switcher component. The "init" and the "destroy" buttons respectively starts and ends the switch button.

  
  
init get state set true set false toggle state enable disable readonly not readonly destroy

	<input id="MySwitchButtonCheckbox2" type="checkbox" data-on-color="success" data-off-color="danger">
	<button class="btn btn-primary" onclick="FLUIGC.switcher.init('#MySwitchButtonCheckbox2');">init</button>
	<button class="btn btn-default" onclick="FLUIGC.toast({message: FLUIGC.switcher.getState('#MySwitchButtonCheckbox2')});">get state</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.setTrue('#MySwitchButtonCheckbox2');">set true</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.setFalse('#MySwitchButtonCheckbox2');">set false</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.toggleState('#MySwitchButtonCheckbox2');">toggle state</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.enable('#MySwitchButtonCheckbox2');">enable</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.disable('#MySwitchButtonCheckbox2');">disable</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.isReadOnly('#MySwitchButtonCheckbox2', true);">readonly</button>
	<button class="btn btn-default" onclick="FLUIGC.switcher.isReadOnly('#MySwitchButtonCheckbox2', false);">not readonly</button>
	<button class="btn btn-danger" onclick="FLUIGC.switcher.destroy('#MySwitchButtonCheckbox2');">destroy</button>

### In Lot

Click on the "InitAll" button, to transform all checkboxes into a switch button.

  
  
  
  
  
  
InitAll

	<div  id="switchInLot" class="bs-example" style="padding-bottom: 24px;">
		<input id="MySwitchButtonCheckbox3" type="checkbox"><br><br>
		<input id="MySwitchButtonCheckbox4" type="checkbox"><br><br>
		<input id="MySwitchButtonCheckbox5" type="checkbox"><br><br>
		<button class="btn btn-primary" onclick="FLUIGC.switcher.initAll('#switchInLot');">InitAll</button>
	</div>

#### initAll()

All checkboxes or radios from a div, table or even a document can be transformed into a Switch Button by calling the method `FLUIGC.switcher.initAll('parentElement');`.

The initAll() can also have a name filter, calling the method `FLUIGC.switcher.initAll('parentElement', 'fieldname');` only checkbox or radio called 'fieldname\_\_1', 'fieldname\_\_2' will be started as Switch Button .

### Sizes

Click on the "init size" button, to transform checkboxe in a switch button.

  
  
  
  
  
  
  
  
Init Mini Init Small Init Normal Init Large

<input id="MySwitchButtonCheckbox6" type="checkbox" data-size="mini"><br><br>
<input id="MySwitchButtonCheckbox7" type="checkbox" data-size="small"><br><br>
<input id="MySwitchButtonCheckbox8" type="checkbox" data-size="normal"><br><br>
<input id="MySwitchButtonCheckbox9" type="checkbox" data-size="large"><br><br>
<button class="btn btn-primary" onclick="FLUIGC.switcher.init('#MySwitchButtonCheckbox6');">Init Mini</button>
<button class="btn btn-primary" onclick="FLUIGC.switcher.init('#MySwitchButtonCheckbox7');">Init Small</button>
<button class="btn btn-primary" onclick="FLUIGC.switcher.init('#MySwitchButtonCheckbox8');">Init Normal</button>
<button class="btn btn-primary" onclick="FLUIGC.switcher.init('#MySwitchButtonCheckbox9');">Init Large</button>

### Events

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>onInit</td><td>Developer may give a function to be triggered on initialization. 'this' refers to the DOM element.</td></tr><tr><td>onChange</td><td>Developer may give a function to be triggered on switch state change. 'this' refers to the DOM element.</td></tr><tr><td>onInitSendScope</td><td>Use this event when you need the original JavaScript instance of the started Switch Button. You'll be able to use this instance in the called function.</td></tr><tr><td>onChangeSendScope</td><td>Use this event when you need the original JavaScript instance of the started Switch Button. You'll be able to use this instance in the called function.</td></tr></tbody></table>

FLUIGC.switcher.onInit(element, function(event){
  console.log(this); // DOM element
  console.log(event); // jQuery event
});

FLUIGC.switcher.onChange(element, function(event, state){
  console.log(this); // DOM element
  console.log(event); // jQuery event
  console.log(state); // true | false
});

FLUIGC.switcher.onInitSendScope(element, scope, function(element, event, scope){
  console.log(element); // DOM element
  console.log(event); // jQuery event
  console.log(scope); // the original JavaScript scope. For example: The SuperWidget instance where the switch button has been triggered
});

FLUIGC.switcher.onChangeSendScope(element, scope, function(element, event, state, scope){
  console.log(element); // DOM element
  console.log(event); // jQuery event
  console.log(state); // true | false
  console.log(scope); // the original JavaScript scope. For example: The SuperWidget instance where the switch button has been triggered
});

### Options

Include attributes and its possible values in your checkbox or radio element.

<table class="table table-bordered table-striped table-responsive"><thead><tr><th>Name</th><th>Attribute</th><th>Type</th><th>Description</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>state</td><td>checked</td><td>Boolean</td><td>The checkbox state</td><td>true, false</td><td>true</td></tr><tr><td>size</td><td>data-size</td><td>String</td><td>The checkbox state</td><td>null, 'mini', 'small', 'normal', 'large'</td><td>null</td></tr><tr><td>animate</td><td>data-animate</td><td>Boolean</td><td>Animate the switch</td><td>true, false</td><td>true</td></tr><tr><td>disabled</td><td>disabled</td><td>Boolean</td><td>Disable state</td><td>true, false</td><td>false</td></tr><tr><td>readonly</td><td>readonly</td><td>Boolean</td><td>Readonly state</td><td>true, false</td><td>false</td></tr><tr><td>onColor</td><td>data-on-color</td><td>String</td><td>Color of the left side of the switch</td><td>'primary', 'info', 'success', 'warning', 'danger', 'default'</td><td>'primary'</td></tr><tr><td>offColor</td><td>data-off-color</td><td>String</td><td>Color of the right side of the switch</td><td>'primary', 'info', 'success', 'warning', 'danger', 'default'</td><td>'default'</td></tr><tr><td>onText</td><td>data-on-text</td><td>String</td><td>Text of the left side of the switch</td><td>String</td><td>'ON'</td></tr><tr><td>offText</td><td>data-off-text</td><td>String</td><td>Text of the right side of the switch</td><td>String</td><td>'OFF'</td></tr><tr><td>labelText</td><td>data-label-text</td><td>String</td><td>Text of the center handle of the switch. <strong>Deprecated on flat theme.</strong></td><td>String</td><td>'&amp;nbsp;'</td></tr></tbody></table>

# Time Interaction

Receives a basic setup to format the date and add the same element in the instantiated.

## Example

Esta página foi carregada há .

## Usage

		FLUIGC.timeInteraction.init({
			period: 10000, 
			parent: 'body',
			attrName: 'creation-date',
			selector: '\[data-creation-date\]'
		});

		<div data-creation-date="1414430458409">there is 17 hours ago</div>

#### Divergences of dates

For the correct operation of this widget, the date configured on the server must be equal to or very close to the date configured on the user's machine.

## Options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">required</th><th style="width: 18%;">type</th><th style="width: 18%;">default</th><th>Description</th></tr></thead><tbody><tr><td>period</td><td>false</td><td>number</td><td>10000</td><td>Refresh period of time.</td></tr><tr><td>parent</td><td>false</td><td>string</td><td>'body'</td><td>Element that the parent component will travel to find the elements to update the date.</td></tr><tr><td>attrName</td><td>false</td><td>string</td><td>'creation-date'</td><td>Data-atribute (without the prefix data-) with the timestamp of date to be formatted.</td></tr><tr><td>selector</td><td>false</td><td>string</td><td>'[data-creation-date]'</td><td>Element that component will seek to get the timestamp.</td></tr></tbody></table>

# Toast

## Examples

Toasts are quick messages that can be triggered to the user. These messages usually give feedback of success, danger, warning and info.

### Static example

A rendered toast with header.

## Title:

Your cool message.

× Close

#### The toast component uses Mustache templates.

Mustache is a specification template that does not use logic, ie, does not have statements with if, for, while etc, throughout its construction is based on tags.

### Live demo

By clicking the button below, you invoked the toast component:

Launch demo success Launch demo warning Launch demo info Launch demo danger

## Usage

To use the toast component, you must create an HTML element and add a 'data' attribute. Then do a bind on the attribute and invoke the function FLUIGC.toast.

### HTML

Create an HTML element that will trigger the event to invoke the toast and add a 'data' attribute.

		<button class="btn btn-primary btn-lg" data-your-toast>
			Launch Toast
		</button>

### JavaScript

Bind the element from the 'selector' the 'data' attribute and then just invoke the toast component `FLUIGC.toast(settings);`

		$(document).on('click', '\[data-your-toast\]', function(ev) {
			FLUIGC.toast({
				title: 'Toast title: ',
				message: 'My message',
				type: 'success'
			});
		});

#### Attention

Toast of the danger type disregards the timeout parameter, requiring the user to close it manually.

### Settings Object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>''</td><td>It is the title that is displayed in toast</td></tr><tr><td>message</td><td>Can be a string text or HTML format, a Mustache template or return a call to "renderpartial"</td><td>message</td><td>It is the massage that will be displayed on toast. Can be a text, a Mustache template or 'HTML' content returned by a call to 'WCMAPI.convertFtlAsync ()' for example.</td></tr><tr><td>type</td><td>string</td><td>success</td><td>Lets pass your actions, <code>success</code>, <code>danger</code>, <code>info</code> and <code>warning</code>.</td></tr><tr><td>timeout</td><td>string or number</td><td></td><td>The strings 'fast' and 'slow' can be supplied to indicate durations of 2000 and 6000 milliseconds, respectively. If the timeout parameter is omitted, the default duration of 4000 milliseconds is used. <strong>Attention: Toast of the danger type disregards the timeout parameter, requiring the user to close it manually.</strong></td></tr></tbody></table>

# Togglable tabs

## Example tabs

Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.

-   [Home](#home)
-   [Profile](#profile)
-   [Dropdown](#)
    -   [@fat](#dropdown1)
    -   [@mdo](#dropdown2)

Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.

Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar arial VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.

Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie arial. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.

Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.

#### Extends tabbed navigation

This plugin extends the tabbed navigation component to add tabbable areas.

## Usage

Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

$('#myTab a').click(function(e) {
	e.preventDefault();
	$(this).tab('show');
});

You can activate individual tabs in several ways:

$('#myTab a\[href="#profile"\]').tab('show'); // Select tab by name
$('#myTab a:first').tab('show'); // Select first tab
$('#myTab a:last').tab('show'); // Select last tab
$('#myTab li:eq(2) a').tab('show'); // Select third tab (0-indexed)

### Markup

You can activate a tab or pill navigation without writing any JavaScript by simply specifying `data-toggle="tab"` or `data-toggle="pill"` on an element. Adding the `nav` and `nav-tabs` classes to the tab `ul` will apply the Style Guide tab styling, while adding the `nav` and `nav-pills` classes will apply pill styling.

<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
	<li class="active"><a href="#home" role="tab" data-toggle="tab">Home</a></li>
	<li><a href="#profile" role="tab" data-toggle="tab">Profile</a></li>
	<li><a href="#messages" role="tab" data-toggle="tab">Messages</a></li>
	<li><a href="#settings" role="tab" data-toggle="tab">Settings</a></li>
</ul>
<!-- Tab panes -->
<div class="tab-content">
	<div class="tab-pane active" id="home">...</div>
	<div class="tab-pane" id="profile">...</div>
	<div class="tab-pane" id="messages">...</div>
	<div class="tab-pane" id="settings">...</div>
</div>

### Fade effect

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.in` to properly fade in initial content.

<div class="tab-content">
	<div class="tab-pane fade in active" id="home">...</div>
	<div class="tab-pane fade" id="profile">...</div>
	<div class="tab-pane fade" id="messages">...</div>
	<div class="tab-pane fade" id="settings">...</div>
</div>

### Methods

#### $().tab

Activates a tab element and content container. Tab should have either a `data-target` or an `href` targeting a container node in the DOM.

<ul class="nav nav-tabs" role="tablist" id="myTab">
	<li class="active"><a href="#home" role="tab" data-toggle="tab">Home</a></li>
	<li><a href="#profile" role="tab" data-toggle="tab">Profile</a></li>
	<li><a href="#messages" role="tab" data-toggle="tab">Messages</a></li>
	<li><a href="#settings" role="tab" data-toggle="tab">Settings</a></li>
</ul>
<div class="tab-content">
	<div class="tab-pane active" id="home">...</div>
	<div class="tab-pane" id="profile">...</div>
	<div class="tab-pane" id="messages">...</div>
	<div class="tab-pane" id="settings">...</div>
</div>
<script type="text/javascript">
	$(function() {
		$('#myTab a:last').tab('show');
	})
</script>

### Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 150px;">Event Type</th><th>Description</th></tr></thead><tbody><tr><td>show.bs.tab</td><td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td></tr><tr><td>shown.bs.tab</td><td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td></tr></tbody></table>

$('a\[data-toggle="tab"\]').on('shown.bs.tab', function(e) {
	e.target; // activated tab
	e.relatedTarget; // previous tab
});

### Collapse tabs

Put the tabs inside a `div` with the class "collapse-tabs". This will set tab panes to start hidden and show over the content, with the `absolute` CSS property.

#### Class "collapse-tab" in the li

For collapse-tabs, the class "collapse-tab" must be declared to each `li`.

-   [Tab 1](#tab1)
-   [Tab 2](#tab2)
-   [Tab 3](#tab3)

#### Tab 1

Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.

#### Tab 2

Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.

#### Tab 3

Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.

<div class="collapse-tabs">
	<ul id="myTab" class="nav nav-tabs nav-justified" role="tablist">
		<li class="collapse-tab"><a href="#tab1" role="tab" data-toggle="tab">Tab 1</a></li>
		<li class="collapse-tab"><a href="#tab2" role="tab" data-toggle="tab">Tab 2</a></li>
		<li class="collapse-tab"><a href="#tab3" role="tab" data-toggle="tab">Tab 3</a></li>
	</ul>
	<div id="myTabContent" class="tab-content">
		<div class="tab-pane col-xs-6" id="tab1">
			<h4>Tab 1</h4>
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
		<div class="tab-pane col-xs-6 col-xs-offset-3" id="tab2">
			<h4>Tab 2</h4>
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
		<div class="tab-pane col-xs-6 col-xs-offset-6" id="tab3">
			<h4>Tab 3</h4>
			<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan arial. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
		</div>
	</div>
</div>

# Tooltip

When you need to explain about a element or text, you can use a tooltip. Tooltips are small text hints for help your user to better understand a word or action.

## Basic example

Tight pants next level keffiyeh [you probably](# "Default tooltip") haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel [have a](# "Another tooltip") terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan [whatever keytar](# "Another one here too"), scenester farm-to-table banksy Austin [twitter handle](# "The last tip!") freegan cred raw denim single-origin coffee viral.

## Four directions

Tooltip on left Tooltip on top Tooltip on bottom Tooltip on right

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>

#### About tooltip

The tooltip displays content short, if you need a long content, please use our popover.

# Utilities

## About

Utilities module provide a set of utilities methods.

## Usage

Call a method from utilities module:

### Icons

### Methods

#### FLUIGC.icons()

Get to know if an icon class is created or not. Example:

		var code = 'flat\_theme'; // available: flat\_theme and animalia\_theme
		var icons = FLUIGC.icons();
		icons.getIcons(code); // returns a list with all of the icon classes already created.

#### .parseBoolean(value)

Parses the string argument as a boolean. The boolean returned represents the value true if the string argument is not null and is equal, ignoring case, to the string "true".

		FLUIGC.utilities.parseBoolean('true');

#### .ctrlIsPressed(ev)

Receives the mouse click `event`, and returns `true` if the keyboard's `Ctrl` (or `command`, in Mac OS) key is pressed, `false` if it's not. Useful to open links in modals when the key is not pressed, and in new browser tabs when it is pressed.

		FLUIGC.utilities.ctrlIsPressed(ev);

#### .preventXSS(value)

Parses the string argument for prevent XXS. This method parse tags for html code

		FLUIGC.utilities.preventXSS('<script> alert("My Message"); </script>');

#### .randomUUID()

Generate a RFC4122 version 4 (pseudo randomly generated) compliant UUID.

		FLUIGC.utilities.randomUUID();

#### .normalizeLink(value)

Returns a normalized lower-case string of the given value, changing spaces and special characters for "-".

		FLUIGC.utilities.normalizeLink(value);

#### .parseVersion(value)

Formats a number 4 or more characters to the standard version/revision of Fluig.

		FLUIGC.utilities.parseVersion(1000);

#### .checkBrowser()

Returns the browser name and browser version. You can check Ie, Ie9 and Ie10 versions

		FLUIGC.utilities.checkBrowser().name;
		FLUIGC.utilities.checkBrowser().version;
		FLUIGC.utilities.checkBrowser().isIe();
		FLUIGC.utilities.checkBrowser().isIe9();
		FLUIGC.utilities.checkBrowser().isIe10();

#### .parseInputFile(selector)

Formats a File input to the standard style of Fluig.

		<form method="post" action="" enctype="multipart/form-data">
			<input type="file" class="btn btn-primary btn-sm" id="myInputFile" name="myInputFile" title="Upload Your File" accept=".jpg,.jpeg,.png" >
		</form>

		FLUIGC.utilities.parseInputFile("#myInputFile");

#### .uploadFileForIE(selector, settings)

Fix to ajax upload file in IE.

		<form method="post" action="" enctype="multipart/form-data">
			<input type="file" class="btn btn-primary btn-sm" id="myIEInputFile" name="myIEInputFile" title="Upload Your File" accept=".jpg, .jpeg, .png" >
		</form>

		var moreData,
			settings = {
				action: 'URL',
				onComplete: function(filename, response) {				
					//do something
				},
				onSubmit:function(filename){
					var moreData = {
						attribute1: 'atribute1',
						attribute1: 'attribute2'
					};
					return formData; 
				}
			}
		;
		FLUIGC.utilities.uploadFileForIE('#myIEInputFile', settings);

#### .isolatedScroll(target)

Receives a selector HTML the container you want to apply scroll isolated.

-   Cras mattis consectetur purus sit amet fermentum.
-   Maecenas sed diam eget risus varius blandit sit amet non magna.
-   Sed posuere consectetur est at lobortis.
-   Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
-   Vestibulum id ligula porta felis euismod semper.
-   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
-   Maecenas faucibus mollis interdum.
-   Sed posuere consectetur est at lobortis.
-   Duis mollis, est non commodo luctus.
-   Nisi erat porttitor ligula, eget lacinia odio sem nec elit.
-   Vestibulum id ligula porta felis euismod semper.
-   Cras mattis consectetur purus sit amet fermentum.
-   Curabitur blandit tempus porttitor.
-   Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
-   Curabitur blandit tempus porttitor.
-   Donec ullamcorper nulla non metus auctor fringilla.
-   Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
-   Donec id elit non mi porta gravida at eget metus.
-   Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
-   Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
-   Cras justo odio, dapibus ac facilisis in, egestas eget quam.
-   Donec ullamcorper nulla non metus auctor fringilla.
-   Etiam porta sem malesuada magna mollis euismod.
-   Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
-   Cras mattis consectetur purus sit amet fermentum.
-   Donec ullamcorper nulla non metus auctor fringilla.
-   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
-   Aenean lacinia bibendum nulla sed consectetur.
-   Cum sociis natoque penatibus et magnis dis parturient.
-   Montes, nascetur ridiculus mus.
-   Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
-   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
-   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
-   Eget lacinia odio sem nec elit.
-   Etiam porta sem malesuada magna mollis euismod.
-   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
-   Eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo.
-   Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
-   Etiam porta sem malesuada magna mollis euismod.
-   Cras justo odio, dapibus ac facilisis in, egestas eget quam.
-   Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
-   Cras justo odio, dapibus ac facilisis in, egestas eget quam.
-   Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
-   Cum sociis natoque penatibus et magnis dis parturient montes.
-   Nascetur ridiculus mus.
-   Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
-   Cum sociis natoque penatibus et magnis dis.
-   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
-   Eget lacinia odio sem nec elit.
-   Etiam porta sem malesuada magna mollis euismod.

		//Use with attributes / data attributes (recommended):
		FLUIGC.utilities.isolatedScroll('\[data-isolated-container\]');
	
		//Use with class:
		FLUIGC.utilities.isolatedScroll('.isolated-container');
		
		//Use with id:
		FLUIGC.utilities.isolatedScroll('#isolated-container');
		
		//Use with tags (not recommended):
		FLUIGC.utilities.isolatedScroll('ul');

		<ul id="isolated-container" class="isolated-container" data-isolated-container>
			<li>Cras mattis consectetur purus sit amet fermentum.</li>
			<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
			<li>Sed posuere consectetur est at lobortis.</li>
			<li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
			<li>Vestibulum id ligula porta felis euismod semper.</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
			<li>Nisi erat porttitor ligula, eget lacinia odio sem nec elit.</li>
			<!-- more list... -->
			<li>Vestibulum id ligula porta felis euismod semper.</li>
		</ul>

#### .scrollTo(target, duration)

Performs the scroll the page to a specific target. The duration parameter is optional, if not passed, the default is 0.

		FLUIGC.utilities.scrollTo('#myTarget', 300);

# Wizard Modal

## Basic configuration

	FLUIGC.wizardModal(options, callback);

## Examples

Wizard Modal component displays a wizard (step-by-step guide) inside a modal. It was created to be used on modals that require a guided flow of navigation through steps, making it easier to input data or perform processes across multiple phases. It's based on the modals structure, so it's very similar to this component.

#### The wizard modal component uses Mustache templates.

Mustache is a specification template that does not use logic, ie, does not have statements with if, for, while etc, throughout its construction is based on tags.

### Live demo

By clicking the button below, you invoked the wizard modal component:

Launch demo wizard modal

## Usage

To use the wizard modal component, you must create an HTML element and add a 'data' attribute. Then do a bind on the attribute and invoke the function FLUIGC.wizardModal.

### HTML

Create an HTML element that will trigger the event to invoke the wizard modal and add a 'data' attribute.

	<button class="btn btn-primary btn-lg" data-your-wizard-modal>
		Launch wizard modal
	</button>

### JavaScript

Bind the element from the 'selector' the 'data' attribute and then just invoke the wizard modal component `FLUIGC.wizardModal(settings);`

var myWizardModal = FLUIGC.wizardModal({
	title: 'Title Wizard Modal',
	id: 'fluig-wizard-modal',
	size: 'full',
	showCountStepsTitle: true,
	footerActions: {
		cancel: {
			label: 'Cancel',
			autoClose: true
		},
		prevStep: {
			label: 'Back to',
			showLabelPrevStep: true
		},
		nextStep: {
			label: 'Next'
		},
		finish: {
			label: 'Finish',
			bind: 'data-save',
			autoClose: true
		}
	},
	wizard: \[{
		title: 'Step 1',
		content: '

# Content Step 1

',
		action: {
			label: 'Save and Close',
			bind: 'data-save'
		}
	}, {
		title: 'Step 2',
		content: '

# Content Step 2

',
		action: {
			label: 'Save and Close',
			bind: 'data-save'
		}
	}, {
		title: 'Step 3',
		content: '

# Content Step 3

',
		action: {
			label: 'Save and Close',
			bind: 'data-save'
		}
	}, {
		title: 'Step 4',
		content: '

# Content Step 4

',
		action: {
			label: 'Save and Close',
			bind: 'data-save'
		}
	}\]
}, function(err, data) {
	if(err) {
		// do error handling
	} else {
		// do something with data
	}
});

### Settings Object

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>'Style guide'</td><td>It is the title that is displayed in wizard modal.</td></tr><tr><td>id</td><td>String</td><td>'fluig-wizard-modal'</td><td>The id that will be assigned to the wizard modal.</td></tr><tr><td>actionsFooter</td><td>Object</td><td>{}</td><td>Receives an object with the configuration for each footer button in the wizard modal.</td></tr><tr><td>wizard</td><td>Array</td><td>[]</td><td>Contains the steps of the wizard, where each step is an object with its configuration. Example: <code>{ title: 'Title', content: 'Content', action: { label: 'Label', bind: 'data-bind'} }</code>.</td></tr><tr><td>navigateBetweenUnfinishedSteps</td><td>Boolean</td><td>false</td><td>Determines whether navigation between unfinished steps is allowed in the wizard. If set to true, the user can navigate freely between steps.</td></tr><tr><td>showCountStepsTitle</td><td>Boolean</td><td>false</td><td>Defines whether to display the step count in the wizard modal's title. If set to true, the step count will be shown. Example: <code>Title 1/4</code></td></tr><tr><td>resetDoneBackStep</td><td>Boolean</td><td>false</td><td>When set to true, returning to a completed step resets its status, requiring the user to complete it again.</td></tr><tr><td>size</td><td>String</td><td>""</td><td>Receives a string containing the size of the wizard modal. The available options are "full", "large", "small" or empty. Empty it gets the default size.</td></tr></tbody></table>

### Settings to Object wizard

Settings available in the `wizard` object.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>""</td><td>Defines the title of the step in the wizard.</td></tr><tr><td>content</td><td>Can be a string in HTML format or a Mustache template.</td><td>""</td><td>It is the content that will be injected into the body of the step in the wizard. Can be a text or a Mustache template.</td></tr><tr><td>action</td><td>Object</td><td>{}</td><td>Contains the configuration for the action button default at this step. Example: <code>{ label: 'Label', bind: 'data-bind' }</code>.</td></tr></tbody></table>

### Settings to Object footerActions

Settings available in the `footerActions` object.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>cancel</td><td>Object</td><td>{}</td><td>Receives a configuration object for the "cancel" button in the format <code>{ label: 'Label', autoClose: 'true' }</code>.</td></tr><tr><td>prevStep</td><td>Object</td><td>{}</td><td>Receives a configuration object for the "previous step" button in the format <code>{ label: 'Label', showLabelPrevStep: 'true' }</code>.</td></tr><tr><td>nextStep</td><td>Object</td><td>{}</td><td>Receives a configuration object for the "next step" button in the format <code>{ label: 'Label' }</code>.</td></tr><tr><td>finish</td><td>Object</td><td>{}</td><td>Receives a configuration object for the "finish" button in the format <code>{ label: 'Label', bind: 'data-bind', autoClose: 'true' }</code>.</td></tr></tbody></table>

### Action parameter

Settings available in the `footerActions` and `wizard.action` parameter.

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>""</td><td>The label of the button in question.</td></tr><tr><td>bind</td><td>String</td><td>""</td><td><code>data atribute</code> that will be added to the button so that you can do in bind <code>js/SuperWidget</code>.</td></tr><tr><td>autoClose</td><td>Boolean</td><td>false</td><td>If true, automatically closes the wizard modal.</td></tr><tr><td>actionClose</td><td>Boolean</td><td>false</td><td>If true, adds the same attribute added in the parameter bind the close button (x) in the wizard modal header to listen the same event.</td></tr></tbody></table>

#### Attention with binds

All binds made ​​the buttons on the wizard modal should be added in `global` of binds the SuperWidget.

## Methods

### .remove()

Manually removes a wizard modal. Returns to the caller before the wizard modal has actually been hidden (i.e. before the hidden.bs.modal event occurs).

	myWizardModal.remove();

### .isOpen()

Checks whether the wizard modal is open or not on the page. Returns a boolean.

	myWizardModal.isOpen();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>show.bs.modal</td><td>This event fires immediately when the show instance method is called. If caused by a click, the clicked element is available as the relatedTarget property of the event.</td></tr><tr><td>shown.bs.modal</td><td>This event is fired when the wizard modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the relatedTarget property of the event.</td></tr><tr><td>hide.bs.modal</td><td>This event is fired immediately when the hide instance method has been called.</td></tr><tr><td>hidden.bs.modal</td><td>This event is fired when the wizard modal has finished being hidden from the user (will wait for CSS transitions to complete).</td></tr><tr><td>loaded.bs.modal</td><td>This event is fired when the wizard modal has loaded content using the remote option.</td></tr></tbody></table>
