var employee1 = ['Jack', 'Beyer', '@thejackbeyer'];
var fname = employee1[0], lname = employee1[1], twitter_tag = employee1[2];
console.log(fname + ":" + lname + ":" + twitter_tag);
var lname1 = employee1[1];
console.log(lname1);
var fname2 = employee1[0], remaining = employee1.slice(1);
console.log(fname2 + "-" + remaining);
console.log(typeof remaining);
var fname3 = employee1[0], lname3 = employee1[1], _a = employee1[2], t_tag = _a === void 0 ? "@elon_musk" : _a;
console.log(t_tag);
//Object Destructuring
var employee2 = {
    fname: "Eric",
    lname: "Berger",
    t_tag: "@SciGuySpace"
};
var f = employee2.fname, l = employee2.lname, t = employee2.t_tag;
console.log(f + "-" + l + "-" + t);
//# sourceMappingURL=17-DestructureArray%20copy.js.map