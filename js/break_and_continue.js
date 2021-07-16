do {
    var number = prompt("Choose and odd number between 1-50")
    if (number % 2 === 0) {
        alert('That number is invalid')
        break;
    }

    console.log(number)
}while (number > 0)