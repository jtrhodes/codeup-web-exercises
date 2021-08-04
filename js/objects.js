(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
    firstName : 'Jonathan',
    lastName : 'Rhodes'
    }
    console.log(person.firstName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function() {
    return "Hello from " + person.firstName + " " + person.lastName
}
    console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
// shoppers.forEach(function(shopper){
//     var discount = shopper.amount * .12
//     if(shopper.amount >= 200){
//         console.log(shopper.name + ' your total is $' + shopper.amount + ' you will recieve  $' +  discount + ' off and your total after discount is ' + (shopper.amount - shopper.amount * 12 / 100) )
//     } else{
//         console.log(shopper.name + ' you do not qualify for a discount so your total is $' + shopper.amount)
//     }
// })
//     shoppers.forEach(function(shopper){
//         var calcu
//         var discountedAmount = calculateDiscount(shopper.amount, discountThreshold, discountPercentage);
//         var output = shopper.name + ' is purchasing ' + shopper.amount +
//             ' of stuff. He will get ' + discountedAmount +
//             ' off the purchase and pay ' +
//             (shopper.amount - discountedAmount) + '.';
//     })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {title : 'Mistborn', author : { firstname : 'Brandon', lastname : 'Sanderson'}},
        {title : 'The silver chair', author : { firstname : 'Clive', lastname : 'Lewis'}},
        {title : "Ender's game", author : { firstname : 'Orson', lastname : 'Card'}},
        {title : 'Eye of the World', author : { firstname : 'Robert', lastname : 'Jordan'}},
        {title : "Fool Moon", author : { firstname : 'Jim', lastname : 'Butcher'}},
        {title : 'Riders of the Dead', author : { firstname : 'Dan', lastname : 'Abnett'}},
        {title : "Dune", author : { firstname : 'Frank', lastname : 'Herbert'}},
        {title : "A Wise man's Fears", author : { firstname : 'Patrick', lastname : 'Rothfuss'}},
        {title : "Last argument of Kings", author : { firstname : 'Joe', lastname : 'Abercrombe'}},
        {title : 'A Dance with Dragons', author : { firstname : 'George', lastname : 'Martin'}},
    ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(function(book,placement){
    console.log('Book #' + (placement + 1) + '\n' + 'Title: ' + book.title + '\n' + 'Author: ' + book.author.firstname + ' ' + book.author.lastname)

})
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
// function createBook(title,author) {
//         return {
//             title: title,
//             author: author
//         }
//     }
//     function showBookInfo(books){
//     return books.title + '\n' + books.author.firstname + ' ' + books.author.lastname
//     }

    // console.log(createBook())
// var testBook = createBook('Fires of Heaven', "Robert Jordan")
//     console.log(testBook.title + '\n' + testBook.author)
//
//     books.forEach(function(book,placement){
//         console.log('Book #' + (placement + 1) + '\n' + showBookInfo(books[placement]))
//     })
})();