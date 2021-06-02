/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

/*for(i = 0; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
    console.log("fizzBuzz");
    }else if(i % 3 == 0){
    console.log("fizz");
    }else if(i % 5 == 0){
    console.log("buzz");
    }else{
    console.log(i);
    };
    
    };
    */

    
    /*for(i = 0; i <= 100; i++){

if(i % 3 == 0 && i % 5 == 0){
console.log("fizzBuzz");
}else if(i % 3 == 0){
console.log("fizz");
}else if(i % 5 == 0){
console.log("buzz");
}else{
console.log(i);
};

};

*/


let FB = 150;

//modulus operator is arithmetic operator that returns the division remainder.
if (FB % 3 === 0 && FB % 5 === 0) {
    //&& operator is a logical operator that allows us to compare two or more expressions.
    console.log("Fizz Buzz");
} else if (FB % 5 === 0) {
    console.log(Buzz);
}else if (FB % 3 === 0) {
    console.log("Fizz");
}else {    
    console.log("Your number is not divisible by 5 or 3.");
}

//SWITCH
let FB = 30;

switch(/*expression */) {
    case (FB % 3 === 0 && FB % 5 ===0):
        //console.log
        break;
    case (/*case (conditional) */):
        //console.log
        break;
    case(/*case (conditional) */):
    //console.log
        break;
  default:
        //console.log
}

let FB = 30;

(FB % 3 === 0 && FB % 5 ===0)