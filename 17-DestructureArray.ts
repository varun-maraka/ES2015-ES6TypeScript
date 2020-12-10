let employee1 = ['Jack','Beyer','@thejackbeyer'];
let [fname,lname,twitter_tag] = employee1;
console.log(fname + ":"+lname+":"+twitter_tag);

let [, lname1] = employee1;
console.log(lname1);

let [fname2, ...remaining] = employee1;
console.log(fname2 + "-" +remaining);
console.log(typeof remaining);

let [fname3, lname3, t_tag ="@elon_musk"] = employee1;
console.log(t_tag);

//Object Destructuring
let employee2 = {
    fname: "Eric",
    lname: "Berger",
    t_tag: "@SciGuySpace"
}

let {fname : f, lname :l, t_tag:t} = employee2;
console.log(f+"-"+l+"-"+t);