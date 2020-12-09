function lexicalThisTest(arg){
    var gree;
    if(arg == 'crab'){
        gree = "Crabbing";
    }else{
        gree = 'Thanks';
    }
    console.log(gree);
}

lexicalThisTest("BlaBla");

var employee ={
    id:1,
    greet: function(){
        console.log(this.id);
        setTimeout(function(){console.log(this.id);})
    },
    greet2: function(){
        var self = this;

        var greet21emp = {
            id:2,
            greet21: function(){
            console.log("Inside greet2: "+this.id); // No accessible
            console.log("Inside greet2: "+self.id); // accessible
            }
        }
        greet21emp.greet21();
    }
}

var employee_arrow = {
    id: 1,
    greet: function(){
        setTimeout(()=>{console.log("Inside Arrow Function:" + this.id)});
    }
}

var employee_arrow2 ={
    id:1,
    greet: function(){
        console.log(this.id);
        setTimeout(function(){console.log(this.id);})
    },
    greet2: function(){
        var greet21emp = {
            id:2,
            greet21: () =>{
            console.log("Inside Arrow greet2: "+this.id); // accessible
            }
        }
        greet21emp.greet21();
    }
}


employee.greet();
employee_arrow.greet();
employee.greet2();  // We can not do this.
employee_arrow2.greet2();

var functionArgs = function(first = 20, second=30){
    console.log("First:"+first+ "Second:"+ second);
}
functionArgs();
functionArgs(null,35);
functionArgs(NaN,33);
functionArgs(undefined,33);

var percent = 8;/*
var functionArgs2 = function(first = third * 20, second=first * 30, third = percent * 39){
    console.log("First:"+first+ "Second:"+ second);
} */

functionArgs();
functionArgs(null,35);
functionArgs(NaN,33);
functionArgs(undefined,33);