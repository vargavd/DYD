var dyd = dyd || {};

/* $Elems Module
 * Creates and provides the DOM elements for every diagram type. */

dyd.$elems = {};
dyd.$elems.init = function ($wrapper) {
    'use strict';

    var wrapper = $wrapper,
        canvas = wrapper.find("canvas"),
        xAxisValues = wrapper.find("#dyd-xaxis"),
        yAxisValues = wrapper.find("#dyd-yaxis");

    dyd.$elems = {
        // region basic elements
        wrapper: wrapper,
        canvas: canvas,
        xAxisValues: xAxisValues,
        yAxisValues: yAxisValues,
        getXAxisValues: function () { xAxisValues.find(".xaxis-value"); },
        getYAxisValues: function () { yAxisValues.find(".yaxis-value"); }
        // endregion
    };
};