//create ages array and input values
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//subtrack first value from the last value 
console.log((ages[ages.length - 1])- ages[0]);

// add value to ages
ages.push(13);

// test subtraction
console.log((ages[ages.length - 1])- ages[0]);

// for loop to calculate average age
let sumAges = 0;
for( let number of ages) {
    sumAges += number;
}
 averageAge = sumAges / ages.length;

 console.log(averageAge);

// Create names array and input values
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Loop to number of letters names adding them up
let sumLetters = 0
for (let i = 0; i < names.length; i++) {
    sumLetters = sumLetters + (names[i].length);
}
// Calculate the average of all the letters per name
averageLetter = sumLetters / names.length;
console.log(averageLetter);

// loop the array, print all names with spaces
let concatNames = ""
for (let i = 0; i < names.length; i++) {
    concatNames = concatNames + ' ' + names[i];
}
console.log(concatNames);


// ways to access the last element in array, using examples above
//length property
// console.log(ages[ages.length - 1]);
// //pop method
// let lastName = names.pop();
// console.log(lastName);


//access the first element, using examples from above
// console.log(ages[0]);
// console.log(names[0]);


//Create nameLength Array 
let nameLength = [];
//Using names array, add all the lengths to nameLength
for (let i = 0; i < names.length; i++) {
    let result = (names[i].length);
    nameLength.push(result);
}
console.log(nameLength);


//loop to calculate the sum of elements in nameLength
let sumName = 0;
for( let i of nameLength) {
    sumName += i;
}
console.log(sumName);


//create a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function concatXTimes(word, x){
      return (word.repeat(x));
} 
console.log(concatXTimes('testing', 5));


// function that takes two parameters, firstName and lastName, and returns a full name
function FullName(firstName , lastName){
    return (firstName + ' ' + lastName);
}
console.log(FullName('Billy', 'Bob'));


//function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numArray = [1,1,4,6,3,5,6,100];
function isOverHundred(numArray){
    let totalNum = numArray.reduce((accumulator,b) => accumulator + b, 0);
    if(totalNum > 100) {
         return true;
    }
}
console.log(isOverHundred(numArray));


//function that takes an array of numbers and returns the average of all the elements in the array.
let arrayOfNums = [12,23,24,54,65];
function numbersAvg(arrayOfNums){
    let total = arrayOfNums.reduce((accumulator,b) => accumulator + b, 0);
    return total / arrayOfNums.length;
}
let totalAvg = numbersAvg(arrayOfNums);
console.log(totalAvg);


//function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
let array1 = [1,5,6,7,84,0];
let array2 = [34,546,3,5,7];

function compareArrays(array1, array2) {
    if((array1.reduce((accumulator, c) => accumulator + c, 0)) > (array2.reduce((accumulator, c) => accumulator + c, 0))){
        return true;
    } return false;
}
console.log(compareArrays(array1, array2));

//a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 25;
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && (moneyInPocket >= 10.50)){
        return true;
    } return false;
}
console.log(willBuyDrink(isHotOutside,moneyInPocket));

// function to tell an employee if they worked their weekly hours. So they know if they can go home.
let workedHours = [5,7,8, 20, 3];

function canGoHome(workedHours){
let totalHours = workedHours.reduce((accumulator,b) => accumulator + b, 0);
    if (totalHours == 40){
        return ('Done working!');
    } else if (totalHours >= 40) {
        return((totalHours - 40) + ' hours of overtime! Go home.');
    } return ('Not done working yet!' + ' ' + (40 - totalHours) + ' Hours left!');    
}
console.log(canGoHome(workedHours));