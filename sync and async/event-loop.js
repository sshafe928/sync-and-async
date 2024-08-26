const fs = require('fs');
const path = require('path')

/*
Problem 1: Synchronous vs. Asynchronous Console Log
*/

console.log('this is synchronous')

setTimeout(() => {
    console.log("This is asynchronous");
}, "2000");

console.log('End of script')



/*
Problem 2: Repeated Message with Interval
*/


console.log('Interval started'); // Synchronous log message

// Start interval after 10 seconds
    const repeatingInterval = setInterval(() => {
        console.log('Repeating message...');
    }, 3000);

    // Stop the interval after 10 seconds
    setTimeout(() => {
        clearInterval(repeatingInterval);
        console.log('Interval stopped');
    }, 10000); 
/*
Problem 3: Asynchronous File Reading vs. Synchronous File Reading
*/
fs.readFile(path.join(__dirname, '/input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous read:', data);
    });

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
console.log('Synchronous read:', data);


/*
Problem 4: Combining Synchronous and Asynchronous Operations
*/
const read = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8');
console.log('Synchronous read:', read);

fs.readFile(path.join(__dirname, '/async.txt'), 'utf8', (err, asyncdata) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Asynchronous read:', asyncdata);
    });

    console.log('Script complete')

/*
Problem 5: Simulating a Countdown with Mixed Operations
*/
console.log("Countdown initiated...")
let countdown = 10;

const intervalId = setInterval(() => {
    console.log(countdown--);

    if (countdown < 0) {
    clearInterval(intervalId);
    
    setTimeout(() => {
        console.log('Countdown complete!');
    }, 0)};

}, 1000);