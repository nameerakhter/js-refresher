//## Section 2: Strings & Text Manipulation
//Write the code block or expression to achieve the following outcomes._

//Q5. Trim the whitespace from the string `"   hello world   "`.
let str = "   hello world   ";
console.log(str.trim());

//Q6. Trim the whitespace from `"   hello world   "` without using the `.trim()` method. (hint: use Regex)
let str2 = "   hello world   ";
console.log(str2.replace(/^\s+|\s+$/g, ""));

//Q7. Convert the string `"javascript"` completely to uppercase.
let str3 = "javascript";
str3 = str3.toUpperCase();
console.log(str3);

//Q8. Convert the string `"LEARNING"` completely to lowercase.
let str4 = "LEARNING";
console.log(str4.toLowerCase());

//Q9. Extract the first 4 characters of the string `"Developer"`.
let str5 = "Developer";
str5 = str5.substring(0, 4);
console.log(str5);

//Q10. Extract the last 3 characters of the string `"Frontend"`.
let str6 = "Frontend";
str6 = str6.substring(str6.length - 3);
console.log(str6);

//Q11. Check if the string `"Chai aur code"` contains the word `"aur"` and save the true/false result to a variable.
let str7 = "Chai aur code";
str7 = str7.includes("aur");
console.log(str7);

//Q12. Check if the string `"index.html"` starts with the prefix `"index"`
let str8 = "index.html";
str8 = str8.startsWith("index");
console.log(str8);

//13. Check if the file name `"photo.jpg"` ends with the extension `".jpg"`.
let str9 = "photp.jpg";
str9 =str9.endsWith(".jpg");
console.log(str9);


//14. Find the exact position index of the word `"love"` in the sentence `"I love coding"`.
let srt10 = "I love coding";
srt10 = srt10.indexOf("love");
console.log(srt10);

//15. Replace the word `"bad"` with `"good"` in the sentence `"This is a bad day"`.
let str11 = "This is a bad day";
str11 = str11.replace("bad","good");
console.log(str11);

//16. Replace all occurrences of the letter `"a"` with `"x"` in the string `"banana"`
let str12 = "banana";
str12 = str12.replace(/a/g, "x");
console.log(str12);


//17. Split the string `"apple,banana,orange"` into a working JavaScript array.
let fruits = "apple,banana,orange";
str13= fruits.split(",");
console.log(str13);

//18. Split the single word `"Code"` into an array of its individual characters `['C', 'o', 'd', 'e']`.
let word = "Code";
str14= word.split("");
console.log(str14);

//19. Repeat the word `"Echo "` 3 times sequentially to get `"Echo Echo Echo "`.
str15= ("Echo ");
str15 = str15.repeat(3);
console.log(str15);

//20. Combine three variables (`w1 = "Open"`, `w2 = "Source"`, `w3 = "Project"`) into a single string using a template literal.
let w1 = "Open";
let w2 = "Source";
let w3 = "Project";
console.log(w1 +" "+ w2 +" "+ w3);


//21. Combine those same three variables using the `.concat()` string method.
let combined = w1.concat(" ", w2, " ", w3);
console.log(combined);

//22. Write code to find the total character length of the string `"Supercalifragilistic"`.
let str16= "Supercalifragilistic";
str16= str16.length;
console.log(str16);

//23. Access the 3rd character of the string `"Internship"` using square bracket notation.
let str17= "Internship";
str17= str17[2];
console.log(str17);


//24. Get the character code (ASCII) value of the very first character of the string `"Alpha"`.
let str18= "Alpha";
str18=str18.charCodeAt(0);
console.log(str18);


//25. Pad the string `"5"` with leading zeros using a built-in method so it becomes `"005"`.
let str19= "5";
str19= str19.padStart(3, "0");
console.log(str19);

//26. Pad the string `"OK"` with trailing exclamation marks to make it `"OK!!!"`.
let str20= "OK";
str20= str20.padEnd(5, "!");
console.log(str20);

//27. Extract characters from index 2 up to index 6 (exclusive) of the string `"Information"`.
let str21= "Information";
str21= str21.substring(2,6);
console.log(str21);

//28. Write an expression that checks if a string `sampleStr` contains only empty spaces.
let SampleStr = "  ";
SampleStr = SampleStr.trim() === "";
console.log(SampleStr);

//29. Write code to capitalize only the first letter of the string `"junior"` to make it `"Junior"`.
let str22= "junior";
console.log(str.replace(str[0], str[0].toUpperCase()));
console.log(str22);

