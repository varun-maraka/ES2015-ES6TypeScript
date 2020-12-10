var firstname = "";
var lastname = "";
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
var p = createPersion("nara", "Prasad", 72);
console.log(p.fullname + "--" + p.isSenior);
//# sourceMappingURL=13-RestOperator%20copy.js.map