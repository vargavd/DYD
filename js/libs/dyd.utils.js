var dyd = dyd || {};

dyd.utils = {
    max: function (data, pName) {
        var max, i;

        max = data[0][pName];

        for (i = 1; i < data.length; i++)
            if (max < data[i][pName])
                max = data[i][pName];

        return max;
    },
    min: function (data, pName) {
        var min, i;

        min = data[0][pName];

        for (i = 1; i < data.length; i++)
            if (min > data[i][pName])
                min = data[i][pName];

        return min;
    }
};