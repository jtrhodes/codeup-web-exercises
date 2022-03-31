// # Third JavaScript Assessment Practice Problems
//
// The third JavaScript assessment will require the writing of functions that manipulate various data types, including arrays and objects. The use of iteration (loops) in many cases will be required to achieve this. The second halve of the JavaScript 101 exercises is excellent preparation for the assessment problems. This is a resource for additional practice problems.
//
//     ## Problems
//
// 1. Create a function, `printAll`, that takes an array and logs every element on a new line in the console.
function printAll(arr){
    arr.forEach(function(element){
        console.log(element)
    })
}
printAll(['hello', 'hi', 'greetings']);
var array = ['hello', 'hi', 'greetings']
// javascript
// 	printAll(['hello', 'hi', 'greetings']);
	/*
	  prints...
	  hello
	  hi
	  greetings
	*/


// 1. Create a function, `getLowestNumber`, that take in an array of numbers and returns the lowest number.
function getLowestNumber(arr){
	return Math.min.apply( Math, arr);
};
console.log(getLowestNumber([23,47,50,5]))
   // javascript
	// getLowestNumber([23,47,50,5]); // returns 5
	// getLowestNumber([5.8,7.3,8.2,4.7, 4.3]); returns 4.3
	// getLowestNumber([-7,9,76,0,-4]); // returns -7

//
// 1. Create a function, `getOccurrences`, that that takes in two arguments, a string and a letter. The function will count the number of occurrences of the specified letter within the string and return that number. The function should recognize case for instances (e.g. 'M' does not equal 'm').

function getOccurences(str, letter){
	let strSearch = letter
	for(var i=count=0; i<str.length; count+=+(strSearch===str[i++]));
	return count
}

console.log(getOccurences('iknowasongthatgetsoneverybodiesnerves',"e"))

// javascript
// 	getOccurrences('hello', 'l'); // returns 2
// 	getOccurrences('mississippi', 's'); // returns 4
// 	getOccurrences('Bubble', 'B'); // returns 1


// 1. Create a function, `getLongestString`, that takes in an array of strings and returns the longest string. If the two longest words are equal in length, return the last to appear in the array.
function getLongestString(arr){
	let longest = ""
	arr.forEach(function(element){
		if(element.length > longest.length){
			longest = element
		}
	})
	return longest
}

console.log(getLongestString(array))
    // ```javascript
	// getLongestString(['hello', 'hi', 'greetings']); // returns 'greetings'
	// getLongestString(['hello', 'world', '!' ]); // returns 'world'
	// ```

// 1. Create a function, `getFirstLetter`, that takes an array of strings and returns an array of the first letter of each string.
// function getFirstLetter(arr){
// 	let firstLetters = []
// 	arr.forEach(function(element){
// 		for(let i = 0,i < element.length, i++){
// 			if(i)
// 		}
// 	})
// 	return firstLetters
// }
//
// console.log(getFirstLetter(array))
function getFirstLetter(array){
	let firstLetterArray = []
	array.forEach((element)=>{
		firstLetterArray.push(element.charAt(0))
	})
	return firstLetterArray
}

console.log(getFirstLetter(['hello', 'world', '!' ]))

    // ```javascript
	// getFirstLetter(['hello', 'hi', 'greetings']); // returns ['h','h','g']
	// getFirstLetter(['hello', 'world', '!' ]); // returns ['h','w','!']
	// ```

// 1. Create a function, `arrayEndsWith`, that takes two arguments, an array and a shorter array, and returns a boolean whether or not the larger array ends with the same elements as the passed second array elements. The function should return true if the second array elements are at the end of the first array. Assume that neither array will be empty, contain only string, number, or boolean elements and that the length of the second array will always be shorter than the first.
function arrayEndsWith(arr1,arr2){

}
    // ```javascript
	// arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 5]); // returns true
	// arrayEndsWith(['hi', 'hello', 'world', true, 3, 5], [3, 9]); // returns false
	// arrayEndsWith(['hi', 'hmmm'], ['hmmm']); // returns true
	// arrayEndsWith([1, 2, 3], [2, 3]); // returns true
	// arrayEndsWith([1, 2, 3], [3, 2]); // returns false
	// ```
//
// 1. Create a function, `numsToObject`, that takes in three number inputs and returns them as property values `num1`, `num2`, and `num3` on an object.
function numsToObject(number1,number2,number3){
	let object1 = {num1: 0,num2: 0,num3: 0}
	object1.num1 = number1
	object1.num2 = number2
	object1.num3 = number3
	return object1
}

console.log(numsToObject(56,85,2734))
    // ```javascript
	// numsToObject(4, 5, 6); // returns {num1: 4, num2: 5, num3: 6}
	// numsToObject(1, 2, 3); // returns {num1: 1, num2: 2, num3: 3}
	// numsToObject(0, 199, 34); // returns {num1: 0, num2: 199, num3: 34}
	// ```

// 1. Create a function, `removeNums`, that takes in an array of data types and returns an array of the same elements except for any number data types. Numeric strings do not count as a number but NaN does.
function removeNums(array){
	let noNumbers = []
	array.forEach((element) =>{
		if(typeof element !== 'number'){
			noNumbers.push(element)
		}
	})
	return noNumbers
}

