// - Define a function named `allIndexesOf` that takes in two arguments. The first
// argument should be the array to search and the second argument should be the
// value you want to search for. If the item does not exist in the provided
// array, return an empty array.
//
//     Given:
//
// ```js
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//     ```
//
//     - `allIndexesOf(fruits, "apple")` should return the array [0, 3]
// - `allIndexesOf(fruits, "guava")` should return the array []
// - `allIndexesOf(fruits, "pineapple")` should return [4]
// function allIndexOf(arr, fruit){
//     fruits.forEach(function(fruit){
//         if (fruit.indexOf(fruit) > -1) {
//             return fruit.indexOf(fruit)
//         }else{
//             return []
//         }
//     })
// }

// - Define a function named `removeAll(array, value)` that takes in two arguments.
//     The first argument should be an array and the second argument should be a
// value you wish to remove
//
//     Given:
//
// ```js
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
function removeAll(array, values){
    var newArray = []
    array.forEach(function (value){
        if(value != values){
            newArray.push(value)
        }
    })
    return newArray;
}

console.log(removeAll(bugs, "mosquito"))
//     ```
//
//     - `removeAll(bugs, "ant")` should return `["mosquito", "scorpion",
//       "mosquito", "typo", "reference error", "type error"]`
//     - `removeAll(bugs, "mosquito")` should return `["ant", "scorpion", "ant",
//       "ant", "typo", "reference error", "type error"]`
//     - `removeAll(bugs, "roach")` should return the original array b/c "roach"
// has no occurrances.
function randomIntBetween(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomIntBetween(5,10))
// - Make a function called randomIntBetween(min, max) that returns a random number
// between the min and the max.
function coinFlip(){
    return Math.floor(Math.random() * 2)
}

console.log(coinFlip())
// - Make a function called `coinFlip()` that returns either 0 or 1, randomly
function twoDice(){
    return Math.ceil(Math.random()*6) + Math.ceil(Math.random()* 6)
}

console.log(twoDice())
// - Make a function called `twoDice()` that returns the sum of rolling two six
// sided dice.
function twentySidedDie(){
    return Math.ceil(Math.random()*20)
}

console.log(twentySidedDie())
// - Make a function called `twentySidedDie()` that returns a random integer
// between 1 and 20.
function twelveSidedDie(){
    return Math.ceil(Math.random() *12)
}
// - Make a function called `twelveSidedDie()` that returns a random integer
// between 1 and 12.
function tetrahedron(){
    return Math.ceil(Math.random() * 4)
}

console.log(twelveSidedDie())
console.log(tetrahedron())
// - Make a function called `tetrahedron()` that returns a random integer between 1
// and 4.
//
// ---
//
function rollDie(){
    return Math.ceil(Math.random() *6)
}

console.log(rollDie())
// - Make a function called `rollDie()` that returns an integer between 1 and 6.
function listOfRolls(num) {
    var rolledDice = []
    for (var i = 0; i < num; i++) {
        rolledDice.push(rollDie())
    }
    return rolledDice
}

console.log(listOfRolls(rollDie()))
// - Make a function called `listOfRolls(num)` that takes in a number containing
// how many 6-sided dice rolls you want to make. The `listOfRolls` function
// should return an array of that length, where each element of the array is the
// result of the `rollDie` function.
// ​
function listOfRollsFromDieFunc(numOfRolls,diceFunction){
    var numRolls = []
    for(var i = 0; i < numOfRolls; i++){
        numRolls.push(diceFunction)
    }
    return numRolls
}