//## Section 3: Numbers & Basic Math Operations

//Write the math or parsing syntax to solve these problems._

//30. Parse and convert the string `"42"` into an actual working integer.
let str23 = "42";
str23 = parseInt(str23);
console.log(str23);


//31. Parse and convert the string `"3.14"` into a floating-point number.
let str24 = "3.14";
str24 = parseFloat(str24);
console.log(str24);

//32. Convert the raw number `100` into a string data type.
let num = 100;
num = num.toString();
console.log(num);

//33. Round the decimal number `4.7` to the nearest whole integer.
let num2 = 4.7;
num2 = Math.round(num2);
console.log(num2);

//34. Round the decimal number `4.3` down to the nearest whole integer.
let num3 = 4.3;
num3 = Math.floor(num3);
console.log(num3);

//35. Round the decimal number `4.1` up to the nearest whole integer.
let num4 = 4.1;
num4 = Math.ceil(num4);
console.log(num4);

//36. Write code to find the maximum number among these values: `10, 50, 30, 90, 20`.
let maxNum = Math.max(10, 50, 30, 90, 20);
console.log(maxNum);

//37. Write code to find the minimum number among these values: `10, 50, 30, 90, 20`.
let minNum = Math.min(10, 50, 30, 90, 20);
console.log(minNum);

//38. Write an expression to generate a random decimal number between `0` and `1`.
let randomDecimal = Math.random();
console.log(randomDecimal);

//39. Write code to generate a random integer precisely between `1` and `10` (inclusive).
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);

//40. Calculate the absolute value of the number `-25`.
let absValue = -25;
absValue = Math.abs(-25);
console.log(absValue);

//41. Calculate `2` raised to the power of `5` ($2^5$).
let power = Math.pow(2, 5);
console.log(power);

//42. Calculate the square root of the number `81`.
let sqrt = Math.sqrt(81);
console.log(sqrt);

//43. Format the long decimal number `3.14159265` to exactly 2 decimal places.
let formatted = 3.14159265.toFixed(2);
console.log(formatted);

//44. Use the modulus operator to grab the remainder of `15` divided by `4`.
let remainder = 15 % 4;
console.log(remainder);

//45. Write a condition that evaluates to `true` if a variable `numSample` is an even number.
let numSample = 10;
let isEven = numSample % 2 === 0;
console.log(isEven);

//46. Convert the binary string `"1010"` into a base-10 decimal integer.
let binaryStr = "1010";
let decimal = parseInt(binaryStr, 2);
console.log(decimal);

//## Section 4: Arrays & Iteration

//_Manipulate the array data structures._

//47. Add the element `"orange"` to the end of the array `["apple", "banana"]`.
let fruits2 = ["apple", "banana"];
fruits2.push("orange");
console.log(fruits2);

//48. Remove the last element from an array using an array method.
let fruits3 =["apple","banana","orange"];
fruits3.pop();
console.log(fruits3);

//49. Add the element `"mango"` to the very beginning of an array.
let fruits4 = ["apple", "banana"];
fruits4.unshift("mango");
console.log(fruits4);

//50. Remove the first element from an array.
let fruits5 = ["apple", "banana", "mango"];
fruits5.shift();
console.log(fruits5);

//51. Access the second item in the array `["apple", "banana", "cherry"]`.
let fruits6 = ["apple", "banana", "cherry"];
let SecondItem= fruits6[1];
console.log(SecondItem);

//52. Find the index location of `"banana"` within the array `["apple", "banana", "cherry"]`.
let fruits7 = ["apple", "banana", "cherry"];
let indexOfBanana = fruits7.indexOf("banana");
console.log(indexOfBanana);

//53. Check if `"cherry"` exists inside an array, returning a boolean.
let fruits8 = ["apple", "banana", "cherry"];
let hasCherry = fruits8.includes("cherry");
console.log(hasCherry);

//54. Convert the array `["HTML", "CSS", "JS"]` into a single combined string `"HTML-CSS-JS"`.
let fruits9 = ["HTML", "CSS", "JS"];
let combinedString = fruits9.join("-");
console.log(combinedString);

//55. Reverse the structural order of the array `[1, 2, 3, 4]`.
let fruits10 = [1, 2, 3, 4];
fruits10.reverse();
console.log(fruits10);

//56. Sort the array `["zebra", "apple", "mango"]` alphabetically.
let fruits11 = ["zebra", "apple", "mango"];
fruits11.sort();
console.log(fruits11);

