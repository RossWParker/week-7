// Week 7 write the code that accomplishes the objectives

// Create an array called ages and perform subtraction programmatically
// subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element from the value in the last element
let lastIndex = ages.length - 1;
let subtractionResult = ages[lastIndex] - ages[0];
console.log("Subtraction result:", subtractionResult);

// Add a new age to the array
ages.push(50);

// Perform the subtraction again
lastIndex = ages.length - 1; // Update the last index after adding a new age
subtractionResult = ages[lastIndex] - ages[0];
console.log("Subtraction result with new age:", subtractionResult);

// Calculate the average age using a loop
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

let averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);

// (2) ===================================================
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

// creating a array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// iterate through the array to calculate the total number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
//calculate the average by dividing the total number of letters
let averageLettersPerName = totalLetters / names.length;
console.log("Average number of letters per name:", averageLettersPerName);


// Concatenate all the names together, separated by spaces
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];

    if (i !== names.length - 1) { 
        concatenatedNames += ' ';
    }
}

console.log("Concatenated names:", concatenatedNames);





// (3)========================================================

// How do you access the last element of any array? 

//ASNSWER lenghth-1 or pop method would work. 
let myArray = [1, 2, 3, 4, 5];
let lastElement = myArray[myArray.length - 1];
console.log(lastElement); 

// (4)========================================================

// How do you access the first element of any array?

// ANSWER: array starts at 0, so array[0] gives you the first element of the array.
let myArray2 = [1, 2, 3, 4, 5];
let firstElement = myArray[0];
console.log(firstElement); 


// (5)========================================================
 
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
// add the length of each name to the nameLengths array.

// Array with values declared above 
let name = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; 
//initalize empty Array
let nameLengths = [];
// iterate over each element  using a for loop 
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
//console and print the name lengths
console.log(nameLengths);

//(6)==========================================================
//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//create array called newNameLengths
let newNameLengths = [3, 5, 3, 5, 4, 3];
//creating a varible sum
let sum = 0;
//iterate over each element using a for loop 
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
//sum will now contain the elements in the namesLenths
console.log("Sum of all elements:", sum); 


//(7)===========================================================
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
// to itself n number of times.

// creating a function repeatWord
function repeatWord(word, n) {
    let repeatedWord = '';
    //use a loop to concatenate the to repeatWord x times
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}

console.log(repeatWord('Hello', 3)); 


//(8)============================================================
//Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.

//concatenate firstName, and lastName using the + to get the full name  
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(getFullName('Ross', 'Parker'));


//(9)=============================================================
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the 
// array is greater than 100.

function isSumGreaterThan100(numbers) {

    // initialize a  variable to store the sum of all numbers
    let sum = 0;
    //iterate through each element adding values to sum 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
//compare the sum with 100 and return true if it is greater than 100, otherwise false.
// Example 
console.log(isSumGreaterThan100([30, 40, 50])); 
console.log(isSumGreaterThan100([10, 20, 30])); 


//(10)============================================================
//Write a function that takes an array of numbers and returns the average of all the elements in the array.

//initialize a variable sum once again 
function calculateAverage(numbers) {
    let sum = 0;

    //using a for loop we iterate through each element in the array and add its value.
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    //divide the sum by the length of the array to calculate the average
    return sum / numbers.length;
}


console.log(calculateAverage([10, 20, 30])); // prints 20 
console.log(calculateAverage([5, 15, 25, 35])); //prints 20


//(11)===============================================================
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the
// first array is greater than the average of the elements in the second array.

//previously declared calculateAverage function to calculate the average of each array.
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
//compare the averages of the two arrays
function isFirstArrayAverageGreaterThanSecond(array1, array2) {
    let average1 = calculateAverage(array1);
    let average2 = calculateAverage(array2);
    return average1 > average2;
}

// Example usage:
console.log(isFirstArrayAverageGreaterThanSecond([10, 20, 30], [5, 15, 25])); //prints true 
console.log(isFirstArrayAverageGreaterThanSecond([5, 15, 25], [10, 20, 30])); //prints false 


//(12)===================================================================
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if 
// moneyInPocket is greater than 10.50.

//set  two parameters: isHotOutside and moneyInPocket
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Example usage:
console.log(willBuyDrink(true, 15)); // prints true
console.log(willBuyDrink(true, 10)); // prints false
console.log(willBuyDrink(false, 15)); //prints  false

//(13)==================================================================

//Create a function of your own that solves a problem. In comments, write what the 
//function does and why you created it.

// This function determines whether a given number is even or not.
 
//This function determines whether a given number is even or not.

function isEven(num) {
    return num % 2 === 0;
}

// Example 
console.log(isEven(4)); // prints true
console.log(isEven(7)); // prints false

//why I chose to create this function? its short, its does what is required and I'm tired ready for bed. 