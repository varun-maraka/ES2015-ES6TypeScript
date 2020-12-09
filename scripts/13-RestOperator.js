var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log("Length of arguments: " + arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
    console.log("--------------------");
};
var displaySpreadOpr = function (message, color1, color2, color3) {
    console.log(message);
    var colors = [color1, color2, color3];
    console.log("Length of arguments spread:  " + arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
    console.log("--------------------");
};
var mesg = "List of colors";
var colorArr = ["Orange", "Yelllow", "Indigo"];
displaySpreadOpr.apply(void 0, __spreadArrays([mesg], colorArr));
displayColors.apply(void 0, __spreadArrays([mesg], colorArr));
displayColors(mesg, "Red", 2);
displayColors(mesg, "Red", "Green", 3);
displayColors(mesg, "Red", "Green", "Blue");
displayColors();
displayColors();
//# sourceMappingURL=13-RestOperator.js.map