var dyd = dyd || {};

dyd.barchart = function (settings) {
    var
        // basic info
        cWidth = dyd.canvas.width,
        cHeight = dyd.canvas.height,
        centerX = cWidth/2,
        centerY = cHeight/2,
        cDiameter = Math.sqrt(cWidth*cWidth + cHeight*cHeight),
        columns;

    // region draw background
    dyd.canvas.drawRect(0, 0, cWidth, cHeight,
            dyd.canvas.getRadialGradient(centerX, centerY, cDiameter*0.05, centerX, centerY, cDiameter*0.9,
                [ [0, "#fff"],
                  [1, "#ccf"] ]
            )
    );

    dyd.canvas.drawLine(0, 0, 0, cHeight, 3, "gray");
    dyd.canvas.drawLine(0, cHeight, cWidth, cHeight, 3, "gray");
    // endregion

    columns = [
        [ "aaa", Math.round(20 * Math.random()) ],
        [ "bbb", Math.round(20 * Math.random()) ],
        [ "ccc", Math.round(20 * Math.random()) ],
        [ "ddd", Math.round(20 * Math.random()) ],
        [ "eee", Math.round(20 * Math.random()) ],
        [ "fff", Math.round(20 * Math.random()) ],
        [ "ggg", Math.round(20 * Math.random()) ]
    ];
    
    var maxValue = dyd.utils.max(columns, 2);
    var textHeight = dyd.canvas.getTextHeight();
    var maxYValue = Math.ceil( maxValue * textHeight / (cHeight - textHeight) );

    for (var i = 0; i < 10; i++) {
        dyd.canvas.drawLine(0, i*cHeight/10, cWidth, i*cHeight/10, 1, "#ccc")
    }

    var barWrapperWidth = cWidth/5;
    var barWidth = barWrapperWidth * 0.7;
    var barMargin = (barWrapperWidth - barWidth)/2;
    var barValue, barLeftX;
    var barText;

    // calculating

    for (var i = 0; i < 5; i++) {
        barValue = cHeight * Math.random();
        barLeftX = i*barWrapperWidth + barMargin;
        barText = (Math.round((barValue/cHeight)*1000))/100;
        dyd.canvas.drawRect(barLeftX, cHeight-barValue, barWidth, cHeight, "#a00", true);
        dyd.canvas.drawText(barLeftX + barWidth/2, cHeight-barValue-8, barText, "black");
    }
};