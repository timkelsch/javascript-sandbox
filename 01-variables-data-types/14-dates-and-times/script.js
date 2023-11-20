let d;

d = new Date() // Date Fri Nov 17 2023 15:54:25 GMT-0700 (Mountain Standard Time)

d = d.toString() // Fri Nov 17 2023 15:55:03 GMT-0700 (Mountain Standard Time)

d = new Date(2023, 11, 17) // Date Sun Dec 17 2023 00:00:00 GMT-0700 (Mountain Standard Time)
// Month is zero indexed dafuq

d = new Date(2023, 11, 17, 14, 43, 23) // Date Sun Dec 17 2023 14:43:23 GMT-0700 (Mountain Standard Time)

d = new Date('2023-11-17') // Date Thu Nov 16 2023 17:00:00 GMT-0700 (Mountain Standard Time)
// Month is normal

d = Date.now() // Unix timestamp: 1700261936459

d = new Date() // 

console.log(d);




// Get today's date and time
d = new Date();

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

