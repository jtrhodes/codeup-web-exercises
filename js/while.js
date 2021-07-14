var num = 1
while(num < 65536) {
    num *= 2
    console.log(num)
}
var totalCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random() * 5) +1;
    if (conesSold <= totalCones) {
        console.log(conesSold + " cones sold")
        totalCones -= conesSold
    } else{
        console.log("I cannot sell you " + conesSold + " I only have " + totalCones + " cones left")
    }

}    while(totalCones > 0);
    console.log("There are no cones left");
