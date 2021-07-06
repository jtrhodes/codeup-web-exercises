"use strict";

//alert("this is my alert")
// var userDecision = confirm("are you sure you wanna leave?");
// console.log(userDecision);
//
// if (userDecision === true){
//     alert("Excellent");
// } else{
//     alert("bad choice")
// }

// prompt

var currentSpeedInMph = 65;
var plannedSpeedInMph = prompt("How fast do you plan to go in mph")
var distanceLeftInMiles = prompt("How many miles away are you from your destination?")
var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60
var timeToDestinationAtPlannedSpeedInMph = (distanceLeftInMiles/plannedSpeedInMph) * 60;
var timeGain = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeedInMph;
var minutesGained = Math.floor(timeGain);
var seconds = Math.round((timeGain - minutesGained) * 60);
console.log("If you drive at " + plannedSpeedInMph + "mph, you will arrive " + minutesGained + " minutes andbn///// " + seconds + "seconds earlier. Is it worth it?");