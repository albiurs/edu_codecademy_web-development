const readline = require('readline');
const fs = require('fs');

/*
You’re going to create a program that reads each item off of a shopping list (located in shoppingList.txt) and prints it to the console. Let’s take it one step at a time.

Create a myInterface variable. Assign myInterface the value returned from invoking readline.createInterface().

You’ll want to invoke readline.createInterface() with an object with a key of input and a value of fs.createReadStream(). Remember that fs.createReadStream() expects the file (as a string) from which it should read.
 */
const myInterface = readline.createInterface({
    input: fs.createReadStream('./shoppingList.txt')
});

/*
Let’s create a listener callback function to use in the next step. Name this function printData. printData() should expect to receive some data (we named our parameter data) and it should log that data to the console in the format: Item: [data], where [data] is the argument passed into the function.
 */
const printData = data => {
    console.log(`Item: ${data}`);
}

/*
Remember that a 'line' event will be emitted after each line from the file is read. Let’s assign our printData() function to execute whenever a 'line' event is emitted by using myInterface‘s .on() method.

Type "node app.js" in the terminal and press enter. If everything worked, each item from the shopping list should be printed to the terminal.
 */
myInterface.on('line', printData);
