var _a;
var firstname = "First";
var lastname = "Last";
var person = {
    firstname: firstname,
    lastname: lastname
};
function createPersion(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPersion("nara", "Prasad", 32);
console.log(p.fullname + "--" + (p.isSenior() ? "Senior" : "Not a senior"));
var firstnameProp = "Abc";
var person2 = (_a = {},
    _a[firstnameProp] = firstname,
    _a["last name"] = lastname,
    _a);
console.log(person2["last name"]);
console.log(person2.Abc);
console.log(person2["Abc"]);
console.log(person2);
//# sourceMappingURL=15-ObjectLiterals%20copy.js.map