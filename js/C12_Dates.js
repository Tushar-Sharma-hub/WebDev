const date = new Date("2025-01-19T10:30:00");

// get values
const year = date.getFullYear();
const month = date.getMonth() + 1; // +1 because month is 0-based
const day = date.getDate();

// add 5 days
date.setDate(date.getDate() + 5);

// format
const formatted = date.toLocaleDateString("en-IN");

console.log(year);      // 2025
console.log(month);     // 1
console.log(day);       // 19
console.log(formatted);