console.log(listOfRollsFromDieFunc(5,twentySidedDie()))
// - Make a function called `listOfRollsFromDieFunc(numberOfRolls, diceFunction)`
//
//     This function should take in two arguments:
//     ​
// - The first argument is the number of rolls you want to make.
// - The second argument is a function that contains the function definition
// for the type of die you want to roll.
// ​
//     For example, if we call `listOfDieRollsFromDieFunc(1, tetrahedron)`, then the
// function will return an array containing one value that is the result of
// calling the `tetrahedron` function.
//
// ---
//
// ```js
//
// /**
//  * JS Array Practice
//  * Intermediate Array practice: array creation, iteration, and manipulation
//  */
//
// // Exercise 0. Write a function named first() that returns only the first element of an array
function first(){
    let array = [1,2,3]
    return array[0]
}

console.log(first())
//
// // Exercise 1. Write a function named secondToLast() that returns the second to last element
var testArray = [1,2,3,4,5,6,7,8,9,10]
function secondToLast(array){
    return array[array.length -2]
}

console.log(secondToLast(testArray))
//
// // Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
function rest(array){
    array.shift()
    return array
}

console.log(rest(testArray))
//
// // Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
var stringArray= ["jon","chuckie","the longest string"]
function getLongestString(array){
    var longString = ""
    array.forEach(function(string){
        if(string.length > longString.length){
            longString = string
        }
    })
    return longString
}

console.log(getLongestString(stringArray))
//
// // Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
function getShortestString(array){
    var longString = "kjdbfskjbfkjdsbfkjsdfl"
    array.forEach(function(string){
        if(string.length < longString.length){
            longString = string
        }
    })
    return longString
}

console.log(getShortestString(stringArray))
// // Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
function addTwoArrays(array1, array2){
    var combinedArray = []
    array1.forEach(function(element){
        combinedArray.push(element)
    })
    array2.forEach(function(element){
        combinedArray.push(element)
    })
    return combinedArray
}

console.log(addTwoArrays(testArray,stringArray))
// // Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
//
// // Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// // Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
function getUniqueValues(array){
    var newArray = []
    array.forEach(function(element){
        if((!newArray.includes(element))){
            newArray.push(element)
        }
    })
    return newArray
}

console.log(getUniqueValues(fruits))
console.log(getUniqueValues(bugs))
//
// // Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
function reverseArray(array){
    var reversedArray = array.reverse()
    return reversedArray
}

console.log(reverseArray(testArray))
// // Exercies 7. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
function getRandomQuote(){
    var favoriteQuotes = ["first quote", "second quote", "third quote", "fourth quote", "fifth quote"]
    var randomNumber = Math.floor(Math.random() * 5)
    var quote
    favoriteQuotes.forEach(function(element, position){
        if(position === randomNumber){
            quote = element
        }
    })
    return quote
}

console.log(getRandomQuote())
// //   getRandomQuote should generate a random number between 0 and the array's length minus 1
// //   use the randomly generated number as your index
// //   return a random quote.
//
// // Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// // The first argument should be a specific numeral or character
// // The second argument should be any given string
// // getIndexesOf() should return an array containing all of the indexes of that character in the string
// // Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// // Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"
function getIndexsOf(target, string){

}
//
// // Exercise 9. Write a function named removeAll.
// // It should accept an array and a value
// // removeAll should return an array with all of the original contents EXCEPT for the provided value
// // iterate across the input array
// // output array
// // Example: removeAll([1, 2, 3], 2) should return [1, 3]
// // Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]
//
// // Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
//
// // Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers
//
// // Exercise 12. Write a function named moveFirstToLast() that takes in an array
// // the function should return the array with the first element at the end
// // Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]
//
//
// // Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// // Zip returns a new array of arrays where each element is an array of the two elements at the same index
// // Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// // Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]
// ```


//
// ## Loops & Arrays
//
// 1.  create an array of shapes
//     – prompt the user to search for a specific shape
//     – using a for loop, iterate through the array to log the shapes until the matching shape is found
//     – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.
// 2.  Create a function that returns a random day of the week
// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26
// 4.  Create a function that returns the longest string in a given array of string elements.
// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//     – var arr1 = ['bob', 1, true, 1, 2];
//     – var arr2 = [2, null, undefined, 0, 2, "apple"]
//     – exampleFunction(arr1, arr2) // returns true