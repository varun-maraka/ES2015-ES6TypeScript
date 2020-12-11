let user = "SpaceX", user2 = "NSf";

let message = `Starship landing flip maneuver by ${user}
This was also re tweeted by ${user2}
    You can tell when the engines start getting starved of fuel.
    Looks like one shut down and the other one kept sipping on fumes and then ran engine rich.
    They will knock it out of the park for SN9`;

console.log(message);

let users = ["BioxLive", "Chris B - NSF", "Everyday Austronaut"] ;
let strUser = "Everyday";
for(let index in users){
    console.log(users[index]);
}
console.log("--")
for(let user of users){
    console.log(user);
}
console.log("--")
for(let eachChar of strUser){
    console.log(eachChar);
}