//57. Combine arrays `[1, 2]` and `[3, 4]` into one new array using `.concat()`.
let arr1 =[1, 2];
let arr2=[3, 4];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);

//58. Combine arrays `[1, 2]` and `[3, 4]` into one new array using the Spread (`...`) operator.
let combinedArr2 = [...arr1, ...arr2];
console.log(combinedArr2);

//59. Write code to create a shallow copy of an array named `originalArr` using `.slice()`.
let originalArr = [1, 2, 3];
let shallowCopy = originalArr.slice();
console.log(shallowCopy);

//60. Extract elements at index 1 and index 2 from `[10, 20, 30, 40, 50]` into a new array.
let arr3 = [10, 20, 30, 40, 50];
let extracted = arr3.slice(1, 3);
console.log(extracted);

//61. Remove 2 elements starting exactly from index 1 in the array `["a", "b", "c", "d"]`.
let arr4 = ["a", "b", "c", "d"];
arr4.splice(1, 2);
console.log(arr4);

//62. Insert the elements `"x"` and `"y"` at index 2 without removing anything from `[1, 2, 3, 4]`.
let arr5 = [1, 2, 3, 4];
arr5.splice(2, 0, "x", "y");
console.log(arr5);

//63. Use `.map()` to multiply every single number in the array `[1, 2, 3]` by 2.
let arr6 = [1, 2, 3];
let multiplied = arr6.map(num => num * 2);
console.log(multiplied);

//64. Use `.filter()` to strip out and keep only numbers greater than 10 in `[5, 12, 8, 15, 3]`.
let arr7 = [5, 12, 8, 15, 3];
let filtered = arr7.filter(num => num > 10);
console.log(filtered);

//65. Use `.reduce()` to sum up all the numbers in the array `[1, 2, 3, 4]`.
let arr8 = [1, 2, 3, 4];
let sum = arr8.reduce((acc, num) => acc + num, 0);
console.log(sum);

//66. Use `.find()` to locate the first number that is less than 0 in the array `[4, -2, 5, -9]`.
let arr9 = [4, -2, 5, -9];
function Myfunc(res){
    return res<0;
}
let firstNegative = arr9.find(Myfunc);
console.log(firstNegative);

//67. Use `.findIndex()` to get the index of the first negative number found in `[4, -2, 5]`.
let arr10 = [4, -2, 5];
function Myfunction(result){
    return result < 0;
}
let firstNegIndex = arr10.findIndex(Myfunction);
console.log(firstNegIndex)

//68. Use `.every()` to confirm if ALL numbers in the array `[2, 4, 6]` are even.
let arr11 = [2,4,6];
function Myfunction2(res){
    return res % 2 === 0;
}
let allEven = arr11.every(Myfunction2);
console.log(allEven);

//69. Use `.some()` to check if at least ONE number in the array `[1, 3, 6, 7]` is even.
let arr12 = [1, 3, 6, 7];
function checkEven(res){
    return res%2===0;
}
let hasEven =arr12.some(checkEven);
console.log(hasEven);

//70. Flatten the nested array `[1, [2, 3], [4, 5]]` into a flat, single-level array.
let nestedArr = [1, [2, 3], [4, 5]];
let flatArr = nestedArr.flat();
console.log(flatArr);

//71. Clear all items from an array named `tempArr` by changing its `.length` property directly.
let tempArr = [1, 2, 3, 4];
tempArr.length = 0;
console.log(tempArr);

//72. Create a 5-element array filled entirely with the number `0` using an array method sequence.
let zeroArr = new Array(5).fill(0);
console.log(zeroArr);

//73. Loop through an array `["a", "b", "c"]` and log each item out using the `.forEach()` method.
 let charArr2 = ["a", "b", "c"];
charArr2.forEach(function(item){
    console.log(item);
});

//74. Convert the string `"HELLO"` into a true structural array of individual characters `['H', 'E', 'L', 'L', 'O']`.
let str25 = "HELLO";
let charArray = Array.from(str25);
console.log(charArray);

//## Section 5: Objects & Property Manipulation

//_Perform CRUD and operational changes on JavaScript objects._

//75. Given `const intern = { name: "Alex", role: "Developer" };`, access `name` using dot notation.
const intern = { name: "Alex", role: "Developer" };
console.log(intern.name);
console.log(intern.role);

//76. Access the property `role` from that same object using dynamic bracket notation instead.
console.log(intern["role"]);

//77. Add a new property `age` with a value of `22` to the `intern` object.
intern.age = 22;
console.log(intern.age);

