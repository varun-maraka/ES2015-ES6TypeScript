function lexicalThisTest(arg) {
    var gree;
    if (arg == 'crab') {
        gree = "Crabbing";
    }
    else {
        gree = 'Thanks';
    }
    console.log(gree);
}
lexicalThisTest("BlaBla");
var employee = {
    id: 1,
    greet: function () {
        console.log(this.id);
        setTimeout(function () { console.log(this.id); });
    },
    greet2: function () {
        var self = this;
        var greet21emp = {
            id: 2,
            greet21: function () {
                console.log("Inside greet2: " + this.id); // No accessible
                console.log("Inside greet2: " + self.id); // accessible
            }
        };
        greet21emp.greet21();
    }
};
var employee_arrow = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log("Inside Arrow Function:" + _this.id); });
    }
};
var employee_arrow2 = {
    id: 1,
    greet: function () {
        console.log(this.id);
        setTimeout(function () { console.log(this.id); });
    },
    greet2: function () {
        var _this = this;
        var greet21emp = {
            id: 2,
            greet21: function () {
                console.log("Inside Arrow greet2: " + _this.id); // accessible
            }
        };
        greet21emp.greet21();
    }
};
employee.greet();
employee_arrow.greet();
employee.greet2(); // We can not do this.
employee_arrow2.greet2();
var functionArgs = function (first, second) {
    if (first === void 0) { first = 20; }
    if (second === void 0) { second = 30; }
    console.log("First:" + first + "Second:" + second);
};
functionArgs();
functionArgs(null, 35);
functionArgs(NaN, 33);
functionArgs(undefined, 33);
var percent = 8;
var functionArgs2 = function (first, second, third) {
    if (first === void 0) { first = third * 20; }
    if (second === void 0) { second = first * 30; }
    if (third === void 0) { third = percent * 39; }
    console.log("First:" + first + "Second:" + second);
};
functionArgs();
functionArgs(null, 35);
functionArgs(NaN, 33);
functionArgs(undefined, 33);
//# sourceMappingURL=11-lexicalThis%20copy.js.map