var dyd = dyd || {};

/* Draw Your Diagram
 * Core module - handles the different diagram types */

$.fn.dyd = function (settings) {
    settings = $.extend( {}, $.fn.dyd.defaultSettings, settings);

    // region module initialization
    dyd.$elems.init(this);
    dyd.canvas.init();
    // endregion

    dyd[settings.type](settings);
};