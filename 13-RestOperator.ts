let displayColors = function(message, ...colors){
    console.log(message);
    console.log("Length of arguments: " + arguments.length);
    for(let i in colors){
        console.log(colors[i]);
    }
    console.log("--------------------");
}

let displaySpreadOpr = function(message, color1,color2,color3){
    console.log(message);
    var colors = [color1,color2,color3];
    console.log("Length of arguments spread:  " + arguments.length);
    for(let i in colors){
        console.log(colors[i]);
    }
    console.log("--------------------");
}

let mesg = "List of colors";

let colorArr = ["Orange","Yelllow","Indigo"];

displaySpreadOpr(mesg,...colorArr);

displayColors(mesg,...colorArr);
displayColors(mesg, "Red",2);
displayColors(mesg, "Red","Green",3);
displayColors(mesg,"Red","Green","Blue");
displayColors();
displayColors();