console.log(removeNums(['a', true, null, [], {}, 4, '5', NaN]))
    // ```javascript
	// removeNums(['a', true, null, [], {}, 4, '5', NaN]) // returns ['a', true, null, [], {}, '5']
	// removeNums(['a', 'b', 'c']) // returns ['a', true, null, [], {}, '5']
	// ```

// 1. Create a function, `objectToSum`, that takes in an object, and returns the sum of any number property values (numeric strings will not be added). Expect that no object property values will be NaN. If no number properties are present, return 0.
function objectToSum(object){
	let sum = 0;
	Object.values(object).forEach((val)=> {
		if (typeof val == 'number') {
			sum += val
		}
	})
	// for (const property in object) {
	// 	if(typeof `${object[property]}` !== 'number'){
	// 		console.log('this aint workin')
	// 	}else{
	// 		sum+= `${object[property]}`
	// 	}
	// }
	return sum
}

console.log(objectToSum({a: '3', b: true, c: 5, d: 3}))
    // ```javascript
	// objectToSum({prop1: 'bob', prop2: true, prop3: 5}) // returns 5
	// objectToSum({a: '3', b: true, c: 5, d: 3}) // returns 8
	// objectToSum({foo: 'one', bar: 'two'}) // returns 0
	// ```

// 1. Create a function, `objToObj`, that takes in an object with only property values of a string type and returns another object with a single property called 'all' with a value of all input object properties values concatenated together.
function objToObj(object){
	let allObj = {all: ''};
	for (const property in object) {
			allObj.all += `${object[property]}`
	}
	return allObj.all
}

console.log(objToObj({foo: 'hello', bar:'world'}))
// ***Please note that the order of object properties is uncertain and concatenating the object property values will be unpredictable. This is fine.***

// ```javascript
// 	objToObj({foo: 'hello', bar:'world'}) // returns {all: 'helloworld'} or {all: 'worldhello'}
// 	objToObj({a: 'codeup', b:'rocks'}) // returns {all: 'rockscodeup'} or {all: 'codeuprocks'}
// 	```
//
// 1. Create a function, `getStringDeets`, that takes in a string and returns an object with specific properties containing information about the string, namely:
function getStringDeets(str){
	let strDeets = {firstChar: '',lastChar: '',length: 0,shoutedVersion: ''}
	strDeets.firstChar = str.charAt(0);
	strDeets.lastChar = str.charAt(str.length-1);
	strDeets.length = str.length;
	strDeets.shoutedVersion = str.toUpperCase()
	return strDeets
}

console.log(getStringDeets('apple'))
// - `firstChar` -  containing the first character of the string
// - `lastChar` - containing the last character of the string
// - `length`- containing the length of characters of the string
// - `shoutedVersion` - containing an all caps version of the string

    // ```javascript
	// getStringDeets("apple"); // returns...
	// /*
	//   {
	//     firstChar: "a",
	//     lastChar: "e",
	//     length: 5,
	//     shoutedVersion: "APPLE"
	//   }
	// */
	// ```

// 1. Create a function, `createUsersObject`, that takes in two arrays: the first array is an array of strings (usernames), the second is an array of numbers (user ages). The function should return an object with property names matching to the first array elements paired with property values matching the second  array elements. Assume both arrays are the same length.
function createUserObject(arr1,arr2) {
	var result = arr2.reduce(function (result, field, index) {
		result[arr1[index]] = field;
		return result;
	}, {})
	return result
}


    // ```javascript
	var usernames = ['cindy', 'fred', 'cathy'];
	var ages = [34, 22, 45];
console.log(createUserObject(usernames, ages))
	// createUsersObject(usernames, ages) // returns {cindy: 34, fred: 22, cathy: 45}
	// ```
// function getUniqueCharacter(s) {
// 	// Write your code here
// 	var unique = ''
// 	var count = 0
// 	var badCount = 0
// 	for(let i = 0;i<s.length;i++){
// 		if(unique.includes(s[i])===false){
// 			unique += s[i]
// 		}
// 	}
// 	for(let i=0;i<unique.length;i++){
// 		if(unique.includes(s[i])===true){
// 			badCount++
// 		}
// 	}
// 	if(badCount ==2){
// 		return -1
// 	}
// 	return unique
// }
// var test = 'hackthegame'
// console.log(getUniqueCharacter(test))
// for(let i = 0;i<s.length;i++){
// 	if(unique.includes(s[i])===false){
// 		unique += s[i]
// 	}
// }
// for(let i=0;i<unique.length;i++){
// 	if(unique.includes(s[i])===true){
// 		badCount++
// 	}
// }
// if(badCount ==2){
// 	return -1
// }
// return unique.length
function getUniqueCharacter(s) {
	// Write your code here
	const Chars = 256
	let arr = new Array(Chars)
	for(let i=0;i<Chars;i++){
		arr[i] =[0,0];
	}
	for(let i=0;i<s.length;i++){
		arr[s.charCodeAt(i)][0]++;
		arr[s.charCodeAt(i)][1]= i;
	}
	let ret = Number.MAX_VALUE;
	for(let i=0;i<Chars;i++){
		if(arr[i][0]==1){
			ret = Math.min(ret, arr[i][1]+ 1);
		}
	}
	if(ret == Number.MAX_VALUE){
		return -1
	}

	return ret
}