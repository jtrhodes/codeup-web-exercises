var num = 1
while(num < 65536) {
    num *= 2
    console.log(num)
}
var totalCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random() * 5) +1;
    console.log(conesSold)
    totalCones -= conesSold

}    while(totalCones > 0);{
    alert('There are no cones left');
}