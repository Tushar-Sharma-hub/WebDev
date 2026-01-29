// ES6 Module = An external file that contains reusable code
// that can be imported into other JavaScript files.
// Write resusable code for many different apps.
// Can contain variables, classes, functions ... and more
// Introduced as part of ECMAScript 2015 update
import {pi,getarea,getcircumference,getvol} from './mathutil.js';
console.log(pi);
const circum=getcircumference(10);
console.log(circum.toFixed(2)+'cm');
const area=getarea(10);
console.log(area.toFixed(2)+'cm^2');
const vol=getvol(10);
console.log(vol.toFixed(2)+'cm^3');