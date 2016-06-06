var dyd = dyd || {};
dyd.$elems = dyd.$elems || {};

/* Canvas Module
 * Responsible for drawing the primitives. */

dyd.canvas = {};
dyd.canvas.init = function () {
    'use strict';

    var $canvas = dyd.$elems.canvas,
        ctx = $canvas[0].getContext("2d"),
        defaults = {
            strokeStyle: "rgb(50, 50, 50)",
            fillStyle: "rgb(200, 200, 200)",
            fontFamily: "Arial",
            fontSize: "14"
        };

    dyd.canvas = {
        // region draw functions
        drawText: function (x, y, text, fillStyle, fontFamily, fontSize) {
            fontSize = fontSize ? fontSize : defaults.fontSize;
            fontFamily = fontFamily ? fontFamily : defaults.fontFamily;
            fillStyle = fillStyle ? fillStyle : defaults.fillStyle;

            ctx.beginPath();
            ctx.font = fontSize + 'px ' + fontFamily;
            ctx.fillStyle = fillStyle;
            ctx.textAlign = 'center';
            ctx.fillText(text, x, y);
        },
        drawLine: function (x1, y1, x2, y2, width, strokeStyle) {
            ctx.beginPath();
            ctx.strokeStyle = (strokeStyle) ? strokeStyle : defaults.strokeStyle;
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        },
        drawCircle: function (x, y, r, fillStyle) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.fillStyle = (fillStyle) ? fillStyle : defaults.fillStyle;
            ctx.fill();
        },
        drawSphere: function (x, y, r, x0, y0, r0, x1, y1, r1, colorStops) {
            var grd = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);

            colorStops.forEach(function (colorStop) {
                grd.addColorStop(colorStop[0], colorStop[1]);
            });

            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.fillStyle = (fillStyle) ? fillStyle : defaults.fillStyle;
            ctx.fill();
        },
        drawRect: function (x, y, a, b, fillStyle, drawShadow) {
            ctx.beginPath();
            ctx.fillStyle = (fillStyle) ? fillStyle : defaults.fillStyle;

            if (drawShadow) {
                ctx.shadowColor = "#888";
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = 5;
            }

            ctx.fillRect(x, y, a, b);
        },
        // endregion

        // region gradients
        getLinearGradient: function (x0, y0, x1, y1, colorStops) {
            var grd = ctx.createLinearGradient(x0, y0, x1, y1);

            colorStops.forEach(function (colorStop) {
                grd.addColorStop(colorStop[0], colorStop[1]);
            });

            return grd;
        },
        getRadialGradient: function (x0, y0, r0, x1, y1, r1, colorStops) {
            var grd = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);

            colorStops.forEach(function (colorStop) {
                grd.addColorStop(colorStop[0], colorStop[1]);
            });

            return grd;
        },
        // endregion

        // region get dynamic informations
        getTextHeight: function (fontSize) {
            var fs = fontSize ? fontSize : defaults.fontSize;

            fs = fs.toLowerCase().replace("px", "").replace("pt", "").trim();

            return fs * 1.5;
        },

        // region canvas size
        width: $canvas.width(),
        height: $canvas.height(),
        defaultFontSize: defaults.fontSize
        // endregion
    };
};