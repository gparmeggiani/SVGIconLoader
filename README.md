SVGIconLoader
=============
A small JS library to use SVG icons on a webpage. A single SVG file can be used to store several icons which will then be shown on the page thanks to the \<defs\> and \<use\> SVG tags.
  
## Usage
Load the SVG
```javascript
$(document).ready(function() {
    var icons = SVGIconsLoader("alignIcons.svg");
});
```

Use the icons contained in it
```html
<div title="Align left" class="svgIcon" data-svgicon-id="align-left"></div>
```

## Demo
Checkout the [demo.html](https://github.com/gparmeggiani/SVGIconsLoader/blob/master/demo.html)
