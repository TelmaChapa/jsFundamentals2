function greeting() {
    console.log("Hello");
}

greeting();

/*
(1)     (2)
function greeting() {
    console.log ("Hello");
}

greeting();

1-keyword
2-Name of function it has parentesis for parameters
*/

//Expression

//Order matters if you are using Expression for a function

let hello = function() {
    console.log("Hey New Function");
};
hello();

//Challenge 1:
//Create a function that, when invoked, lists out numbers 1-10


//Create a function
//function numbers()

//Create a loop 1 through 10
//let numbers= (10) ME

//Call function ME

function counting() {
    for(let i = 1; i <= 10; i++ ){
        console.log(i);
        //DO CONSOLE LOG
    }
}
counting()

function greetingsStudents(name) {
console.log(`Good Morning ${name}`)
}

greetingsStudents("Telma");
greetingsStudents("Taylor");

/*
|  |  |   |  |  |(1)
function greetinsStudents(name) {
    |   |  | |  |(2)
    console.log(`Good Morning${}`);
}

- 1 The parameter(s) that function is accepting
- 2 Using the string interpolation we can refer to the parameter that was given to the function
*/

function area(length, width){
    let calcArea = length * width
    return calcArea
}

let rectangle = area(2, 5);
let rectangle2 = area(10, 7);

//console.log(rectangle);
console.log(rectangle, rectangle2);

function volume(length,width, heigth) {
    let calVolume = length * width * heigth;
    return calcVolume;
}

let cube1 = volume( 4, 4, 4);


console.log(cube1);

//Write function name
//It takes 3 parameters

//Inside the function calculate the volume

//Function returns the volume

//Call function from the expression

function convertDogAgeToHuman(dogAge){
    let humanAge = (dogAge -2) * 4 + 21;
    return humanAge
}

let rover = convertDogAgeToHuman(6);
console.log(rover);

