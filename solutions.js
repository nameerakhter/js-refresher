// SECTION 2

// 5. Trim the whitespace from the string `"   hello world   "`.

let text1 = "   Hello World   ";
let text2 = text1.trim();
console.log(text2);
console.log(text1);

//6. Trim the whitespace from `"   hello world   "` without using the `.trim()` method. (hint: use Regex)

let text1='   Hello World   ';
let start = 0;
let last = text1.length-1;
while(text1[start]==" "){
    start++;
}
while(text1[last]==" "){
    last++;
}

let result= text1.substring(start,last);
console.log(result);

// 7. Convert the string `"javascript"` completely to uppercase.

let text1 = "javascript";
let text2 = text1.toUpperCase();
console.log(text2);

// 8. Convert the string `"LEARNING"` completely to lowercase.

let text1 ="LEARNING";
let text2 = text1.toLowerCase();
console.log(text2);

// 9. Extract the first 4 characters of the string `"Developer"`.

let text1 = "Developer";
let result = text1.slice(0,4);
console.log(result);

// 10. Extract the last 3 characters of the string `"Frontend"`.

let text1="Frontend";
let text2 = text1.slice(-3);
console.log(text2);

// 11. Check if the string `"Chai aur code"` contains the word `"aur"` and save the true/false result to a variable.

let text1 = "Chai aur code";
let result= text1.includes("aur");
console.log(result);

// 12. Check if the string `"index.html"` starts with the prefix `"index"`.
let text1 = "index.html";
let text2 = text.startsWith("index");
console.log(text2);

// 13. Check if the file name `"photo.jpg"` ends with the extension `".jpg"`.

let text1= "photo.jpg";
let text2= text1.endsWith(".jpg");
console.log(text2);

// 14. Find the exact position index of the word `"love"` in the sentence `"I love coding"`.

let text1 = "i love coding";
const word= "love";
const index = text1.indexOf(word);
console.log(index); 

// 15. Replace the word `"bad"` with `"good"` in the sentence `"This is a bad day"`.

let text1 = "This is a bad day";
const word = "bad";
text1  = text1.replace(word, "good");
console.log(text1);

// 16. Replace all occurrences of the letter `"a"` with `"x"` in the string `"banana"`

let text1 = "banana";
text2 = text1.replaceAll("a", "x");
console.log(text2);

// 17. Split the string `"apple,banana,orange"` into a working JavaScript array.

let text1 = "apple,banana,orange";
text1 = text1.split(",");
console.log(text1);

// 18. Split the single word `"Code"` into an array of its individual characters `['C', 'o', 'd', 'e']`.

let string = "Code";
let text2 = string.split(",");
console.log(text2);

// 19. Repeat the word `"Echo "` 3 times sequentially to get `"Echo Echo Echo "`.

let string = "Echo ";
let text2 = string.repeat(3);
console.log(text2);

// 20. Combine three variables (`w1 = "Open"`, `w2 = "Source"`, `w3 = "Project"`) into a single string using a template literal.

var w1 = "Open";
var w2 = "Source";
var w3 = "Project";
var result = `${w1} ${w2} ${w3}`;
console.log(result);

// 21. Combine those same three variables using the `.concat()` string method.

var w1 = "Open";
var w2 = "Source";
var s3 = "Project";
var result = `.concat()`

// 22. Write code to find the total character length of the string `"Supercalifragilistic"`.

let text1 = "Supercalifragilistic";
text1 = text1.length();
console.log(text1);

// 23. Access the 3rd character of the string `"Internship"` using square bracket notation.

let text1 = "Internship";
let char = text.charAt(3);
console.log(char);

// 24. Get the character code (ASCII) value of the very first character of the string `"Alpha"`.
let text1 = "Alpha";
let text2 = text1.charCodeAt(0);
console.log(text2);

// 25. Pad the string `"5"` with leading zeros using a built-in method so it becomes `"005"`.

let text1 = "5";
let text2 = text1.padStart(3, "0");
console.log(text2);

// 26. Pad the string `"OK"` with trailing exclamation marks to make it `"OK!!!"`.

let text1 = "ok";
text1 = text1.padEnd(5, "!");
console.log(text1);

// 27. Extract characters from index 2 up to index 6 (exclusive) of the string `"Information"`.

let text1 = "Information";
let text2 = text1.substring(2, 6); // couldve also used 'slice(2,6);' i think.
console.log(text2);

// 28. Write an expression that checks if a string `sampleStr` contains only empty spaces.

let sampleStr = "     ";
let check = sampleStr.isWellFormed(); 
console.log(check);

// 29. Write code to capitalize only the first letter of the string `"junior"` to make it `"Junior"`.

let text1 = "junior";
let check = text1.charAt(0).toUpperCase() + text1.slice(1);
console.log(check);


// SECTION 3

// 30. Parse and convert the string `"42"` into an actual working integer.

const num = "42";
parseInt(num,10);
console.log(num);

// 31. Parse and convert the string `"3.14"` into a floating-point number.

const num = "3.14";
parseFloat(num);
console.log(num);

// 32. Convert the raw number `100` into a string data type.

const num = 100;
let text = num.toString();
console.log(text);

// 33. Round the decimal number `4.7` to the nearest whole integer.

var num = 4.7;
let text = Math.round(num);
console.log(text);

// 34. Round the decimal number `4.3` down to the nearest whole integer.

const num = 4.3;
console.log(Math.round(num));

// 35. Round the decimal number `4.1` up to the nearest whole integer.

const num = Math.round(4.1);
console.log(num);

// 36. Write code to find the maximum number among these values: `10, 50, 30, 90, 20`.

let array=[10, 50, 30, 90,20];
let max= array[0];

for(let i = 1; i<array.length; i++){
    if (array[i]>max){
        max= array[i];
    }
}
console.log(max);

// 37. Write code to find the minimum number among these values: `10, 50, 30, 90, 20`.

let array=[10, 50, 30, 90,20];
let min= array[0];

for(let i = 1; i<array.length; i++){
    if (array[i]<min){
        min= array[i];
    }
}
console.log(min);

// 38. Write an expression to generate a random decimal number between `0` and `1`.

console.log(Math.random());

// 39. Write code to generate a random integer precisely between `1` and `10` (inclusive).

const integer = Math.floor(Math.random()*10)+1;
console.log(integer);

// 40. Calculate the absolute value of the number `-25`.

const integer = -25;
console.log(Math.abs(integer));

// 41. Calculate `2` raised to the power of `5` ($2^5$).

const base = 2;
const power = 5;
console.log("modern method: ")
console.log(base**power);
console.log("using the function: ");
console.log(Math.pow(base, power));

// 42. Calculate the square root of the number `81`.

const num = 81;
console.log(Math.sqrt(num));

// 43. Format the long decimal number `3.14159265` to exactly 2 decimal places.

let num = 3.14159265;
let base = num.toFixed(2);
console.log(base); // can also directly just put 2 instead of base.

// 44. Use the modulus operator to grab the remainder of `15` divided by `4`.

const remainder = 15%4;
console.log(remainder);

// 45. Write a condition that evaluates to `true` if a variable `numSample` is an even number.

const numSample = 10;
if (numSample % 2 === 0) {
    console.log("true");
}

// 46. Convert the binary string `"1010"` into a base-10 decimal integer.

const num = "1010";
const result = parseInt(num, 2);
console.log(result);
