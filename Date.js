// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)


// Eg
// const d = new Date("October 13, 2014 11:13:00");
// const d = new Date("2022-03-25");

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

// Example
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);




/*
Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)

*/


// eg
// const d = new Date("2021-03-25");
// d.getFullYear();


// const d = new Date("2021-03-25");
// d.getMonth();









// Note
// JavaScript counts months from 0 to 11:

// January = 0.

// December = 11.

/*

Set Date Methods
Set Date methods are used for setting a part of a date:

Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)

*/
