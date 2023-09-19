//Js Welcome Section

var hello = "Joseph Blanco, Welcome Boss";

document.getElementById("decoding").innerHTML = hello;

//////////////////////////////////////////////////////////////

// Js First Section

// Number Methods


//1. toString()

/**
 * The toString() method returns a number as a string.
 * All number methods can be used on any type of numbers (literals, variables, or expressions)
 */

let kq = 145;

document.getElementById("pro_q").innerHTML =
kq.toString() + "<br>" + 
(145).toString() + "<br>" + 
(100 + 45).toString();


//2. toExponential()

/**
 * toExponential() returns a string, with a number rounded and written using exponential notation.
 * A parameter defines the number of characters behind the decimal point
 */

let kw = 1.205;

document.getElementById("pro_w").innerHTML =
kw.toExponential() + "<br>" +
kw.toExponential(2) + "<br>" + 
kw.toExponential(4) + "<br>" + 
kw.toExponential(6) + "<br>" + 
kw.toExponential(8);


//3. toFixed()

/**
 * toFixed() returns a string, with the number written with a specified number of decimals
 * For working with money, toFixed(2) is perfect.
 */

let ke = 9.856;

document.getElementById("pro_e").innerHTML =
ke.toFixed() + "<br>" + 
ke.toFixed(2) + "<br>" + 
ke.toFixed(4) + "<br>" + 
ke.toFixed(6) + "<br>" + 
ke.toFixed(8);


//4. toPrecision()

/**
 * toPrecision() returns a string, with a number written with a specified length
 */

let kr = 1.562;

document.getElementById("pro_r").innerHTML =
kr.toPrecision() + "<br>" + 
kr.toPrecision(2) + "<br>" + 
kr.toPrecision(4) + "<br>" + 
kr.toPrecision(6) + "<br>" + 
kr.toPrecision(8);


//5. valueOf()

/**
 * valueOf() returns a number as a number.
 * In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
 * The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
 * All JavaScript data types have a valueOf() and a toString() method.
 */

let kt = 478;

document.getElementById("pro_t").innerHTML = 
kt.valueOf() + "<br>" + 
(478).valueOf() + "<br>" + 
(400 + 78).valueOf();


//6. Number()

/**
 * The Number() method can be used to convert JavaScript variables (Strings) to numbers
 * If the number cannot be converted, NaN (Not a Number) is returned.
 * Number() can also convert a date to a number.
 * The Date() method returns the number of milliseconds since 1.1.1970.
 * The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
 */

document.getElementById("pro_y").innerHTML =
Number(true) + "<br>" + 
Number(false) + "<br>" + 
Number("10") + "<br>" + 
Number("   10") + "<br>" + 
Number("10   ") + "<br>" + 
Number("10.20") + "<br>" + 
Number("10,20") + "<br>" + 
Number("10 20") + "<br>" + 
Number("Joseph");

//using Number() with Date()

let ky = new Date("2001-02-02");

document.getElementById("pro_u").innerHTML = Number(ky);


//7. parseInt()

/**
 * parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
 * 
 */