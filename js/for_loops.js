// function showMultiplicationTable(input) {
//     for (var i = 1; i <= 10; ++i)
//         console.log(i + " x " + input + " = " + (i * input));
// }
for (var count = 1; count <= 10; ++count) {
    var numb = Math.floor(Math.random() * 18112) + 20
    if (numb % 2 === 0) {
        console.log(numb + " is even")
    } else {
        console.log(numb + " is odd")
    }
     }
    for (var i = 1; i <= 9; ++i) {
        var length = i.toString().repeat(i)
        console.log(length)
    }
    for (var i = 0; i > 100; i = i++) {
        if(i % 3){
            console.log("fizz")
        }if(i % 5){
            console.log("buzz")
        }if(i % 3 && i % 5){
            console.log("fizz buzz")
        }else{
            console.log(i)
        }
    }

