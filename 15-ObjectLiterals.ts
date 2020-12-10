let firstname = "First";
let lastname ="Last";

let person = {
    firstname: firstname,
    lastname: lastname
}

function createPersion(firstname, lastname, age){
    let fullname = firstname + " " + lastname;
    return {
        fullname,
        isSenior(){
            return age>60;
        }
    }
}

let p = createPersion("nara","Prasad", 32);
console.log(p.fullname + "--" + (p.isSenior() ? "Senior" : "Not a senior" ));

var firstnameProp = "Abc";
let person2 = {
    [firstnameProp]: firstname,
    "last name": lastname,
}
console.log(person2["last name"]);
console.log(person2.Abc);
console.log(person2["Abc"]);
console.log(person2);
