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

let sampleStr = "   ";
let result = sampleStr.trim().length === 0;
console.log(result);

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

// SECTION 4

// 47. Add the element `"orange"` to the end of the array `["apple", "banana"]`.

let array = ["apple", "banana"];
array.push(Orange);
console.log(array);

// 48. Remove the last element from an array using an array method.

let array = ["apple", "banana"];
array.pop();
console.log(array);

// 49. Add the element `"mango"` to the very beginning of an array.

let array = ["apple", "banana"];;
array.shift("mango");
console.log(array);

// 50. Remove the first element from an array.

let array2 = ["apple", "banana"];
array2.unshift("apple");
console.log(array2);

// 51. Access the second item in the array `["apple", "banana", "cherry"]`.

let fruitsarray = ["apple", "banana", "cherry"];
console.log(fruitsarray[1]);efea

// 52. Find the index location of `"banana"` within the array `["apple", "banana", "cherry"]`.

let array = ["apple", "banana", "cherry"];
let result =array.indexOf("banana");
console.log(result); //or we could do result +1, since stating index is 0.

// 53. Check if `"cherry"` exists inside an array, returning a boolean.

let array = ["apple", "banana", "cherry"];
console.log(array.includes("cherry"));      

// 54. Convert the array `["HTML", "CSS", "JS"]` into a single combined string `"HTML-CSS-JS"`.

let array = ["HTML", "CSS", "JS"];
console.log(array.join(" "));

// 55. Reverse the structural order of the array `[1, 2, 3, 4]`.

let array = [1, 2, 3, 4];
array.reverse();
console.log(array);

// 56. Sort the array `["zebra", "apple", "mango"]` alphabetically.

let array = ["zebra", "apple", "mango"];
let result = array.sort(); // can also do array.sort((a,b)=> a.localeCompare(b));
console.log(result);

// 57. Combine arrays `[1, 2]` and `[3, 4]` into one new array using `.concat()`.

let array1 = [1,2];
let array2 = [3,4];
let result = array1.concat(array2);
console.log(result);

// 58. Combine arrays `[1, 2]` and `[3, 4]` into one new array using the Spread (`...`) operator.

let arra1 = [1,2];
let arra2 = [3,4];
let result = [...arra1, ...arra2]; // ... - expands an iterable (like an array, object, or string) into its individual elements
console.log(result);

// 59. Write code to create a shallow copy of an array named `originalArr` using `.slice()`.

let originalArr = [2,4,1,3];
let reuslt = originalArr.slice();// slice with no argument


// 60. Extract elements at index 1 and index 2 from `[10, 20, 30, 40, 50]` into a new array.

let array = [10, 20, 30, 40, 50];
const fruits = array.slice(1,3);//not including index 3
console.log(fruits);

// 61. Remove 2 elements starting exactly from index 1 in the array `["a", "b", "c", "d"]`.

let array = ["a", "b", "c", "d"];
console.log(array.splice(2,2)); //where new elemnt to add (index), how many to remove before adding (here 2 - a & b)

// 62. Insert the elements `"x"` and `"y"` at index 2 without removing anything from `[1, 2, 3, 4]`.

let array = [1,2,3,4];
array.splice(2,0, "check1", "check2")
console.log(array); //the new strings will be addded

// 63. Use `.map()` to multiply every single number in the array `[1, 2, 3]` by 2.

let array  = [1,2,3];
let result =array.map(func);
function func(num){
    return num*2;
}
console.log(result);

// 64. Use `.filter()` to strip out and keep only numbers greater than 10 in `[5, 12, 8, 15, 3]`.

let array = [5, 12, 8, 15, 3];
let result = array.filter(func); 

function func(num){
    return num > 10;
}
console.log(result);

// 65. Use `.reduce()` to sum up all the numbers in the array `[1, 2, 3, 4]`.

let array = [1, 2, 3, 4];
let result = array.reduce (accumulator, currentItem => accumulator+currentItem, 0);
console.log(result);

// 66. Use `.find()` to locate the first number that is less than 0 in the array `[4, -2, 5, -9]`.

