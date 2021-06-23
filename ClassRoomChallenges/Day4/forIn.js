let student = {
    name: "Tony",
    awesome: true,
    certification: "JavaScript",
    week: 1
};

//For in loops count the enumerable (countable) properties in an object.
//Objects don'thave indexes, however their properties can be counted.

//key(propertu) - think of a key IN an object. A key goes in to a lock for it to correctly work andunlock. So for in loops are best used with objects.


console.log(student.name);
console.log(student["name"]);

for (item in student){
    console.log(item);
    console.log(student[item]);
}
//the for in loop iterates over a student object
//each iteration returns a key/property(item)
//the key/property is used to access the value of the key/property
//the value of the key/property is student[item]
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

//BRONZE
//console.log(fellowshipOfTheRing.members.Gandalf);
//console.log(fellowshipOfTheRing["members"]["Gandalf"]);

//for (character in fellowshipOfTheRing.members){
//    console.log(character);
//}

//SILVER
for (character in fellowshipOfTheRing.members) {
 if (
character[0] !== "A" &&
character[0] !== "E" &&
character[0] !== "I" &&
character[0] !== "O" &&
character[0] !== "U"
){
    console.log(`${character}'s name does nor begin with a vowel.`);
}else {
    console.log(`${character}'s name does begin with a vowel.`);
}
}

//GOLD
let arr = []







/* BRONZE

    - Using a for in loop, console.log the name of each character from the 
    members key in the fellowshipOfTheRing object.

*/
/* SILVER
    - Add a conditional to the for in loop that checks if the characters 
    name does NOT begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.
*/
/* GOLD

    - Declare a globally scoped variable of arr that is initialized as 
    an empty array. If the characters name does not begin with a vowel, 
    add that character to the new array, and then console.log the array.

*/

