const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const emails = users.map(user => user.email)
console.log(emails)
const language = users.filter(user => user.languages.length >= 3)
console.log(language)
let totalYearsExperience = users.reduce((total, users, index,array) => {
    return total + users.yearsOfExperience / array.length
},0);
console.log(totalYearsExperience)
let longestEmail = users.reduce((total,users,index,array) =>{
    if(index === array.length -1){
        total.push(users.email)
        total.sort((a,b) => b.length - a.length)
        return total[0]
    }else{
        total.push(users.email)
        return total
    }
}, []);
console.log(longestEmail)
let allNames = users.reduce((names,users,index,array)=>{
    if(index === array.length -1){
        names.push(users.name)
        return `Your instructors are ${names.join(', ')}`
    }else{
        names.push(users.name)
        return names
    }
},[]);
console.log(allNames)
// let filteredLanguages = users.map(user => user.languages)
// console.log(filteredLanguages)
// let uniqueLanguages = filteredLanguages.reduce((unique,user,index,array)=>{
//     let totalNames = ''
//        totalNames += user.split('')
//     if (!unique[totalNames]) {
//         unique[totalNames] = 1
//         return unique
//     }
//     let uniqueUserLanguages = users.reduce(function(accumulator, user){
//         let languages = user.languages;
//         for (let i = 0; i < languages.length; i++){
//             if (!accumulator.includes(languages[i])){
//                 accumulator.push(languages[i]);
//             }
//         }
//         return accumulator.sort();
//     }, []);
    // console.log(uniqueUserLanguages);
    // if (!total[animal]) {
//         total[animal] = 1;
//     } else {
//         total[animal] += 1;
//     }
    // else {
        // unique[animal] += 1;
    // }
    // if(!unique[users.languages]){
    //     unique.push(users.languages)
    //     return unique
    // }
// },[]);
// console.log(uniqueLanguages)




const dogs = [
    {
        dogName: 'Bubbles',
            age: 10,
        isTrained: false
    },
{
    dogName: 'Lexie',
        age: 3,
    isTrained: true
},
{
    dogName: 'Doggy',
        age: 5,
    isTrained: false
},
{
    dogName: 'Flopper',
        age: 3,
    isTrained: true
},
{
    dogName: 'Lexie',
        age: 1,
    isTrained: true
},
{
    dogName: 'Skip',
        age: 7,
    isTrained: true
},
{
    dogName: 'Blue',
        age: 4,
    isTrained: false
}
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
console.log('Exercise 1:')
let dogNamesArray = dogs.map(dogs => dogs.dogName)
console.log(dogNamesArray);
// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');
let dogAgesArray = dogs.map(dogs => dogs.age)
console.log(dogAgesArray)
// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');
let dogNamesAndAges = dogs.map(dogs => dogs.age + dogs.dogName)
console.log(dogNamesAndAges)



// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');
const youngDogs = dogs.filter(dogs => dogs.age < 10);
console.log(youngDogs)
// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');
const dogLexie = dogs.filter(dogs => dogs.dogName === 'Lexie')

console.log(dogLexie)
// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');
const trainerOlderDogs = dogs.filter(dogs => dogs.age <= 10 && dogs.isTrained === true)
console.log(trainerOlderDogs)
// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');
let dogString = dogs.reduce((string, dogs,index,array) =>{
    if(index === array.length -1){
        string += dogs.dogName
        return string
    }else{
        string += dogs.dogName
        return string
    }
}, '');
console.log(dogString)


// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');
let totalAge = dogs.reduce((total, dogs, index, array) =>{
    total += dogs.age
    return total
}, 0);
console.log(totalAge)


// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');
let areTrainer = dogs.reduce((trained,dogs)=>{
    dogs.isTrained = true;
    trained += dogs
    return trained
},{})
console.log(areTrainer)
// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');
let average = dogs.reduce((age,dogs,index,{array})=>{
    age += dogs.age
return age
}, 0 ) / dogs.length;
console.log(average)


// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');
let trainedAverage = dogs.reduce((age,dogs)=>{
    if(dogs.isTrained){
        age += dogs.age
    }
    return age
},0) / dogs.length;
console.log(trainedAverage)
// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');
let nameLength = dogs.reduce((name,dogs,index,array)=>{
    name += dogs.dogName
    return name.length / array
},'')
console.log(nameLength)


// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');
let dogYears = dogs.reduce((age,dogs)=>{
        age += dogs.age
    return age
},0) * 7;
console.log(dogYears)
// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');