let array = [4, -2, 3, -9];
let result = array.find(myFunction);
function myFunction(num){
    return (num < 0);
}
console.log(result);

// 67. Use `.findIndex()` to get the index of the first negative number found in `[4, -2, 5]`.

let array = [4, -2, 5];
let result = array.findIndex(myFunction);
function myFunction(num){
    return (num < 0);
}
console.log(result); 

// 68. Use `.every()` to confirm if ALL numbers in the array `[2, 4, 6]` are even.

let array = [2, 4, 6];
let result = array.every( myFunction);

function myFunction(num){
    if(num = num%2 ==0){
        return true;
    }
}
console.log(result);

// 69. Use `.some()` to check if at least ONE number in the array `[1, 3, 6, 7]` is even.

let array = [1, 3,6, 7];
let result = array.some(myFunction);

function myFunction(num){
    if(num = num%2 ==0){
        return true;
    }
}
console.log(result);

// 70. Flatten the nested array `[1, [2, 3], [4, 5]]` into a flat, single-level array.

let array = [1, [2,3] , [4,5]];
const flat = array.flat();
console.log(flat);

// 71. Clear all items from an array named `tempArr` by changing its `.length` property directly.

let tempArr = [ 1, 2,3,5,6];
tempArr.length = 0;
console.log(tempArr);

// 72. Create a 5-element array filled entirely with the number `0` using an array method sequence.

let array = new Array(5).fill(0);
console.log(array);

// 73. Loop through an array `["a", "b", "c"]` and log each item out using the `.forEach()` method.

let array = ["a", "b", "c"];
array.forEach(myFunction);
function myFunction (num){
    console.log(num);
}

// 74. Convert the string `"HELLO"` into a true structural array of individual characters `['H', 'E', 'L', 'L', 'O']`.

let string = "HELLO";
let result = string.split("");
console.log(result);


// SECTION - 5

// 75. Given `const intern = { name: "Alex", role: "Developer" };`, access `name` using dot notation.

const intern = {name: "Alex", role: "Developer"};
 console.log(intern.name);

// 76. Access the property `role` from that same object using dynamic bracket notation instead.

const intern = {name: "Alex", role: "Developer"};
console.log(intern.role);

// 77. Add a new property `age` with a value of `22` to the `intern` object.

const intern = {name: "Alex", role:"Developer"};
intern.age = 22;
console.log(intern);


// 78. Update the property `role` inside the object to read `"Junior Developer"`.

const intern = {name: "Alex", role:"Developer"};
intern["role"] = "Junior Developer"; // can also be: intern.role = "Junior Developer";
console.log(intern);

// 79. Delete the property `role` completely from the `intern` object.

const intern = {name: "Alex", role:"Developer"};
delete intern.role;
console.log(intern);

// 80. Write a statement to check if the property `"status"` exists inside the object using the `in` operator.

const intern = {name: "Alex", role:"Developer"};
let check = "status" in intern;
console.log(check); // returns false, if not a property of intern

// 81. Write a statement to check if the object has the property `"name"` using `hasOwnProperty()`.

const intern = {name: "Alex", role:"Developer"};
let check = intern. hasOwnProperty("name");
console.log(check); // returns true, if property of intern

// 82. Generate an array containing all the keys of the object.

const user = {
    Alan: { age: 27, online: false },
    Jeff: { age: 32, online: true }
};
let result = Object.keys(user);
console.log(result);

// 83. Generate an array containing all the values of the object.

const user = {
    Alan: { age: 27, online: false },
    Jeff: { age: 32, online: true }
};
let result = Object.values(user);
console.log(result);

// 84. Generate an array of key-value pair arrays from the object.

const user = {
    Alan: { age: 27, online: false},
    Jeff: { age: 32, online: true }
};
let result= Object.entries(user);
console.log(result);

// 85. Merge two objects `const obj1 = { a: 1 };` and `const obj2 = { b: 2 };` using `Object.assign()`.

