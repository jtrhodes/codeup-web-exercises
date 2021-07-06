"use strict"

alert("Welcome to my Website!")
var favoriteColor = prompt("What is your favorite color?")
alert("Great, " + favoriteColor + " is my favorite color too");

var rentalPerDayDollar= 3;

var littleMermaidDays = prompt("How many days did you rent The Little Mermaid?");
var brotherBearDays = prompt("How many days did you rent Brother Bear?");
var herculesDays = prompt("How many days did you rent Hercules?");

var totalRentalCost;
totalRentalCost = (parseInt(littleMermaidDays) + parseInt(brotherBearDays) + parseInt(herculesDays)) * parseInt(rentalPerDayDollar);
alert("$" + totalRentalCost.toFixed(2) + " is the total you'll pay for renting those movies.")

var googleRate = prompt("What is your hourly rate with Google?");
var amazonRate = prompt("What is your hourly rate with Amazon?");
var facebookRate = prompt("What is your hourly rate with Facebook?");

var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");

var totalPayment;

totalPayment = googleHours * googleRate;
totalPayment += amazonHours * amazonRate;
totalPayment += facebookHours * facebookRate;

alert(" Your weekly pay total is $" + totalPayment.toFixed(2))


var classNotFull = confirm("The class is not full")
var classScheduleCheck = confirm("Can you fit the class in?")

var studentEnrolled = classNotFull && classScheduleCheck
    if (studentEnrolled === true) {
        alert("We're so excited to have you");
    } else{
        alert("Sorry you can not attend.");}

var numberOfItemsForDiscount
var numberOfItems = prompt("How many items are in your cart?")
var offerIsNotExpired = confirm("This offer expires today!")
var isPremiumMember = confirm("Are you a premium Member?")

var discountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired)