//78. Update the property `role` inside the object to read `"Junior Developer"`.
intern.role = "Junior Developer";
console.log(intern.role);

//79. Delete the property `role` completely from the `intern` object.
delete intern.role;
console.log(intern.role);

//80. Write a statement to check if the property `"status"` exists inside the object using the `in` operator.
let hasStatus = "status" in intern;
console.log(hasStatus);

//81. Write a statement to check if the object has the property `"name"` using `hasOwnProperty()`.
let hasName = intern.hasOwnProperty("name");
console.log(hasName);

//82. Generate an array containing all the keys of the object.
let keysArray = Object.keys(intern);
console.log(keysArray);

//83. Generate an array containing all the values of the object.
let valuesArray = Object.values(intern);
console.log(valuesArray);

//84. Generate an array of key-value pair arrays from the object.
let entriesArray = Object.entries(intern);
console.log(entriesArray);

//85. Merge two objects `const obj1 = { a: 1 };` and `const obj2 = { b: 2 };` using `Object.assign()`.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergeObj = Object.assign(obj1,obj2);
console.log(mergeObj);

//86. Merge those same two objects `obj1` and `obj2` using the Object Spread operator.
const mergeObj2 = {...obj1, ...obj2};
console.log(mergeObj2);

//87. Seal an object named `sealedObj` so properties cannot be added or deleted, but values can change.
const sealedObj = { name: "Sealed" };
Object.seal(sealedObj);
sealedObj.name = "Changed";
console.log(sealedObj.name);

//88. Freeze an object named `frozenObj` entirely so no modifications can happen.
const frozenObj = { name: "Frozen" };
Object.freeze(frozenObj);
//frozenObj.name = "changed";
console.log(frozenObj.name);

//89. Destructure the properties `name` and `age` out of the object `const user = { name: "John", age: 25 };` into standalone variables.
const user = { name: "John", age: 25 };
const { name, age } = user;
console.log(name);
console.log(age);

//## Section 6: Control Flow, Loops & Logic Syntax

//90. Write a traditional `for` loop that runs exactly 5 times (tracking an index from 0 to 4).
 for (let i =0;i<5;i++){
    console.log(i);
 }

//91. Write a `while` loop that increments a counter and runs exactly 3 times.
let counter = 0;
while(counter < 3){
    console.log(counter);
    counter++;
}

//92. Write a `do...while` loop structure.
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 3);

//93. Iterate over the elements of the array `["apple", "pear"]` using a `for...of` loop.
let fruits13 = ["apple", "pear"];
for (const fruit of fruits13) {
    console.log(fruit);
}
//94. Iterate over the keys of the object `{ item: "book", price: 15 }` using a `for...in` loop.
const obj = { item: "book", price: 15 };
for (const key in obj) {
    console.log(key, obj[key]);
}
//95. Write a standard `if-else` statement that logs "Positive" if a number is >= 0, and "Negative" otherwise.
let number = -5;
if(number>=0){
    console.log("Positive");
}else{
    console.log("Negative");
}
//96. Convert that `if-else` block into a compact, single-line conditional Ternary operator expression.
let result = number>=0? "+ve":"-ve";
console.log(result);

//97. Write a `switch` statement evaluating a variable `color` for the cases `"red"` and `"blue"`.
let color = "red";
switch(color){
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is neither red nor blue");
}

//98. Use the `break` keyword inside a loop to stop execution the moment an index counter reaches `3`.
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//99. Use the `continue` keyword inside a loop to skip all code execution for index `2` and move directly to the next iteration loop.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

//100.  Write a traditional function declaration named `add` that returns the sum of parameters `a` and `b`.
let a = 20;
let b = 10;
function add(a,b){
    return a+b;
}
let sum2 = add(a, b);
console.log(sum2);

//101.  Convert that traditional `add` function into an ES6 Arrow Function assigned to a variable.

const addition = (a,b) => a+b;
let summation = addition(a, b);
console.log(summation);

//102.  Define a function parameter signature that provides a default string value of `"Guest"` if no argument is supplied.
function greet(name = "Guest"){
    return `Hello, ${name}!`;
}
console.log(greet());

//103.  Use the Logical Nullish Coalescing operator (`??`) to fallback to `"default-string"` if a variable is null or undefined.

let myVariable = null;
let res_ult = myVariable ?? "default-string";
console.log(res_ult);

//104.  Use Optional Chaining (`?.`) to safely log `user.profile.bio` without throwing an error if `profile` is missing.
let userrr = {
    name: "Alice"
};
console.log(user.profile?.bio);
