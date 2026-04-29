# Components

**Fonte:** [https://style.fluig.com/components.html](https://style.fluig.com/components.html)
**Seção:** components
**Subseções detectadas:** 140

## Navegação interna

- [Default Buttons](#default-buttons-tab)
- [Default colors](#default-text-colors-tab)
- [Custom colors](#custom-text-colors-tab)
- [Default link colors](#default-link-colors-tab)
- [Custom link colors](#custom-link-colors-tab)
- [Default background colors](#default-background-colors-tab)
- [Custom background colors](#custom-background-colors-tab)
- [Animalia Icons](#animaliaicons)
- [Flat Icons](#flaticons)
- [Light theme](#light-theme-illustrations)
- [Dark theme](#dark-theme-illustrations)
- [Default Labels](#default-labels-tab)
- [Custom Labels](#custom-labels-tab)
- [Default Labels](#default-labels-actions-tab)
- [Custom Labels](#custom-labels-actions-tab)
- [Default Switches](#default-switches-tab)
- [Custom Switches](#custom-switches-tab)
- [Alerts](#alerts)
- [Examples](#alerts-examples)
- [Dismissible alerts](#alerts-dismissible)
- [Links in alerts](#alerts-links)
- [Breadcrumbs](#breadcrumbs)
- [Breadcrumbs with icons](#breadcrumbs-with-icons)
- [Example uses](#buttons-examples)
- [Buttons](#buttons)
- [Options](#buttons-options)
- [Default buttons](#other-buttons-options)
- [Sizes](#buttons-sizes)
- [Active state](#buttons-active)
- [Disabled state](#buttons-disabled)
- [Button tags](#buttons-tags)
- [Button groups](#btn-groups)
- [Basic example](#btn-groups-single)
- [Button toolbar](#btn-groups-toolbar)
- [Sizing](#btn-groups-sizing)
- [Nesting](#btn-groups-nested)
- [Vertical variation](#btn-groups-vertical)
- [Justified button groups](#btn-groups-justified)
- [Button dropdowns](#btn-dropdowns)
- [Single button dropdowns](#btn-dropdowns-single)
- [Split button dropdowns](#btn-dropdowns-split)
- [Sizing](#btn-dropdowns-sizing)
- [Dropup variation](#btn-dropdowns-dropup)
- [Persistent dropdown](#btn-persistent-dropdown)
- [Cards](#cards)
- [Checkbox and Radio](#custom-checkbox-and-radio)
- [Contextual classes](#contextual-classes)
- [Counter](#counter)
- [Dropdowns](#dropdowns)
- [Example](#dropdowns-example)
- [Alignment](#dropdowns-alignment)
- [Headers](#dropdowns-headers)
- [Disabled menu items](#dropdowns-menu-item-disabled)
- [Emojis](#emojis)
- [Icons](#icons)
- [Available icons](#flaticons-glyphs)
- [How to use](#animaliaicons-how-to-use)
- [Select icon component](#select-icon)
- [Illustrations](#illustrations)
- [Basic example](#illustrations-basic)
- [Available illustrations](#illustrations-available)
- [Illustrations with light and dark themes automatically](#illustrations-theme-color)
- [Changing the dimensions of the illustration](#illustrations-custom)
- [Input groups](#input-groups)
- [Basic example](#input-groups-basic)
- [Sizing](#input-groups-sizing)
- [Checkboxes and radio addons](#input-groups-checkboxes-radios)
- [Button addons](#input-groups-buttons)
- [Buttons with dropdowns](#input-groups-buttons-dropdowns)
- [Segmented buttons](#input-groups-buttons-segmented)
- [Segmented buttons extras](#input-groups-buttons-segmented-extras)
- [Labels](#labels)
- [List group](#list-group)
- [Basic example](#list-group-basic)
- [Badges](#list-group-badges)
- [Linked items](#list-group-linked)
- [Disabled items](#list-group-disabled)
- [Contextual classes](#list-group-contextual-classes)
- [Custom content](#list-group-custom-content)
- [Media object](#media)
- [Default media](#media-default)
- [Media list](#media-list)
- [Navbar](#navbar)
- [Default navbar](#navbar-default)
- [Forms](#navbar-forms)
- [Buttons](#navbar-buttons)
- [Text](#navbar-text)
- [Non-nav links](#navbar-links)
- [Component alignment](#navbar-component-alignment)
- [Fixed to top](#navbar-fixed-top)
- [Fixed to bottom](#navbar-fixed-bottom)
- [Static top](#navbar-static-top)
- [Inverted navbar](#navbar-inverted)
- [Navs](#nav)
- [Tabs](#nav-tabs)
- [Pills](#nav-pills)
- [Justified](#nav-justified)
- [Ellipsis](#nav-ellipsis)
- [Disabled links](#nav-disabled-links)
- [Using dropdowns](#nav-dropdowns)
- [Page header](#page-header)
- [Pagination](#pagination)
- [Default pagination](#pagination-default)
- [Pager](#pagination-pager)
- [Panels](#panels)
- [Basic example](#panels-basic)
- [Panel with heading](#panels-heading)
- [Panel with footer](#panels-footer)
- [Contextual alternatives](#panels-alternatives)
- [With tables](#panels-tables)
- [With list groups](#panels-list-group)
- [Progress bars](#progress)
- [Basic example](#progress-basic)
- [With label](#progress-label)
- [Low percentages](#progress-low-percentages)
- [Contextual alternatives](#progress-alternatives)
- [Striped](#progress-striped)
- [Animated](#progress-animated)
- [Stacked](#progress-stacked)
- [Smart Ellipsis](#smart-ellipsis)
- [Steps](#steps)
- [Basic horizontal example](#steps-horizontal-basic)
- [Basic vertical example](#steps-vertical-basic)
- [Steps error example](#steps-error-basic)
- [Switch](#switch)
- [Text Style Toolbar](#text-style-toolbar)
- [About](#text-style-toolbar-about)
- [Usage](#text-style-toolbar-usage)
- [Upload](#upload)
- [Examples](#upload-examples)
- [Wells](#wells)
- [Bs Example Navbar Collapse 1](#bs-example-navbar-collapse-1)
- [Bs Example Navbar Collapse 2](#bs-example-navbar-collapse-2)
- [Bs Example Navbar Collapse 3](#bs-example-navbar-collapse-3)
- [Bs Example Navbar Collapse 4](#bs-example-navbar-collapse-4)
- [Bs Example Navbar Collapse 5](#bs-example-navbar-collapse-5)
- [Bs Example Navbar Collapse 6](#bs-example-navbar-collapse-6)
- [Bs Example Navbar Collapse 7](#bs-example-navbar-collapse-7)
- [Bs Example Navbar Collapse 8](#bs-example-navbar-collapse-8)
- [Bs Example Navbar Collapse 9](#bs-example-navbar-collapse-9)

---

# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. For inline dismissal, use the alerts jQuery plugin.

## Examples

Wrap any text and an optional dismiss button in `.alert` and one of the four contextual classes (e.g., `.alert-success`) for basic alert messages.

#### No default class

Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.

## Toaster Success

Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.

× Close

## Toaster Info

Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.

× Close

## Toaster Warning

Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.

× Close

## Toaster Error

Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.

× Close

<div class="alert alert-success" role="alert">...</div>
<div class="alert alert-info" role="alert">...</div>
<div class="alert alert-warning" role="alert">...</div>
<div class="alert alert-danger" role="alert">...</div>

## Dismissible alerts

Build on any alert by adding an optional `.alert-dismissible` and close button.

## Toaster Warning

Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.

× Close

<div class="alert alert-warning alert-dismissible" role="alert">
	<h2 class="title">Toaster Warning</h2>
	<p class="message">Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.</p>
	<div class="alert-divider"></div>
	<button type="button" class="close" data-dismiss="alert">
		<span aria-hidden="true">×</span>
		<span class="sr-only">Close</span>
	</button>
</div>

#### Ensure proper behavior across all devices

Be sure to use the `<button>` element with the `data-dismiss="alert"` data attribute.

## Links in alerts

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

## Toaster Success

Exemplo de uma mensagem bem mais longa que poderia [ocupar mais de uma linha.](#)

× Close

## Toaster Info

Exemplo de uma mensagem bem mais longa que poderia [ocupar mais de uma linha.](#)

× Close

## Toaster Warning

Exemplo de uma mensagem bem mais longa que poderia [ocupar mais de uma linha.](#)

× Close

## Toaster Error

Exemplo de uma mensagem bem mais longa que poderia [ocupar mais de uma linha.](#)

× Close

<div class="alert alert-success alert-dismissible" role="alert">
	<h2 class="title">Toaster Success</h2>
	<p class="message">
		<a href="#" class="alert-link">...</a>.
	</p>
	<div class="alert-divider"></div>
	<button type="button" class="close" data-dismiss="alert">
		<span aria-hidden="true">×</span>
		<span class="sr-only">Close</span>
	</button>
</div>

<div class="alert alert-info alert-dismissible" role="alert">
	<h2 class="title">Toaster Info</h2>
	<p class="message">
		<a href="#" class="alert-link">...</a>.
	</p>
	<div class="alert-divider"></div>
	<button type="button" class="close" data-dismiss="alert">
		<span aria-hidden="true">×</span>
		<span class="sr-only">Close</span>
	</button>
</div>

<div class="alert alert-warning alert-dismissible" role="alert">
	<h2 class="title">Toaster Warning</h2>
	<p class="message">
		<a href="#" class="alert-link">...</a>.
	</p>
	<div class="alert-divider"></div>
	<button type="button" class="close" data-dismiss="alert">
		<span aria-hidden="true">×</span>
		<span class="sr-only">Close</span>
	</button>
</div>

<div class="alert alert-danger alert-dismissible" role="alert">
	<h2 class="title">Toaster Error</h2>
	<p class="message">
		<a href="#" class="alert-link">...</a>.
	</p>
	<div class="alert-divider"></div>
	<button type="button" class="close" data-dismiss="alert">
		<span aria-hidden="true">×</span>
		<span class="sr-only">Close</span>
	</button>
</div>

# Breadcrumbs

Indicate the current page's location within a navigational hierarchy.

Separators are automatically added in CSS through `:before` and `content`.

1.  Home

1.  [Home](#)
2.  Library

1.  [Home](#)
2.  [Library](#)
3.  Data

		<ol class="breadcrumb">
			<li><a href="#">Home</a></li>
			<li><a href="#">Library</a></li>
			<li class="active">Data</li>
		</ol>

## Breadcrumbs with icons

You can use the Style Guide Icon Fonts in the breadcrumb items.

1.  [](# "Home")
2.  [Library](#)
3.  Data

		<ol class="breadcrumb">
			<li><a href="#" class="flaticon flaticon-home icon-sm" title="Home"></a></li>
			<li><a href="#">Library</a></li>
			<li class="active">Data</li>
		</ol>

## Breadcrumbs with more

You can use this component to display a breadcrumb navigation with more items.

## Example uses

The breadcrumb component is a custom web element designed to display a breadcrumb navigation trail. This component accepts a list of items (crumbs) via the crumbs attribute in JSON format, where each item includes a label and a link. It's ideal for use in dashboards, document repositories, or any application with nested navigation.

#### The crumbs attribute:

**crumbs:** A JSON string containing an ordered list of breadcrumb items.

#### Each item must have:

-   text: The label to display.
-   href: The link to navigate when the item is clicked.

		<bread-crumb
			crumbs='\[
				{ "text": "Raiz", "href": "/" },
				{ "text": "Meus Documentos", "href": "/meus-documentos" },
				{ "text": "Trabalho", "href": "/trabalho" },
				{ "text": "Projetos", "href": "/projetos" },
				{ "text": "Cliente XPTO", "href": "/cliente-xpto" },
				{ "text": "Contratos", "href": "/contratos" },
				{ "text": "Versões", "href": "/versoes" },
				{ "text": "2023", "href": "/2023" },
				{ "text": "Outubro", "href": "/outubro" },
				{ "text": "Revisão Final", "href": "/revisao-final" },
				{ "text": "Assinados", "href": "/assinados" },
				{ "text": "Backup", "href": "/backup" },
				{ "text": "Financeiro", "href": "/financeiro" },
				{ "text": "Notas Fiscais", "href": "/notas-fiscais" },
				{ "text": "NF Julho", "href": "/nf-julho" },
				{ "text": "Reembolsos", "href": "/reembolsos" },
				{ "text": "Planilhas", "href": "/planilhas" },
				{ "text": "Anexos", "href": "/anexos" },
				{ "text": "Imagens", "href": "/imagens" },
				{ "text": "Capturas de Tela", "href": "/capturas-de-tela" },
				{ "text": "Arquivo Final", "href": "/arquivo-final" }
			\]'>
		</bread-crumb>

By default, the last breadcrumb item is not clickable.

		<bread-crumb
			id="breadcrumb-with-more-highlight-example-2"
			crumbs='\[
				{"text":"Raiz","href":"/"},
				{"text":"Meus Documentos","href":"/documents"},
				{"text":"Documentos variados","href":"/documents/1"}
			\]'>
		</bread-crumb>

By default, the last breadcrumb item is not clickable. You can change this behavior using the attribute `last-clickable="true"`.

		<bread-crumb
			crumbs='\[
				{"text":"Raiz","href":"/"},
				{ "text": "Meus Documentos", "href": "/meus-documentos" },
				{ "text": "Trabalho", "href": "/meus-documentos/trabalho" }
			\]'
			last-clickable="true">
		</bread-crumb>

## Options

<table class="table table-bordered table-striped"><thead><tr><th style="width: 14%;">Name</th><th style="width: 18%;">required</th><th style="width: 18%;">type</th><th style="width: 18%;">default</th><th>Description</th></tr></thead><tbody><tr><td>lastClickable</td><td>no</td><td>boolean</td><td>false</td><td>Sets the last breadcrumb item as clickable or not.</td></tr><tr><td>crumbs</td><td>yes</td><td>array of objects</td><td>[]</td><td>An array of objects representing the breadcrumb items. Each object should have 'text' and 'href' properties.</td></tr></tbody></table>

# Buttons

## Options

Use any of the available button classes to quickly create a styled button.

-   [Default Buttons](#default-buttons-tab)

## Default buttons

Use any of the available button classes to quickly create a styled button.

Default Primary Success Info Warning Danger Link

<!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>
<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>
<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>
<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>
<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>
<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>
<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>

## Sizes

Fancy larger or smaller buttons? Add `.btn-lg`, `.btn-sm`, or `.btn-xs` for additional sizes.

Large button Large button

Default button Default button

Small button Small button

Extra small button Extra small button

<p>
	<button type="button" class="btn btn-primary btn-lg">Large button</button>
	<button type="button" class="btn btn-default btn-lg">Large button</button>
</p>
<p>
	<button type="button" class="btn btn-primary">Default button</button>
	<button type="button" class="btn btn-default">Default button</button>
</p>
<p>
	<button type="button" class="btn btn-primary btn-sm">Small button</button>
	<button type="button" class="btn btn-default btn-sm">Small button</button>
</p>
<p>
	<button type="button" class="btn btn-primary btn-xs">Extra small button</button>
	<button type="button" class="btn btn-default btn-xs">Extra small button</button>
</p>

Create block level buttons—those that span the full width of a parent— by adding `.btn-block`.

Block level button Block level button

<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-default btn-lg btn-block">Block level button</button>

## Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. For `<button>` elements, this is done via `:active`. For `<a>` elements, it's done with `.active`. However, you may use `.active` on `<button>`s should you need to replicate the active state programmatically.

### Button element

No need to add `:active` as it's a pseudo-class, but if you need to force the same appearance, go ahead and add `.active`.

Primary button Button

<button type="button" class="btn btn-primary btn-lg active">Primary button</button>
<button type="button" class="btn btn-default btn-lg active">Button</button>

### Anchor element

Add the `.active` class to `<a>` buttons.

[Primary link](#) [Link](#)

<a href="#" class="btn btn-primary btn-lg active" role="button">Primary link</a>
<a href="#" class="btn btn-default btn-lg active" role="button">Link</a>

## Disabled state

Make buttons look unclickable by fading them back 50%.

### Button element

Add the `disabled` attribute to `<button>` buttons.

Primary button Button

<button type="button" class="btn btn-lg btn-primary" disabled="disabled">Primary button</button>
<button type="button" class="btn btn-default btn-lg" disabled="disabled">Button</button>

#### Cross-browser compatibility

If you add the `disabled` attribute to a `<button>`, Internet Explorer 9 and below will render text gray with a nasty text-shadow that we cannot fix.

### Anchor element

Add the `.disabled` class to `<a>` buttons.

[Primary link](#) [Link](#)

<a href="#" class="btn btn-primary btn-lg disabled" role="button">Primary link</a>
<a href="#" class="btn btn-default btn-lg disabled" role="button">Link</a>

We use `.disabled` as a utility class here, similar to the common `.active` class, so no prefix is required.

#### Link functionality caveat

This class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet Explorer 11. So to be safe, use custom JavaScript to disable such links.

#### Context-specific usage

While button classes can be used on `<a>` and `<button>` elements, only `<button>` elements are supported within our nav and navbar components.

## Button tags

Use the button classes on an `<a>`, `<button>`, or `<input>` element.

[Link](#) Button  

<a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">

#### Cross-browser rendering

As a best practice, **we highly recommend using the `<button>` element whenever possible** to ensure matching cross-browser rendering.

Among other things, there's a bug in Firefox < 30 that prevents us from setting the `line-height` of `<input>`\-based buttons, causing them to not exactly match the height of other buttons on Firefox.

# Button groups

Group a series of buttons together on a single line with the button group. Add on optional JavaScript radio and checkbox style behavior with our buttons plugin.

#### Tooltips & popovers in button groups require special setting

When using tooltips or popovers on elements within a `.btn-group`, you'll have to specify the option `container: 'body'` to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).

### Basic example

Wrap a series of buttons with `.btn` in `.btn-group`.

Left Middle Right

<div class="btn-group">
	<button type="button" class="btn btn-default">Left</button>
	<button type="button" class="btn btn-default">Middle</button>
	<button type="button" class="btn btn-default">Right</button>
</div>

### Button toolbar

Combine sets of `<div class="btn-group">` into a `<div class="btn-toolbar">` for more complex components.

1 2 3 4

5 6 7

8

<div class="btn-toolbar" role="toolbar">
	<div class="btn-group">...</div>
	<div class="btn-group">...</div>
	<div class="btn-group">...</div>
</div>

### Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to the `.btn-group`.

Left Middle Right

Left Middle Right

Left Middle Right

Left Middle Right

<div class="btn-group btn-group-lg">...</div>
<div class="btn-group">...</div>
<div class="btn-group btn-group-sm">...</div>
<div class="btn-group btn-group-xs">...</div>

### Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

1 2

Dropdown

-   [Dropdown link](#)
-   [Dropdown link](#)

<div class="btn-group">
	<button type="button" class="btn btn-default">1</button>
	<button type="button" class="btn btn-default">2</button>
	<div class="btn-group">
		<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
		Dropdown
		<span class="caret"></span>
		</button>
		<ul class="dropdown-menu" role="menu">
			<li><a href="#">Dropdown link</a></li>
			<li><a href="#">Dropdown link</a></li>
		</ul>
	</div>
</div>

### Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

Button Button

Dropdown

-   [Dropdown link](#)
-   [Dropdown link](#)

Button Button

Dropdown

-   [Dropdown link](#)
-   [Dropdown link](#)

Dropdown

-   [Dropdown link](#)
-   [Dropdown link](#)

Dropdown

-   [Dropdown link](#)
-   [Dropdown link](#)

<div class="btn-group-vertical">
	...
</div>

### Justified button groups

Make a group of buttons stretch at equal sizes to span the entire width of its parent. Also works with button dropdowns within the button group.

#### Handling borders

Due to the specific HTML and CSS used to justify buttons (namely `display: table-cell`), the borders between them are doubled. In regular button groups, `margin-left: -1px` is used to stack the borders instead of removing them. However, `margin` doesn't work with `display: table-cell`. As a result, depending on your customizations to Style Guide, you may wish to remove or re-color the borders.

#### IE8 and borders

Internet Explorer 8 doesn't render borders on buttons in a justified button group, whether it's on `<a>` or `<button>` elements. To get around that, wrap each button in another `.btn-group`.

#### With `<a>` elements

Just wrap a series of `.btn`s in `.btn-group.btn-group-justified`.

Left Middle Right

  

Left Middle

Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

<div class="btn-group btn-group-justified">
	...
</div>

#### With `<button>` elements

To use justified button groups with `<button>` elements, **you must wrap each button in a button group**. Most browsers don't properly apply our CSS for justification to `<button>` elements, but since we support button dropdowns, we can workaround that.

Left

Middle

Right

<div class="btn-group btn-group-justified">
	<div class="btn-group">
		<button type="button" class="btn btn-default">Left</button>
	</div>
	<div class="btn-group">
		<button type="button" class="btn btn-default">Middle</button>
	</div>
	<div class="btn-group">
		<button type="button" class="btn btn-default">Right</button>
	</div>
</div>

# Button dropdowns

Use any button to trigger a dropdown menu by placing it within a `.btn-group` and providing the proper menu markup.

#### Plugin dependency

Button dropdowns require the dropdown plugin to be included in your version of Style Guide.

### Single button dropdowns

Turn a button into a dropdown toggle with some basic markup changes.

Default

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Primary

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Success

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Info

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Warning

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Danger

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

<!-- Single button -->
<div class="btn-group">
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
	Action <span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu">
		<li><a href="#">Action</a></li>
		<li><a href="#">Another action</a></li>
		<li><a href="#">Something else here</a></li>
		<li class="divider"></li>
		<li><a href="#">Separated link</a></li>
	</ul>
</div>

### Split button dropdowns

Similarly, create split button dropdowns with the same markup changes, only with a separate button.

Default Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Primary Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Success Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Info Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Warning Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Danger Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

<!-- Split button -->
<div class="btn-group">
	<button type="button" class="btn btn-danger">Action</button>
	<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
	<span class="caret"></span>
	<span class="sr-only">Toggle Dropdown</span>
	</button>
	<ul class="dropdown-menu" role="menu">
		<li><a href="#">Action</a></li>
		<li><a href="#">Another action</a></li>
		<li><a href="#">Something else here</a></li>
		<li class="divider"></li>
		<li><a href="#">Separated link</a></li>
	</ul>
</div>

### Sizing

Button dropdowns work with buttons of all sizes.

Large button

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Small button

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Extra small button

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

<!-- Large button group -->
<div class="btn-group">
	<button class="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
	Large button <span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu">
		...
	</ul>
</div>
<!-- Small button group -->
<div class="btn-group">
	<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
	Small button <span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu">
		...
	</ul>
</div>
<!-- Extra small button group -->
<div class="btn-group">
	<button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
	Extra small button <span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu">
		...
	</ul>
</div>

### Dropup variation

Trigger dropdown menus above elements by adding `.dropup` to the parent.

Dropup Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Right dropup Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

<div class="btn-group dropup">
	<button type="button" class="btn btn-default">Dropup</button>
	<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
	<span class="caret"></span>
	<span class="sr-only">Toggle Dropdown</span>
	</button>
	<ul class="dropdown-menu" role="menu">
		<!-- Dropdown menu links -->
	</ul>
</div>

### Persistent dropdown

You can create a dropdown menu that doesn't close when you click on an option by adding `.dropdown-persistent` to the parent.

Persistent

Checkboxes

-    Checkbox 1
    
-    Checkbox 2
    

* * *

Radios

-    Radio 1
    
-    Radio 2
    

* * *

Cancelar Aplicar

<div class="btn-group dropdown-persistent">
	<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
		Persistent
		<span class="caret"></span>
	</button>
	<div class="dropdown-menu fs-no-padding">
		<div class="dropdown-item">
			<ul class="fs-md-padding-left fs-no-list-style">
				<div class="label-category fs-sm-margin-vertical fs-display-flex fs-align-items-center">
					<p class="text-muted fs-text-sm fs-no-margin">Checkboxes</p>
				</div>
				<li role="presentation" class="fs-sm-margin-bottom">
					<div class="custom-checkbox custom-checkbox-primary">
						<input type="checkbox" id="persistent-checkbox-1">
						<label for="persistent-checkbox-1">Checkbox 1</label>
					</div>
				</li>
				<li role="presentation" class="fs-sm-margin-bottom">
					<div class="custom-checkbox custom-checkbox-primary">
						<input type="checkbox" id="persistent-checkbox-2">
						<label for="persistent-checkbox-2">Checkbox 2</label>
					</div>
				</li>
			</ul>
		</div>
		<hr class="fs-no-margin">
		<div class="dropdown-item">
			<ul class="fs-md-padding-left fs-no-list-style">
				<div class="label-category fs-sm-padding-vertical fs-display-flex fs-align-items-center">
					<p class="text-muted fs-text-sm fs-no-margin">Radios</p>
				</div>
				<li role="presentation">
					<div class="custom-radio custom-radio-primary fs-sm-margin-bottom">
						<input type="radio" id="persistent-radio-1">
						<label for="persistent-radio-1">Radio 1</label>
					</div>
				</li>
				<li role="presentation">
					<div class="custom-radio custom-radio-primary fs-sm-margin-bottom">
						<input type="radio" id="persistent-radio-2">
						<label for="persistent-radio-2">Radio 2</label>
					</div>
				</li>
			</ul>
		</div>
		<hr class="fs-no-margin">
		<div class="dropdown-item fs-display-flex fs-justify-content-flex-end fs-md-padding">
			<button class="btn btn-default">Cancelar</button>
			<button class="btn btn-primary fs-sm-margin-left">Aplicar</button>
		</div>
	</div>
</div>

# Cards

Fluig Style Guide cards provide a flexible and extensible content container with multiple variants and options.

## About

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other fluig Style Guide components.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various sizing options.

![Card image cap](/images/bg-card-default.png)

### Card title

Some quick example text to build on the card title and make up the bulk of the card's content.

[Go somewhere](#)

<div class="row">
    <div class="col-md-4">
        <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title">Card title</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>

## Product cards example

The example below is from an application card with an image or illustration and more information on the thumb.

Visualizar página Editar página

![Card image cap](/images/bg-card-default.png)

# Lorem ipsum dolor sit amet consectetur adipiscing elit

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

Criado por José da Silva dos Santos das Neves

Editado em 20/02/2021 - V 1.0

Visualizar página Editar página

# Lorem ipsum dolor sit amet consectetur adipiscing elit

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

Criado por José da Silva

Editado em 20/02/2021 - V 1.0

<div class="row">
    <!-- Exemplo com imagem -->
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
            <div class="card-thumb card-thumb-img">
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
                </div>
                <div class="card-thumb-actions">
                    <button type="button" class="btn btn-primary">
                        Visualizar página
                    </button>
                    <button type="button" class="btn btn-default">
                        Editar página
                    </button>
                </div>
                <img
                    src="/style-guide/images/bg-card-default.png"
                    alt="Card image cap"
                >
            </div>
            <div class="card-body">
                <div class="card-title-with-actions">
                    <h1 class="card-normal-title">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </h1>
                    <div class="btn-group">
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
                            <i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            <li><a href="#">Visualizar página</a></li>
                            <li><a href="#">Editar página</a></li>
                            <li><a href="#">Excluir página</a></li>
                        </ul>
                    </div>
                </div>
                <p class="card-small-text">Criado por José da Silva dos Santos das Neves</p>
                <p class="card-small-text">Editado em 20/02/2021 - V 1.0</p>
            </div>
        </div>
    </div>
    <!-- Exemplo com ilustração -->
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
            <div
                class="card-thumb card-thumb-illustration"
            >
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
                </div>
                <div class="card-thumb-actions">
                    <button type="button" class="btn btn-primary">
                        Visualizar página
                    </button>
                    <button type="button" class="btn btn-default">
                        Editar página
                    </button>
                </div>
                <i
                    class="illustration illustration-layout-group illustration-md"
                    aria-hidden="true"
                ></i>
            </div>
            <div class="card-body">
                <div class="card-title-with-actions">
                    <h1 class="card-normal-title">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </h1>
                    <div class="btn-group">
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
                            <i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            <li><a href="#">Visualizar página</a></li>
                            <li><a href="#">Editar página</a></li>
                            <li><a href="#">Excluir página</a></li>
                        </ul>
                    </div>
                </div>
                <p class="card-small-text">Criado por José da Silva</p>
                <p class="card-small-text">Editado em 20/02/2021 - V 1.0</p>
            </div>
        </div>
    </div>
</div>

## Product cards with apps example

The example below is very similar to the one above, but information about applications is added to the body of the card.

Visualizar página Editar página

![Card image cap](/images/bg-card-default.png)

 ![App Logo](/images/totvs.svg)![App Logo](/images/pages.svg) ![App Logo](/images/tasks.svg) ![App Logo](/images/forms.svg) ![App Logo](/images/flow.svg) +2

# Lorem ipsum dolor sit amet consectetur adipiscing elit

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

Criado por José da Silva

Editado em 20/02/2021 - V 1.0

Visualizar página Editar página

 ![App Logo](/images/totvs.svg)![App Logo](/images/pages.svg) ![App Logo](/images/tasks.svg) ![App Logo](/images/forms.svg) ![App Logo](/images/flow.svg) +2

# Lorem ipsum dolor sit amet consectetur adipiscing elit

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

Criado por José da Silva

Editado em 20/02/2021 - V 1.0

<div class="row">
    <!-- Exemplo com imagem -->
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
            <div
                class="card-thumb card-thumb-img"
            >
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
                </div>
                <div class="card-thumb-actions">
                    <button type="button" class="btn btn-primary">
                        Visualizar página
                    </button>
                    <button type="button" class="btn btn-default">
                        Editar página
                    </button>
                </div>
                <img
                    src="/style-guide/images/bg-card-default.png"
                    alt="Card image cap"
                >
            </div>
            <div class="card-body">
                <div class="card-list-items">
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/totvs.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/pages.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/tasks.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/forms.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/flow.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        +2
                    </span>
                </div>
                <div class="card-title-with-actions">
                    <h1 class="card-normal-title">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </h1>
                    <div class="btn-group">
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
                            <i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            <li><a href="#">Visualizar página</a></li>
                            <li><a href="#">Editar página</a></li>
                            <li><a href="#">Excluir página</a></li>
                        </ul>
                    </div>
                </div>
                <p class="card-small-text">Criado por José da Silva</p>
                <p class="card-small-text">Editado em 20/02/2021 - V 1.0</p>
            </div>
        </div>
    </div>
    <!-- Exemplo com ilustração -->
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
            <div
                class="card-thumb card-thumb-illustration"
            >
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
                </div>
                <div class="card-thumb-actions">
                    <button type="button" class="btn btn-primary">
                        Visualizar página
                    </button>
                    <button type="button" class="btn btn-default">
                        Editar página
                    </button>
                </div>
                <i
                    class="illustration illustration-layout-group illustration-md"
                    aria-hidden="true"
                ></i>
            </div>
            <div class="card-body">
                <div class="card-list-items">
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/totvs.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/pages.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/tasks.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/forms.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/flow.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        +2
                    </span>
                </div>
                <div class="card-title-with-actions">
                    <h1 class="card-normal-title">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </h1>
                    <div class="btn-group">
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
                            <i class="flaticon flaticon-more-vert icon-md" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                            <li><a href="#">Visualizar página</a></li>
                            <li><a href="#">Editar página</a></li>
                            <li><a href="#">Excluir página</a></li>
                        </ul>
                    </div>
                </div>
                <p class="card-small-text">Criado por José da Silva</p>
                <p class="card-small-text">Editado em 20/02/2021 - V 1.0</p>
            </div>
        </div>
    </div>
</div>

## Cards list example

The example below are of the cards in list format. To use the card in list, the `card-horizontal` class must be added.

# Lorem ipsum dolor sit amet consectetur adipiscing elit

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

# Lorem ipsum dolor sit amet consectetur adipiscing elit

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

<div class="row">
    <div class="col-xs-12">
        <div class="card card-horizontal">
            <div class="card-thumb">
                <i
                    class="illustration illustration-layout-group illustration-md"
                    aria-hidden="true"
                ></i>
            </div>
            <div class="card-body">
                <h1 class="card-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
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
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
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
    <div class="col-xs-12">
        <div class="card card-horizontal">
            <div class="card-thumb">
                <i
                    class="illustration illustration-layout-group illustration-md"
                    aria-hidden="true"
                ></i>
            </div>
            <div class="card-body">
                <h1 class="card-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
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
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
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

## Cards list with apps example

The example below are of the cards in list format with apps.

# Lorem ipsum dolor sit amet consectetur adipiscing elit

 ![App Logo](/images/totvs.svg)![App Logo](/images/pages.svg) ![App Logo](/images/tasks.svg) ![App Logo](/images/forms.svg) ![App Logo](/images/flow.svg) +2

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

# Lorem ipsum dolor sit amet consectetur adipiscing elit

 ![App Logo](/images/totvs.svg)![App Logo](/images/pages.svg) ![App Logo](/images/tasks.svg) ![App Logo](/images/forms.svg) ![App Logo](/images/flow.svg) +2

José da Silva

08/10/1990

v1.0

-   [Visualizar página](#)
-   [Editar página](#)
-   [Excluir página](#)

<div class="row">
    <div class="col-xs-12">
        <div class="card card-horizontal">
            <div class="card-thumb">
                <i
                    class="illustration illustration-layout-group illustration-md"
                    aria-hidden="true"
                ></i>
            </div>
            <div class="card-body">
                <h1 class="card-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
                <div class="card-list-items">
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/totvs.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/pages.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/tasks.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/forms.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/flow.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        +2
                    </span>
                </div>
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
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
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
    <div class="col-xs-12">
        <div class="card card-horizontal">
            <div class="card-thumb">
                <i
                    class="illustration illustration-layout-group illustration-md"
                    aria-hidden="true"
                ></i>
            </div>
            <div class="card-body">
                <h1 class="card-title">Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
                <div class="card-list-items">
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/totvs.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/pages.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/tasks.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/forms.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        <img src="/style-guide/images/flow.svg" width="24px" height="24px" alt="App Logo">
                    </span>
                    <span class="card-list-item card-list-item-images" title="Action title">
                        +2
                    </span>
                </div>
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
                        <button type="button" class="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown">
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

## Changing the card view style

Below is an example of changing the display style of cards in grid format and in list format.

# My Pages

### HTML code

<!-- buttons to change cards layout -->
<button class="btn btn-link" type="button" data-change-cards-layout="LIST">
    <i class="flaticon flaticon-list icon-md" aria-hidden="true"></i>
</button>
<button class="btn btn-link" type="button" data-change-cards-layout="GRID">
    <i class="flaticon flaticon-grid icon-md" aria-hidden="true"></i>
</button>

<!-- Cards list master container -->
<div class="row" data-cards-list></div>

<!-- Card grid template -->
<script type="text/template" class="card-grid-template">
    {{ #. }}
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <!-- Code -->
            </div>
        </div>
    {{ /. }}
</script>

<!-- Card list template -->
<script type="text/template" class="card-list-template">
    {{ #. }}
        <div class="col-xs-12">
            <div class="card card-horizontal">
                <!-- Code -->
            </div>
        </div>
    {{ /. }}
</script>

### JavaScript code

    bindings: {
        local: {
            'change-cards-layout': \['click\_changeCardsLayout'\]
        },
        global: {}
    },

    init: function() {
        // Code
    },

    changeCardsLayout: function(el, ev) {
        var cards = \[
            {
                /\* Card Data \*/
            }
        \];

        var mode = $(el)
            .data('change-cards-layout')
            .toLocaleLowerCase();

        var template = $('.card-'+mode+'-template').html();

        var html = Mustache.render(template, cards);

        $('\[data-cards-list\]', this.DOM)
            .empty()
            .append(html);
    },

## Content types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

## Body

The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.

This is some text within a card body.

<div class="card">
    <div class="card-body">
        This is some text within a card body.
    </div>
</div>

## Titles, text, and links

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` item, the card title and subtitle are aligned nicely.

### Card title

###### Card subtitle

Some quick example text to build on the card title and make up the bulk of the card's content.

[Card link](#) [Another link](#)

<div class="row">
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Card title</h3>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    </div>
</div>

## Images

`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can also be styled with the standard HTML tags.

![Card image cap](data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164b376afcd%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164b376afcd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.2109375%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E)

Some quick example text to build on the card title and make up the bulk of the card's content.

<div class="row">
    <div class="col-md-4">
        <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
</div>

# Checkbox and Radio

Custom Checkbox and Radios are components that apply a more modern and standardized visual style in these form elements, making them more interactive and with better accessibility.

### Checkbox types

 Primary

 Success

 Info

 Warning

 Danger

 Disabled

    <div class="custom-checkbox custom-checkbox-primary">
        <input type="checkbox" id="checkbox-1">
        <label for="checkbox-1">Primary</label>
    </div>
    <div class="custom-checkbox custom-checkbox-success">
        <input type="checkbox" id="checkbox-2">
        <label for="checkbox-2">Success</label>
    </div>
    <div class="custom-checkbox custom-checkbox-info">
        <input type="checkbox" id="checkbox-3">
        <label for="checkbox-3">Info</label>
    </div>
    <div class="custom-checkbox custom-checkbox-warning">
        <input type="checkbox" id="checkbox-4">
        <label for="checkbox-4">Warning</label>
    </div>
    <div class="custom-checkbox custom-checkbox-danger">
        <input type="checkbox" id="checkbox-5">
        <label for="checkbox-5">Danger</label>
    </div>
     <div class="custom-checkbox">
        <input type="checkbox" id="checkbox-6">
        <label for="checkbox-6">Disabled</label>
    </div>

### Radio types

 Primary

 Success

 Info

 Warning

 Danger

 Disabled

    <div class="custom-radio custom-radio-primary">
        <input type="radio" name="radio-types" value="primary" id="radio-1">
        <label for="radio-1">Primary</label>
    </div>
    <div class="custom-radio custom-radio-success">
        <input type="radio" name="radio-types" value="success" id="radio-2">
        <label for="radio-2">Success</label>
    </div>
    <div class="custom-radio custom-radio-info">
        <input type="radio" name="radio-types" value="info" id="radio-3">
        <label for="radio-3">Info</label>
    </div>
    <div class="custom-radio custom-radio-warning">
        <input type="radio" name="radio-types" value="warning" id="radio-4">
        <label for="radio-4">Warning</label>
    </div>
    <div class="custom-radio custom-radio-danger">
        <input type="radio" name="radio-types" value="danger" id="radio-5">
        <label for="radio-5">Danger</label>
    </div>

### Form inline

 Option 1

 Option 2

 Option 3

 Option 1

 Option 2

 Option 3

    <!-- Checkbox -->
    <form action="#">
        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">
            <input type="checkbox" id="checkbox-1c">
            <label for="checkbox-1c">Option 1</label>
        </div>
            <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">
            <input type="checkbox" id="checkbox-2c">
            <label for="checkbox-2c">Option 2</label>
        </div>
            <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary">
            <input type="checkbox" id="checkbox-3c">
            <label for="checkbox-3c">Option 3</label>
        </div>
    </form>

    <!-- Radio -->
    <form action="#">
        <div class="custom-radio custom-radio-inline custom-radio-primary">
            <input type="radio" name="radio-types" value="primary" id="radio-1c">
            <label for="radio-1c">Option 1</label>
        </div>
            <div class="custom-radio custom-radio-inline custom-radio-primary">
            <input type="radio" name="radio-types" value="success" id="radio-2c">
            <label for="radio-2c">Option 2</label>
        </div>
            <div class="custom-radio custom-radio-inline custom-radio-primary">
            <input type="radio" name="radio-types" value="info" id="radio-3c">
            <label for="radio-3c">Option 3</label>
        </div>
    </form>

### Other sizes

 Example

 Example

 Example

 Example

 Example

 Example

 Example

 Example

    <!-- Checkbox -->
    <form action="#">
        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary custom-checkbox-xl">
            <input type="checkbox" id="checkbox-4b">
            <label for="checkbox-4b">Example</label>
        </div>
        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary custom-checkbox-lg">
            <input type="checkbox" id="checkbox-3b">
            <label for="checkbox-3b">Example</label>
        </div>
        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary custom-checkbox-sm">
            <input type="checkbox" id="checkbox-2b">
            <label for="checkbox-2b">Example</label>
        </div>
        <div class="custom-checkbox custom-checkbox-inline custom-checkbox-primary custom-checkbox-xs">
            <input type="checkbox" id="checkbox-1b">
            <label for="checkbox-1b">Example</label>
        </div>
    </form>

    <!-- Radio -->
    <form action="#">
        <div class="custom-radio custom-radio-inline custom-radio-primary custom-radio-xl">
            <input type="radio" name="radio-sizes" value="xl" id="radio-4b">
            <label for="radio-4b">Example</label>
        </div>
        <div class="custom-radio custom-radio-inline custom-radio-primary custom-radio-lg">
            <input type="radio" name="radio-sizes" value="lg" id="radio-3b">
            <label for="radio-3b">Example</label>
        </div>
        <div class="custom-radio custom-radio-inline custom-radio-primary custom-radio-sm">
            <input type="radio" name="radio-sizes" value="sm" id="radio-2b">
            <label for="radio-2b">Example</label>
        </div>
        <div class="custom-radio custom-radio-inline custom-radio-primary custom-radio-xs">
            <input type="radio" name="radio-sizes" value="xs" id="radio-1b">
            <label for="radio-1b">Example</label>
        </div>
    </form>

# Contextual classes

Provide contextual classes for theme.

## Theme colors for texts

-   [Default colors](#default-text-colors-tab)
-   [Custom colors](#custom-text-colors-tab)

Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.

Etiam porta sem malesuada magna mollis euismod.

Donec ullamcorper nulla non metus auctor fringilla.

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula.

<p class="text-primary">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="text-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
<p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

Deserunt mollit anim id est laborum vitae dicta.

Ut enim ad minima veniam, quis nostrum exercitationem.

Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

<p class="text-gray-dark">Deserunt mollit anim id est laborum vitae dicta.</p>
<p class="text-gray">Ut enim ad minima veniam, quis nostrum exercitationem.</p>
<p class="text-gray-medium">Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
<p class="text-gray-light">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
<p class="text-gray-ultralight">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>

## Theme colors for links

-   [Default link colors](#default-link-colors-tab)
-   [Custom link colors](#custom-link-colors-tab)

Fusce dapibus [text-primary](#) commodo, tortor mauris nibh.

Etiam porta [text-warning](#) malesuada magna mollis euismod.

Donec ullamcorper [text-danger](#) non metus auctor fringilla.

Aenean eu [text-info](#) sem lacinia quam venenatis.

Duis mollis [text-success](#) nisi erat porttitor ligula.

<p>Fusce dapibus <a href="#" class="text-primary">text-primary</a> commodo, tortor mauris nibh.</p>
<p>Etiam porta <a href="#" class="text-warning">text-warning</a> malesuada magna mollis euismod.</p>
<p>Donec ullamcorper <a href="#" class="text-danger">text-danger</a> non metus auctor fringilla.</p>
<p>Aenean eu <a href="#" class="text-info">text-info</a> sem lacinia quam venenatis.</p>
<p>Duis mollis <a href="#" class="text-success">text-success</a> nisi erat porttitor ligula.</p>

Deserunt mollit [text-gray-dark](#) est laborum vitae dicta.

Ut enim [text-gray](#) veniam, quis nostrum exercitationem.

Ullam corporis [text-gray-medium](#) aliquid ex ea commodi.

Quis autem [text-gray-light](#) qui in ea voluptate.

Quis autem [text-gray-ultralight](#) qui in ea voluptate.

<p>Deserunt mollit <a href="#" class="text-gray-dark">text-gray-dark</a> est laborum vitae dicta.</p>
<p>Ut enim <a href="#" class="text-gray">text-gray</a> veniam, quis nostrum exercitationem.</p>
<p>Ullam corporis <a href="#" class="text-gray-medium">text-gray-medium</a> aliquid ex ea commodi.</p>
<p>Quis autem <a href="#" class="text-gray-light">text-gray-light</a> qui in ea voluptate.</p>
<p>Quis autem <a href="#" class="text-gray-ultralight">text-gray-ultralight</a> qui in ea voluptate.</p>

## Theme colors for background

-   [Default background colors](#default-background-colors-tab)
-   [Custom background colors](#custom-background-colors-tab)

Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.

Etiam porta sem malesuada magna mollis euismod.

Donec ullamcorper nulla non metus auctor fringilla.

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.

Duis mollis, est non commodo luctus, nisi erat porttitor ligula.

<p class="bg-primary">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
<p class="bg-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
<p class="bg-info">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.</p>
<p class="bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

Deserunt mollit anim id est laborum vitae dicta.

Ut enim ad minima veniam, quis nostrum exercitationem.

Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

<p class="bg-gray-dark">Deserunt mollit anim id est laborum vitae dicta.</p>
<p class="bg-gray">Ut enim ad minima veniam, quis nostrum exercitationem.</p>
<p class="bg-gray-medium">Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
<p class="bg-gray-light">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
<p class="bg-gray-ultralight">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>

## Theme colors for Border

Deserunt mollit anim id est laborum vitae dicta.

Ut enim ad minima veniam, quis nostrum exercitationem.

Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

        <p class="border-gray-dark">Deserunt mollit anim id est laborum vitae dicta.</p>
        <p class="border-gray">Ut enim ad minima veniam, quis nostrum exercitationem.</p>
        <p class="border-gray-medium">Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
        <p class="border-gray-light">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
        <p class="border-gray-ultralight">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>

## Theme colors for Hover

Deserunt mollit anim id est laborum vitae dicta.

Ut enim ad minima veniam, quis nostrum exercitationem.

Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

Quis autem vel eum iure reprehenderit qui in ea voluptate.

        <p class="text-hover-gray-dark">Deserunt mollit anim id est laborum vitae dicta.</p>
        <p class="text-hover-gray">Ut enim ad minima veniam, quis nostrum exercitationem.</p>
        <p class="text-hover-gray-medium">Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
        <p class="text-hover-gray-light">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
        <p class="text-hover-gray-ultralight">Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>

# Counter

### Example

Add any of the below mentioned modifier classes to change the appearance of a counter.

-   [](#)[10](#)
-   [](#)[11](#)
-   [](#)[12](#)
-   [](#)[13](#)
-   [](#)[14](#)
-   [](#)[15](#)

<ul class="list-group">
<li class="list-group-item"><span class="counter-group"><a href="#" class="fluigicon fluigicon-thumbs-up icon-xs"></a><a href="#" class="counter counter-warning pos-right-bottom">10</a></span></li>
<li class="list-group-item"><span class="counter-group"><a href="#" class="fluigicon fluigicon-comment"></a><a href="#" class="counter counter-warning pos-right-bottom">11</a></span></li>
<li class="list-group-item"><span class="counter-group"><a href="#" class="fluigicon fluigicon-bell-empty icon-sm"></a><a href="#" class="counter counter-warning pos-right-bottom">12</a></span></li>
<li class="list-group-item"><span class="counter-group"><a href="#" class="fluigicon fluigicon-share icon-md"></a><a href="#" class="counter counter-warning pos-right-bottom">13</a></span></li>
<li class="list-group-item"><span class="counter-group"><a href="#" class="fluigicon fluigicon-eye-open icon-lg"></a><a href="#" class="counter counter-warning pos-right-bottom">14</a></span></li>
<li class="list-group-item"><span class="counter-group"><a href="#" class="fluigicon fluigicon-star-empty icon-xl"></a><a href="#" class="counter counter-warning pos-right-bottom">15</a></span></li>
</ul>

#### Have tons of counter?

Rendering problems can arise when you have dozens of inline labels within a narrow container, each containing its own `inline-block` element (like an icon). The way around this is setting `display: inline-block;`.

# Dropdowns

Toggleable, contextual menu for displaying lists of links. Made interactive with the dropdown JavaScript plugin.

### Example

Wrap the dropdown's trigger and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Then add the menu's HTML.

Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

<div class="dropdown">
	<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
		Dropdown
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
		<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
		<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
		<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
		<li role="presentation" class="divider"></li>
		<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
	</ul>
</div>

### Alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add `.dropdown-menu-right` to a `.dropdown-menu` to right align the dropdown menu.

#### May require additional positioning

Dropdowns are automatically positioned via CSS within the normal flow of the document. This means dropdowns may be cropped by parents with certain `overflow` properties or appear out of bounds of the viewport. Address these issues on your own as they arise.

#### Deprecated `.pull-right` alignment

As of v3.1.0, we've deprecated `.pull-right` on dropdown menus. To right-align a menu, use `.dropdown-menu-right`. Right-aligned nav components in the navbar use a mixin version of this class to automatically align the menu. To override it, use `.dropdown-menu-left`.

<ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dLabel">
	...
</ul>

### Headers

Add a header to label sections of actions in any dropdown menu.

Dropdown

-   Dropdown header
-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   Dropdown header
-   [Separated link](#)

<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
	<li role="presentation" class="dropdown-header">Dropdown header</li>
	...
	<li role="presentation" class="divider"></li>
	<li role="presentation" class="dropdown-header">Dropdown header</li>
	...
</ul>

### Disabled menu items

Add `.disabled` to a `<li>` in the dropdown to disable the link.

Dropdown

-   [Regular link](#)
-   [Disabled link](#)
-   [Another link](#)

<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3">
	<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Regular link</a></li>
	<li role="presentation" class="disabled"><a role="menuitem" tabindex="-1" href="#">Disabled link</a></li>
	<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another link</a></li>
</ul>

# Emojis

The custom element for listing and selecting emojis.

The emoji component provides the ability to view, filter and select emojis from the frontend.

#### Unicode Emoji Version

Only **Unicode Version 11.0** emojis are supported in this component.

### Using within a popover

Below is a very common example of the component together with the popover component

Type your post with emojis below

#### HTML Code

<div class="form-group fs-position-relative" data-form-post-emojis>
    <label for="post-content-field-emojis">Type your post with emojis below</label>
    <textarea
        class="form-control fs-no-resize"
        name="post-content-field-emojis"
        id="post-content-field-emojis"
        rows="6"
        placeholder="Type your post..."
    ></textarea>
    <button class="btn btn-link fs-position-absolute fs-position-bottom-right" data-modal-open-emojis-popover>
        <i class="flaticon flaticon-single-smile-simple icon-md" aria-hidden="true"></i>
    </button>
</div>

<!-- Content Popover Template  -->
<script type="text/template" class="popover-emojis-template">
    <emojis-component id="emojis-example-0" data-emojis-component language="{{ language }}"></emojis-component>
</script>

<!-- Master Popover Template  -->
<script type="text/template" class="popover-emojis-master-template">
    <div class="fluig-style-guide popover popover-emojis fs-no-shadow fs-no-border fs-position-bottom-right" role="tooltip">
        <div class="arrow"></div>
        <h3 class="popover-title"></h3>
        <div class="popover-content fs-no-padding"></div>
    </div>
</script>

#### JavaScript Code

var emojisComponentExample = SuperWidget.extend({

    popoverEmojis: null,

    bindings: {
        local: {},
        global: {
            'emojis-component': \['select-emoji\_selectEmojiPopover'\]
        }
    },

    init: function() {
        this.initPopoverEmojis();
    },

    selectEmojiPopover: function(ev) {

        var emoji = ev.detail.emoji;
        var $textarea = $('#post-content-field-emojis');

        this.insertAtCursor(
            $textarea\[0\],
            emoji
		);

		$textarea.trigger('input');

        // Closes popover after select emoji
        this.popoverEmojis.popover('hide');
    },

    insertAtCursor: function(textarea, emoji) {

        if (textarea.selectionStart || textarea.selectionStart === 0) {
            var startPos = textarea.selectionStart;
            var endPos = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, startPos)
                + emoji
                + textarea.value.substring(endPos, textarea.value.length);
        } else {
            textarea.value += emoji;
        }
    },

    initPopoverEmojis: function() {

        var language = 'pt\_BR';
        
        var template = Mustache.render(
            this.templates\['.popover-emojis-master-template'\]
        );

        var content = Mustache.render(
            this.templates\['.popover-emojis-template'\], {
                language: language
            }
        );

        this.popoverEmojis = FLUIGC.popover('\[data-modal-open-emojis-popover\]', {
            trigger: 'click',
            placement: 'bottom',
            html: true,
            container: '\[data-form-post-emojis\]',
            template: template,
            content: content
        });
    }
});

### Default example

Rendering the emojis component with the default language.

    <emojis-component id="emojis-example-1"></emojis-component>

### Example with en\_US language

The example below shows how to change the language of the emojis component to English. This change influences the component's labels and also the keywords for filtering.

    <emojis-component id="emojis-example-2" language="en\_US"></emojis-component>

### Example listening to the emoji selection event

The example below shows how to listen for the emoji selection event and display it in an alert.

#### HTML Code

    <emojis-component id="emojis-example-3" language="pt\_BR"></emojis-component>

#### JavaScript Code

    var emojiComponent = document.querySelector('#emojis-example-3');

    emojiComponent.addEventListener('select-emoji', (event) => {
        alert(event.detail.emoji);
    })

### Element settings

Element settings have the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>language</td><td>String</td><td>'pt_BR'</td><td>Sets the language of the component. This change influences the component's labels and also the keywords for filtering. The options are accepted <code>pt_BR</code>, <code>en_US</code> and <code>es</code>.</td></tr></tbody></table>

### Element events

Element events are as follows:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>select-emoji</td><td>This event is fired immediately when an emoji is selected. The selected emoji is available in the <code>event.detail.emoji</code> object.</td></tr></tbody></table>

# Icons

## Available icons

Includes over 1500 animaliaicons and 500 flaticons, offering a wide range of design options developed by the fluig Team.

  

-   [Animalia Icons](#animaliaicons)
-   [Flat Icons](#flaticons)

## How to use

Copy and paste the class below the icon, preceded by the class **"animaliaicon"** or **"flaticon"**.

For performance reasons, all icons require a base class and individual icon class. To use, place the following code just about anywhere. Be sure to leave a space between the icon and text for proper padding.

## Icon sizes

As helper classes, we have included some icon sizes, that have to be used only with icon elements.

	<i class="flaticon flaticon-person icon-xs" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-sm" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-md" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-lg" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-xl" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-thumbnail-xs" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-thumbnail-sm" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-thumbnail-md" aria-hidden="true"></i>
	<i class="flaticon flaticon-person icon-thumbnail-lg" aria-hidden="true"></i>

## Select icon component

It is possible to select one of the flat icons through the custom element `icons-component`, as in the example below:

#### Icons Supports

Only **flaticons** are supported in this component. animaliaicons and other iconfont families are not supported.

	<icons-component id="icons-example-1"></icons-component>

### Element settings

Element settings have the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>language</td><td>String</td><td>'pt_BR'</td><td>Sets the language of the component. This change influences the component's labels. The options are accepted <code>pt_BR</code>, <code>en_US</code> and <code>es</code>.</td></tr></tbody></table>

### Element events

Element events are as follows:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>select-icon</td><td>This event is fired immediately when an icon is selected. The selected icon is available in the <code>event.detail.icon</code> object.</td></tr></tbody></table>

# Illustrations

Illustrations is a component with images to compose a layout. They can be used as a common image and their height and width can be changed as required.

## Basic example

![](/images/illustrations/browser-code.svg "browser code") ![](/images/illustrations/dark/browser-code.svg "browser code")

<img src="/style-guide/images/illustrations/browser-code.svg" title="browser code">
<img src="/style-guide/images/illustrations/dark/browser-code.svg" title="browser code">

## Available illustrations

-   [Light theme](#light-theme-illustrations)
-   [Dark theme](#dark-theme-illustrations)

![](/images/illustrations/agreement-block.svg "agreement-block") ![](/images/illustrations/agreement-broken.svg "agreement-broken") ![](/images/illustrations/agreement-caution.svg "agreement-caution") ![](/images/illustrations/agreement.svg "agreement") ![](/images/illustrations/android.svg "android") ![](/images/illustrations/article-block.svg "article-block") ![](/images/illustrations/article-broken.svg "article-broken") ![](/images/illustrations/article-caution.svg "article-caution") ![](/images/illustrations/book.svg "book") ![](/images/illustrations/browser-code.svg "browser-code") ![](/images/illustrations/builder-block.svg "builder-block") ![](/images/illustrations/builder-broken.svg "builder-broken") ![](/images/illustrations/builder-caution.svg "builder-caution") ![](/images/illustrations/builder.svg "builder") ![](/images/illustrations/building.svg "building") ![](/images/illustrations/call-center.svg "call-center") ![](/images/illustrations/camera.svg "camera") ![](/images/illustrations/cash.svg "cash") ![](/images/illustrations/caution.svg "caution") ![](/images/illustrations/clock.svg "clock") ![](/images/illustrations/cloud.svg "cloud") ![](/images/illustrations/community.svg "community") ![](/images/illustrations/construction.svg "construction") ![](/images/illustrations/diagram.svg "diagram") ![](/images/illustrations/digital.svg "digital") ![](/images/illustrations/disconnected.svg "disconnected") ![](/images/illustrations/diskette.svg "diskette") ![](/images/illustrations/download-file.svg "download-file") ![](/images/illustrations/earth-globe.svg "earth-globe") ![](/images/illustrations/email.svg "email") ![](/images/illustrations/empty.svg "empty") ![](/images/illustrations/error-desktop.svg "error-desktop") ![](/images/illustrations/error-mobile.svg "error-mobile") ![](/images/illustrations/error.svg "error") ![](/images/illustrations/faq.svg "faq") ![](/images/illustrations/favorites.svg "favorites") ![](/images/illustrations/film-reel.svg "film-reel") ![](/images/illustrations/flow.svg "flow") ![](/images/illustrations/folder-block.svg "folder-block") ![](/images/illustrations/folder-broken.svg "folder-broken") ![](/images/illustrations/folder-caution.svg "folder-caution") ![](/images/illustrations/folder.svg "folder") ![](/images/illustrations/forum.svg "forum") ![](/images/illustrations/galery.svg "galery") ![](/images/illustrations/gallery.svg "gallery") ![](/images/illustrations/hourglass.svg "hourglass") ![](/images/illustrations/image-block.svg "image-block") ![](/images/illustrations/image-broken.svg "image-broken") ![](/images/illustrations/image-caution.svg "image-caution") ![](/images/illustrations/image.svg "image") ![](/images/illustrations/layout-group.svg "layout-group") ![](/images/illustrations/layout.svg "layout") ![](/images/illustrations/link-broken.svg "link-broken") ![](/images/illustrations/list.svg "list") ![](/images/illustrations/mortarboard.svg "mortarboard") ![](/images/illustrations/no-pic.svg "no-pic") ![](/images/illustrations/package-diagram.svg "package-diagram") ![](/images/illustrations/paint-roller.svg "paint-roller") ![](/images/illustrations/paper.svg "paper") ![](/images/illustrations/post-broken.svg "post-broken") ![](/images/illustrations/post.svg "post") ![](/images/illustrations/profits.svg "profits") ![](/images/illustrations/rocket.svg "rocket") ![](/images/illustrations/search.svg "search") ![](/images/illustrations/settings.svg "settings") ![](/images/illustrations/shield.svg "shield") ![](/images/illustrations/smartphone.svg "smartphone") ![](/images/illustrations/storage.svg "storage") ![](/images/illustrations/success.svg "success") ![](/images/illustrations/tasks.svg "tasks") ![](/images/illustrations/trash.svg "trash") ![](/images/illustrations/upload-file.svg "upload-file") ![](/images/illustrations/user-group.svg "user-group") ![](/images/illustrations/user.svg "user") ![](/images/illustrations/users.svg "users") ![](/images/illustrations/video-block.svg "video-block") ![](/images/illustrations/video-broken.svg "video-broken") ![](/images/illustrations/video-caution.svg "video-caution") ![](/images/illustrations/video.svg "video") ![](/images/illustrations/widgets.svg "widgets") ![](/images/illustrations/wifi-off.svg "wifi-off")

                <!-- agreement-block illustration -->
                <img src="/style-guide/images/illustrations/agreement-block.svg" title="agreement-block">

                <!-- agreement-broken illustration -->
                <img src="/style-guide/images/illustrations/agreement-broken.svg" title="agreement-broken">

                <!-- agreement-caution illustration -->
                <img src="/style-guide/images/illustrations/agreement-caution.svg" title="agreement-caution">

                <!-- agreement illustration -->
                <img src="/style-guide/images/illustrations/agreement.svg" title="agreement">

                <!-- android illustration -->
                <img src="/style-guide/images/illustrations/android.svg" title="android">

                <!-- article-block illustration -->
                <img src="/style-guide/images/illustrations/article-block.svg" title="article-block">

                <!-- article-broken illustration -->
                <img src="/style-guide/images/illustrations/article-broken.svg" title="article-broken">

                <!-- article-caution illustration -->
                <img src="/style-guide/images/illustrations/article-caution.svg" title="article-caution">

                <!-- book illustration -->
                <img src="/style-guide/images/illustrations/book.svg" title="book">

                <!-- browser-code illustration -->
                <img src="/style-guide/images/illustrations/browser-code.svg" title="browser-code">

                <!-- builder-block illustration -->
                <img src="/style-guide/images/illustrations/builder-block.svg" title="builder-block">

                <!-- builder-broken illustration -->
                <img src="/style-guide/images/illustrations/builder-broken.svg" title="builder-broken">

                <!-- builder-caution illustration -->
                <img src="/style-guide/images/illustrations/builder-caution.svg" title="builder-caution">

                <!-- builder illustration -->
                <img src="/style-guide/images/illustrations/builder.svg" title="builder">

                <!-- building illustration -->
                <img src="/style-guide/images/illustrations/building.svg" title="building">

                <!-- call-center illustration -->
                <img src="/style-guide/images/illustrations/call-center.svg" title="call-center">

                <!-- camera illustration -->
                <img src="/style-guide/images/illustrations/camera.svg" title="camera">

                <!-- cash illustration -->
                <img src="/style-guide/images/illustrations/cash.svg" title="cash">

                <!-- caution illustration -->
                <img src="/style-guide/images/illustrations/caution.svg" title="caution">

                <!-- clock illustration -->
                <img src="/style-guide/images/illustrations/clock.svg" title="clock">

                <!-- cloud illustration -->
                <img src="/style-guide/images/illustrations/cloud.svg" title="cloud">

                <!-- community illustration -->
                <img src="/style-guide/images/illustrations/community.svg" title="community">

                <!-- construction illustration -->
                <img src="/style-guide/images/illustrations/construction.svg" title="construction">

                <!-- diagram illustration -->
                <img src="/style-guide/images/illustrations/diagram.svg" title="diagram">

                <!-- digital illustration -->
                <img src="/style-guide/images/illustrations/digital.svg" title="digital">

                <!-- disconnected illustration -->
                <img src="/style-guide/images/illustrations/disconnected.svg" title="disconnected">

                <!-- diskette illustration -->
                <img src="/style-guide/images/illustrations/diskette.svg" title="diskette">

                <!-- download-file illustration -->
                <img src="/style-guide/images/illustrations/download-file.svg" title="download-file">

                <!-- earth-globe illustration -->
                <img src="/style-guide/images/illustrations/earth-globe.svg" title="earth-globe">

                <!-- email illustration -->
                <img src="/style-guide/images/illustrations/email.svg" title="email">

                <!-- empty illustration -->
                <img src="/style-guide/images/illustrations/empty.svg" title="empty">

                <!-- error-desktop illustration -->
                <img src="/style-guide/images/illustrations/error-desktop.svg" title="error-desktop">

                <!-- error-mobile illustration -->
                <img src="/style-guide/images/illustrations/error-mobile.svg" title="error-mobile">

                <!-- error illustration -->
                <img src="/style-guide/images/illustrations/error.svg" title="error">

                <!-- faq illustration -->
                <img src="/style-guide/images/illustrations/faq.svg" title="faq">

                <!-- favorites illustration -->
                <img src="/style-guide/images/illustrations/favorites.svg" title="favorites">

                <!-- film-reel illustration -->
                <img src="/style-guide/images/illustrations/film-reel.svg" title="film-reel">

                <!-- flow illustration -->
                <img src="/style-guide/images/illustrations/flow.svg" title="flow">

                <!-- folder-block illustration -->
                <img src="/style-guide/images/illustrations/folder-block.svg" title="folder-block">

                <!-- folder-broken illustration -->
                <img src="/style-guide/images/illustrations/folder-broken.svg" title="folder-broken">

                <!-- folder-caution illustration -->
                <img src="/style-guide/images/illustrations/folder-caution.svg" title="folder-caution">

                <!-- folder illustration -->
                <img src="/style-guide/images/illustrations/folder.svg" title="folder">

                <!-- forum illustration -->
                <img src="/style-guide/images/illustrations/forum.svg" title="forum">

                <!-- galery illustration -->
                <img src="/style-guide/images/illustrations/galery.svg" title="galery">

                <!-- gallery illustration -->
                <img src="/style-guide/images/illustrations/gallery.svg" title="gallery">

                <!-- hourglass illustration -->
                <img src="/style-guide/images/illustrations/hourglass.svg" title="hourglass">

                <!-- image-block illustration -->
                <img src="/style-guide/images/illustrations/image-block.svg" title="image-block">

                <!-- image-broken illustration -->
                <img src="/style-guide/images/illustrations/image-broken.svg" title="image-broken">

                <!-- image-caution illustration -->
                <img src="/style-guide/images/illustrations/image-caution.svg" title="image-caution">

                <!-- image illustration -->
                <img src="/style-guide/images/illustrations/image.svg" title="image">

                <!-- layout-group illustration -->
                <img src="/style-guide/images/illustrations/layout-group.svg" title="layout-group">

                <!-- layout illustration -->
                <img src="/style-guide/images/illustrations/layout.svg" title="layout">

                <!-- link-broken illustration -->
                <img src="/style-guide/images/illustrations/link-broken.svg" title="link-broken">

                <!-- list illustration -->
                <img src="/style-guide/images/illustrations/list.svg" title="list">

                <!-- mortarboard illustration -->
                <img src="/style-guide/images/illustrations/mortarboard.svg" title="mortarboard">

                <!-- no-pic illustration -->
                <img src="/style-guide/images/illustrations/no-pic.svg" title="no-pic">

                <!-- package-diagram illustration -->
                <img src="/style-guide/images/illustrations/package-diagram.svg" title="package-diagram">

                <!-- paint-roller illustration -->
                <img src="/style-guide/images/illustrations/paint-roller.svg" title="paint-roller">

                <!-- paper illustration -->
                <img src="/style-guide/images/illustrations/paper.svg" title="paper">

                <!-- post-broken illustration -->
                <img src="/style-guide/images/illustrations/post-broken.svg" title="post-broken">

                <!-- post illustration -->
                <img src="/style-guide/images/illustrations/post.svg" title="post">

                <!-- profits illustration -->
                <img src="/style-guide/images/illustrations/profits.svg" title="profits">

                <!-- rocket illustration -->
                <img src="/style-guide/images/illustrations/rocket.svg" title="rocket">

                <!-- search illustration -->
                <img src="/style-guide/images/illustrations/search.svg" title="search">

                <!-- settings illustration -->
                <img src="/style-guide/images/illustrations/settings.svg" title="settings">

                <!-- shield illustration -->
                <img src="/style-guide/images/illustrations/shield.svg" title="shield">

                <!-- smartphone illustration -->
                <img src="/style-guide/images/illustrations/smartphone.svg" title="smartphone">

                <!-- storage illustration -->
                <img src="/style-guide/images/illustrations/storage.svg" title="storage">

                <!-- success illustration -->
                <img src="/style-guide/images/illustrations/success.svg" title="success">

                <!-- tasks illustration -->
                <img src="/style-guide/images/illustrations/tasks.svg" title="tasks">

                <!-- trash illustration -->
                <img src="/style-guide/images/illustrations/trash.svg" title="trash">

                <!-- upload-file illustration -->
                <img src="/style-guide/images/illustrations/upload-file.svg" title="upload-file">

                <!-- user-group illustration -->
                <img src="/style-guide/images/illustrations/user-group.svg" title="user-group">

                <!-- user illustration -->
                <img src="/style-guide/images/illustrations/user.svg" title="user">

                <!-- users illustration -->
                <img src="/style-guide/images/illustrations/users.svg" title="users">

                <!-- video-block illustration -->
                <img src="/style-guide/images/illustrations/video-block.svg" title="video-block">

                <!-- video-broken illustration -->
                <img src="/style-guide/images/illustrations/video-broken.svg" title="video-broken">

                <!-- video-caution illustration -->
                <img src="/style-guide/images/illustrations/video-caution.svg" title="video-caution">

                <!-- video illustration -->
                <img src="/style-guide/images/illustrations/video.svg" title="video">

                <!-- widgets illustration -->
                <img src="/style-guide/images/illustrations/widgets.svg" title="widgets">

                <!-- wifi-off illustration -->
                <img src="/style-guide/images/illustrations/wifi-off.svg" title="wifi-off">

![](/images/illustrations/dark/agreement-block.svg "agreement-block") ![](/images/illustrations/dark/agreement-broken.svg "agreement-broken") ![](/images/illustrations/dark/agreement-caution.svg "agreement-caution") ![](/images/illustrations/dark/agreement.svg "agreement") ![](/images/illustrations/dark/android.svg "android") ![](/images/illustrations/dark/article-block.svg "article-block") ![](/images/illustrations/dark/article-broken.svg "article-broken") ![](/images/illustrations/dark/article-caution.svg "article-caution") ![](/images/illustrations/dark/article.svg "article") ![](/images/illustrations/dark/book.svg "book") ![](/images/illustrations/dark/browser-code.svg "browser-code") ![](/images/illustrations/dark/builder-block.svg "builder-block") ![](/images/illustrations/dark/builder-broken.svg "builder-broken") ![](/images/illustrations/dark/builder-caution.svg "builder-caution") ![](/images/illustrations/dark/builder.svg "builder") ![](/images/illustrations/dark/building.svg "building") ![](/images/illustrations/dark/call-center.svg "call-center") ![](/images/illustrations/dark/camera.svg "camera") ![](/images/illustrations/dark/cash.svg "cash") ![](/images/illustrations/dark/caution.svg "caution") ![](/images/illustrations/dark/clock.svg "clock") ![](/images/illustrations/dark/cloud.svg "cloud") ![](/images/illustrations/dark/comment.svg "comment") ![](/images/illustrations/dark/community.svg "community") ![](/images/illustrations/dark/construction.svg "construction") ![](/images/illustrations/dark/desktop-access.svg "desktop-access") ![](/images/illustrations/dark/diagram.svg "diagram") ![](/images/illustrations/dark/digital.svg "digital") ![](/images/illustrations/dark/disconnected.svg "disconnected") ![](/images/illustrations/dark/diskette.svg "diskette") ![](/images/illustrations/dark/download-file.svg "download-file") ![](/images/illustrations/dark/earth-globe.svg "earth-globe") ![](/images/illustrations/dark/email.svg "email") ![](/images/illustrations/dark/empty.svg "empty") ![](/images/illustrations/dark/error-desktop.svg "error-desktop") ![](/images/illustrations/dark/error-mobile.svg "error-mobile") ![](/images/illustrations/dark/error.svg "error") ![](/images/illustrations/dark/faq.svg "faq") ![](/images/illustrations/dark/favorites.svg "favorites") ![](/images/illustrations/dark/film-reel.svg "film-reel") ![](/images/illustrations/dark/flow.svg "flow") ![](/images/illustrations/dark/folder-block.svg "folder-block") ![](/images/illustrations/dark/folder-broken.svg "folder-broken") ![](/images/illustrations/dark/folder-caution.svg "folder-caution") ![](/images/illustrations/dark/folder.svg "folder") ![](/images/illustrations/dark/forum.svg "forum") ![](/images/illustrations/dark/galery.svg "galery") ![](/images/illustrations/dark/hourglass.svg "hourglass") ![](/images/illustrations/dark/image-block.svg "image-block") ![](/images/illustrations/dark/image-broken.svg "image-broken") ![](/images/illustrations/dark/image-caution.svg "image-caution") ![](/images/illustrations/dark/image.svg "image") ![](/images/illustrations/dark/layout-group.svg "layout-group") ![](/images/illustrations/dark/layout.svg "layout") ![](/images/illustrations/dark/learning.svg "learning") ![](/images/illustrations/dark/link-broken.svg "link-broken") ![](/images/illustrations/dark/link.svg "link") ![](/images/illustrations/dark/list.svg "list") ![](/images/illustrations/dark/mortarboard.svg "mortarboard") ![](/images/illustrations/dark/no-pic.svg "no-pic") ![](/images/illustrations/dark/package-diagram.svg "package-diagram") ![](/images/illustrations/dark/paint-roller.svg "paint-roller") ![](/images/illustrations/dark/paper.svg "paper") ![](/images/illustrations/dark/post-broken.svg "post-broken") ![](/images/illustrations/dark/post.svg "post") ![](/images/illustrations/dark/profits.svg "profits") ![](/images/illustrations/dark/qrcode-mobile.svg "qrcode-mobile") ![](/images/illustrations/dark/qrcode.svg "qrcode") ![](/images/illustrations/dark/rocket.svg "rocket") ![](/images/illustrations/dark/search.svg "search") ![](/images/illustrations/dark/settings.svg "settings") ![](/images/illustrations/dark/shield.svg "shield") ![](/images/illustrations/dark/smartphone.svg "smartphone") ![](/images/illustrations/dark/storage.svg "storage") ![](/images/illustrations/dark/success.svg "success") ![](/images/illustrations/dark/tasks.svg "tasks") ![](/images/illustrations/dark/trash.svg "trash") ![](/images/illustrations/dark/upload-file.svg "upload-file") ![](/images/illustrations/dark/user-group.svg "user-group") ![](/images/illustrations/dark/user.svg "user") ![](/images/illustrations/dark/video-block.svg "video-block") ![](/images/illustrations/dark/video-broken.svg "video-broken") ![](/images/illustrations/dark/video-caution.svg "video-caution") ![](/images/illustrations/dark/video.svg "video") ![](/images/illustrations/dark/widgets.svg "widgets") ![](/images/illustrations/dark/wifi-off.svg "wifi-off")

            <!-- agreement-block illustration -->
            <img src="/style-guide/images/illustrations/dark/agreement-block.svg" title="agreement-block">

            <!-- agreement-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/agreement-broken.svg" title="agreement-broken">

            <!-- agreement-caution illustration -->
            <img src="/style-guide/images/illustrations/dark/agreement-caution.svg" title="agreement-caution">

            <!-- agreement illustration -->
            <img src="/style-guide/images/illustrations/dark/agreement.svg" title="agreement">

            <!-- android illustration -->
            <img src="/style-guide/images/illustrations/dark/android.svg" title="android">

            <!-- article-block illustration -->
            <img src="/style-guide/images/illustrations/dark/article-block.svg" title="article-block">

            <!-- article-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/article-broken.svg" title="article-broken">

            <!-- article-caution illustration -->
            <img src="/style-guide/images/illustrations/dark/article-caution.svg" title="article-caution">

            <!-- article illustration -->
            <img src="/style-guide/images/illustrations/dark/article.svg" title="article">

            <!-- book illustration -->
            <img src="/style-guide/images/illustrations/dark/book.svg" title="book">

            <!-- browser-code illustration -->
            <img src="/style-guide/images/illustrations/dark/browser-code.svg" title="browser-code">

            <!-- builder-block illustration -->
            <img src="/style-guide/images/illustrations/dark/builder-block.svg" title="builder-block">

            <!-- builder-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/builder-broken.svg" title="builder-broken">

            <!-- builder-caution illustration -->
            <img src="/style-guide/images/illustrations/dark/builder-caution.svg" title="builder-caution">

            <!-- builder illustration -->
            <img src="/style-guide/images/illustrations/dark/builder.svg" title="builder">

            <!-- building illustration -->
            <img src="/style-guide/images/illustrations/dark/building.svg" title="building">

            <!-- call-center illustration -->
            <img src="/style-guide/images/illustrations/dark/call-center.svg" title="call-center">

            <!-- camera illustration -->
            <img src="/style-guide/images/illustrations/dark/camera.svg" title="camera">

            <!-- cash illustration -->
            <img src="/style-guide/images/illustrations/dark/cash.svg" title="cash">

            <!-- caution illustration -->
            <img src="/style-guide/images/illustrations/dark/caution.svg" title="caution">

            <!-- clock illustration -->
            <img src="/style-guide/images/illustrations/dark/clock.svg" title="clock">

            <!-- cloud illustration -->
            <img src="/style-guide/images/illustrations/dark/cloud.svg" title="cloud">

            <!-- comment illustration -->
            <img src="/style-guide/images/illustrations/dark/comment.svg" title="comment">

            <!-- community illustration -->
            <img src="/style-guide/images/illustrations/dark/community.svg" title="community">

            <!-- construction illustration -->
            <img src="/style-guide/images/illustrations/dark/construction.svg" title="construction">

            <!-- desktop-access illustration -->
            <img src="/style-guide/images/illustrations/dark/desktop-access.svg" title="desktop-access">

            <!-- diagram illustration -->
            <img src="/style-guide/images/illustrations/dark/diagram.svg" title="diagram">

            <!-- digital illustration -->
            <img src="/style-guide/images/illustrations/dark/digital.svg" title="digital">

            <!-- disconnected illustration -->
            <img src="/style-guide/images/illustrations/dark/disconnected.svg" title="disconnected">

            <!-- diskette illustration -->
            <img src="/style-guide/images/illustrations/dark/diskette.svg" title="diskette">

            <!-- download-file illustration -->
            <img src="/style-guide/images/illustrations/dark/download-file.svg" title="download-file">

            <!-- earth-globe illustration -->
            <img src="/style-guide/images/illustrations/dark/earth-globe.svg" title="earth-globe">

            <!-- email illustration -->
            <img src="/style-guide/images/illustrations/dark/email.svg" title="email">

            <!-- empty illustration -->
            <img src="/style-guide/images/illustrations/dark/empty.svg" title="empty">

            <!-- error-desktop illustration -->
            <img src="/style-guide/images/illustrations/dark/error-desktop.svg" title="error-desktop">

            <!-- error-mobile illustration -->
            <img src="/style-guide/images/illustrations/dark/error-mobile.svg" title="error-mobile">

            <!-- error illustration -->
            <img src="/style-guide/images/illustrations/dark/error.svg" title="error">

            <!-- faq illustration -->
            <img src="/style-guide/images/illustrations/dark/faq.svg" title="faq">

            <!-- favorites illustration -->
            <img src="/style-guide/images/illustrations/dark/favorites.svg" title="favorites">

            <!-- film-reel illustration -->
            <img src="/style-guide/images/illustrations/dark/film-reel.svg" title="film-reel">

            <!-- flow illustration -->
            <img src="/style-guide/images/illustrations/dark/flow.svg" title="flow">

            <!-- folder-block illustration -->
            <img src="/style-guide/images/illustrations/dark/folder-block.svg" title="folder-block">

            <!-- folder-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/folder-broken.svg" title="folder-broken">

            <!-- folder-caution illustration -->
            <img src="/style-guide/images/illustrations/dark/folder-caution.svg" title="folder-caution">

            <!-- folder illustration -->
            <img src="/style-guide/images/illustrations/dark/folder.svg" title="folder">

            <!-- forum illustration -->
            <img src="/style-guide/images/illustrations/dark/forum.svg" title="forum">

            <!-- galery illustration -->
            <img src="/style-guide/images/illustrations/dark/galery.svg" title="galery">

            <!-- hourglass illustration -->
            <img src="/style-guide/images/illustrations/dark/hourglass.svg" title="hourglass">

            <!-- image-block illustration -->
            <img src="/style-guide/images/illustrations/dark/image-block.svg" title="image-block">

            <!-- image-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/image-broken.svg" title="image-broken">

            <!-- image-caution illustration -->
            <img src="/style-guide/images/illustrations/dark/image-caution.svg" title="image-caution">

            <!-- image illustration -->
            <img src="/style-guide/images/illustrations/dark/image.svg" title="image">

            <!-- layout-group illustration -->
            <img src="/style-guide/images/illustrations/dark/layout-group.svg" title="layout-group">

            <!-- layout illustration -->
            <img src="/style-guide/images/illustrations/dark/layout.svg" title="layout">

            <!-- learning illustration -->
            <img src="/style-guide/images/illustrations/dark/learning.svg" title="learning">

            <!-- link-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/link-broken.svg" title="link-broken">

            <!-- link illustration -->
            <img src="/style-guide/images/illustrations/dark/link.svg" title="link">

            <!-- list illustration -->
            <img src="/style-guide/images/illustrations/dark/list.svg" title="list">

            <!-- mortarboard illustration -->
            <img src="/style-guide/images/illustrations/dark/mortarboard.svg" title="mortarboard">

            <!-- no-pic illustration -->
            <img src="/style-guide/images/illustrations/dark/no-pic.svg" title="no-pic">

            <!-- package-diagram illustration -->
            <img src="/style-guide/images/illustrations/dark/package-diagram.svg" title="package-diagram">

            <!-- paint-roller illustration -->
            <img src="/style-guide/images/illustrations/dark/paint-roller.svg" title="paint-roller">

            <!-- paper illustration -->
            <img src="/style-guide/images/illustrations/dark/paper.svg" title="paper">

            <!-- post-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/post-broken.svg" title="post-broken">

            <!-- post illustration -->
            <img src="/style-guide/images/illustrations/dark/post.svg" title="post">

            <!-- profits illustration -->
            <img src="/style-guide/images/illustrations/dark/profits.svg" title="profits">

            <!-- qrcode-mobile illustration -->
            <img src="/style-guide/images/illustrations/dark/qrcode-mobile.svg" title="qrcode-mobile">

            <!-- qrcode illustration -->
            <img src="/style-guide/images/illustrations/dark/qrcode.svg" title="qrcode">

            <!-- rocket illustration -->
            <img src="/style-guide/images/illustrations/dark/rocket.svg" title="rocket">

            <!-- search illustration -->
            <img src="/style-guide/images/illustrations/dark/search.svg" title="search">

            <!-- settings illustration -->
            <img src="/style-guide/images/illustrations/dark/settings.svg" title="settings">

            <!-- shield illustration -->
            <img src="/style-guide/images/illustrations/dark/shield.svg" title="shield">

            <!-- smartphone illustration -->
            <img src="/style-guide/images/illustrations/dark/smartphone.svg" title="smartphone">

            <!-- storage illustration -->
            <img src="/style-guide/images/illustrations/dark/storage.svg" title="storage">

            <!-- success illustration -->
            <img src="/style-guide/images/illustrations/dark/success.svg" title="success">

            <!-- tasks illustration -->
            <img src="/style-guide/images/illustrations/dark/tasks.svg" title="tasks">

            <!-- trash illustration -->
            <img src="/style-guide/images/illustrations/dark/trash.svg" title="trash">

            <!-- upload-file illustration -->
            <img src="/style-guide/images/illustrations/dark/upload-file.svg" title="upload-file">

            <!-- user-group illustration -->
            <img src="/style-guide/images/illustrations/dark/user-group.svg" title="user-group">

            <!-- user illustration -->
            <img src="/style-guide/images/illustrations/dark/user.svg" title="user">

            <!-- video-block illustration -->
            <img src="/style-guide/images/illustrations/dark/video-block.svg" title="video-block">

            <!-- video-broken illustration -->
            <img src="/style-guide/images/illustrations/dark/video-broken.svg" title="video-broken">

            <!-- video-caution illustration -->
            <img src="/style-guide/images/illustrations/dark/video-caution.svg" title="video-caution">

            <!-- video illustration -->
            <img src="/style-guide/images/illustrations/dark/video.svg" title="video">

            <!-- widgets illustration -->
            <img src="/style-guide/images/illustrations/dark/widgets.svg" title="widgets">

            <!-- wifi-off illustration -->
            <img src="/style-guide/images/illustrations/dark/wifi-off.svg" title="wifi-off">

## Illustrations with light and dark themes automatically

It is possible to use illustrations in the light and dark theme automatically, by adding the custom element attribute `is="theme-illustrations"` to the `img` element, as in the example below.

![](/images/illustrations/upload-file.svg "upload file")  ![](/images/illustrations/upload-file.svg "upload file")

    <!-- Light -->
    <img src="/style-guide/images/illustrations/upload-file.svg" title="upload file" width="200" height="200" is="theme-illustrations">
        
    <!-- Dark -->
    <img src="/style-guide/images/illustrations/upload-file.svg" title="upload file" width="200" height="200" is="theme-illustrations">

## Changing the dimensions of the illustration

To change the dimensions of the illustrations, simply add the `height` and `width` attributes in the image, as in the following example:

![](/images/illustrations/upload-file.svg "upload file")

<img src="/style-guide/images/illustrations/upload-file.svg" title="upload file" width="200" height="200">

## Illustrations with class

<i class="illustration illustration-browser-code illustration-xl" aria-hidden="true"></i>
<i class="illustration illustration-browser-code-dark illustration-xl" aria-hidden="true"></i>

## Available class

<table class="table table-bordered table-striped"><thead><tr><th style="width: 20%;">Available options</th><th style="width: 80%;">Class name</th></tr></thead><tbody><tr><td>Types</td><td><code>illustration-browser-code</code>, <code>illustration-builder</code>, <code>illustration-clock</code>, <code>illustration-disconnected</code>, <code>illustration-diskette</code>, <code>illustration-download-file</code>, <code>illustration-earth-globe</code>, <code>illustration-email</code>, <code>illustration-empty</code>, <code>illustration-error-desktop</code>, <code>illustration-error-mobile</code>, <code>illustration-faq</code>, <code>illustration-film-reel</code>, <code>illustration-galery</code>, <code>illustration-layout-group</code>, <code>illustration-layout</code>, <code>illustration-list</code>, <code>illustration-mortarboard</code>, <code>illustration-no-pic</code>, <code>illustration-paint-roller</code>, <code>illustration-paper</code>, <code>illustration-post</code>, <code>illustration-rocket</code>, <code>illustration-search</code>, <code>illustration-shield</code>, <code>illustration-smartphone</code>, <code>illustration-trash</code>, <code>illustration-upload-file</code>, <code>illustration-caution</code>, <code>illustration-users</code>, <code>illustration-hourglass</code>, <code>illustration-success</code>, <code>illustration-flow</code>, <code>illustration-widgets</code>, <code>illustration-folder</code>, <code>illustration-agreement</code>, <code>illustration-agreement-block</code>, <code>illustration-agreement-broken</code>, <code>illustration-agreement-caution</code>, <code>illustration-android</code>, <code>illustration-article-block</code>, <code>illustration-article-broken</code>, <code>illustration-article-caution</code>, <code>illustration-book</code>, <code>illustration-builder-block</code>, <code>illustration-builder-broken</code>, <code>illustration-builder-caution</code>, <code>illustration-building</code>, <code>illustration-call-center</code>, <code>illustration-camera</code>, <code>illustration-cash</code>, <code>illustration-cloud</code>, <code>illustration-construction</code>, <code>illustration-diagram</code>, <code>illustration-digital</code>, <code>illustration-folder-block</code>, <code>illustration-folder-broken</code>, <code>illustration-folder-caution</code>, <code>illustration-forum</code>, <code>illustration-gallery</code>, <code>illustration-image</code>, <code>illustration-image-block</code>, <code>illustration-image-broken</code>, <code>illustration-image-caution</code>, <code>illustration-link-broken</code>, <code>illustration-post-broken</code>, <code>illustration-profits</code>, <code>illustration-settings</code>, <code>illustration-storage</code>, <code>illustration-tasks</code>, <code>illustration-user</code>, <code>illustration-user-group</code>, <code>illustration-video</code>, <code>illustration-video-block</code>, <code>illustration-video-broken</code>, <code>illustration-video-caution</code>, <code>illustration-wifi-off</code>, <code>illustration-package-diagram</code>.</td></tr><tr><td>Sizes</td><td><code>.illustration-xs</code> 32x32px, <code>.illustration-sm</code> 64x64px, <code>.illustration-md</code> 96x96px, <code>.illustration-lg</code> 128x128px, <code>.illustration-xl</code> 160x160px.</td></tr></tbody></table>

# Input groups

Extend form controls by adding text or buttons before, after, or on both sides of any text-based input. Use `.input-group` with an `.input-group-addon` to prepend or append elements to a single `.form-control`.

#### Cross-browser compatibility

Avoid using `<select>` elements here as they cannot be fully styled in WebKit browsers.

#### Tooltips & popovers in input groups require special setting

When using tooltips or popovers on elements within an `.input-group`, you'll have to specify the option `container: 'body'` to avoid unwanted side effects (such as the element growing wider and/or losing its rounded corners when the tooltip or popover is triggered).

#### Don't mix with other components

Do not mix form groups or grid column classes directly with input groups. Instead, nest the input group inside of the form group or grid-related element.

## Basic example

Place one add-on or button on either side of an input. You may also place one on both sides of an input.

**We do not support multiple add-ons on a single side.**

**We do not support multiple form-controls in a single input group.**

@ 

  

 .00

  

$  .00

  

$ 

<div class="input-group">
	<span class="input-group-addon">@</span>
	<input type="text" class="form-control" placeholder="Username">
</div>
<div class="input-group">
	<input type="text" class="form-control">
	<span class="input-group-addon">.00</span>
</div>
<div class="input-group">
	<span class="input-group-addon">$</span>
	<input type="text" class="form-control">
	<span class="input-group-addon">.00</span>
</div>
<div class="input-group">
	<span class="input-group-addon">$</span>
	<input type="text" class="form-control">
	<span class="input-group-addon">
		<i class="fluigicon fluigicon-search"></i>
	</span>
</div>

## Sizing

Add the relative form sizing classes to the `.input-group` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

@ 

  

@ 

  

@ 

	<div class="input-group input-group-lg">
		<span class="input-group-addon">@</span>
		<input type="text" class="form-control" placeholder="Username">
	</div>
	<div class="input-group">
		<span class="input-group-addon">@</span>
		<input type="text" class="form-control" placeholder="Username">
	</div>
	<div class="input-group input-group-sm">
		<span class="input-group-addon">@</span>
		<input type="text" class="form-control" placeholder="Username">
	</div>

## Checkboxes and radio addons

Place any checkbox or radio option within an input group's addon instead of text.

 

 

	<div class="row">
		<div class="col-lg-6">
			<div class="input-group">
				<span class="input-group-addon">
				<input type="checkbox">
				</span>
				<input type="text" class="form-control">
			</div>
			<!-- /input-group -->
		</div>
		<!-- /.col-lg-6 -->
		<div class="col-lg-6">
			<div class="input-group">
				<span class="input-group-addon">
				<input type="radio">
				</span>
				<input type="text" class="form-control">
			</div>
			<!-- /input-group -->
		</div>
		<!-- /.col-lg-6 -->
	</div>
	<!-- /.row -->

## Button addons

Buttons in input groups are a bit different and require one extra level of nesting. Instead of `.input-group-addon`, you'll need to use `.input-group-btn` to wrap the buttons. This is required due to default browser styles that cannot be overridden.

Go! 

 Go!

	<div class="row">
		<div class="col-lg-6">
			<div class="input-group">
				<span class="input-group-btn">
				<button class="btn btn-primary" type="button">Go!</button>
				</span>
				<input type="text" class="form-control">
			</div>
			<!-- /input-group -->
		</div>
		<!-- /.col-lg-6 -->
		<div class="col-lg-6">
			<div class="input-group">
				<input type="text" class="form-control">
				<span class="input-group-btn">
				<button class="btn btn-primary" type="button">Go!</button>
				</span>
			</div>
			<!-- /input-group -->
		</div>
		<!-- /.col-lg-6 -->
	</div>
	<!-- /.row -->

## Buttons with dropdowns

Action

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Action

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

	<div class="row">
		<div class="col-lg-6">
			<div class="input-group">
				<div class="input-group-btn">
					<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>
					<ul class="dropdown-menu" role="menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li class="divider"></li>
						<li><a href="#">Separated link</a></li>
					</ul>
				</div>
				<!-- /btn-group -->
				<input type="text" class="form-control">
			</div>
			<!-- /input-group -->
		</div>
		<!-- /.col-lg-6 -->
		<div class="col-lg-6">
			<div class="input-group">
				<input type="text" class="form-control">
				<div class="input-group-btn">
					<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Action <span class="caret"></span></button>
					<ul class="dropdown-menu dropdown-menu-right" role="menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li class="divider"></li>
						<li><a href="#">Separated link</a></li>
					</ul>
				</div>
				<!-- /btn-group -->
			</div>
			<!-- /input-group -->
		</div>
		<!-- /.col-lg-6 -->
	</div>
	<!-- /.row -->

## Segmented buttons

Action Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Action Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

	<div class="input-group">
		<div class="input-group-btn">
			<!-- Button and dropdown menu -->
		</div>
		<input type="text" class="form-control">
	</div>
	<div class="input-group">
		<input type="text" class="form-control">
		<div class="input-group-btn">
			<!-- Button and dropdown menu -->
		</div>
	</div>

## Segmented buttons extras

Action Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Action Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

	<div class="input-group">
		<div class="input-group-btn">
			<button type="button" class="btn btn-danger" tabindex="-1">Action</button>
			<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" tabindex="-1">
			<span class="caret"></span>
			<span class="sr-only">Toggle Dropdown</span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<li><a href="#">Action</a></li>
				<li><a href="#">Another action</a></li>
				<li><a href="#">Something else here</a></li>
				<li class="divider"></li>
				<li><a href="#">Separated link</a></li>
			</ul>
		</div>
		<input type="text" class="form-control">
	</div>
	<div class="input-group">
		<input type="text" class="form-control">
		<div class="input-group-btn">
			<button type="button" class="btn btn-danger" tabindex="-1">Action</button>
			<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" tabindex="-1">
			<span class="caret"></span>
			<span class="sr-only">Toggle Dropdown</span>
			</button>
			<ul class="dropdown-menu dropdown-menu-right" role="menu">
				<li><a href="#">Action</a></li>
				<li><a href="#">Another action</a></li>
				<li><a href="#">Something else here</a></li>
				<li class="divider"></li>
				<li><a href="#">Separated link</a></li>
			</ul>
		</div>
	</div>

# Labels

### Available variations

Add any of the below mentioned modifier classes to change the appearance of a label.

-   [Default Labels](#default-labels-tab)
-   [Custom Labels](#custom-labels-tab)

Default Primary Success Info Warning Danger

<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>

Gray dark Gray Gray medium Gray light Gray ultralight

<span class="label label-gray-dark">Gray dark</span>
<span class="label label-gray">Gray</span>
<span class="label label-gray-medium">Gray medium</span>
<span class="label label-gray-light">Gray light</span>
<span class="label label-gray-ultralight">Gray ultralight</span>

### Labels with actions

Listed below are the labels with actions to remove.

-   [Default Labels](#default-labels-actions-tab)
-   [Custom Labels](#custom-labels-actions-tab)

Primary Success Info Warning Danger

<span class="label label-default label-removable">
	Default
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-primary label-removable">
	Primary
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-success label-removable">
	Success
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-info label-removable">
	Info
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-warning label-removable">
	Warning
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-danger label-removable">
	Danger
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>

Gray dark Gray Gray medium Gray light Gray ultralight

<span class="label label-gray-dark label-removable">
	Gray dark
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-gray label-removable">
	Gray
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-gray-medium label-removable">
	Gray medium
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-gray-light label-removable">
	Gray light
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-gray-ultralight label-removable">
	Gray ultralight
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>

### Labels outline

Listed below are the labels outline type.

Primary outline Success outline Info outline Warning outline Danger outline

<span class="label label-primary-outline">Primary outline</span>
<span class="label label-success-outline">Success outline</span>
<span class="label label-info-outline">Info outline</span>
<span class="label label-warning-outline">Warning outline</span>
<span class="label label-danger-outline">Danger outline</span>

### Labels outline with action

Listed below are the labels outline type with action.

Primary outline Success outline Info outline Warning outline Danger outline

<span class="label label-primary-outline label-removable">
	Primary outline
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-success-outline label-removable">
	Success outline
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-info-outline label-removable">
	Info outline
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-warning-outline label-removable">
	Warning outline
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>
<span class="label label-danger-outline label-removable">
	Danger outline
	<button class="remove">
		<i class="flaticon flaticon-close icon-sm" aria-hidden="true"></i>
	</button>
</span>

#### Have tons of labels?

Rendering problems can arise when you have dozens of inline labels within a narrow container, each containing its own `inline-block` element (like an icon). The way around this is setting `display: inline-block;`.

# List group

List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.

### Basic example

The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.

-   Cras justo odio
-   Dapibus ac facilisis in
-   Morbi leo risus
-   Porta ac consectetur ac
-   Vestibulum at eros

<ul class="list-group">
	<li class="list-group-item">Cras justo odio</li>
	<li class="list-group-item">Dapibus ac facilisis in</li>
	<li class="list-group-item">Morbi leo risus</li>
	<li class="list-group-item">Porta ac consectetur ac</li>
	<li class="list-group-item">Vestibulum at eros</li>
</ul>

### Badges

Add the badges component to any list group item and it will automatically be positioned on the right.

-   14 Cras justo odio
-   2 Dapibus ac facilisis in
-   1 Morbi leo risus

<ul class="list-group">
	<li class="list-group-item">
		<span class="badge">14</span>
		Cras justo odio
	</li>
</ul>

Add any of the below mentioned modifier classes to change the appearance of a badge.

-   14 Cras justo odio
-   2 Dapibus ac facilisis in
-   1 Morbi leo risus
-   4 Amet veritum statum

<ul class="list-group">
	<li class="list-group-item">
		<span class="badge badge-warning">14</span>
		Cras justo odio
	</li>
	<li class="list-group-item">
		<span class="badge badge-danger">2</span>
		Dapibus ac facilisis in
	</li>
	<li class="list-group-item">
		<span class="badge badge-info">1</span>
		Morbi leo risus
	</li>
	<li class="list-group-item">
		<span class="badge badge-success">4</span>
		Amet veritum statum
	</li>
</ul>

### Linked items

Linkify list group items by using anchor tags instead of list items (that also means a parent `<div>` instead of an `<ul>`). No need for individual parents around each element.

[Cras justo odio](#) [Dapibus ac facilisis in](#) [Morbi leo risus](#) [Porta ac consectetur ac](#) [Vestibulum at eros](#)

<div class="list-group">
	<a href="#" class="list-group-item active">
	Cras justo odio
	</a>
	<a href="#" class="list-group-item">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item">Morbi leo risus</a>
	<a href="#" class="list-group-item">Porta ac consectetur ac</a>
	<a href="#" class="list-group-item">Vestibulum at eros</a>
</div>

### Disabled items

Add `.disabled` to a `.list-group-item` to gray it out to appear disabled.

[Cras justo odio](#) [Dapibus ac facilisis in](#) [Morbi leo risus](#) [Porta ac consectetur ac](#) [Vestibulum at eros](#)

<div class="list-group">
	<a href="#" class="list-group-item disabled">
	Cras justo odio
	</a>
	<a href="#" class="list-group-item">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item">Morbi leo risus</a>
	<a href="#" class="list-group-item">Porta ac consectetur ac</a>
	<a href="#" class="list-group-item">Vestibulum at eros</a>
</div>

### Contextual classes

Use contextual classes to style list items, default or linked. Also includes `.active` state.

-   Dapibus ac facilisis in
-   Cras sit amet nibh libero
-   Porta ac consectetur ac
-   Vestibulum at eros

[Dapibus ac facilisis in](#) [Cras sit amet nibh libero](#) [Porta ac consectetur ac](#) [Vestibulum at eros](#)

<ul class="list-group">
	<li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
	<li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
	<li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
	<li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
</ul>
<div class="list-group">
	<a href="#" class="list-group-item list-group-item-success">Dapibus ac facilisis in</a>
	<a href="#" class="list-group-item list-group-item-info">Cras sit amet nibh libero</a>
	<a href="#" class="list-group-item list-group-item-warning">Porta ac consectetur ac</a>
	<a href="#" class="list-group-item list-group-item-danger">Vestibulum at eros</a>
</div>

### Custom content

Add nearly any HTML within, even for linked list groups like the one below.

[

#### List group item heading

Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.

](#)[

#### List group item heading

Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.

](#)[

#### List group item heading

Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.

](#)

<div class="list-group">
	<a href="#" class="list-group-item active">
		<h4 class="list-group-item-heading">List group item heading</h4>
		<p class="list-group-item-text">...</p>
	</a>
</div>

# Media object

Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left- or right-aligned image alongside textual content.

### Default media

The default media allow to float a media object (images, video, audio) to the left or right of a content block.

[![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)

#### Media heading

Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

[![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)

#### Media heading

Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

[![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)

#### Nested media heading

Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

<div class="media">
	<a class="pull-left" href="#">
	<img class="media-object" src="..." alt="...">
	</a>
	<div class="media-body">
		<h4 class="media-heading">Media heading</h4>
		...
	</div>
</div>

### Media list

With a bit of extra markup, you can use media inside list (useful for comment threads or articles lists).

-   [![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)
    
    #### Media heading
    
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
    
    [![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)
    
    #### Nested media heading
    
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
    
    [![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)
    
    #### Nested media heading
    
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
    
    [![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)
    
    #### Nested media heading
    
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
    
-   [![64x64](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+)](#)
    
    #### Media heading
    
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
    

<ul class="media-list">
	<li class="media">
		<a class="pull-left" href="#">
		<img class="media-object" src="..." alt="...">
		</a>
		<div class="media-body">
			<h4 class="media-heading">Media heading</h4>
			...
		</div>
	</li>
</ul>

# Navbar

## Default navbar

Navbars are responsive meta components that serve as navigation headers for your application or site. They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.

#### Overflowing content

Since Style Guide doesn't know how much space the content in your navbar needs, you might run into issues with content wrapping into a second row. To resolve this, you can:

1.  Reduce the amount or width of navbar items.
2.  Hide certain navbar items at certain screen sizes using responsive utility classes.
3.  Change the point at which your navbar switches between collapsed and horizontal mode. Customize the `@grid-float-breakpoint` variable or add your own media query.

#### Requires JavaScript

If JavaScript is disabled and the viewport is narrow enough that the navbar collapses, it will be impossible to expand the navbar and view the content within the `.navbar-collapse`.

#### Changing the collapsed mobile navbar breakpoint

The navbar collapses into its vertical mobile view when the viewport is narrower than `@grid-float-breakpoint`, and expands into its horizontal non-mobile view when the viewport is at least `@grid-float-breakpoint` in width. Adjust this variable in the Less source to control when the navbar collapses/expands. The default value is `768px` (the smallest "small" or "tablet" screen).

Toggle navigation [Brand](#)

-   [Link](#)
-   [Link](#)
-   [Dropdown](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)
    
    -   [One more separated link](#)

Submit

-   [Link](#)
-   [Dropdown](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)

<nav class="navbar navbar-default" role="navigation">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">Brand</a>
		</div>
		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li class="active"><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li class="divider"></li>
						<li><a href="#">Separated link</a></li>
						<li class="divider"></li>
						<li><a href="#">One more separated link</a></li>
					</ul>
				</li>
			</ul>
			<form class="navbar-form navbar-left" role="search">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Search">
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			</form>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#">Link</a></li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li class="divider"></li>
						<li><a href="#">Separated link</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<!-- /.navbar-collapse -->
	</div>
	<!-- /.container-fluid -->
</nav>

#### Plugin dependency

The responsive navbar requires the collapse plugin to be included in your version of Style Guide.

#### Make navbars accessible

Be sure to add a `role="navigation"` to every navbar to help with accessibility.

## Forms

Place form content within `.navbar-form` for proper vertical alignment and collapsed behavior in narrow viewports. Use the alignment options to decide where it resides within the navbar content.

As a heads up, `.navbar-form` shares much of its code with `.form-inline` via mixin. **Some form controls, like input groups, may require fixed widths to be show up properly within a navbar.**

Toggle navigation [Brand](#)

Submit

<form class="navbar-form navbar-left" role="search">
	<div class="form-group">
		<input type="text" class="form-control" placeholder="Search">
	</div>
	<button type="submit" class="btn btn-default">Submit</button>
</form>

#### Mobile device caveats

There are some caveats regarding using form controls within fixed elements on mobile devices. See our browser support docs for details.

#### Always add labels

Screen readers will have trouble with your forms if you don't include a label for every input. For these inline navbar forms, you can hide the labels using the `.sr-only` class.

## Buttons

Add the `.navbar-btn` class to `<button>` elements not residing in a `<form>` to vertically center them in the navbar.

Toggle navigation [Brand](#)

Sign in

<button type="button" class="btn btn-default navbar-btn">Sign in</button>

#### Context-specific usage

Like the standard button classes, `.navbar-btn` can be used on `<a>` and `<input>` elements. However, neither `.navbar-btn` nor the standard button classes should be used on `<a>` elements within `.navbar-nav`.

## Text

Wrap strings of text in an element with `.navbar-text`, usually on a `<p>` tag for proper leading and color.

Toggle navigation [Brand](#)

Signed in as Mark Otto

<p class="navbar-text">Signed in as Mark Otto</p>

## Non-nav links

For folks using standard links that are not within the regular navbar navigation component, use the `.navbar-link` class to add the proper colors for the default and inverse navbar options.

Toggle navigation [Brand](#)

Signed in as [Mark Otto](#)

<p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">Mark Otto</a></p>

## Component alignment

Align nav links, forms, buttons, or text, using the `.navbar-left` or `.navbar-right` utility classes. Both classes will add a CSS float in the specified direction. For example, to align nav links, put them in a separate `<ul>` with the respective utility class applied.

These classes are mixin-ed versions of `.pull-left` and `.pull-right`, but they're scoped to media queries for easier handling of navbar components across device sizes.

#### Right aligning multiple components

Navbars currently have a limitation with multiple `.navbar-right` classes. To properly space content, we use negative margin on the last `.navbar-right` element. When there are multiple elements using that class, these margins don't work as intended.

We'll revisit this when we can rewrite that component in v4.

## Fixed to top

Add `.navbar-fixed-top` and include a `.container` or `.container-fluid` to center and pad navbar content.

Toggle navigation [Brand](#)

-   [Home](#)
-   [Link](#)
-   [Link](#)

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	<div class="container">
		...
	</div>
</nav>

#### Body padding required

The fixed navbar will overlay your other content, unless you add `padding` to the top of the `<body>`. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.

body { padding-top: 70px; }

Make sure to include this **after** the core Style Guide CSS.

## Fixed to bottom

Add `.navbar-fixed-bottom` and include a `.container` or `.container-fluid` to center and pad navbar content.

Toggle navigation [Brand](#)

-   [Home](#)
-   [Link](#)
-   [Link](#)

<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
	<div class="container">
		...
	</div>
</nav>

#### Body padding required

The fixed navbar will overlay your other content, unless you add `padding` to the bottom of the `<body>`. Try out your own values or use our snippet below. Tip: By default, the navbar is 50px high.

body { padding-bottom: 70px; }

Make sure to include this **after** the core Style Guide CSS.

## Static top

Create a full-width navbar that scrolls away with the page by adding `.navbar-static-top` and include a `.container` or `.container-fluid` to center and pad navbar content.

Unlike the `.navbar-fixed-*` classes, you do not need to change any padding on the `body`.

Toggle navigation [Brand](#)

-   [Home](#)
-   [Link](#)
-   [Link](#)

<nav class="navbar navbar-default navbar-static-top" role="navigation">
	<div class="container">
		...
	</div>
</nav>

## Inverted navbar

Modify the look of the navbar by adding `.navbar-inverse`.

Toggle navigation [Brand](#)

-   [Home](#)
-   [Link](#)
-   [Link](#)

<nav class="navbar navbar-inverse" role="navigation">
	...
</nav>

# Navs

Navs available in Style Guide have shared markup, starting with the base `.nav` class, as well as shared states. Swap modifier classes to switch between each style.

## Tabs

Note the `.nav-tabs` class requires the `.nav` base class.

-   [Home](#)
-   [Profile](#)
-   [Messages](#)

<ul class="nav nav-tabs clearfix" role="tablist">
	<li class="active"><a href="#">Home</a></li>
	<li><a href="#">Profile</a></li>
	<li><a href="#">Messages</a></li>
</ul>

#### Requires JavaScript tabs plugin

For tabs with tabbable areas, you must use the tabs JavaScript plugin.

Example available in **[FAQ](http://tdn.totvs.com/x/Y4Y_Dw)**

## Pills

Take that same HTML, but use `.nav-pills` instead:

-   [Home](#)
-   [Profile](#)
-   [Messages](#)

<ul class="nav nav-pills clearfix">
	<li class="active"><a href="#">Home</a></li>
	<li><a href="#">Profile</a></li>
	<li><a href="#">Messages</a></li>
</ul>

Pills are also vertically stackable. Just add `.nav-stacked`.

-   [Home](#)
-   [Profile](#)
-   [Messages](#)

<ul class="nav nav-pills nav-stacked">
	...
</ul>

## Justified

Easily make tabs or pills equal widths of their parent at screens wider than 768px with `.nav-justified`. On smaller screens, the nav links are stacked.

#### Safari and responsive justified navs

As of v7.0.1, Safari exhibits a bug in which resizing your browser horizontally causes rendering errors in the justified nav that are cleared upon refreshing. This bug is also shown in the justified nav example.

-   [Home](#)
-   [Profile](#)
-   [Messages](#)

  

-   [Home](#)
-   [Profile](#)
-   [Messages](#)

<ul class="nav nav-tabs nav-justified" role="tablist">
	...
</ul>
<ul class="nav nav-pills nav-justified">
	...
</ul>

## Ellipsis

You can use the ellipsis in Navs with `.nav-ellipsis`.

#### Ellipsis and width

CSS ellipsis will work only if the navs `li` has a width configured. This is shown in the ellipsis nav example.

-   [User tab - Title](#)
-   [Tab 2 - Title](#)
-   [Tab 3 - Title](#)
-   [Tab 4 - Title](#)
-   [Tab 5 - Title](#)

#### Nav Ellipsis and Nav Justified

Nav ellipsis and nav justified cannot work together. If you use nav justified, you wont be able to use nav ellipsis.

<ul class="nav nav-tabs nav-ellipsis" role="tablist">
	<li class="active" style="width: 15%"><a href="#"><span class="fluigicon fluigicon-user"></span>User tab - Title</a></li>
	<li style="width: 15%"><a href="#">Tab 2 - Title</a></li>
	<li style="width: 15%"><a href="#">Tab 3 - Title</a></li>
	<li style="width: 15%"><a href="#">Tab 4 - Title</a></li>
	<li style="width: 15%"><a href="#">Tab 5 - Title</a></li>
</ul>

## Disabled links

For any nav component (tabs or pills), add `.disabled` for **gray links and no hover effects**.

#### Link functionality not impacted

This class will only change the `<a>`'s appearance, not its functionality. Use custom JavaScript to disable links here.

-   [Clickable link](#)
-   [Clickable link](#)
-   [Disabled link](#)

<ul class="nav nav-pills clearfix">
	...
	<li class="disabled"><a href="#">Disabled link</a></li>
	...
</ul>

## Using dropdowns

Add dropdown menus with a little extra HTML and the dropdowns JavaScript plugin.

### Tabs with dropdowns

-   [Home](#)
-   [Help](#)
-   [Dropdown](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)

<ul class="nav nav-tabs clearfix" role="tablist">
	...
	<li class="dropdown">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#">
		Dropdown <span class="caret"></span>
		</a>
		<ul class="dropdown-menu" role="menu">
			...
		</ul>
	</li>
	...
</ul>

### Pills with dropdowns

-   [Home](#)
-   [Help](#)
-   [Dropdown](#)
    -   [Action](#)
    -   [Another action](#)
    -   [Something else here](#)
    
    -   [Separated link](#)

<ul class="nav nav-pills clearfix">
	...
	<li class="dropdown">
		<a class="dropdown-toggle" data-toggle="dropdown" href="#">
		Dropdown <span class="caret"></span>
		</a>
		<ul class="dropdown-menu" role="menu">
			...
		</ul>
	</li>
	...
</ul>

# Page header

A simple shell for an `h1` to appropriately space out and segment sections of content on a page. It can utilize the `h1`'s default `small` element, as well as most other components (with additional styles).

# Example page header Subtext for header

<div class="page-header">
	<h1>Example page header <small>Subtext for header</small></h1>
</div>

### Changing the default spacing with helpers classes

Adding classes `fs-no-margin fs-ellipsis fs-full-width` to element `h1`. The standard title pages of layout will be applied.

# Example page header with applied ellipsis class

Action Toggle Dropdown

-   [Action](#)
-   [Another action](#)
-   [Something else here](#)

-   [Separated link](#)

Default

<div class="page-header">
	<div class="row">
		<div class="col-md-8">
			<h1 class="fs-no-margin fs-ellipsis fs-full-width">Example page header with applied ellipsis class</h1>
		</div>
		<div class="col-md-4">
			<div class="pull-right">
				<div class="btn-group">
				    <button type="button" class="btn btn-primary">Action</button>
				    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
				    <span class="caret"></span>
				    <span class="sr-only">Toggle Dropdown</span>
				    </button>
				    <ul class="dropdown-menu" role="menu">
				        <li><a href="#">Action</a></li>
				        <li><a href="#">Another action</a></li>
				        <li><a href="#">Something else here</a></li>
				        <li class="divider"></li>
				        <li><a href="#">Separated link</a></li>
				    </ul>
				</div>
				<button class="btn btn-default" type="button">Default</button>
			</div>
		</div>
	</div>
</div>

# Pagination

Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.

## Default pagination

Simple pagination inspired by Rdio, great for apps and search results. The large block is hard to miss, easily scalable, and provides large click areas.

-   [«](#)
-   [1](#)
-   [2](#)
-   [3](#)
-   [4](#)
-   [5](#)
-   [»](#)

<ul class="pagination">
	<li><a href="#">«</a></li>
	<li><a href="#">1</a></li>
	<li><a href="#">2</a></li>
	<li><a href="#">3</a></li>
	<li><a href="#">4</a></li>
	<li><a href="#">5</a></li>
	<li><a href="#">»</a></li>
</ul>

### Disabled and active states

Links are customizable for different circumstances. Use `.disabled` for unclickable links and `.active` to indicate the current page.

-   [«](#)
-   [1 (current)](#)
-   [2](#)
-   [3](#)
-   [4](#)
-   [5](#)
-   [»](#)

<ul class="pagination">
	<li class="disabled"><a href="#">«</a></li>
	<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
	...
</ul>

You can optionally swap out active or disabled anchors for `<span>` to remove click functionality while retaining intended styles.

<ul class="pagination">
	<li class="disabled"><span>«</span></li>
	<li class="active"><span>1 <span class="sr-only">(current)</span></span></li>
	...
</ul>

### Sizing

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes.

-   [«](#)
-   [1](#)
-   [2](#)
-   [3](#)
-   [4](#)
-   [5](#)
-   [»](#)

-   [«](#)
-   [1](#)
-   [2](#)
-   [3](#)
-   [4](#)
-   [5](#)
-   [»](#)

-   [«](#)
-   [1](#)
-   [2](#)
-   [3](#)
-   [4](#)
-   [5](#)
-   [»](#)

<ul class="pagination pagination-lg">...</ul>
<ul class="pagination">...</ul>
<ul class="pagination pagination-sm">...</ul>

## Pager

Quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines.

### Default example

By default, the pager centers links.

-   [Previous](#)
-   [Next](#)

<ul class="pager">
	<li><a href="#">Previous</a></li>
	<li><a href="#">Next</a></li>
</ul>

### Aligned links

Alternatively, you can align each link to the sides:

-   [← Older](#)
-   [Newer →](#)

<ul class="pager">
	<li class="previous"><a href="#">← Older</a></li>
	<li class="next"><a href="#">Newer →</a></li>
</ul>

### Optional disabled state

Pager links also use the general `.disabled` utility class from the pagination.

-   [← Older](#)
-   [Newer →](#)

<ul class="pager">
	<li class="previous disabled"><a href="#">← Older</a></li>
	<li class="next"><a href="#">Newer →</a></li>
</ul>

# Panels

While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.

### Basic example

By default, all the `.panel` does is apply some basic border and padding to contain some content.

Basic panel example

<div class="panel panel-default">
	<div class="panel-body">
		Basic panel example
	</div>
</div>

### Panel with heading

Easily add a heading container to your panel with `.panel-heading`. You may also include any `<h1>`\-`<h6>` with a `.panel-title` class to add a pre-styled heading.

For proper link coloring, be sure to place links in headings within `.panel-title`.

Panel heading without title

Panel content

### Panel title

Panel content

<div class="panel panel-default">
	<div class="panel-heading">Panel heading without title</div>
	<div class="panel-body">
		Panel content
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">
		<h3 class="panel-title">Panel title</h3>
	</div>
	<div class="panel-body">
		Panel content
	</div>
</div>

### Panel with footer

Wrap buttons or secondary text in `.panel-footer`. Note that panel footers **do not** inherit colors and borders when using contextual variations as they are not meant to be in the foreground.

Panel content

Panel footer

<div class="panel panel-default">
	<div class="panel-body">
		Panel content
	</div>
	<div class="panel-footer">Panel footer</div>
</div>

### Contextual alternatives

Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.

### Panel title

Panel content

### Panel title

Panel content

### Panel title

Panel content

### Panel title

Panel content

### Panel title

Panel content

<div class="panel panel-primary">...</div>
<div class="panel panel-success">...</div>
<div class="panel panel-info">...</div>
<div class="panel panel-warning">...</div>
<div class="panel panel-danger">...</div>

### With tables

Add any non-bordered `.table` within a panel for a seamless design. If there is a `.panel-body`, we add an extra border to the top of the table for separation.

Panel heading

Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.

<table class="table table-striped"><thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><td>3</td><td>Larry</td><td>the Bird</td><td>@twitter</td></tr></tbody></table>

<div class="panel panel-default">
	<!-- Default panel contents -->
	<div class="panel-heading">Panel heading</div>
	<div class="panel-body">
		<p>...</p>
	</div>
	<!-- Table -->
	<table class="table table-striped">
		...
	</table>
</div>

If there is no panel body, the component moves from panel header to table without interruption.

Panel heading

<table class="table table-striped"><thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><td>3</td><td>Larry</td><td>the Bird</td><td>@twitter</td></tr></tbody></table>

<div class="panel panel-default">
	<!-- Default panel contents -->
	<div class="panel-heading">Panel heading</div>
	<!-- Table -->
	<table class="table table-striped">
		...
	</table>
</div>

### With list groups

Easily include full-width list groups within any panel.

Panel heading

Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.

-   Cras justo odio
-   Dapibus ac facilisis in
-   Morbi leo risus
-   Porta ac consectetur ac
-   Vestibulum at eros

<div class="panel panel-default">
	<!-- Default panel contents -->
	<div class="panel-heading">Panel heading</div>
	<div class="panel-body">
		<p>...</p>
	</div>
	<!-- List group -->
	<ul class="list-group">
		<li class="list-group-item">Cras justo odio</li>
		<li class="list-group-item">Dapibus ac facilisis in</li>
		<li class="list-group-item">Morbi leo risus</li>
		<li class="list-group-item">Porta ac consectetur ac</li>
		<li class="list-group-item">Vestibulum at eros</li>
	</ul>
</div>

# Progress bars

Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.

#### Cross-browser compatibility

Progress bars use CSS3 transitions and animations to achieve some of their effects. These features are not supported in Internet Explorer 9 and below or older versions of Firefox. Opera 12 does not support animations.

### Basic example

Default progress bar.

60% Complete

<div class="progress">
	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
		<span class="sr-only">60% Complete</span>
	</div>
</div>

### With label

Remove the `.sr-only` class from within the progress bar to show a visible percentage. For low percentages, consider adding a `min-width` to ensure the label's text is fully visible.

60%

<div class="progress">
	<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
		60%
	</div>
</div>

### Low percentages

Progress bars representing low single digit percentages, as well as 0%, include a `min-width: 20px;` for legibility.

0%

2%

<div class="progress">
	<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
		0%
	</div>
</div>
<div class="progress">
	<div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style="width: 2%;">
		2%
	</div>
</div>

### Contextual alternatives

Progress bars use some of the same button and alert classes for consistent styles.

40% Complete (success)

20% Complete

60% Complete (warning)

80% Complete (danger)

<div class="progress">
	<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
		<span class="sr-only">40% Complete (success)</span>
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
		<span class="sr-only">20% Complete</span>
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
		<span class="sr-only">60% Complete (warning)</span>
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
		<span class="sr-only">80% Complete</span>
	</div>
</div>

### Striped

Uses a gradient to create a striped effect. Not available in IE8.

40% Complete (success)

20% Complete

60% Complete (warning)

80% Complete (danger)

<div class="progress">
	<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
		<span class="sr-only">40% Complete (success)</span>
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
		<span class="sr-only">20% Complete</span>
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
		<span class="sr-only">60% Complete (warning)</span>
	</div>
</div>
<div class="progress">
	<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
		<span class="sr-only">80% Complete (danger)</span>
	</div>
</div>

### Animated

Add `.active` to `.progress-bar-striped` to animate the stripes right to left. Not available in IE9 and below.

45% Complete

<div class="progress">
	<div class="progress-bar progress-bar-striped active"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
		<span class="sr-only">45% Complete</span>
	</div>
</div>

### Animated with gif animated

Compatible with IE9.

<div class="progress">
	<div class="progress-bar-gif" role="progressbar" style="width: 100%;"></div>
</div>

### Stacked

Place multiple bars into the same `.progress` to stack them.

35% Complete (success)

20% Complete (warning)

10% Complete (danger)

<div class="progress">
	<div class="progress-bar progress-bar-success" style="width: 35%">
		<span class="sr-only">35% Complete (success)</span>
	</div>
	<div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%">
		<span class="sr-only">20% Complete (warning)</span>
	</div>
	<div class="progress-bar progress-bar-danger" style="width: 10%">
		<span class="sr-only">10% Complete (danger)</span>
	</div>
</div>

### Circular progress bar

Use different sizes by changing only the end of the class `.circular-progress-(xs, sm, md, lg, xl)` and for loading change the end of the class `circular-progress-(w25, w50, w75, w100)` .

<div class="circular-progress circular-progress-xs circular-progress-w25">
	<progress value="25" min="0" max="100" style="visibility:hidden;height:0;width:0;"></progress>
</div>

### Example of new sizes

#### Note when using text

In extreme small and small sizes, no text will be displayed.

Extreme small size progress bar.

		<div class="bs-example">
			<div class="progress">
				<div class="progress-bar progress-bar-xs" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
			</div>
		</div>

Small size progress bar.

		<div class="bs-example">
			<div class="progress">
				<div class="progress-bar progress-bar-sm" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
			</div>
		</div>

Large size progress bar.

		<div class="bs-example">
			<div class="progress">
				<div class="progress-bar progress-bar-lg" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
			</div>
		</div>

Large size progress bar with text.

60%

		<div class="bs-example">
			<div class="progress">
				<div class="progress-bar progress-bar-lg" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
					60%
				</div>
			</div>
		</div>

# Smart Ellipsis

The smart ellipsis component adds the ellipsis (...) in the middle of the text, being able to configure how many characters will be displayed at the end.

### Default example

By default, the component will always display the last 10 characters.

    <div class="row">
        <div class="col-md-4">
            <p>
                <smart-ellipsis text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."></smart-ellipsis>
            </p>
        </div>
    </div>

### Configuring last chars example

Through the `last-chars` parameter it is possible to configure the number of characters to be displayed at the end of the text, after the ellipsis. It is also possible to configure to display a tooltip in the element, through the parameter `enable-tooltip`.

    <div class="row">
        <div class="col-md-4">
            <p>
                <smart-ellipsis last-chars="5" enable-tooltip="true" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."></smart-ellipsis>
            </p>
        </div>
    </div>

# Steps

Steps is a component that provides the visual representation of a step-by-step process for use in wizards.

### Basic horizontal example

Default steps horizontal example.

-   Solicitação
-   Dados do formulário
-   Permissões
-   Pré-visualização

<ul class="steps">
    <li class="step-item done">
        <span class="step-bullet"></span>
        <span class="step-label">Solicitação</span>
    </li>
    <li class="step-item done active">
        <span class="step-bullet"></span>
        <span class="step-label">Dados do formulário</span>
    </li>
    <li class="step-item">
        <span class="step-bullet"></span>
        <span class="step-label">Permissões</span>
    </li>
    <li class="step-item">
        <span class="step-bullet"></span>
        <span class="step-label">Pré-visualização</span>
    </li>
</ul>

### Basic vertical example

Default steps vertical example.

-   Solicitação
-   Dados do formulário
-   Permissões
-   Pré-visualização

<ul class="steps steps-vertical">
    <li class="step-item done">
        <span class="step-bullet"></span>
        <span class="step-label">Solicitação</span>
    </li>
    <li class="step-item done active">
        <span class="step-bullet"></span>
        <span class="step-label">Dados do formulário</span>
    </li>
    <li class="step-item">
        <span class="step-bullet"></span>
        <span class="step-label">Permissões</span>
    </li>
    <li class="step-item">
        <span class="step-bullet"></span>
        <span class="step-label">Pré-visualização</span>
    </li>
</ul>

### Steps error example

Default steps with error example.

-   Solicitação
-   Dados do formulário
-   Permissões
-   Pré-visualização

<ul class="steps">
    <li class="step-item done">
        <span class="step-bullet"></span>
        <span class="step-label">Solicitação</span>
    </li>
    <li class="step-item done has-error">
        <span class="step-bullet"></span>
        <span class="step-label">Dados do formulário</span>
    </li>
    <li class="step-item done active">
        <span class="step-bullet"></span>
        <span class="step-label">Permissões</span>
    </li>
    <li class="step-item">
        <span class="step-bullet"></span>
        <span class="step-label">Pré-visualização</span>
    </li>
</ul>

The four common states are available, with the classes `has-success`, `has-error`, `has-info` and `has-warning`

# Switch

Switch is a component that adds a style to the checkbox and radio elements, making them more beautiful, interactive and improving their accessibility.

-   [Default Switches](#default-switches-tab)
-   [Custom Switches](#custom-switches-tab)

 Toggle

 Toggle

 Toggle

 Toggle

 Toggle

    <div class="switch switch-primary">
        <input class="switch-input" type="checkbox" id="switch-1-1" />
        <label class="switch-button" for="switch-1-1">Toggle</label>
    </div>
    <div class="switch switch-success">
        <input class="switch-input" type="checkbox" id="switch-1-2" />
        <label class="switch-button" for="switch-1-2">Toggle</label>
    </div>
    <div class="switch switch-info">
        <input class="switch-input" type="checkbox" id="switch-1-3" />
        <label class="switch-button" for="switch-1-3">Toggle</label>
    </div>
    <div class="switch switch-warning">
        <input class="switch-input" type="checkbox" id="switch-1-4" />
        <label class="switch-button" for="switch-1-4">Toggle</label>
    </div>
    <div class="switch switch-danger">
        <input class="switch-input" type="checkbox" id="switch-1-5" />
        <label class="switch-button" for="switch-1-5">Toggle</label>
    </div>

 Toggle

 Toggle

 Toggle

 Toggle

 Toggle

    <div class="switch switch-gray-dark">
        <input class="switch-input" type="checkbox" id="switch-2-1" />
        <label class="switch-button" for="switch-2-1">Toggle</label>
    </div>
    <div class="switch switch-gray">
        <input class="switch-input" type="checkbox" id="switch-2-2" />
        <label class="switch-button" for="switch-2-2">Toggle</label>
    </div>
    <div class="switch switch-gray-medium">
        <input class="switch-input" type="checkbox" id="switch-2-3" />
        <label class="switch-button" for="switch-2-3">Toggle</label>
    </div>
    <div class="switch switch-gray-light">
        <input class="switch-input" type="checkbox" id="switch-2-4" />
        <label class="switch-button" for="switch-2-4">Toggle</label>
    </div>
    <div class="switch switch-gray-ultralight">
        <input class="switch-input" type="checkbox" id="switch-2-5" />
        <label class="switch-button" for="switch-2-5">Toggle</label>
    </div>

### Examples with labels

 Toggle

 Toggle

 Toggle

 Toggle

 Toggle

    <div class="switch switch-primary switch-labels">
        <input class="switch-input" type="checkbox" id="switch-3-1" />
        <label class="switch-button" for="switch-3-1">Toggle</label>
    </div>
    <div class="switch switch-success switch-labels">
        <input class="switch-input" type="checkbox" id="switch-3-2" />
        <label class="switch-button" for="switch-3-2">Toggle</label>
    </div>
    <div class="switch switch-info switch-labels">
        <input class="switch-input" type="checkbox" id="switch-3-3" />
        <label class="switch-button" for="switch-3-3">Toggle</label>
    </div>
    <div class="switch switch-warning switch-labels">
        <input class="switch-input" type="checkbox" id="switch-3-4" />
        <label class="switch-button" for="switch-3-4">Toggle</label>
    </div>
    <div class="switch switch-danger switch-labels">
        <input class="switch-input" type="checkbox" id="switch-3-5" />
        <label class="switch-button" for="switch-3-5">Toggle</label>
    </div>

### Sizes

 Toggle

 Toggle

 Toggle

 Toggle

 Toggle

    <div class="switch switch-primary switch-xl">
        <input class="switch-input" type="checkbox" id="switch-4-1" />
        <label class="switch-button" for="switch-4-1">Toggle</label>
    </div>
    <div class="switch switch-primary switch-lg">
        <input class="switch-input" type="checkbox" id="switch-4-2" />
        <label class="switch-button" for="switch-4-2">Toggle</label>
    </div>
    <div class="switch switch-primary ">
        <input class="switch-input" type="checkbox" id="switch-4-3" />
        <label class="switch-button" for="switch-4-3">Toggle</label>
    </div>
    <div class="switch switch-primary switch-sm">
        <input class="switch-input" type="checkbox" id="switch-4-4" />
        <label class="switch-button" for="switch-4-4">Toggle</label>
    </div>
    <div class="switch switch-primary switch-xs">
        <input class="switch-input" type="checkbox" id="switch-4-5" />
        <label class="switch-button" for="switch-4-5">Toggle</label>
    </div>

### Sizes with labels

 Toggle

 Toggle

 Toggle

 Toggle

 Toggle

    <div class="switch switch-primary switch-labels switch-xl">
        <input class="switch-input" type="checkbox" id="switch-5-1" />
        <label class="switch-button" for="switch-5-1">Toggle</label>
    </div>
    <div class="switch switch-primary switch-labels switch-lg">
        <input class="switch-input" type="checkbox" id="switch-5-2" />
        <label class="switch-button" for="switch-5-2">Toggle</label>
    </div>
    <div class="switch switch-primary switch-labels ">
        <input class="switch-input" type="checkbox" id="switch-5-3" />
        <label class="switch-button" for="switch-5-3">Toggle</label>
    </div>
    <div class="switch switch-primary switch-labels switch-sm">
        <input class="switch-input" type="checkbox" id="switch-5-4" />
        <label class="switch-button" for="switch-5-4">Toggle</label>
    </div>
    <div class="switch switch-primary switch-labels switch-xs">
        <input class="switch-input" type="checkbox" id="switch-5-5" />
        <label class="switch-button" for="switch-5-5">Toggle</label>
    </div>

### Examples with radio buttons

Choose your favorite color

Green  Toggle

Yellow  Toggle

Blue  Toggle

Black  Toggle

White  Toggle

<form role="form">
    <p>Choose your favorite color</p>
    <div class="row">
        <div class="form-group col-md-1">
            <div class="switch switch-primary">
                <label for="switch-6-1">Green</label>
                <input class="switch-input" type="radio" value="green" name="user-color-preference" id="switch-6-1" />
                <label class="switch-button" for="switch-6-1">Toggle</label>
            </div>
        </div>
        <div class="form-group col-md-1">
            <div class="switch switch-primary">
                <label for="switch-6-2">Yellow</label>
                <input class="switch-input" type="radio" value="yellow" name="user-color-preference" id="switch-6-2" />
                <label class="switch-button" for="switch-6-2">Toggle</label>
            </div>
        </div>
        <div class="form-group col-md-1">
            <div class="switch switch-primary">
                <label for="switch-6-3">Blue</label>
                <input class="switch-input" type="radio" value="blue" name="user-color-preference" id="switch-6-3" />
                <label class="switch-button" for="switch-6-3">Toggle</label>
            </div>
        </div>
        <div class="form-group col-md-1">
            <div class="switch switch-primary">
                <label for="switch-6-4">Black</label>
                <input class="switch-input" type="radio" value="black" name="user-color-preference" id="switch-6-4" />
                <label class="switch-button" for="switch-6-4">Toggle</label>
            </div>
        </div>
        <div class="form-group col-md-1">
            <div class="switch switch-primary">
                <label for="switch-6-5">White</label>
                <input class="switch-input" type="radio" value="white" name="user-color-preference" id="switch-6-5" />
                <label class="switch-button" for="switch-6-5">Toggle</label>
            </div>
        </div>
    </div>
</form>

# Text Style Toolbar

## About

The **Text Style Toolbar** component allows users to format text by adjusting color, font size, and style.

### Default example

Rendering the **Text Style Toolbar** component with the default language:

HTML code

        <text-style-toolbar
            color="#58595B"
            font-size="16px"
            font-weight="bold"
            language="pt\_BR"
            mode="json"
            large-font-size="32px"
            small-font-size="16px"
            text-decoration="underline" />

### Element settings

Element settings have the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>language</td><td>string</td><td>'pt_BR'</td><td>Sets the language of the component. This change influences the component's labels. The options are accepted <code>pt_BR</code>, <code>en_US</code> and <code>es</code>.</td></tr><tr><td>mode</td><td>string</td><td>'css'</td><td>Defines the component's working mode, determines the output mode of the options selected in the toolbar. When <code>css</code> mode is enabled, the component returns values ​​in CSS and when <code>json</code> mode is enabled, the component returns values ​​in JSON.</td></tr><tr><td>color</td><td>string</td><td>'#58595B'</td><td>Sets the initial color for the color picker component.</td></tr><tr><td>font-size</td><td>string</td><td>-</td><td>Sets the font size icon acitive if font-size is the same as 'large-font-size' or 'small-font-size'</td></tr><tr><td>font-style</td><td>'normal' | 'italic' | string</td><td>'normal'</td><td>Sets the font style icon acitive if the value is 'italic'</td></tr><tr><td>font-weight</td><td>'normal' | 'bold' | string</td><td>'normal'</td><td>Sets the font weight icon acitive if the value is 'bold'</td></tr><tr><td>text-decoration</td><td>'none' | 'underline' | string</td><td>'none'</td><td>Sets the text decoration icon acitive if the value is 'underline'</td></tr><tr><td>large-font-size</td><td>string</td><td>'32px'</td><td>Sets the initial large font size that the component uses to return.</td></tr><tr><td>small-font-size</td><td>string</td><td>'16px'</td><td>Sets the initial small font size that the component uses to return.</td></tr></tbody></table>

### Element events

Element events are as follows:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>change</td><td>This event is fired immediately when any style button is clicked. The selected style button is available in the <code>event.detail</code> object.</td></tr></tbody></table>

## Usage

Below are some real-world examples of how to use the **Text Style Toolbar** component:

### Mode of Operation

The **Text Style Toolbar** can be run in two modes **CSS** or **JSON**:

        <text-style-toolbar
            class="text-style-toolbar-component"
            color="#58595B"
            font-size="16px"
            font-style="italic"
            font-weight="bold"
            language="pt\_BR"
            mode="json"
            large-font-size="32px"
            small-font-size="16px"
            text-decoration="underline" />

Example of return in **json** mode:

        
        {
            "color": "#58595B",
            "fontWeight": "bold",
            "fontStyle": "italic",
            "textDecoration": "underline",
            "fontSize": "32px"
        }

        <text-style-toolbar
            class="text-style-toolbar-component"
            color="#58595B"
            font-size="16px"
            font-style="italic"
            font-weight="bold"
            language="pt\_BR"
            mode="css"
            large-font-size="32px"
            small-font-size="16px"
            text-decoration="underline" />

Example of return in **css** mode:

        <!-- Example a css return -->
        color: "#0055ff"; font-weight: "bold"; font-style: "italic"; text-decoration: "underline"; font-size: "16px";

### Example of Text Format Style toolbar in a page

Use case card component:

### Card title

Some quick example text to build on the card title and make up the bulk of the card's content.

[Go somewhere](#)

Click on the **Text Style Toolbar** component options to style the card:

HTML code for the above example:

        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Card title</h3>
                        <p class="card-text-component card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

HTML code of the **Text Style Toolbar** component:

        <div class="row">
            <div class="col-md-4">
                <text-style-toolbar
                    class="text-style-toolbar-component"
                    font-size="16px"
                    font-style="italic"
                    font-weight="bold"
                    language="pt\_BR"
                    large-font-size="32px"
                    small-font-size="16px"
                    text-decoration="underline" />
            </div>
        </div>

Script responsible for listening to internal **Text Style Toolbar** changes:

        
        function applyCssStyle (styles, selector) {
            const customCardText = document.querySelector(selector);
            Object.entries(styles).forEach(function (entry) {
                const key = entry\[0\];
                const value = entry\[1\];
                customCardText.style\[key\] = value;
            });
        }

        
        const jsonCssStyles = {};
        const textFormatStyleToolbarComponent = document.querySelector('.text-style-toolbar-component');
        textFormatStyleToolbarComponent.addEventListener('change', function (event) {
            const details = event.detail;
            Object.assign(jsonCssStyles, details);
            applyCssStyle(jsonCssStyles, '.card-text-component');
            console.log('JsonCssStyles updated:', jsonCssStyles);
        });

### Example of Text Style Toolbar in a Popover

Example of use the **Text Style Toolbar** in a popover component:

### Card title

Some quick example text to build on the card title and make up the bulk of the card's content.

[Go somewhere](#)

Click on the icon to open the **Text Style Toolbar** in a popover:

### Example of use Text Style Toolbar event

Example of using the **Text Style Toolbar** event to listen to internal component changes:

        <text-style-toolbar
            class="text-style-toolbar-component"
            font-size="16px"
            font-style="italic"
            font-weight="bold"
            language="pt\_BR"
            large-font-size="32px"
            small-font-size="16px"
            text-decoration="underline" />

Setup of the **Text Style Toolbar** event:

        
        const jsonCssOptions = {
            color: null,
            fontWeight: null,
            fontStyle: null,
            textDecoration: null,
            fontSize: null
        };

        
        const textStyleComponent = document.querySelector('.text-style-toolbar-component');
        textStyleComponent.addEventListener('change', function (event) {
            const details = event.detail;
            Object.assign(jsonCssOptions, details);
            console.log('JsonCssOptions updated:', jsonCssOptions);
        });

# Upload

The custom element for upload files through a file input element or a placeholder area.

## Examples

This component provides the ability to upload files, including upload progress tracking. The component offers two ways to upload files: select and drop.

### Default example

Render an upload component with the default template.

        <upload-component
            id="upload-component-example-1"
            theme-small="false"
            multiple="true"
            upload-api='{
                "url": "url",
                "params": {
                    "page": "1"
                },
                "headers": {
                    "Content-Type": "text/plain;charset=UTF-8"
                }
            }'
        ></upload-component>

### Default example with style class for button

Render an upload component with the default template, in this example, we pass a style class to customize the button using the attribute: `btn-class` .

        <upload-component
            id="upload-component-example-2"
            max-size="10"
            multiple="true"
            formats-allowed="JPG, PNG, SVG"
            accept=".jpg, .png, .svg"
            theme-small="false"
            btn-class="btn-primary"
            upload-api='{
                "url": "url",
                "params": {
                    "page": "1"
                },
                "headers": {
                    "Content-Type": "text/plain;charset=UTF-8"
                }
            }'
        ></upload-component>

### Default template with custom error message

Render an upload component with the default template, in this example, we use a custom message through the attribute: `replace-text.uploadMsgError` for the file upload error.

        <upload-component
            id="upload-component-example-3"
            theme-small="false"
            max-size="10"
            btn-style="color: #fff; background-image: linear-gradient(to right,#ee145b,#f37022);"
            upload-api='{
                "url": "url",
                "params": {
                    "page": "1"
                },
                "headers": {
                    "Content-Type" : "text/plain;charset=UTF-8"
                }
            }'
            replace-texts='{
                "uploadMsgError": "Ops, deu erro!"
            }'
        ></upload-component>

### Theme small example

Render an upload component with the theme small template using the attribute: `theme-small`.

        <upload-component
            id="upload-component-sm-example-1"
            theme-small="true"
            max-size="300"
            multiple="true"
            upload-api='{
                "url": "url",
                "params": {
                    "page": "1"
                },
                "headers": {
                    "Content-Type": "text/plain;charset=UTF-8"
                }
            }'
        ></upload-component>

### Theme small example with the attribute accept

Render an upload component with the theme small template using the attribute: `accept` that defines the file types the file input should accept.

        <upload-component
            id="upload-component-sm-example-2"
            theme-small="true"
            formats-allowed="JPG, PNG, SVG"
            accept=".jpg, .png, .svg"
            upload-api='{
                "url": "url",
                "params": {
                    "page": "1"
                },
                "headers": {
                    "Content-Type": "text/plain;charset=UTF-8"
                }
            }'
        ></upload-component>

### Default small example without upload-api attribute

Render an upload component with the theme small template without attribute: `upload-api`, in this case, all the uploaded files will be stored in memory and it can be accessed with the `uploaditem` event listener, or accessing property `files` on `upload-component` component instance.

    <upload-component
      id="upload-component-sm-example-3"
      theme-small="true"
      formats-allowed="JPG, PNG, SVG"
      accept=".jpg, .png, .svg"
    ></upload-component>

### Element settings

Element settings have the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>'fluig-upload'</td><td>The id that will be assigned to the upload.</td></tr><tr><td>theme-small</td><td>Boolean</td><td>false</td><td>receives a boolean determining whether the component will be rendered at the smallest size.</td></tr><tr><td>accept</td><td>String</td><td>""</td><td>Defines the file types the file input should accept.</td></tr><tr><td>multiple</td><td>Boolean</td><td>false</td><td>The file input allows the user to select more than one file.</td></tr><tr><td>formats-allowed</td><td>String</td><td>""</td><td>Specify the formats of file you want to upload (ex: '.jpg, .png, .mp4').</td></tr><tr><td>replace-texts</td><td>Object</td><td>{}</td><td>Replace default texts with your own custom texts.</td></tr><tr><td>max-size</td><td>Integer</td><td>undefined</td><td>Maximum size limit for files in MB.</td></tr><tr><td>upload-api</td><td>Object</td><td>{}</td><td>receives an object with the settings to send files.</td></tr><tr><td>btn-class</td><td>String</td><td>""</td><td>Receives style class for the button.</td></tr><tr><td>btn-style</td><td>String</td><td>""</td><td>Receives style settings for the button.</td></tr></tbody></table>

### Settings to object upload api

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>""</td><td>Complete api url to which you want to upload.</td></tr><tr><td>method</td><td>String</td><td>""</td><td>HTTP method to use for upload.</td></tr><tr><td>header</td><td>Object</td><td>{}</td><td>Provide headers in HttpClient Options here.</td></tr><tr><td>params</td><td>String</td><td>{}</td><td>Provide params in HttpClient Options here.</td></tr></tbody></table>

### Settings to object replace texts

The settings object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">Type</th><th style="width: 25%;">Default</th><th>Description</th></tr></thead><tbody><tr><td>uploadMsgError</td><td>String</td><td>"Não foi possível carregar o arquivo. Tente novamente."</td><td>Replace the default texts with your own custom texts in the error message.</td></tr></tbody></table>

## Binding events

### deleteitem

Create this event to remove item from the list of uploaded files.

        document.getElementById('id').addEventListener('deleteitem', ondeleteitem);

        function ondeleteitem(evt) {
            request({
                url: 'url',
                method: 'DELETE',
                callback: (response) => {
                    evt.detail.element.remove();
                }
            });
        }

### uploaditem

Create this event to listen when a new file upload was finished.

        document.getElementById('id').addEventListener('uploaditem', onuploaditem);

        function onuploaditem(evt) {
            console.log(evt.detail.file)
        }

# Wells

### Default well

Use the well as a simple effect on an element to give it an inset effect.

Look, I'm in a well!

<div class="well">...</div>

### Optional classes

Control padding and rounded corners with two optional modifier classes.

Look, I'm in a large well!

<div class="well well-lg">...</div>

Look, I'm in a small well!

<div class="well well-sm">...</div>
