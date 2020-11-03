// Built-in Object Methods
//
// In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also
// take advantage of built-in methods for Objects!
//
// For example, we have access to object instance methods like:
// .hasOwnProperty(),
// .valueOf(),
// and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
//
// There are also useful Object class methods such as
// Object.assign(),
// Object.entries(), and
// Object.keys()
// just to name a few. For a comprehensive list, browse: MDN’s object instance documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
//
// Let’s get acquainted with some of these methods and their documentation.
//
// Note: You will see errors as you work through this exercise, but by the end the errors will be fixed!



const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = {};
Object.assign(newRobot, robot, {laserBlaster: true, voiceRecognition: true});
console.log(newRobot);