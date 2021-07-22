function isOdd(num){
    return num % 2 === 1
}

function isEven(num) {
    return num % 2 === 0
}
function identity(input){
    return input;
}
function isNegativeOddNumber(neg){
    return neg % 2 === -1 && neg < 0
}
function isFive(five){
    return five ===5 || five === '5'
}
function addFive(input){
    return parseFloat(input) + 5
}
function isMultipleOfFive(five){
    return five % 5 === 0
}
function isThree(three){
    return three === 3
}
function isMultipleOfThree(three){
    return three % 3 === 0
}
function isMultipleOfThreeAndFive(number){
    return number % 3 === 0 && number % 5 === 0
}
function isMultipleOf(target, numb){
    return target % numb === 0
}
function isTrue(){
    return ;
}
function isFalse(){
    return false;
}

function returnTwo(){
    return 2;
}

// console.log(returnTwo())
// function sayHowdy(){
//     return 'Howdy!';
// }
// function returnName(){
//     return 'Jonathan Rhodes'
// }
// console.log(returnName())
//
// function addThree(num){
//     return num + 3
// }
// console.log(addThree(5))
//
// function sayString(input){
//     return input
// }
// function identity(input){
//     return input
// }
// function favoriteDay(){
//     var whatIsYourFavoriteDay = prompt('What is your favorite day of the week?').toLowerCase()
//     if (whatIsYourFavoriteDay == 'monday'){
//         alert("Looks like somebody has the case of the mondays")
//     }else if (whatIsYourFavoriteDay == 'tuesday'){
//         alert('Tuesday is probably my least favorite day.')
//     } else if (whatIsYourFavoriteDay == 'wednesday'){
//         alert('Humpday!')
//     } else if (whatIsYourFavoriteDay == 'thursday'){
//         alert('Getting closer to the weekend!')
//     } else if (whatIsYourFavoriteDay == 'friday'){
//         alert('The weekend has arrived!!!')
//     } else if (whatIsYourFavoriteDay == 'saturday'){
//         alert('Morning cartoons here i come!')
//     } else if (whatIsYourFavoriteDay == 'sunday'){
//         alert('End of the weekend!')
//     } else {
//         alert('That is not a day of the week!')
//     }
// }
//
// favoriteDay()
// function secondFavoriteDay() {
//         var favoriteDayOfTheWeek = prompt('What is your favorite day of the week?').toLowerCase()
//     switch (favoriteDayOfTheWeek){
//             case 'monday':
//             alert('Somebody has a case of the mondays');
//             break;
//         case 'tuesday':
//             alert('Tame tuesdays');
//             break;
//         case 'wednesday':
//             alert('Weak wednesdays');
//             break;
//         case 'thursday':
//             alert('Thirsty thursdays!');
//             break;
//         case 'friday':
//             alert('Everybody is livin for the weekend');
//             break;
//         case 'saturday':
//             alert('Super saturdays!')
//             break;
//         case 'sunday':
//             alert('Day of the lord');
//             break;
//         default:
//             alert('That is not a day of the week!')
//     }
// }
// secondFavoriteDay()
// function isANumber(){
//     var userInput = parseFloat(prompt("Enter a number here"))
//     if (!isNaN(userInput)) {
//         alert('This is a number')
//     } else {
//         alert('This is not a number!')
//     }
// }
// isANumber()
// function isItANumber(){
//     var userInput = parseFloat(prompt("Enter a number here"))
//     return (!isNaN(userInput)) ? alert('This is a number') : alert('This is not a number')
// }
// isItANumber()

function season() {
    var favoriteSeason = prompt("What is your favorite season?").toLowerCase();
    if (favoriteSeason == 'winter'){
        alert('December, January, and Febuary are in winter');
        return 'winter';
    } else if (favoriteSeason == 'spring'){
        alert('March, April, and May are in spring');
        return 'spring';
    } else if (favoriteSeason == 'summer'){
        alert('June, July, and August are in summer');
        return 'summer';
    } else if (favoriteSeason == 'fall' || favoriteSeason == 'autumn'){
        alert('September, October, and November are in fall');
        return 'fall';
    } else{
        alert('that is not a season');
    }
}
function listOfMonths() {
    var seasonMonth = season();
    if (seasonMonth == 'winter') {
        return prompt('Which winter month is your favorite?').toLowerCase();
    } else if (seasonMonth == 'spring') {
        return prompt('Which spring month is your favorite?').toLowerCase();
    } else if (seasonMonth == 'summer') {
        return prompt('Which summer month is your favorite?').toLowerCase();
    } else if (seasonMonth == 'fall') {
        return prompt('Which fall month is your favorite?').toLowerCase();
    }
}

function favoriteMonthMessage() {
    var eachMonth = listOfMonths()
    if (eachMonth == 'march' || eachMonth == 'mar') {
        alert('March is the month of my birth');
    } else if (eachMonth == 'april' || eachMonth == 'apr') {
        alert('April is such a sunny month');
    } else if (eachMonth == 'december' || eachMonth == 'dec') {
        alert('Yay, its christmas time!');
    } else if (eachMonth == 'january' || eachMonth == 'jan') {
        alert('Such a cold month');
    } else if (eachMonth == 'febuary' || eachMonth == 'feb') {
        alert('Almost spring');
    } else if (eachMonth == 'may' || eachMonth == 'may') {
        alert('May is so hot!');
    } else if (eachMonth == 'june' || eachMonth == 'jun') {
        alert('The hottest month of the year!');
    } else if (eachMonth == 'july' || eachMonth == 'jul') {
        alert('Independance time!');
    } else if (eachMonth == 'august' || eachMonth == 'aug') {
        alert('School starting!!');
    } else if (eachMonth == 'september' || eachMonth == 'sep') {
        alert('Beginning of fall!');
    } else if (eachMonth == 'october' || eachMonth == 'oct') {
        alert('Spooky time!');
    } else if (eachMonth == 'november' || eachMonth == 'nov') {
        alert('Excellent, time to be thankful');
    } else {
        alert('That is not a month')
    }
}
favoriteMonthMessage();

