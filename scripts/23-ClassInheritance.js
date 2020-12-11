var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name) {
        console.log(name + "Person constructor");
    }
    Person1.prototype.getId = function () {
        return 20;
    };
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + "Employee constructor");
        return _this;
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this) + 2;
    };
    return Employee;
}(Person1));
var e = new Employee("Chandler");
console.log(e.getId());
//# sourceMappingURL=23-ClassInheritance.js.map