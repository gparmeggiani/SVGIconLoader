/**
 * SVG Icons Loader v1.0
 * 
 * Giacomo Parmeggiani - giacomoparmeggiani.com
 */

/**
 * SVGIcondLoader.
 * 
 * This will setup an SVG Icon Loader object.
 * Usually you would not need to use the object it returns, since you can tell directly this function
 * what icons pack to load. If you want to load and render them later you might use the .load() method it provides.
 * 
 * @param iconPack - string (or array of strings) with the path to the .svg icon pack
 * @returns SVGIconsLoader object
 */
function SVGIconsLoader(iconPack) {
    
    var that = {},
        $IconsContainer,
        SVGNS = 'http://www.w3.org/2000/svg',
        XLINK = 'http://www.w3.org/1999/xlink';
    
    function setup() {
        //load the container for icons packs OR create a new one if it doesn't exist
        $IconsContainer = $(".icons-definition-container");
        if(!$IconsContainer.length) {
            $IconsContainer = $("<div>");
            $IconsContainer.addClass("icons-definition-container");
            $("body").first().prepend($IconsContainer);
        }
        //make sure the container is hidden
        $IconsContainer.hide();
    }
    
    function render() {
        $(".svgIcon").each(function(index, element){
            var $element=$(element);
            
            //remove pre-existing svg elements
            $element.find("svg").remove();
            
            //get viewBox from iconPack svg container
            var $ico = $IconsContainer.find("#"+$element.attr("data-svgicon-id"));
            if($ico.length === 0) {
                return true; //skip iteration
            }
            var viewBox = $ico.parents("svg")[0].getAttributeNS(null,"viewBox");
            
            //create <svg> element inside the icon container
            var svgElem = document.createElementNS(SVGNS, "svg");
            svgElem.setAttributeNS(null, "viewBox", viewBox);
            element.appendChild(svgElem);
            
            //create and append <use> tag to the <svg> element
            var use = document.createElementNS(SVGNS, "use");
            use.setAttributeNS(XLINK, "href", "#"+$element.attr("data-svgicon-id"));
            svgElem.appendChild(use);
        });
    };
    
    that.load = function(iconPack) {
        //load svg icons packs inside the div
        if(iconPack instanceof Array) {
            for(var i = 0; i < iconPack.length; i++){
                $IconsContainer.load(iconPack[i], function(){
                    render();
                });
            }
        } else if(typeof iconPack === 'string' || iconPack instanceof String) {
            var $pack = $("<div>").load(iconPack, function(){
                $IconsContainer.append($pack.first());
                render();
            });
        }
    };
    
    setup();
    //Load and display while constructing
    if(iconPack !== undefined) {
        that.load(iconPack);
    }
    
    return that;
}