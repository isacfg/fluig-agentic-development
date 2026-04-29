# Chart

**Fonte:** [https://style.fluig.com/chart.html](https://style.fluig.com/chart.html)
**Seção:** chart
**Subseções detectadas:** 79

## Navegação interna

- [About](#about)
- [Configurations](#configurations)
- [Animations](#animations)
- [Animation Configuration](#animation-configuration)
- [Easing](#easing)
- [Animation Callbacks](#animation-callbacks)
- [Layout Configuration](#layout-configuration)
- [Padding](#padding)
- [Legend Configuration](#legend-configuration)
- [Configuration options](#configuration-options)
- [Position](#position)
- [Align](#align)
- [Legend Label Configuration](#legend-label-configuration)
- [Legend Item Interface](#legend-item-interface)
- [Example](#example)
- [Custom On Click Actions](#custom-on-click-actions)
- [HTML Legends](#html-legends)
- [Title](#chart-title-option)
- [Title Configuration](#title-configuration)
- [Example Usage](#example-usage)
- [Tooltips](#chart-tooltips-option)
- [Tooltip Configuration](#tooltip-configuration)
- [Alignment](#alignment)
- [Sort Callback](#sort-callback)
- [Filter Callback](#filter-callback)
- [Tooltip Callbacks](#tooltip-callbacks)
- [Label Callback](#label-callback)
- [Label Color Callback](#label-color-callback)
- [Tooltip Item Interface](#tooltip-item-interface)
- [External (Custom) Tooltips](#external-custom-tooltips)
- [Tooltip Model](#tooltip-model)
- [Elements](#elements)
- [Point Configuration](#point-configuration)
- [Point Styles](#point-styles)
- [Line Configuration](#line-configuration)
- [Rectangle Configuration](#rectangle-configuration)
- [Arc Configuration](#arc-configuration)
- [Chart Line](#line)
- [Examples](#line-examples)
- [Dataset Properties](#dataset-properties)
- [General](#general)
- [Point Styling](#point-styling)
- [Line Styling](#line-styling)
- [Interactions](#interactions)
- [cubicInterpolationMode](#cubicinterpolationmode)
- [Stepped Line](#stepped-line)
- [Data Structure](#data-structure)
- [number[]](#number)
- [Point[]](#point)
- [Stacked Area Chart](#stacked-area-chart)
- [Chart Bar](#bar)
- [Examples](#bar-examples)
- [Styling](#styling)
- [borderSkipped](#borderskipped)
- [borderWidth](#borderwidth)
- [Dataset Configuration](#dataset-configuration)
- [barThickness](#barthickness)
- [Scale Configuration](#scale-configuration)
- [offsetGridLines](#offsetgridlines)
- [barPercentage vs categoryPercentage](#barpercentage-vs-categorypercentage)
- [Stacked Bar Chart](#stacked-bar-chart)
- [Chart Horizontal Bar](#horizontal-bar)
- [Config Options](#config-options)
- [Chart Radar](#radar)
- [Examples](#radar-examples)
- [Scale Options](#scale-options)
- [Chart Polar](#polar)
- [Examples](#polar-examples)
- [Border Alignment](#border-alignment)
- [Chart Doughnut and Pie](#doughnut)
- [Doughnut examples](#doughnut-examples)
- [Pie example](#pie-examples)
- [Default Options](#default-options)
- [Chart Gauge](#gauge)
- [Examples](#gauge-examples)
- [Chart Donut](#donut)
- [Examples](#donut-examples)
- [Chart Mixed](#mixed)
- [Examples](#mixed-examples)

---

# About

Style Guide includes a component for creating charts based on chartjs and gauge.js

#### Charts should only be used for low online data volume. For large volumes of data and complex graphics, must compulsorily use [Analytics](http://tdn.totvs.com/display/fluig/Analytics).

The Chart components of the Fluig Style Guide are based on the **Chart.js** and **gauge.js** plugins.

#### While it is possible to use these two plugins directly, it is not recommended as you may be impacted by a future update. Always use the FLUIGC.chart component to create your charts.

<table class="table table-bordered table-striped"><thead><tr><th>Plugin</th><th>Version</th><th>Description</th><th>Documentation</th></tr></thead><tbody><tr><th>Chart.js</th><td>2.9.4</td><td>Chart.js is a free JavaScript library for making HTML-based charts. It is one of the simplest visualization libraries for JavaScript, and comes with the following built-in chart types: Scatter Plot. Line Chart.</td><td><a href="https://www.chartjs.org/docs/2.9.4/getting-started/" target="_blank">https://www.chartjs.org/docs/2.9.4/getting-started/</a></td></tr><tr><th>gauge.js</th><td>1.3.7</td><td>The Gauge.js library is a lightweight JavaScript tool for creating interactive and visually appealing circular gauges, commonly used to represent a single metric on dashboards. It allows easy customization and integration into web pages.</td><td><a href="https://github.com/bernii/gauge.js" target="_blank">https://github.com/bernii/gauge.js</a></td></tr></tbody></table>

### Creating charts with Developer Studio using the Style Guide

If you want to create forms using the style guide and add charts, you'll need to import the minified CSS and JavaScript files. To import them, follow the example below, not forgetting to import the `fluig-style-guide-chart.min.js` file:

	<head>
	<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-flat.min.css">
	<script src="/portal/resources/js/jquery/jquery.js"></script>
	<script src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script src="/style-guide/js/fluig-style-guide.min.js"></script>
	<script src="/style-guide/js/fluig-style-guide-chart.min.js"></script>
	</head>
	<body>
		<div class="fluig-style-guide">
			<!--Some code here-->
		</div>
	</body>

### Using charts in widgets

To use charts in widgets, you must inform the following line in the `application.info` file of your widget:

	application.resource.component.1=fluigchart

# Configurations

## Animations

Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.

### Animation Configuration

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>duration</code></td><td><code>number</code></td><td><code>1000</code></td><td>The number of milliseconds an animation takes.</td></tr><tr><td><code>easing</code></td><td><code>string</code></td><td><code>'easeOutQuart'</code></td><td>Easing function to use. more...</td></tr><tr><td><code>onProgress</code></td><td><code>function</code></td><td><code>null</code></td><td>Callback called on each step of an animation. more...</td></tr><tr><td><code>onComplete</code></td><td><code>function</code></td><td><code>null</code></td><td>Callback called at the end of an animation. more...</td></tr></tbody></table>

### Easing

Available options are:

-   `'linear'`
-   `'easeInQuad'`
-   `'easeOutQuad'`
-   `'easeInOutQuad'`
-   `'easeInCubic'`
-   `'easeOutCubic'`
-   `'easeInOutCubic'`
-   `'easeInQuart'`
-   `'easeOutQuart'`
-   `'easeInOutQuart'`
-   `'easeInQuint'`
-   `'easeOutQuint'`
-   `'easeInOutQuint'`
-   `'easeInSine'`
-   `'easeOutSine'`
-   `'easeInOutSine'`
-   `'easeInExpo'`
-   `'easeOutExpo'`
-   `'easeInOutExpo'`
-   `'easeInCirc'`
-   `'easeOutCirc'`
-   `'easeInOutCirc'`
-   `'easeInElastic'`
-   `'easeOutElastic'`
-   `'easeInOutElastic'`
-   `'easeInBack'`
-   `'easeOutBack'`
-   `'easeInOutBack'`
-   `'easeInBounce'`
-   `'easeOutBounce'`
-   `'easeInOutBounce'`

See Robert Penner's easing equations.

### Animation Callbacks

The `onProgress` and `onComplete` callbacks are useful for synchronizing an external draw to the chart animation. The callback is passed a `Chart.Animation` instance:

    {
        // Chart object
        chart: Chart,

        // Current Animation frame number
        currentStep: number,

        // Number of animation frames
        numSteps: number,

        // Animation easing to use
        easing: string,

        // Function that renders the chart
        render: function,

        // User callback
        onAnimationProgress: function,

        // User callback
        onAnimationComplete: function
    }

The following example fills a progress bar during the chart animation.

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the bar function
    var barChart = chart.bar(data, {
        animation: {
            onProgress: function(animation) {
                progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            }
        }
    });

Another example usage of these callbacks can be found on Github: this sample displays a progress bar showing how far along the animation is.

## Layout Configuration

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>padding</code></td><td><code>number|object</code></td><td><code>0</code></td><td>The padding to add inside the chart. more...</td></tr></tbody></table>

### Padding

If this value is a number, it is applied to all sides of the chart (left, top, right, bottom). If this value is an object, the `left` property defines the left padding. Similarly the `right`, `top` and `bottom` properties can also be specified.

Lets say you wanted to add 50px of padding to the left side of the chart canvas, you would do:

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    });

## Legend Configuration

The chart legend displays data about the datasets that are appearing on the chart.

### Configuration options

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>display</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Is the legend shown?</td></tr><tr><td><code>position</code></td><td><code>string</code></td><td><code>'top'</code></td><td>Position of the legend. more...</td></tr><tr><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Alignment of the legend. more...</td></tr><tr><td><code>fullWidth</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Marks that this box should take the full width of the canvas (pushing down other boxes). This is unlikely to need to be changed in day-to-day use.</td></tr><tr><td><code>onClick</code></td><td><code>function</code></td><td></td><td>A callback that is called when a click event is registered on a label item.</td></tr><tr><td><code>onHover</code></td><td><code>function</code></td><td></td><td>A callback that is called when a 'mousemove' event is registered on top of a label item.</td></tr><tr><td><code>onLeave</code></td><td><code>function</code></td><td></td><td>A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item.</td></tr><tr><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Legend will show datasets in reverse order.</td></tr><tr><td><code>labels</code></td><td><code>object</code></td><td></td><td>See the Legend Label Configuration section below.</td></tr><tr><td><code>rtl</code></td><td><code>boolean</code></td><td></td><td><code>true</code> for rendering the legends from right to left.</td></tr><tr><td><code>textDirection</code></td><td><code>string</code></td><td>canvas' default</td><td>This will force the text direction `'rtl'</td><td>'ltr` on the canvas for rendering the legend, regardless of the css specified on the canvas</td></tr></tbody></table>

### Position

Position of the legend. Options are:

-   `'top'`
-   `'left'`
-   `'bottom'`
-   `'right'`

### Align

Alignment of the legend. Options are:

-   `'start'`
-   `'center'`
-   `'end'`

Defaults to `'center'` for unrecognized values.

### Legend Label Configuration

The legend label configuration is nested below the legend configuration using the `labels` key.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>boxWidth</code></td><td><code>number</code></td><td><code>40</code></td><td>Width of coloured box.</td></tr><tr><td><code>fontSize</code></td><td><code>number</code></td><td><code>12</code></td><td>Font size of text.</td></tr><tr><td><code>fontStyle</code></td><td><code>string</code></td><td><code>'normal'</code></td><td>Font style of text.</td></tr><tr><td><code>fontColor</code></td><td><code>Color</code></td><td><code>'#666'</code></td><td>Color of text.</td></tr><tr><td><code>fontFamily</code></td><td><code>string</code></td><td><code>"'Lato', Arial, sans-serif"</code></td><td>Font family of legend text.</td></tr><tr><td><code>padding</code></td><td><code>number</code></td><td><code>10</code></td><td>Padding between rows of colored boxes.</td></tr><tr><td><code>generateLabels</code></td><td><code>function</code></td><td></td><td>Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See Legend Item for details.</td></tr><tr><td><code>filter</code></td><td><code>function</code></td><td><code>null</code></td><td>Filters legend items out of the legend. Receives 2 parameters, a Legend Item and the chart data.</td></tr><tr><td><code>usePointStyle</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Label style will match corresponding point style (size is based on the mimimum value between boxWidth and fontSize).</td></tr></tbody></table>

### Legend Item Interface

Items passed to the legend `onClick` function are the ones returned from `labels.generateLabels`. These items must implement the following interface.

    {
        // Label that will be displayed
        text: string,

        // Fill style of the legend box
        fillStyle: Color,

        // If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
        hidden: boolean,

        // For box border. See https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
        lineCap: string,

        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
        lineDash: number\[\],

        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
        lineDashOffset: number,

        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        lineJoin: string,

        // Width of box border
        lineWidth: number,

        // Stroke style of the legend box
        strokeStyle: Color,

        // Point style of the legend box (only used if usePointStyle is true)
        pointStyle: string | Image,

        // Rotation of the point in degrees (only used if usePointStyle is true)
        rotation: number
    }

### Example

The following example will create a chart with the legend enabled and turn all of the text red in color.

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the bar function
    var barChart = chart.bar(data, {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    });

### Custom On Click Actions

It can be common to want to trigger different behaviour when clicking an item in the legend. This can be easily achieved using a callback in the config object.

The default legend click handler is:

    function(e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.chart;
        var meta = ci.getDatasetMeta(index);

        // See controller.isDatasetVisible comment
        meta.hidden = meta.hidden === null ? !ci.data.datasets\[index\].hidden : null;

        // We hid a dataset ... rerender the chart
        ci.update();
    }

Lets say we wanted instead to link the display of the first two datasets. We could change the click handler accordingly.

    var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
    var newLegendClickHandler = function (e, legendItem) {
        var index = legendItem.datasetIndex;

        if (index > 1) {
            // Do the original logic
            defaultLegendClickHandler(e, legendItem);
        } else {
            let ci = this.chart;
            \[
                ci.getDatasetMeta(0),
                ci.getDatasetMeta(1)
            \].forEach(function(meta) {
                meta.hidden = meta.hidden === null ? !ci.data.datasets\[index\].hidden : null;
            });
            ci.update();
        }
    };

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        legend: {
            onClick: newLegendClickHandler
        }
    });

Now when you click the legend in this chart, the visibility of the first two datasets will be linked together.

### HTML Legends

Sometimes you need a very complex legend. In these cases, it makes sense to generate an HTML legend. Charts provide a `generateLegend()` method on their prototype that returns an HTML string for the legend.

To configure how this legend is generated, you can change the `legendCallback` config property.

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        legendCallback: function(chart) {
            // Return the HTML string here.
        }
    });

Note that legendCallback is not called automatically and you must call `generateLegend()` yourself in code when creating a legend using this method.

## Title

The chart title defines text to draw at the top of the chart.

### Title Configuration

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Is the title shown?</td></tr><tr><td><code>position</code></td><td><code>string</code></td><td><code>'top'</code></td><td>Position of title. more...</td></tr><tr><td><code>fontSize</code></td><td><code>number</code></td><td><code>12</code></td><td>Font size.</td></tr><tr><td><code>fontFamily</code></td><td><code>string</code></td><td><code>"'Lato', Arial, sans-serif"</code></td><td>Font family for the title text.</td></tr><tr><td><code>fontColor</code></td><td><code>Color</code></td><td><code>'#666'</code></td><td>Font color.</td></tr><tr><td><code>fontStyle</code></td><td><code>string</code></td><td><code>'bold'</code></td><td>Font style.</td></tr><tr><td><code>padding</code></td><td><code>number</code></td><td><code>10</code></td><td>Number of pixels to add above and below the title text.</td></tr><tr><td><code>lineHeight</code></td><td><code>number|string</code></td><td><code>1.2</code></td><td>Height of an individual line of text. See MDN.</td></tr><tr><td><code>text</code></td><td><code>string|string[]</code></td><td><code>''</code></td><td>Title text to display. If specified as an array, text is rendered on multiple lines.</td></tr></tbody></table>

### Position

Possible title position values are:

-   `'top'`
-   `'left'`
-   `'bottom'`
-   `'right'`

### Example Usage

The example below would enable a title of 'Custom Chart Title' on the chart that is created.

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    });

## Tooltips

### Tooltip Configuration

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Are on-canvas tooltips enabled?</td></tr><tr><td><code>custom</code></td><td><code>function</code></td><td><code>null</code></td><td>See custom tooltip section.</td></tr><tr><td><code>mode</code></td><td><code>string</code></td><td><code>'nearest'</code></td><td>Sets which elements appear in the tooltip. more....</td></tr><tr><td><code>intersect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times.</td></tr><tr><td><code>position</code></td><td><code>string</code></td><td><code>'average'</code></td><td>The mode for positioning the tooltip. more...</td></tr><tr><td><code>callbacks</code></td><td><code>object</code></td><td></td><td>See the callbacks section.</td></tr><tr><td><code>itemSort</code></td><td><code>function</code></td><td></td><td>Sort tooltip items. more...</td></tr><tr><td><code>filter</code></td><td><code>function</code></td><td></td><td>Filter tooltip items. more...</td></tr><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.8)'</code></td><td>Background color of the tooltip.</td></tr><tr><td><code>titleFontFamily</code></td><td><code>string</code></td><td><code>"'Lato', Arial, sans-serif"</code></td><td>Title font.</td></tr><tr><td><code>titleFontSize</code></td><td><code>number</code></td><td><code>12</code></td><td>Title font size.</td></tr><tr><td><code>titleFontStyle</code></td><td><code>string</code></td><td><code>'bold'</code></td><td>Title font style.</td></tr><tr><td><code>titleFontColor</code></td><td><code>Color</code></td><td><code>'#fff'</code></td><td>Title font color.</td></tr><tr><td><code>titleAlign</code></td><td><code>string</code></td><td><code>'left'</code></td><td>Horizontal alignment of the title text lines. more...</td></tr><tr><td><code>titleSpacing</code></td><td><code>number</code></td><td><code>2</code></td><td>Spacing to add to top and bottom of each title line.</td></tr><tr><td><code>titleMarginBottom</code></td><td><code>number</code></td><td><code>6</code></td><td>Margin to add on bottom of title section.</td></tr><tr><td><code>bodyFontFamily</code></td><td><code>string</code></td><td><code>"'Lato', Arial, sans-serif"</code></td><td>Body line font.</td></tr><tr><td><code>bodyFontSize</code></td><td><code>number</code></td><td><code>12</code></td><td>Body font size.</td></tr><tr><td><code>bodyFontStyle</code></td><td><code>string</code></td><td><code>'normal'</code></td><td>Body font style.</td></tr><tr><td><code>bodyFontColor</code></td><td><code>Color</code></td><td><code>'#fff'</code></td><td>Body font color.</td></tr><tr><td><code>bodyAlign</code></td><td><code>string</code></td><td><code>'left'</code></td><td>Horizontal alignment of the body text lines. more...</td></tr><tr><td><code>bodySpacing</code></td><td><code>number</code></td><td><code>2</code></td><td>Spacing to add to top and bottom of each tooltip item.</td></tr><tr><td><code>footerFontFamily</code></td><td><code>string</code></td><td><code>"'Lato', Arial, sans-serif"</code></td><td>Footer font.</td></tr><tr><td><code>footerFontSize</code></td><td><code>number</code></td><td><code>12</code></td><td>Footer font size.</td></tr><tr><td><code>footerFontStyle</code></td><td><code>string</code></td><td><code>'bold'</code></td><td>Footer font style.</td></tr><tr><td><code>footerFontColor</code></td><td><code>Color</code></td><td><code>'#fff'</code></td><td>Footer font color.</td></tr><tr><td><code>footerAlign</code></td><td><code>string</code></td><td><code>'left'</code></td><td>Horizontal alignment of the footer text lines. more...</td></tr><tr><td><code>footerSpacing</code></td><td><code>number</code></td><td><code>2</code></td><td>Spacing to add to top and bottom of each footer line.</td></tr><tr><td><code>footerMarginTop</code></td><td><code>number</code></td><td><code>6</code></td><td>Margin to add before drawing the footer.</td></tr><tr><td><code>xPadding</code></td><td><code>number</code></td><td><code>6</code></td><td>Padding to add on left and right of tooltip.</td></tr><tr><td><code>yPadding</code></td><td><code>number</code></td><td><code>6</code></td><td>Padding to add on top and bottom of tooltip.</td></tr><tr><td><code>caretPadding</code></td><td><code>number</code></td><td><code>2</code></td><td>Extra distance to move the end of the tooltip arrow away from the tooltip point.</td></tr><tr><td><code>caretSize</code></td><td><code>number</code></td><td><code>5</code></td><td>Size, in px, of the tooltip arrow.</td></tr><tr><td><code>cornerRadius</code></td><td><code>number</code></td><td><code>6</code></td><td>Radius of tooltip corner curves.</td></tr><tr><td><code>multiKeyBackground</code></td><td><code>Color</code></td><td><code>'#fff'</code></td><td>Color to draw behind the colored boxes when multiple items are in the tooltip.</td></tr><tr><td><code>displayColors</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, color boxes are shown in the tooltip.</td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0)'</code></td><td>Color of the border.</td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td><code>0</code></td><td>Size of the border.</td></tr><tr><td><code>rtl</code></td><td><code>boolean</code></td><td></td><td><code>true</code> for rendering the legends from right to left.</td></tr><tr><td><code>textDirection</code></td><td><code>string</code></td><td>canvas' default</td><td>This will force the text direction `'rtl'</td><td>'ltr` on the canvas for rendering the tooltips, regardless of the css specified on the canvas</td></tr></tbody></table>

### Alignment

The `titleAlign`, `bodyAlign` and `footerAlign` options define the horizontal position of the text lines with respect to the tooltip box. The following values are supported.

-   `'left'` (default)
-   `'right'`
-   `'center'`

These options are only applied to text lines. Color boxes are always aligned to the left edge.

### Sort Callback

Allows sorting of tooltip items. Must implement at minimum a function that can be passed to Array.prototype.sort. This function can also accept a third parameter that is the data object passed to the chart.

### Filter Callback

Allows filtering of tooltip items. Must implement at minimum a function that can be passed to Array.prototype.filter. This function can also accept a second parameter that is the data object passed to the chart.

### Tooltip Callbacks

The tooltip label configuration is nested below the tooltip configuration using the `callbacks` key. The tooltip has the following callbacks for providing text. For all functions, `this` will be the tooltip object created from the `Chart.Tooltip` constructor.

All functions are called with the same arguments: a tooltip item and the `data` object passed to the chart. All functions must return either a string or an array of strings. Arrays of strings are treated as multiple lines of text.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>beforeTitle</code></td><td><code>TooltipItem[], object</code></td><td>Returns the text to render before the title.</td></tr><tr><td><code>title</code></td><td><code>TooltipItem[], object</code></td><td>Returns text to render as the title of the tooltip.</td></tr><tr><td><code>afterTitle</code></td><td><code>TooltipItem[], object</code></td><td>Returns text to render after the title.</td></tr><tr><td><code>beforeBody</code></td><td><code>TooltipItem[], object</code></td><td>Returns text to render before the body section.</td></tr><tr><td><code>beforeLabel</code></td><td><code>TooltipItem, object</code></td><td>Returns text to render before an individual label. This will be called for each item in the tooltip.</td></tr><tr><td><code>label</code></td><td><code>TooltipItem, object</code></td><td>Returns text to render for an individual item in the tooltip. more...</td></tr><tr><td><code>labelColor</code></td><td><code>TooltipItem, Chart</code></td><td>Returns the colors to render for the tooltip item. more...</td></tr><tr><td><code>labelTextColor</code></td><td><code>TooltipItem, Chart</code></td><td>Returns the colors for the text of the label for the tooltip item.</td></tr><tr><td><code>afterLabel</code></td><td><code>TooltipItem, object</code></td><td>Returns text to render after an individual label.</td></tr><tr><td><code>afterBody</code></td><td><code>TooltipItem[], object</code></td><td>Returns text to render after the body section.</td></tr><tr><td><code>beforeFooter</code></td><td><code>TooltipItem[], object</code></td><td>Returns text to render before the footer section.</td></tr><tr><td><code>footer</code></td><td><code>TooltipItem[], object</code></td><td>Returns text to render as the footer of the tooltip.</td></tr><tr><td><code>afterFooter</code></td><td><code>TooltipItem[], object</code></td><td>Text to render after the footer section.</td></tr></tbody></table>

### Label Callback

The `label` callback can change the text that displays for a given data point. A common example to round data values; the following example rounds the data to two decimal places.

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets\[tooltipItem.datasetIndex\].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel \* 100) / 100;
                    return label;
                }
            }
        }
    });

### Label Color Callback

For example, to return a red box for each item in the tooltip you could do:

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 0)',
                        backgroundColor: 'rgb(255, 0, 0)'
                    };
                },
                labelTextColor: function(tooltipItem, chart) {
                    return '#543453';
                }
            }
        }
    });

### Tooltip Item Interface

The tooltip items passed to the tooltip callbacks implement the following interface.

    {
        // Label for the tooltip
        label: string,

        // Value for the tooltip
        value: string,

        // X Value of the tooltip
        // (deprecated) use \`value\` or \`label\` instead
        xLabel: number | string,

        // Y value of the tooltip
        // (deprecated) use \`value\` or \`label\` instead
        yLabel: number | string,

        // Index of the dataset the item comes from
        datasetIndex: number,

        // Index of this data item in the dataset
        index: number,

        // X position of matching point
        x: number,

        // Y position of matching point
        y: number
    }

### External (Custom) Tooltips

Custom tooltips allow you to hook into the tooltip rendering process so that you can render the tooltip in your own custom way. Generally this is used to create an HTML tooltip instead of an oncanvas one. You can enable custom tooltips in the global or chart configuration like so:

    var chart = FLUIGC.chart('#MY\_SELECTOR', {
        id: 'set\_an\_id\_for\_my\_chart',
        width: '700',
        height: '200',
    });
    // call the line function
    var lineChart = chart.line(data, {
        tooltips: {
            // Disable the on-canvas tooltip
            enabled: false,

            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '

<table></table>

';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || \[\];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '';

                    titleLines.forEach(function(title) {
                        innerHtml += '' + title + '';
                    });
                    innerHtml += '';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors\[i\];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '';
                        innerHtml += '' + span + body + '';
                    });
                    innerHtml += '';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // \`this\` will be the overall tooltip
                var position = this.\_chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel.\_bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel.\_bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
            }
        }
    });

See samples for examples on how to get started with custom tooltips.

### Tooltip Model

The tooltip model contains parameters that can be used to render the tooltip.

    {
        // The items that we are rendering in the tooltip. See Tooltip Item Interface section
        dataPoints: TooltipItem\[\],

        // Positioning
        xPadding: number,
        yPadding: number,
        xAlign: string,
        yAlign: string,

        // X and Y properties are the top left of the tooltip
        x: number,
        y: number,
        width: number,
        height: number,
        // Where the tooltip points to
        caretX: number,
        caretY: number,

        // Body
        // The body lines that need to be rendered
        // Each object contains 3 parameters
        // before: string\[\] // lines of text before the line with the color square
        // lines: string\[\], // lines of text to render as the main item with color square
        // after: string\[\], // lines of text to render after the main lines
        body: object\[\],
        // lines of text that appear after the title but before the body
        beforeBody: string\[\],
        // line of text that appear after the body and before the footer
        afterBody: string\[\],
        bodyFontColor: Color,
        \_bodyFontFamily: string,
        \_bodyFontStyle: string,
        \_bodyAlign: string,
        bodyFontSize: number,
        bodySpacing: number,

        // Title
        // lines of text that form the title
        title: string\[\],
        titleFontColor: Color,
        \_titleFontFamily: string,
        \_titleFontStyle: string,
        titleFontSize: number,
        \_titleAlign: string,
        titleSpacing: number,
        titleMarginBottom: number,

        // Footer
        // lines of text that form the footer
        footer: string\[\],
        footerFontColor: Color,
        \_footerFontFamily: string,
        \_footerFontStyle: string,
        footerFontSize: number,
        \_footerAlign: string,
        footerSpacing: number,
        footerMarginTop: number,

        // Appearance
        caretSize: number,
        caretPadding: number,
        cornerRadius: number,
        backgroundColor: Color,

        // colors to render for each item in body\[\]. This is the color of the squares in the tooltip
        labelColors: Color\[\],
        labelTextColors: Color\[\],

        // 0 opacity is a hidden tooltip
        opacity: number,
        legendColorBackground: Color,
        displayColors: boolean,
        borderColor: Color,
        borderWidth: number
    }

## Elements

While chart types provide settings to configure the styling of each dataset, you sometimes want to style **all datasets the same way**. A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: **arc**, **lines**, **points**, and **rectangles**. When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.

### Point Configuration

Point elements are used to represent the points in a line, radar or bubble chart.

Global point options: `Chart.defaults.global.elements.point`.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>radius</code></td><td><code>number</code></td><td><code>3</code></td><td>Point radius.</td></tr><tr><td><code>pointStyle</code></td><td><code>string|Image</code></td><td><code>'circle'</code></td><td>Point style.</td></tr><tr><td><code>rotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Point rotation (in degrees).</td></tr><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Point fill color.</td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td><code>1</code></td><td>Point stroke width.</td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Point stroke color.</td></tr><tr><td><code>hitRadius</code></td><td><code>number</code></td><td><code>1</code></td><td>Extra radius added to point radius for hit detection.</td></tr><tr><td><code>hoverRadius</code></td><td><code>number</code></td><td><code>4</code></td><td>Point radius when hovered.</td></tr><tr><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td><code>1</code></td><td>Stroke width when hovered.</td></tr></tbody></table>

### Point Styles

The following values are supported:

-   `'circle'`
-   `'cross'`
-   `'crossRot'`
-   `'dash'`
-   `'line'`
-   `'rect'`
-   `'rectRounded'`
-   `'rectRot'`
-   `'star'`
-   `'triangle'`

If the value is an image, that image is drawn on the canvas using drawImage.

### Line Configuration

Line elements are used to represent the line in a line chart.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>tension</code></td><td><code>number</code></td><td><code>0.4</code></td><td>Bézier curve tension ( <code>0</code> for no Bézier curves).</td></tr><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Line fill color.</td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td><code>3</code></td><td>Line stroke width.</td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Line stroke color.</td></tr><tr><td><code>borderCapStyle</code></td><td><code>string</code></td><td><code>'butt'</code></td><td>Line cap style. See MDN.</td></tr><tr><td><code>borderDash</code></td><td><code>number[]</code></td><td><code>[]</code></td><td>Line dash. See MDN.</td></tr><tr><td><code>borderDashOffset</code></td><td><code>number</code></td><td><code>0.0</code></td><td>Line dash offset. See MDN.</td></tr><tr><td><code>borderJoinStyle</code></td><td><code>string</code></td><td><code>'miter'</code></td><td>Line join style. See MDN.</td></tr><tr><td><code>capBezierPoints</code></td><td><code>boolean</code></td><td><code>true</code></td><td><code>true</code> to keep Bézier control inside the chart, <code>false</code> for no restriction.</td></tr><tr><td><code>cubicInterpolationMode</code></td><td><code>string</code></td><td><code>'default'</code></td><td>Interpolation mode to apply. See more...</td></tr><tr><td><code>fill</code></td><td><code>boolean|string</code></td><td><code>true</code></td><td>How to fill the area under the line. See area charts.</td></tr><tr><td><code>stepped</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> to show the line as a stepped line ( <code>tension</code> will be ignored).</td></tr></tbody></table>

### Rectangle Configuration

Rectangle elements are used to represent the bars in a bar chart.

Global rectangle options: `Chart.defaults.global.elements.rectangle`.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Bar fill color.</td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td><code>0</code></td><td>Bar stroke width.</td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Bar stroke color.</td></tr><tr><td><code>borderSkipped</code></td><td><code>string</code></td><td><code>'bottom'</code></td><td>Skipped (excluded) border: <code>'bottom'</code>, <code>'left'</code>, <code>'top'</code> or <code>'right'</code>.</td></tr></tbody></table>

### Arc Configuration

Arcs are used in the polar area, doughnut and pie charts.

Global arc options: `Chart.defaults.global.elements.arc`.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>angle</code> - for polar only</td><td><code>number</code></td><td><code>circumference / (arc count)</code></td><td>Arc angle to cover.</td></tr><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>'rgba(0, 0, 0, 0.1)'</code></td><td>Arc fill color.</td></tr><tr><td><code>borderAlign</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Arc stroke alignment.</td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td><code>'#fff'</code></td><td>Arc stroke color.</td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td><code>2</code></td><td>Arc stroke width.</td></tr></tbody></table>

# Chart Line

## Examples

A line chart is a way of plotting data points on a line.

### Live demo

Below an example of line chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the line chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the line function
var lineChart = chart.line(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the line function
var lineChart = chart.line(data, options);

### Data structure

The line chart requires an array of labels for each of the data points. Each dataset has a colour for the fill, a colour for the line and colours for the points and strokes of the points.

var data = {
    labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\],
    datasets: \[
        {
            label: 'My First dataset',
            data: \[65, 59, 80, 81, 56, 55, 40\],
            backgroundColor: 'rgba(170, 194, 77, 0.5)',
            hoverBackgroundColor: 'rgba(170, 194, 77, 0.5)',
            borderColor: '#b0cc49',
            hoverBorderColor: '#b0cc49'
        },
        {
            label: 'My Second dataset',
            data: \[28, 48, 40, 19, 86, 27, 90\],
            backgroundColor: 'rgba(190, 49, 88, 0.5)',
            hoverBackgroundColor: 'rgba(190, 49, 88, 0.5)',
            borderColor: '#ed145b',
            hoverBorderColor: '#ed145b'
        }
    \]
};

### Dataset Properties

The line chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Scriptable</th><th>Indexable</th><th>Default</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td>Yes</td><td>-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderCapStyle</code></td><td><code>string</code></td><td>Yes</td><td>-</td><td><code>'butt'</code></td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td>Yes</td><td>-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderDash</code></td><td><code>number[]</code></td><td>Yes</td><td>-</td><td><code>[]</code></td></tr><tr><td><code>borderDashOffset</code></td><td><code>number</code></td><td>Yes</td><td>-</td><td><code>0.0</code></td></tr><tr><td><code>borderJoinStyle</code></td><td><code>string</code></td><td>Yes</td><td>-</td><td><code>'miter'</code></td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td>Yes</td><td>-</td><td><code>3</code></td></tr><tr><td><code>cubicInterpolationMode</code></td><td><code>string</code></td><td>Yes</td><td>-</td><td><code>'default'</code></td></tr><tr><td><code>clip</code></td><td><code>number|object</code></td><td>-</td><td>-</td><td><code>borderWidth / 2</code></td></tr><tr><td><code>fill</code></td><td><code>boolean|string</code></td><td>Yes</td><td>-</td><td><code>true</code></td></tr><tr><td><code>hoverBackgroundColor</code></td><td><code>Color</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderCapStyle</code></td><td><code>string</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderColor</code></td><td><code>Color</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderDash</code></td><td><code>number[]</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderDashOffset</code></td><td><code>number</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderJoinStyle</code></td><td><code>string</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td>Yes</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>label</code></td><td><code>string</code></td><td>-</td><td>-</td><td><code>''</code></td></tr><tr><td><code>lineTension</code></td><td><code>number</code></td><td>-</td><td>-</td><td><code>0.4</code></td></tr><tr><td><code>order</code></td><td><code>number</code></td><td>-</td><td>-</td><td><code>0</code></td></tr><tr><td><code>pointBackgroundColor</code></td><td><code>Color</code></td><td>Yes</td><td>Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>pointBorderColor</code></td><td><code>Color</code></td><td>Yes</td><td>Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>pointBorderWidth</code></td><td><code>number</code></td><td>Yes</td><td>Yes</td><td><code>1</code></td></tr><tr><td><code>pointHitRadius</code></td><td><code>number</code></td><td>Yes</td><td>Yes</td><td><code>1</code></td></tr><tr><td><code>pointHoverBackgroundColor</code></td><td><code>Color</code></td><td>Yes</td><td>Yes</td><td><code>undefined</code></td></tr><tr><td><code>pointHoverBorderColor</code></td><td><code>Color</code></td><td>Yes</td><td>Yes</td><td><code>undefined</code></td></tr><tr><td><code>pointHoverBorderWidth</code></td><td><code>number</code></td><td>Yes</td><td>Yes</td><td><code>1</code></td></tr><tr><td><code>pointHoverRadius</code></td><td><code>number</code></td><td>Yes</td><td>Yes</td><td><code>4</code></td></tr><tr><td><code>pointRadius</code></td><td><code>number</code></td><td>Yes</td><td>Yes</td><td><code>3</code></td></tr><tr><td><code>pointRotation</code></td><td><code>number</code></td><td>Yes</td><td>Yes</td><td><code>0</code></td></tr><tr><td><code>pointStyle</code></td><td><code>string|Image</code></td><td>Yes</td><td>Yes</td><td><code>'circle'</code></td></tr><tr><td><code>showLine</code></td><td><code>boolean</code></td><td>-</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>spanGaps</code></td><td><code>boolean</code></td><td>-</td><td>-</td><td><code>undefined</code></td></tr><tr><td><code>steppedLine</code></td><td><code>boolean|string</code></td><td>-</td><td>-</td><td><code>false</code></td></tr><tr><td><code>xAxisID</code></td><td><code>string</code></td><td>-</td><td>-</td><td>first x axis</td></tr><tr><td><code>yAxisID</code></td><td><code>string</code></td><td>-</td><td>-</td><td>first y axis</td></tr></tbody></table>

### General

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr><td><code>order</code></td><td>The drawing order of dataset. Also affects order for stacking, tooltip, and legend.</td></tr><tr><td><code>xAxisID</code></td><td>The ID of the x axis to plot this dataset on.</td></tr><tr><td><code>yAxisID</code></td><td>The ID of the y axis to plot this dataset on.</td></tr></tbody></table>

### Point Styling

The style of each point can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>pointBackgroundColor</code></td><td>The fill color for points.</td></tr><tr><td><code>pointBorderColor</code></td><td>The border color for points.</td></tr><tr><td><code>pointBorderWidth</code></td><td>The width of the point border in pixels.</td></tr><tr><td><code>pointHitRadius</code></td><td>The pixel size of the non-displayed point that reacts to mouse events.</td></tr><tr><td><code>pointRadius</code></td><td>The radius of the point shape. If set to 0, the point is not rendered.</td></tr><tr><td><code>pointRotation</code></td><td>The rotation of the point in degrees.</td></tr><tr><td><code>pointStyle</code></td><td>Style of the point. more...</td></tr></tbody></table>

All these values, if `undefined`, fallback first to the dataset options then to the associated `elements.point.*` options.

### Line Styling

The style of the line can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td>The line fill color.</td></tr><tr><td><code>borderCapStyle</code></td><td>Cap style of the line. See MDN.</td></tr><tr><td><code>borderColor</code></td><td>The line color.</td></tr><tr><td><code>borderDash</code></td><td>Length and spacing of dashes. See MDN.</td></tr><tr><td><code>borderDashOffset</code></td><td>Offset for line dashes. See MDN.</td></tr><tr><td><code>borderJoinStyle</code></td><td>Line joint style. See MDN.</td></tr><tr><td><code>borderWidth</code></td><td>The line width (in pixels).</td></tr><tr><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr><td><code>fill</code></td><td>How to fill the area under the line. See area charts.</td></tr><tr><td><code>lineTension</code></td><td>Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.</td></tr><tr><td><code>showLine</code></td><td>If false, the line is not drawn for this dataset.</td></tr><tr><td><code>spanGaps</code></td><td>If true, lines will be drawn between points with no or null data. If false, points with <code>NaN</code> data will create a break in the line.</td></tr></tbody></table>

If the value is `undefined`, `showLine` and `spanGaps` fallback to the associated chart configuration options. The rest of the values fallback to the associated `elements.line.*` options.

### Interactions

The interaction with each point can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>pointHoverBackgroundColor</code></td><td>Point background color when hovered.</td></tr><tr><td><code>pointHoverBorderColor</code></td><td>Point border color when hovered.</td></tr><tr><td><code>pointHoverBorderWidth</code></td><td>Border width of point when hovered.</td></tr><tr><td><code>pointHoverRadius</code></td><td>The radius of the point when hovered.</td></tr></tbody></table>

### cubicInterpolationMode

The following interpolation modes are supported.

-   `'default'`
-   `'monotone'`

The `'default'` algorithm uses a custom weighted cubic interpolation, which produces pleasant curves for all types of datasets.

The `'monotone'` algorithm is more suited to `y = f(x)` datasets : it preserves monotonicity (or piecewise monotonicity) of the dataset being interpolated, and ensures local extremums (if any) stay at input data points.

If left untouched ( `undefined`), the global `options.elements.line.cubicInterpolationMode` property is used.

### Stepped Line

The following values are supported for `steppedLine`.

-   `false`: No Step Interpolation (default)
-   `true`: Step-before Interpolation (eq. `'before'`)
-   `'before'`: Step-before Interpolation
-   `'after'`: Step-after Interpolation
-   `'middle'`: Step-middle Interpolation

If the `steppedLine` value is set to anything other than false, `lineTension` will be ignored.

### Configuration Options

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>showLines</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If false, the lines between points are not drawn.</td></tr><tr><td><code>spanGaps</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If false, NaN data causes a break in the line.</td></tr></tbody></table>

### Data Structure

The `data` property of a dataset for a line chart can be passed in two formats.

### number\[\]

	data: \[20, 10\]

When the `data` array is an array of numbers, the x axis is generally a category. The points are placed onto the axis using their position in the array. When a line chart is created with a category axis, the `labels` property of the data object must be specified.

### Point\[\]

	data: \[{
		x: 10,
		y: 20
	}, {
		x: 15,
		y: 10
	}\]

This alternate is used for sparse datasets, such as those in scatter charts. Each data point is specified using an object containing `x` and `y` properties.

### Stacked Area Chart

Line charts can be configured into stacked area charts by changing the settings on the y axis to enable stacking. Stacked area charts can be used to show how one data trend is made up of a number of smaller pieces.

	var chart = FLUIGC.chart('#MY\_SELECTOR', {
		id: 'set\_an\_id\_for\_my\_chart',
		width: '700',
		height: '200'
	});
	var lineChart = chart.line(data, {
		scales: {
			yAxes: \[{
				stacked: true
			}\]
		}
	});

### Methods

#### .addData(valuesArray, label)

Adds a new data to chart.

	lineChart.addData(\[40, 60\], 'August');

#### .update()

Update the dataset's value.

	// Would update the first dataset's value of 'March' to be 50
	lineChart.data.datasets\[0\].data\[2\] = 50;
	// Calling update now animates the position of March from 90 to 50.
	lineChart.update();

#### .removeData()

Remove the first value for all datasets on the chart.

	lineChart.removeData();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.chart.click</td><td>Triggered when the click ocurrs on a line chart area.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.chart.click

This event is fired when the click ocurrs on a line chart area. The returned object has the label attributes and the value of the chart area.

	$('YOUR\_SELECTOR').on('fluig.chart.click', function(data) {
		// Do something
	});

# Chart Bar

## Examples

A bar chart is a way of showing data as bars

### Live demo

Below an example of bar chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the bar chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the bar function
var barChart = chart.bar(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the bar function
var barChart = chart.bar(data, options);

### Data structure

The bar chart has the a very similar data structure to the line chart, and has an array of datasets, each with colours and an array of data.

var data = {
    labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\],
    datasets: \[
        {
            label: 'My First dataset',
            data: \[65, 59, 80, 81, 56, 55, 40\],
            backgroundColor: 'rgba(170, 194, 77, 0.5)',
            hoverBackgroundColor: 'rgba(170, 194, 77, 0.5)',
            borderColor: '#b0cc49',
            hoverBorderColor: '#b0cc49'
        },
        {
            label: 'My Second dataset',
            data: \[28, 48, 40, 19, 86, 27, 90\],
            backgroundColor: 'rgba(190, 49, 88, 0.5)',
            hoverBackgroundColor: 'rgba(190, 49, 88, 0.5)',
            borderColor: '#ed145b',
            hoverBorderColor: '#ed145b'
        }
    \]
};

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

### Dataset Properties

The bar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the color of the bars is generally set this way.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th style="text-align:center">Scriptable</th><th style="text-align:center">Indexable</th><th>Default</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderSkipped</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'bottom'</code></td></tr><tr><td><code>borderWidth</code></td><td><code>number|object</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>0</code></td></tr><tr><td><code>data</code></td><td><code>object[]</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><strong>required</strong></td></tr><tr><td><code>hoverBackgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">-</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderColor</code></td><td><code>Color</code></td><td style="text-align:center">-</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td style="text-align:center">-</td><td style="text-align:center">Yes</td><td><code>1</code></td></tr><tr><td><code>label</code></td><td><code>string</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>''</code></td></tr><tr><td><code>order</code></td><td><code>number</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>0</code></td></tr><tr><td><code>xAxisID</code></td><td><code>string</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td>first x axis</td></tr><tr><td><code>yAxisID</code></td><td><code>string</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td>first y axis</td></tr></tbody></table>

### General

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr><td><code>order</code></td><td>The drawing order of dataset. Also affects order for stacking, tooltip, and legend.</td></tr><tr><td><code>xAxisID</code></td><td>The ID of the x axis to plot this dataset on.</td></tr><tr><td><code>yAxisID</code></td><td>The ID of the y axis to plot this dataset on.</td></tr></tbody></table>

### Styling

The style of each bar can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td>The bar background color.</td></tr><tr><td><code>borderColor</code></td><td>The bar border color.</td></tr><tr><td><code>borderSkipped</code></td><td>The edge to skip when drawing bar.</td></tr><tr><td><code>borderWidth</code></td><td>The bar border width (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated `elements.rectangle.*` options.

#### borderSkipped

This setting is used to avoid drawing the bar stroke at the base of the fill. In general, this does not need to be changed except when creating chart types that derive from a bar chart.

**Note:** for negative bars in vertical chart, `top` and `bottom` are flipped. Same goes for `left` and `right` in horizontal chart.

Options are:

-   `'bottom'`
-   `'left'`
-   `'top'`
-   `'right'`
-   `false`

#### borderWidth

If this value is a number, it is applied to all sides of the rectangle (left, top, right, bottom), except `borderSkipped`. If this value is an object, the `left` property defines the left border width. Similarly the `right`, `top` and `bottom` properties can also be specified. Omitted borders and `borderSkipped` are skipped.

### Interactions

The interaction with each bar can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>hoverBackgroundColor</code></td><td>The bar background color when hovered.</td></tr><tr><td><code>hoverBorderColor</code></td><td>The bar border color when hovered.</td></tr><tr><td><code>hoverBorderWidth</code></td><td>The bar border width when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated `elements.rectangle.*` options.

### Dataset Configuration

The bar chart accepts the following configuration from the associated dataset options:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>barPercentage</code></td><td><code>number</code></td><td><code>0.9</code></td><td>Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. more...</td></tr><tr><td><code>categoryPercentage</code></td><td><code>number</code></td><td><code>0.8</code></td><td>Percent (0-1) of the available width each category should be within the sample width. more...</td></tr><tr><td><code>barThickness</code></td><td><code>number|string</code></td><td></td><td>Manually set width of each bar in pixels. If set to <code>'flex'</code>, it computes "optimal" sample widths that globally arrange bars side by side. If not set (default), bars are equally sized based on the smallest interval. more...</td></tr><tr><td><code>maxBarThickness</code></td><td><code>number</code></td><td></td><td>Set this to ensure that bars are not sized thicker than this.</td></tr><tr><td><code>minBarLength</code></td><td><code>number</code></td><td></td><td>Set this to ensure that bars have a minimum length in pixels.</td></tr></tbody></table>

### Example Usage

		data: {
			datasets: \[{
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				data: \[10, 20, 30, 40, 50, 60, 70\]
			}\]
		};

### barThickness

If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, `barPercentage` and `categoryPercentage` are ignored.

If set to `'flex'`, the base sample widths are calculated automatically based on the previous and following samples so that they take the full available widths without overlap. Then, bars are sized using `barPercentage` and `categoryPercentage`. There is no gap when the percentage options are 1. This mode generates bars with different widths when data are not evenly spaced.

If not set (default), the base sample widths are calculated using the smallest interval that prevents bar overlapping, and bars are sized using `barPercentage` and `categoryPercentage`. This mode always generates bars equally sized.

### Scale Configuration

The bar chart sets unique default values for the following configuration from the associated `scale` options:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>offset</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, extra space is added to the both edges and the axis is scaled to fit into the chart area.</td></tr><tr><td><code>gridLines.offsetGridLines</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. more...</td></tr></tbody></table>

### Example Usage

		options = {
			scales: {
				xAxes: \[{
					gridLines: {
						offsetGridLines: true
					}
				}\]
			}
		};

### offsetGridLines

If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a category scale in a bar chart while false for other scales or chart types by default.

### barPercentage vs categoryPercentage

The following shows the relationship between the bar percentage option and the category percentage option.

		// categoryPercentage: 1.0
		// barPercentage: 1.0
		Bar:        | 1.0 | 1.0 |
		Category:   |    1.0    |
		Sample:     |===========|

		// categoryPercentage: 1.0
		// barPercentage: 0.5
		Bar:          |.5|  |.5|
		Category:  |      1.0     |
		Sample:    |==============|

		// categoryPercentage: 0.5
		// barPercentage: 1.0
		Bar:            |1.||1.|
		Category:       |  .5  |
		Sample:     |==============|

### Data Structure

The `data` property of a dataset for a bar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index on the x axis.

		data: \[20, 10\]

You can also specify the dataset as x/y coordinates when using the time scale.

		data: \[{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}\]

You can also specify the dataset for a bar chart as arrays of two numbers. This will force rendering of bars with gaps between them (floating-bars). First and second numbers in array will correspond the start and the end point of a bar respectively.

		data: \[\[5,6\], \[-3,-6\]\]

### Stacked Bar Chart

Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

		var chart = FLUIGC.chart('#MY\_SELECTOR', {
			id: 'set\_an\_id\_for\_my\_chart',
			width: '700',
			height: '200'
		});
		var lineChart = chart.bar(data, {
			scales: {
				xAxes: \[{
					stacked: true
				}\],
				yAxes: \[{
					stacked: true
				}\]
			}
		});

The following dataset properties are specific to stacked bar charts.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>stack</code></td><td><code>string</code></td><td>The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack).</td></tr></tbody></table>

# Chart Horizontal Bar

A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

Add Update Remove

### Example

### HTML

	<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the horizontal bar chart.

	var chart = FLUIGC.chart('#MY\_SELECTOR');
	// call the horizontal bar function
	var barChart = chart.horizontalBar(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

	var chart = FLUIGC.chart('#MY\_SELECTOR', {
		id: 'set\_an\_id\_for\_my\_chart',
		width: '700',
		height: '200',
		/\* See the list of options \*/
	});
	// call the horizontal bar function
	var horizontalBarChart = chart.horizontalBar(data, options);

### Config Options

The configuration options for the horizontal bar chart are the same as for the bar chart. However, any options specified on the x axis in a bar chart, are applied to the y axis in a horizontal bar chart.

### Methods

#### .addData(valuesArray, label)

Adds a new data to chart.

	horizontalBarChart.addData(\[40, 60\], 'August');

#### .update()

Update the dataset's value.

	// Would update the first dataset's value of 'March' to be 50
	horizontalBarChart.data.datasets\[0\].data\[2\] = 50;
	// Calling update now animates the position of March from 90 to 50.
	horizontalBarChart.update();

#### .removeData()

Remove the first value for all datasets on the chart.

	horizontalBarChart.removeData();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.chart.click</td><td>Triggered when the click ocurrs on a bar chart area.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.chart.click

This event is fired when the click ocurrs on a bar chart area. The returned object has the label attributes and the value of the chart area.

	$('YOUR\_SELECTOR').on('fluig.chart.click', function(data) {
		// Do something
	});

# Chart Radar

## Examples

A radar chart is a way of showing multiple data points and the variation between them.

### Live demo

Below an example of radar chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the radar chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the radar function
var radarChart = chart.radar(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the radar function
var radarChart = chart.radar(data, options);

### Data structure

For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart. For the radar chart data, we have an array of datasets. Each of these is an object, with a fill colour, a stroke colour, a colour for the fill of each point, and a colour for the stroke of each point. We also have an array of data values.

var data = {
    labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\],
    datasets: \[
        {
            label: 'My First dataset',
            data: \[65, 59, 80, 81, 56, 55, 40\],
            backgroundColor: 'rgba(170, 194, 77, 0.5)',
            hoverBackgroundColor: 'rgba(170, 194, 77, 0.5)',
            borderColor: '#b0cc49',
            hoverBorderColor: '#b0cc49'
        },
        {
            label: 'My Second dataset',
            data: \[28, 48, 40, 19, 86, 27, 90\],
            backgroundColor: 'rgba(190, 49, 88, 0.5)',
            hoverBackgroundColor: 'rgba(190, 49, 88, 0.5)',
            borderColor: '#ed145b',
            hoverBorderColor: '#ed145b'
        }
    \]
};

### Dataset Properties

The radar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th style="text-align:center">Scriptable</th><th style="text-align:center">Indexable</th><th>Default</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderCapStyle</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>'butt'</code></td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderDash</code></td><td><code>number[]</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>[]</code></td></tr><tr><td><code>borderDashOffset</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>0.0</code></td></tr><tr><td><code>borderJoinStyle</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>'miter'</code></td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>3</code></td></tr><tr><td><code>hoverBackgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderCapStyle</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderDash</code></td><td><code>number[]</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderDashOffset</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderJoinStyle</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr><tr><td><code>fill</code></td><td><code>boolean|string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">-</td><td><code>true</code></td></tr><tr><td><code>label</code></td><td><code>string</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>''</code></td></tr><tr><td><code>order</code></td><td><code>number</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>0</code></td></tr><tr><td><code>lineTension</code></td><td><code>number</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>0</code></td></tr><tr><td><code>pointBackgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>pointBorderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>pointBorderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>1</code></td></tr><tr><td><code>pointHitRadius</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>1</code></td></tr><tr><td><code>pointHoverBackgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>pointHoverBorderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>pointHoverBorderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>1</code></td></tr><tr><td><code>pointHoverRadius</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>4</code></td></tr><tr><td><code>pointRadius</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>3</code></td></tr><tr><td><code>pointRotation</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>0</code></td></tr><tr><td><code>pointStyle</code></td><td><code>string|Image</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'circle'</code></td></tr><tr><td><code>spanGaps</code></td><td><code>boolean</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>undefined</code></td></tr></tbody></table>

### General

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr><td><code>order</code></td><td>The drawing order of dataset.</td></tr></tbody></table>

### Point Styling

The style of each point can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>pointBackgroundColor</code></td><td>The fill color for points.</td></tr><tr><td><code>pointBorderColor</code></td><td>The border color for points.</td></tr><tr><td><code>pointBorderWidth</code></td><td>The width of the point border in pixels.</td></tr><tr><td><code>pointHitRadius</code></td><td>The pixel size of the non-displayed point that reacts to mouse events.</td></tr><tr><td><code>pointRadius</code></td><td>The radius of the point shape. If set to 0, the point is not rendered.</td></tr><tr><td><code>pointRotation</code></td><td>The rotation of the point in degrees.</td></tr><tr><td><code>pointStyle</code></td><td>Style of the point. more...</td></tr></tbody></table>

All these values, if `undefined`, fallback first to the dataset options then to the associated `elements.point.*` options.

### Line Styling

The style of the line can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td>The line fill color.</td></tr><tr><td><code>borderCapStyle</code></td><td>Cap style of the line. See MDN.</td></tr><tr><td><code>borderColor</code></td><td>The line color.</td></tr><tr><td><code>borderDash</code></td><td>Length and spacing of dashes. See MDN.</td></tr><tr><td><code>borderDashOffset</code></td><td>Offset for line dashes. See MDN.</td></tr><tr><td><code>borderJoinStyle</code></td><td>Line joint style. See MDN.</td></tr><tr><td><code>borderWidth</code></td><td>The line width (in pixels).</td></tr><tr><td><code>fill</code></td><td>How to fill the area under the line. See area charts.</td></tr><tr><td><code>lineTension</code></td><td>Bezier curve tension of the line. Set to 0 to draw straightlines.</td></tr><tr><td><code>spanGaps</code></td><td>If true, lines will be drawn between points with no or null data. If false, points with <code>NaN</code> data will create a break in the line.</td></tr></tbody></table>

If the value is `undefined`, `spanGaps` fallback to the associated chart configuration options. The rest of the values fallback to the associated `elements.line.*` options.

### Interactions

The interaction with each point can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>pointHoverBackgroundColor</code></td><td>Point background color when hovered.</td></tr><tr><td><code>pointHoverBorderColor</code></td><td>Point border color when hovered.</td></tr><tr><td><code>pointHoverBorderWidth</code></td><td>Border width of point when hovered.</td></tr><tr><td><code>pointHoverRadius</code></td><td>The radius of the point when hovered.</td></tr></tbody></table>

### Configuration Options

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>spanGaps</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If false, NaN data causes a break in the line.</td></tr></tbody></table>

### Scale Options

The radar chart supports only a single scale. The options for this scale are defined in the `scale` property. The options for this scale are defined in the `scale` property, which can be referenced from the Linear Radial Axis page.

		options = {
			scale: {
				angleLines: {
					display: false
				},
				ticks: {
					suggestedMin: 50,
					suggestedMax: 100
				}
			}
		};

### Data Structure

The `data` property of a dataset for a radar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index.

		data: \[20, 10\]

For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart.

		data: {
			labels: \['Running', 'Swimming', 'Eating', 'Cycling'\],
			datasets: \[{
				data: \[20, 10, 4, 2\]
			}\]
		}

### Methods

#### .addData(valuesArray, label)

Adds a new data to chart.

	radarChart.addData(\[40, 60\], 'Working');

#### .update()

Update the dataset's value.

	// Would update the first dataset's value of 'March' to be 50
	radarChart.data.datasets\[0\].data\[2\] = 50;
	// Calling update now animates the position of March from 90 to 50.
	radarChart.update();

#### .removeData()

Remove the first value for all datasets on the chart.

	radarChart.removeData();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.chart.click</td><td>Triggered when the click ocurrs on a radar chart area.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.chart.click

This event is fired when the click ocurrs on a radar chart area. The returned object has the label attributes and the value of the chart area.

	$('YOUR\_SELECTOR').on('fluig.chart.click', function(data) {
		// Do something
	});

# Chart Polar

## Examples

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

### Live demo

Below an example of polar chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the polar chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the polar function
var polarChart = chart.polar(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the polar function
var polarChart = chart.polar(data, options);

### Data structure

The chart data you pass in an array of objects, with a value and a colour.

var data = {
    labels: \['bpm', 'ecm', 'social', 'mall', 'wcm'\],
    datasets: \[
        {
            label: 'My First Dataset',
            data: \[300, 50, 100, 40, 120\],
            backgroundColor: \['#b0cc49', '#ed145b', '#c67926', '#d3a82f', '#303030'\],
            hoverBackgroundColor: \['#b0cc49', '#ed145b', '#c67926', '#d3a82f', '#303030'\],
            borderColor: \['rgba(170, 194, 77, 0.5)', 'rgba(190, 49, 88, 0.5)', 'rgba(198, 121, 38, 0.5)', 'rgba(211, 168, 47, 0.5)', 'rgba(43, 43, 42, 0.5)'\],
            hoverBorderColor: \['rgba(170, 194, 77, 0.5)', 'rgba(190, 49, 88, 0.5)', 'rgba(198, 121, 38, 0.5)', 'rgba(211, 168, 47, 0.5)', 'rgba(43, 43, 42, 0.5)'\]
        }
    \]
};

### Dataset Properties

The following options can be included in a polar area chart dataset to configure options for that specific dataset.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th style="text-align:center">Scriptable</th><th style="text-align:center">Indexable</th><th>Default</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderAlign</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'center'</code></td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'#fff'</code></td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>2</code></td></tr><tr><td><code>data</code></td><td><code>number[]</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><strong>required</strong></td></tr><tr><td><code>hoverBackgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr></tbody></table>

### Styling

The style of each arc can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td>arc background color.</td></tr><tr><td><code>borderColor</code></td><td>arc border color.</td></tr><tr><td><code>borderWidth</code></td><td>arc border width (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated `elements.arc.*` options.

### Border Alignment

The following values are supported for `borderAlign`.

-   `'center'` (default)
-   `'inner'`

When `'center'` is set, the borders of arcs next to each other will overlap. When `'inner'` is set, it is guaranteed that all the borders are not overlap.

### Interactions

The interaction with each arc can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>hoverBackgroundColor</code></td><td>arc background color when hovered.</td></tr><tr><td><code>hoverBorderColor</code></td><td>arc border color when hovered.</td></tr><tr><td><code>hoverBorderWidth</code></td><td>arc border width when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated `elements.arc.*` options.

### Config Options

These are the customisation options specific to Polar Area charts. These options are merged with the global chart default options, and form the options of the chart.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>startAngle</code></td><td><code>number</code></td><td><code>-0.5 * Math.PI</code></td><td>Starting angle to draw arcs for the first item in a dataset.</td></tr><tr><td><code>animation.animateRotate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the chart will animate in with a rotation animation. This property is in the <code>options.animation</code> object.</td></tr><tr><td><code>animation.animateScale</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, will animate scaling the chart from the center outwards.</td></tr></tbody></table>

### Data Structure

For a polar area chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.

You also need to specify an array of labels so that tooltips appear correctly for each slice.

		data = {
			datasets: \[{
				data: \[10, 20, 30\]
			}\],

			// These labels appear in the legend and in the tooltips when hovering different arcs
			labels: \[
				'Red',
				'Yellow',
				'Blue'
			\]
		};

### Methods

#### .addData(valuesArray, label)

Adds a new data to chart.

	polarChart.addData(\[40\], 'Purple');

#### .update()

Update the dataset's value.

	polarChart.data.datasets\[0\].data\[3\] = 50;
	polarChart.update();

#### .removeData()

Remove the first value for all datasets on the chart.

	polarChart.removeData();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.chart.click</td><td>Triggered when the click ocurrs on a polar chart area.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.chart.click

This event is fired when the click ocurrs on a polar chart area. The returned object has the label attributes and the value of the chart area.

	$('YOUR\_SELECTOR').on('fluig.chart.click', function(data) {
		// Do something
	});

# Chart Doughnut and Pie

Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their `cutoutPercentage`. This equates what percentage of the inner should be cut out. This defaults to `0` for pie charts, and `50` for doughnuts.

They are also registered under two aliases in the `Chart` core. Other than their different default value, and different alias, they are exactly the same.

## Doughnut examples

Doughnut chart is divided into segments, the arc of each segment shows the proportional value of each piece of data.

### Live demo

Below an example of doughnut chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the doughnut chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the doughnut function
var doughnutChart = chart.doughnut(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the doughnut function
var doughnutChart = chart.doughnut(data, options);

### Data structure

For a doughnut chart, you must pass in an array of objects with a value and a color property.

var data = {
    labels: \['bpm', 'ecm', 'social', 'mall', 'wcm'\],
    datasets: \[
        {
            label: 'My First Dataset',
            data: \[300, 50, 100, 40, 120\],
            backgroundColor: \['#b0cc49', '#ed145b', '#c67926', '#d3a82f', '#303030'\],
            hoverBackgroundColor: \['#b0cc49', '#ed145b', '#c67926', '#d3a82f', '#303030'\],
            borderColor: \['rgba(170, 194, 77, 0.5)', 'rgba(190, 49, 88, 0.5)', 'rgba(198, 121, 38, 0.5)', 'rgba(211, 168, 47, 0.5)', 'rgba(43, 43, 42, 0.5)'\],
            hoverBorderColor: \['rgba(170, 194, 77, 0.5)', 'rgba(190, 49, 88, 0.5)', 'rgba(198, 121, 38, 0.5)', 'rgba(211, 168, 47, 0.5)', 'rgba(43, 43, 42, 0.5)'\]
        }
    \]
};

## Pie example

Pie chart is divided into segments, the arc of each segment shows the proportional value of each piece of data.

### Live demo

Below an example of pie chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the pie chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the pie function
var pieChart = chart.pie(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the pie function
var pieChart = chart.pie(data, options);

### Data structure

For a pie chart, you must pass in an array of objects with a value and a color property.

var data = {
	labels: \['bpm', 'ecm', 'social', 'mall', 'wcm'\],
	datasets: \[
		{
			label: 'My First Dataset',
			data: \[300, 50, 100, 40, 120\],
			backgroundColor: \['#b0cc49', '#ed145b', '#c67926', '#d3a82f', '#303030'\],
			hoverBackgroundColor: \['#b0cc49', '#ed145b', '#c67926', '#d3a82f', '#303030'\],
			borderColor: \['rgba(170, 194, 77, 0.5)', 'rgba(190, 49, 88, 0.5)', 'rgba(198, 121, 38, 0.5)', 'rgba(211, 168, 47, 0.5)', 'rgba(43, 43, 42, 0.5)'\],
			hoverBorderColor: \['rgba(170, 194, 77, 0.5)', 'rgba(190, 49, 88, 0.5)', 'rgba(198, 121, 38, 0.5)', 'rgba(211, 168, 47, 0.5)', 'rgba(43, 43, 42, 0.5)'\]
		}
	\]
};

### Dataset Properties

The doughnut/pie chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colours of the dataset's arcs are generally set this way.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th style="text-align:center">Scriptable</th><th style="text-align:center">Indexable</th><th>Default</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr><td><code>borderAlign</code></td><td><code>string</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'center'</code></td></tr><tr><td><code>borderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>'#fff'</code></td></tr><tr><td><code>borderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>2</code></td></tr><tr><td><code>data</code></td><td><code>number[]</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><strong>required</strong></td></tr><tr><td><code>hoverBackgroundColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderColor</code></td><td><code>Color</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td style="text-align:center">Yes</td><td style="text-align:center">Yes</td><td><code>undefined</code></td></tr><tr><td><code>weight</code></td><td><code>number</code></td><td style="text-align:center">-</td><td style="text-align:center">-</td><td><code>1</code></td></tr></tbody></table>

### Styling

The style of each arc can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>backgroundColor</code></td><td>arc background color.</td></tr><tr><td><code>borderColor</code></td><td>arc border color.</td></tr><tr><td><code>borderWidth</code></td><td>arc border width (in pixels).</td></tr><tr><td><code>weight</code></td><td>The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated `elements.arc.*` options.

### Border Alignment

The following values are supported for `borderAlign`.

-   `'center'` (default)
-   `'inner'`

When `'center'` is set, the borders of arcs next to each other will overlap. When `'inner'` is set, it is guaranteed that all borders will not overlap.

### Interactions

The interaction with each arc can be controlled with the following properties:

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>hoverBackgroundColor</code></td><td>arc background color when hovered.</td></tr><tr><td><code>hoverBorderColor</code></td><td>arc border color when hovered.</td></tr><tr><td><code>hoverBorderWidth</code></td><td>arc border width when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated `elements.arc.*` options.

### Config Options

These are the customisation options specific to Pie & Doughnut charts. These options are merged with the global chart configuration options, and form the options of the chart.

<table class="table table-bordered table-striped"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>cutoutPercentage</code></td><td><code>number</code></td><td><code>50</code> - for doughnut, <code>0</code> - for pie</td><td>The percentage of the chart that is cut out of the middle.</td></tr><tr><td><code>rotation</code></td><td><code>number</code></td><td><code>-0.5 * Math.PI</code></td><td>Starting angle to draw arcs from.</td></tr><tr><td><code>circumference</code></td><td><code>number</code></td><td><code>2 * Math.PI</code></td><td>Sweep to allow arcs to cover.</td></tr><tr><td><code>animation.animateRotate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the chart will animate in with a rotation animation. This property is in the <code>options.animation</code> object.</td></tr><tr><td><code>animation.animateScale</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, will animate scaling the chart from the center outwards.</td></tr></tbody></table>

### Default Options

We can also change these default values for each Doughnut type that is created, this object is available at `Chart.defaults.doughnut`. Pie charts also have a clone of these defaults available to change at `Chart.defaults.pie`, with the only difference being `cutoutPercentage` being set to 0.

### Data Structure

For a pie chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.

You also need to specify an array of labels so that tooltips appear correctly.

data = {
    datasets: \[{
        data: \[10, 20, 30\]
    }\],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: \[
        'Red',
        'Yellow',
        'Blue'
    \]
};

### Methods

#### .addData(valuesArray, label)

Adds a new data to chart.

	// doughnut
	doughnutChart.addData(\[40\], 'Purple');
	
	// pie
	pieChart.addData(\[40\], 'Purple');

#### .update()

Update the dataset's value.

	// doughnut
	doughnutChart.data.datasets\[0\].data\[3\] = 50;
	doughnutChart.update();

	// pie
	pieChart.data.datasets\[0\].data\[3\] = 50;
	pieChart.update();

#### .removeData()

Remove the first value for all datasets on the chart.

	// doughnut
	doughnutChart.removeData();

	// pie
	pieChart.removeData();

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.chart.click</td><td>Triggered when the click ocurrs on a doughnut/pie chart area.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.chart.click

This event is fired when the click ocurrs on a doughnut/pie chart area. The returned object has the label attributes and the value of the chart area.

	$('YOUR\_SELECTOR').on('fluig.chart.click', function(data) {
		// Do something
	});

# Chart Gauge

## Examples

Allows the creation of a chart style of a manometer

### Live demo

Below an example of gauge chart

Set to 10 Set to 2500

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the gauge chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the gauge function
var chartGauge = chart.gauge();

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200'
});
// call the gauge function
var chartGauge = chart.gauge({
	lines: 12,
	angle: 0.15,
	lineWidth: 0.44,
	pointer: {
		length: 0.9,
		strokeWidth: 0.035,
		color: '#000000'
	},
	limitMax: 'false',
	colorStart: '#6FADCF',
	colorStop: '#8FC0DA',
	borderColor: '#E0E0E0',
	generateGradient: true
});

### Gauge Chart options

The options object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>lines</td><td>number</td><td>12</td><td>The number of lines to draw</td></tr><tr><td>angle</td><td>number</td><td>0.15</td><td>The length of each line</td></tr><tr><td>lineWidth</td><td>number</td><td>0.44</td><td>The line thickness</td></tr><tr><td>pointer</td><td>object</td><td>''</td><td>Settings pointer</td></tr><tr><td>limitMax</td><td>string</td><td>'false'</td><td>If true, the pointer will not go past the end of the gauge</td></tr><tr><td>colorStart</td><td>string</td><td>'#faa61a'</td><td>Colors</td></tr><tr><td>colorStop</td><td>string</td><td>'#ed145b'</td><td>Colors</td></tr><tr><td>borderColor</td><td>string</td><td>'#ed145b'</td><td>To see which ones work best for you</td></tr><tr><td>generateGradient</td><td>boolean</td><td>true</td><td>Generate Gradient</td></tr></tbody></table>

### Settings to Object pointer

The options object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>length</td><td>number</td><td>0.9</td><td>The radius of the inner circle</td></tr><tr><td>strokeWidth</td><td>number</td><td>0.035</td><td>The rotation offset</td></tr><tr><td>color</td><td>string</td><td>'#000000'</td><td>Fill color</td></tr></tbody></table>

### You can change the following attributes

#### maxValue

Set max gauge value.

	gaugeChart.maxValue = 3000;	

#### animationSpeed

Set animation speed (32 is default value).

	gaugeChart.animationSpeed = 74;	

### Methods

#### .set(newValue)

Set actual value.

	gaugeChart.set(925);

# Chart Donut

## Examples

Allows the creation of a chart style of a donut

### Live demo

Below an example of donut chart

Set to 10 Set to 2500

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the donut chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the donut function
var chartDonut = chart.donut();

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200'
});
// call the donut function
var chartDonut = chart.donut({
	lines: 12,
	angle: 0.15,
	lineWidth: 0.44,
	pointer: {
		length: 0.9,
		strokeWidth: 0.035,
		color: '#000000'
	},
	limitMax: 'false',
	colorStart: '#6FADCF',
	colorStop: '#8FC0DA',
	strokeColor: '#E0E0E0',
	generateGradient: true
});

### Donut Chart options

The options object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>lines</td><td>number</td><td>12</td><td>The number of lines to draw</td></tr><tr><td>angle</td><td>number</td><td>0.15</td><td>The length of each line</td></tr><tr><td>lineWidth</td><td>number</td><td>0.44</td><td>The line thickness</td></tr><tr><td>pointer</td><td>object</td><td>''</td><td>Settings pointer</td></tr><tr><td>limitMax</td><td>string</td><td>'false'</td><td>If true, the pointer will not go past the end of the donut</td></tr><tr><td>colorStart</td><td>string</td><td>'#faa61a'</td><td>Colors</td></tr><tr><td>colorStop</td><td>string</td><td>'#ed145b'</td><td>Colors</td></tr><tr><td>strokeColor</td><td>string</td><td>'#303030'</td><td>To see which ones work best for you</td></tr><tr><td>generateGradient</td><td>boolean</td><td>true</td><td>Generate Gradient</td></tr></tbody></table>

### Settings to Object pointer

The options object has the following attributes:

<table class="table table-bordered table-striped"><thead><tr><th style="width: 15%;">Name</th><th style="width: 25%;">type</th><th style="width: 25%;">default</th><th>description</th></tr></thead><tbody><tr><td>length</td><td>number</td><td>0.9</td><td>The radius of the inner circle</td></tr><tr><td>strokeWidth</td><td>number</td><td>0.035</td><td>The rotation offset</td></tr><tr><td>color</td><td>string</td><td>'#000000'</td><td>Fill color</td></tr></tbody></table>

### You can change the following attributes

#### maxValue

Set max gauge value.

	donutChart.maxValue = 3000;	

#### animationSpeed

Set animation speed (32 is default value).

	donutChart.animationSpeed = 74;	

### Methods

#### .set(newValue)

Set actual value.

	donutChart.set(925);

# Chart Mixed

## Examples

A mixed chart is a mix of line chart and bar chart.

### Live demo

Below an example of mixed chart

Add Update Remove

### HTML

<div id="MY\_SELECTOR"></div>

### Javascript

Below is the basic configuration to use the line chart.

var chart = FLUIGC.chart('#MY\_SELECTOR');
// call the mixed function
var mixedChart = chart.mixed(data, options);

### Javascript

Below is the configuration, with the id, width and height of the canvas.

var chart = FLUIGC.chart('#MY\_SELECTOR', {
	id: 'set\_an\_id\_for\_my\_chart',
	width: '700',
	height: '200',
	/\* See the list of options \*/
});
// call the mixed function
var mixedChart = chart.mixed(data, options);

### Data structure

The mixed chart requires an array of labels and an array of datasets.

var data = {
    labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\],
    datasets: \[
        {
            label: 'My First dataset',
			type: 'line',
            data: \[65, 59, 80, 81, 56, 55, 40\],
            backgroundColor: 'rgba(170, 194, 77, 0.5)',
            hoverBackgroundColor: 'rgba(170, 194, 77, 0.5)',
            borderColor: '#b0cc49',
            hoverBorderColor: '#b0cc49'
        },
        {
            label: 'My Second dataset',
			type: 'bar',
            data: \[28, 48, 40, 19, 86, 27, 90\],
            backgroundColor: 'rgba(190, 49, 88, 0.5)',
            hoverBackgroundColor: 'rgba(190, 49, 88, 0.5)',
            borderColor: '#ed145b',
            hoverBorderColor: '#ed145b'
        }
    \]
};

### Drawing order

By default, datasets are drawn so that first one is top-most. This can be altered by specifying `order` option to datasets. `order` defaults to `0`.

var data = {
	labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\],
	datasets: \[
		{
			label: 'My First dataset',
			type: 'line',
			data: \[65, 59, 80, 81, 56, 55, 40\]
			// this dataset is drawn below
			order: 1
		},
		{
			label: 'My Second dataset',
			type: 'bar',
			data: \[28, 48, 40, 19, 86, 27, 90\],
			// this dataset is drawn on top
			order: 2
		}
	\]
};

### Mixed Chart options and methods

You can use the same attributes and methods used to line charts and bar.

## Events

<table class="table table-bordered table-striped"><thead><tr><th style="width: 25%;">Name</th><th>Description</th></tr></thead><tbody><tr><td>fluig.chart.click</td><td>Triggered when the click ocurrs on a mixed chart area.</td></tr></tbody></table>

### Events triggered by element selector

#### fluig.chart.click

This event is fired when the click ocurrs on a mixed chart area. The returned object has the label attributes and the value of the chart area.

	$('YOUR\_SELECTOR').on('fluig.chart.click', function(data) {
		// Do something
	});