const Alan = { age: "27", online: "false" };
const Jeff = { age: "32", online: "true" };
const merged = Object.assign({}, Alan, jeff);
console.log(merged);

// 86. Merge those same two objects `obj1` and `obj2` using the Object Spread operator.

const Alan = { age: "27", online: "false" };
const Jeff = { age: "32", online: "true" };
const merged = {...Alan, ...Jeff};
console.log(merged);

// 87. Seal an object named `sealedObj` so properties cannot be added or deleted, but values can change.

const sealedObj = {age: "27", online: "false"};
Object.seal(sealedObj);

// 88. Freeze an object named `frozenObj` entirely so no modifications can happen.

const frozenObj = { age: "32", online: "true" };
Object.freeze(frozenObj);


// 89. Destructure the properties `name` and `age` out of the object `const user = { name: "John", age: 25 };` into standalone variables.

const user = { name: "John", age: 25 };
const { name, age } = user;
console.log(name, age);


// SECTION - 6

// 90. Write a traditional `for` loop that runs exactly 5 times (tracking an index from 0 to 4).

let array = [0, 1, 2, 3, 4];
for(let i=0; i< array.length; i++){
    console.log(i);
}

// 91. Write a `while` loop that increments a counter and runs exactly 3 times.

let counter = 0;
while(counter< 3){
    console.log(counter);
}

// 92. Write a `do...while` loop structure.

let count = 10;
do{
    console.log(count);
    count--;
}while(count>0);

// 93. Iterate over the elements of the array `["apple", "pear"]` using a `for...of` loop.

let array = ["apple", "pear"];
for(const each of array){
    console.log(each);
}

// 94. Iterate over the keys of the object `{ item: "book", price: 15 }` using a `for...in` loop.

const array = {item: "book", price: 15};
for( const key in array){
    console.log(key, array[key]);
}

// 95. Write a standard `if-else` statement that logs "Positive" if a number is >= 0, and "Negative" otherwise.

let num = 10;
let result = even(num);
function even(num){
    if( num>= 0){
        console.log("positive");
    }
    else{
        console.log("negative");
    }
}

// 96. Convert that `if-else` block into a compact, single-line conditional Ternary operator expression.

let num =10;
access = num>=0 ? console.log("positive") : console.log("negative");

// 97. Write a `switch` statement evaluating a variable `color` for the cases `"red"` and `"blue"`.

let color = "red";

switch(color){
    case "red":
        console.log("RED");
        break;
    case "blue":
        console.log("BLUE");
        break; 
}


// 98. Use the `break` keyword inside a loop to stop execution the moment an index counter reaches `3`.

let count = 3;
  for (let i = count; i >= 3; i--) { 
        if(i==3){
            break;
        }
  }



// 99. Use the `continue` keyword inside a loop to skip all code execution for index `2` and move directly to the next iteration loop.

let count = 3;
for (let i = count; i<5 ; i--) { 
    if(i==3){
        continue;
    }
    console.log("continue");
  }

// 100.  Write a traditional function declaration named `add` that returns the sum of parameters `a` and `b`.

let a =10;
let b = 90;
function add(a,b){
    console.log("sum is: " + (a+b));
}

add(a,b);

// 101.  Convert that traditional `add` function into an ES6 Arrow Function assigned to a variable.

let a=10;
let b= 20;
const result  = (a,b) =>{
    console.log("sum: " + (a+b))
}
result(a,b);


// 102.  Define a function parameter signature that provides a default string value of `"Guest"` if no argument is supplied.

let string = "Guest";
function deft(string){
    if(string = "Guest"){
        console.log("hello");
    }
}
deft(string);

// 103.  Use the Logical Nullish Coalescing operator (`??`) to fallback to `"default-string"` if a variable is null or undefined.

let check = "default-string";
check = null ?? undefined;
console.log(check);

// 104.  Use Optional Chaining (`?.`) to safely log `user.profile.bio` without throwing an error if `profile` is missing.

const alan = {
  user: "number", 
  profile: {
    bio: "hi"
  }
};
console.log(alan?.profile?.bio);  
console.log(alan?.profile?.title); 

