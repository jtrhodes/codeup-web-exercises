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

