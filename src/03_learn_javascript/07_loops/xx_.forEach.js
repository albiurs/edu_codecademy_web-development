// The .forEach() Method
//
// The first iteration method that we’re going to learn is .forEach(). Aptly named, .forEach() will execute the same
// code for each element of an array.

const identifier = ['elementOne', 'elementTwo', 'elementThree'];
identifier.forEach(function (element) {
    console.log(' - ' + element);
})


const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];
groceries.forEach(function (groceryItem) {
    console.log(' - ', groceryItem);
})

// The code above will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of
// invoking .forEach().
//
//     groceries.forEach() calls the forEach method on the groceries array.
//     .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an
//     argument into another function.
//     .forEach() loops through the array and executes the callback function for each element. During each execution,
//     the current element is passed as an argument to the callback function.
//     The return value for .forEach() will always be undefined.

// Another way to pass a callback for .forEach() is to use arrow function syntax:
groceries.forEach(groceryItem => console.log(groceryItem));

// We can also define a function beforehand to be used as the callback function:
function printGrocery(element){
    console.log(element);
}

groceries.forEach(printGrocery);

// The above example uses a function declaration but you can also use a function expression or arrow function as well.
//
// All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to
// supply a callback function as an argument to the iterator. It’s good to be aware of the different ways to pass in
// callback functions as arguments in iterators because developers have different stylistic preferences. Nonetheless,
// due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.




const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));




// one more example
const greetAliens = aliens => {
    aliens.forEach(el => {
        console.log(`Oh powerful ${el}, we humans offer our unconditional surrender!`);
    });
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);