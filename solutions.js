//5. Trim the whitespace from the string "   hello world   ".
let str = "    hello world    ";
let result = str.trim();
console.log(result);

//6. Trim the whitespace from "   hello world   " without using the .trim() method. (hint: use Regex)
let str1 = "    hello world    ";
let str2=str1.replace(/^\s+|\s+$/g, "");
console.log(str2);

//7. Convert the string "javascript" completely to uppercase.
let str3 = "javascript"
let str4=str3.toUpperCase();
console.log(str4);

//8. Convert the string "LEARNING" completely to lowercase.
let str5 = "LEARNINNG"
let str6=str5.toLowerCase();
console.log(str6);

//9. Extract the first 4 characters of the string "Developer".
let a = "Developer"
let a1= a.slice(0,4);
console.log(a1);

//10. Extract the last 3 characters of the string "Frontend".
let b = "Frontend"
let b1 = b.slice(-3);
console.log(b1);

//11. Check if the string "Chai aur code" contains the word "aur" and save the true/false result to a variable.
let c = "Chai aur code";
let c1 = c.includes("aur");
console.log(c1);

//12. Check if the string "index.html" starts with the prefix "index".
let d = "index.html";
let d1 = d.startsWith("index");
console.log(d1);

//13. Check if the file name "photo.jpg" ends with the extension ".jpg".
let E = "photo.jpg";
let E1 = E.endsWith(".jpg");
console.log(E1);

//14. Find the exact position index of the word "love" in the sentence "I love coding".
let f = "I love coding";
let f1 = f.indexOf("love");
console.log(f1);

//15. Replace the word "bad" with "good" in the sentence "This is a bad day".
let g = "This is a bad day";
let g1 = g.replace("bad","good");
console.log(g1);

//16. Replace all occurrences of the letter "a" with "x" in the string "banana".
let h = "banana";
let h1 = h.replaceAll("a","x");
console.log(h1);

//17. Split the string "apple,banana,orange" into a working JavaScript array.
let I = "apple, banana, orange";
let I1 = I.split(",");
console.log(I1);

//18. Split the single word "Code" into an array of its individual characters ['C', 'o', 'd', 'e']
let J = "Code";
let J1 = J.split("");
console.log(J1);

//19. Repeat the word "Echo " 3 times sequentially to get "Echo Echo Echo ".
let K = "Echo ";
let K1 = K.repeat(3);
console.log(K1);

//20. Combine three variables (w1 = "Open", w2 = "Source", w3 = "Project") into a single string using a template literal.
let w1 = "Open";
let w2 = "Source";
let w3 = "Project";
let result1 =`${w1} ${w2} ${w3}`;
console.log(result1);

//21. Combine those same three variables using the .concat() string method.
let result2 = w1.concat(" ",w2," ",w3);
console.log(result2);

//22. Write code to find the total character length of the string "Supercalifragilistic".
let a2 = "Supercalifragilistic"
let a3 = a2.length;
console.log(a3);

//23. Access the 3rd character of the string "Internship" using square bracket notation.
let b2 = "Internship"
let b3 = b2[2];
console.log(b3);

//24. Get the character code (ASCII) value of the very first character of the string "Alpha"
let str8 = "Alpha";
let code = str8.charCodeAt(0);
console.log(code);

//25. Pad the string "5" with leading zeros using a built-in method so it becomes "005"
let text = "5";
let text2 = text.padStart(3,"0");
console.log(text2);

//26. Pad the string "OK" with trailing exclamation marks to make it "OK!!!".
let r = "OK";
let r2 = r.padEnd(5, "!");
console.log(r2);

//27. Extract characters from index 2 up to index 6 (exclusive) of the string "Information".
let l = "Information"
let l1 = l.slice(2,6);
console.log(l1)

//28. Write an expression that checks if a string sampleStr contains only empty spaces.
let sampleStr = "     ";
let isOnlySpaces = sampleStr.trim() === "";
console.log(isOnlySpaces);

//29. Write code to capitalize only the first letter of the string "junior" to make it "Junior".
let t = "junior";
let t1 = t.charAt(0).toUpperCase() + t.slice(1);
console.log(t1);

//30. Parse and convert the string "42" into an actual working integer.
let num ="42";
let num1 = parseInt(num);
console.log(num1);

//31. Parse and convert the string "3.14" into a floating-point number.
let num4 = "3.14";
let num5 = parseFloat(num4);
console.log(num5);

//32. Convert the raw number 100 into a string data type.
let num6 = 100;
let num7 = num6.toString();
console.log(num7);

//33. Round the decimal number 4.7 to the nearest whole integer.
let x = 4.7;
let y = Math.round(x);
console.log(y);

//34. Round the decimal number 4.3 down to the nearest whole integer.
let x1 = 4.3;
let y1 = Math.round(x1);
console.log(y1);

//35. Round the decimal number 4.1 up to the nearest whole integer.
let x2 = 4.1;
let y2 = Math.round(x2);
console.log(y2);

//36. Write code to find the maximum number among these values: 10, 50, 30, 90, 20.
let maxNum = Math.max(10, 50, 30, 90, 20);
console.log(maxNum);

//37. Write code to find the minimum number among these values: 10, 50, 30, 90, 20.
let minNum = Math.min(10, 50, 30, 90, 20);
console.log(minNum);

//38. Write an expression to generate a random decimal number between 0 and 1.
let randomNum = Math.random();
console.log(randomNum);

//39. Write code to generate a random integer precisely between 1 and 10 (inclusive).
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);

//40. Calculate the absolute value of the number -25.
let n = -25;
let n1 = Math.abs(n);
console.log(n1);

//41. Calculate 2 raised to the power of 5 (2^5).
let n2 = Math.pow(2, 5);
console.log(n2);

//42. Calculate the square root of the number 81.
let n3 = Math.sqrt(81);
console.log(n3);

//43. Format the long decimal number 3.14159265 to exactly 2 decimal places.
let numm = 3.14159265;
let resultt = numm.toFixed(2);
console.log(resultt);

//44. Use the modulus operator to grab the remainder of 15 divided by 4.
let remainder = 15 % 4;
console.log(remainder);

//45. Write a condition that evaluates to true if a variable numSample is an even number.
let numSample = 8;
let isEven = numSample % 2 === 0;
console.log(isEven);

//46. Convert the binary string "1010" into a base-10 decimal integer.
let binaryStr = "1010";
let decimalNum = parseInt(binaryStr, 2);
console.log(decimalNum);

//47. Add the element "orange" to the end of the array ["apple", "banana"].
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

//48. Remove the last element from an array using an array method.
let fruitss = ["apple", "banana", "orange"];
fruitss.pop();
console.log(fruitss);

//49. Add the element "mango" to the very beginning of an array.
let fruitts = ["apple", "banana"];
fruitts.unshift("mango");
console.log(fruitts);

//50. Remove the first element from an array.
let fruiits = ["mango", "apple", "banana"];
fruiits.shift();
console.log(fruiits);

//51. Access the second item in the array ["apple", "banana", "cherry"].
let array = ["apple", "banana", "cherry"];
let secondItem = array[1];
console.log(secondItem);

//52. Find the index location of "banana" within the array ["apple", "banana", "cherry"].
let frruits = ["apple", "banana", "cherry"];
let indexx = frruits.indexOf("banana");
console.log(indexx);

//53. Check if "cherry" exists inside an array, returning a boolean.
let array1 = ["apple", "banana", "cherry"];
let exists = array1.includes("cherry");
console.log(exists);

//54. Convert the array ["HTML", "CSS", "JS"] into a single combined string "HTML-CSS-JS".
let v = ["HTML", "CSS", "JS"];
let v1 = v.join("-");
console.log(v1);

//55. Reverse the structural order of the array [1, 2, 3, 4].
let numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers);

//56. Sort the array ["zebra", "apple", "mango"] alphabetically.
let v4 = ["zebra", "apple", "mango"];
v4.sort();
console.log(v4);

//57. Combine arrays [1, 2] and [3, 4] into one new array using .concat().
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined);

//58. Combine arrays [1, 2] and [3, 4] into one new array using the Spread (...) operator.
let combinedd = [...arr1, ...arr2];
console.log(combinedd);

//59. Write code to create a shallow copy of an array named originalArr using .slice().
let originalArr = [1, 2, 3, 4];
let copiedArr = originalArr.slice();
console.log(copiedArr);

//60. Extract elements at index 1 and index 2 from [10, 20, 30, 40, 50] into a new array.
let numberss = [10, 20, 30, 40, 50];
let resullt = numberss.slice(1, 3);
console.log(resullt);

//61. Insert the elements "x" and "y" at index 2 without removing anything from [1, 2, 3, 4].
let arrr = [1, 2, 3, 4];
arrr.splice(2, 0, "x", "y");
console.log(arrr);

//62. Remove 2 elements starting exactly from index 1 in the array ["a", "b", "c", "d"].
let arr3 = ["a", "b", "c", "d"];
arr3.splice(1, 2);
console.log(arr3);

//63. Use .map() to multiply every single number in the array [1, 2, 3] by 2.
let u = [1, 2, 3];
let u1 = u.map(num => num * 2);
console.log(u1);

//64. Use .filter() to strip out and keep only numbers greater than 10 in [5, 12, 8, 15, 3].
let u2 = [5, 12, 8, 15, 3];
let u3 = u2.filter(num => num > 10);
console.log(u3);

//65. Use .reduce() to sum up all the numbers in the array [1, 2, 3, 4].
let u4 = [1, 2, 3, 4];
let sum = u4.reduce((total, num) => total + num, 0);
console.log(sum);

//66. Use .find() to locate the first number that is less than 0 in the array [4, -2, 5, -9].
let m1 = [4, -2, 5, -9];
let m2 = m1.find(num => num < 0);
console.log(m2);

//67. Use .findIndex() to get the index of the first negative number found in [4, -2, 5].
let z1 = [4, -2, 5];
let index2 = z1.findIndex(num => num < 0);
console.log(index2);

//68. Use .every() to confirm if ALL numbers in the array [2, 4, 6] are even.
let z2 = [2, 4, 6];
let allEven = z2.every(num => num % 2 === 0);
console.log(allEven);

//69. Use .some() to check if at least ONE number in the array [1, 3, 6, 7] is even.
let z3 = [1, 3, 6, 7];
let hasEven = z3.some(num => num % 2 === 0);
console.log(hasEven);

//70. Flatten the nested array [1, [2, 3], [4, 5]] into a flat, single-level array.
let arr5 = [1, [2, 3], [4, 5]];
let flatArr = arr5.flat();
console.log(flatArr);

//71. Clear all items from an array named tempArr by changing its .length property directly.
let tempArr1 = [1, 2, 3, 4, 5];
tempArr1.length = 0;
console.log(tempArr1);

//72. Create a 5-element array filled entirely with the number 0 using an array method sequence.
let arr8 = Array(5).fill(0);
console.log(arr8);

//73. Loop through an array ["a", "b", "c"] and log each item out using the .forEach() method.
let arrr1 = ["a", "b", "c"];
arrr1.forEach(item => {
    console.log(item);
});

//74. Convert the string "HELLO" into a true structural array of individual characters ['H', 'E', 'L', 'L', 'O'].
let strr = "HELLO";
let charss = Array.from(strr);
console.log(charss);

//75. Given const intern = { name: "Alex", role: "Developer" };, access name using dot notation.
const intern = {
  name: "Alex",
  role: "Developer"
};
console.log(intern.name);

//76. Access the property role from that same object using dynamic bracket notation instead.
console.log(intern["role"]);

//77. Add a new property age with a value of 22 to the intern object.
intern.age = 22;
console.log(intern);

//78. Update the property role inside the object to read "Junior Developer".
intern.role = "Junior Developer";
console.log(intern);

//79. Delete the property role completely from the intern object.
delete intern.role;
console.log(intern);

//80. Write a statement to check if the property "status" exists inside the object using the in operator.
let existsss = "status" in intern;
console.log(existsss);

//81. Write a statement to check if the object has the property "name" using hasOwnProperty()
let hasName = intern.hasOwnProperty("name");
console.log(hasName);

//82. Generate an array containing all the keys of the object.
let keys = Object.keys(intern);
console.log(keys);

//83. Generate an array containing all the values of the object.
let values = Object.values(intern);
console.log(values);

//84. Generate an array of key-value pair arrays from the object.
let entries = Object.entries(intern);
console.log(entries);

//85. Merge two objects const obj1 = { a: 1 }; and const obj2 = { b: 2 }; using Object.assign()
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

//86. Merge those same two objects obj1 and obj2 using the Object Spread operator.
const mergedd = { ...obj1, ...obj2 };
console.log(mergedd);

//87. Seal an object named sealedObj so properties cannot be added or deleted, but values can change.
let sealedObj = {
  name: "Alex",
  age: 22
};
Object.seal(sealedObj);
// allowed (modification)
sealedObj.age = 23;
// not allowed (ignored in non-strict mode)
sealedObj.role = "Developer";
delete sealedObj.name;
console.log(sealedObj);

//88. Freeze an object named frozenObj entirely so no modifications can happen.
let frozenObj = {
  name: "Alex",
  age: 22
};
Object.freeze(frozenObj);
// These changes will NOT work
frozenObj.age = 25;
frozenObj.role = "Developer";
delete frozenObj.name;
console.log(frozenObj);

//89. Destructure the properties name and age out of the object const user = { name: "John", age: 25 }; into standalone variables.
const user = {
  name: "John",
  age: 25};
const { name, age } = user;
console.log(name);
console.log(age);

//90. Write a traditional for loop that runs exactly 5 times (tracking an index from 0 to 4).
for (let i = 0; i < 5; i++) {
  console.log(i);}

//91. Write a while loop that increments a counter and runs exactly 3 times.
let i = 0;
while (i < 3) {
    console.log(i);
    i++;}

//92. Write a do...while loop structure.
let s = 0;
do {
  console.log(s);
  s++;
} while (s < 3);

//93. Iterate over the elements of the array ["apple", "pear"] using a for...of loop.
let abc = ["apple", "pear"];
for (let fruit of abc) {
  console.log(fruit);}

//94. Iterate over the keys of the object { item: "book", price: 15 } using a for...in loop.
let objj = { item: "book", price: 15 };
for (let key in objj) {
  console.log(key);}

//95. Write a standard if-else statement that logs "Positive" if a number is >= 0, and "Negative" otherwise.
let numm1 = 5;
if (numm1 >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");}

//96. Convert that if-else block into a compact, single-line conditional Ternary operator expression.
let numm2 = 5;
let result4 = (numm2 >= 0) ? "Positive" : "Negative";
console.log(result4);

//97. Write a switch statement evaluating a variable color for the cases "red" and "blue"
let color = "red";
switch (color){
    case "red":
        console.log("color is red.");
        break;
    case "blue":
        console.log("color is blue.");
        break;
    default:
        console.log("don't know.")
}

//98. Use the break keyword inside a loop to stop execution the moment an index counter reaches 3.
for (let i8 = 0; i8 < 10; i8++) {
    console.log(i8);
    if (i8 === 3) {
        break;
    }
}

//99. Use the continue keyword inside a loop to skip all code execution for index 2 and move directly to the next iteration loop.
for (let ii = 0; ii < 5; ii++) {
  if (ii === 2) {
    continue;
  }
  console.log(ii);
}

//100. Write a traditional function declaration named add that returns the sum of parameters a and b.
function add(o, p) {
  return o + p;
}

//101. Convert that traditional add function into an ES6 Arrow Function assigned to a variable.
const sumNumbers = (number1, number2) => {
  return number1 + number2;
};

//102. Define a function parameter signature that provides a default string value of "Guest" if no argument is supplied.
function greet(userName = "Guest") {
  return `Hello, ${userName}`;
}

//103. Use the Logical Nullish Coalescing operator (??) to fallback to "default-string" if a variable is null or undefined.
let valuee = null;
let result8 = valuee ?? "default-string";
console.log(result8);

//104. Use Optional Chaining (?.) to safely log user.profile.bio without throwing an error if profile is missing.
console.log(user?.profile?.bio);

// Q5Trim the whitespace from the string `"   hello world   "`.
console.log("\n");
let str1 = "  hello world  ";
let str2 = str1.trim();
console.log(str1);
console.log(str2);
console.log("\n");


// Q6Trim the whitespace from `"   hello world   "` without using the `.trim()` method. (hint: use Regex)
 str1 = "  hello world  ";
 str3 = str1.replace(/^\s+|\s+$/g,"");
console.log(str1);
console.log(str3);-
console.log("\n");


// Q7Convert the string "javascript" completely to uppercase

str1 ="javascript"
let str4 = str1.toUpperCase();
console.log(str1);
console.log(str4);
console.log("\n");


str1 ="LEARNING"
let str5 = str1.toLowerCase();
console.log(str1);
console.log(str5);
console.log("\n");


str1 ="Developer"
let str6 = str1.substring(0,5);
console.log(str1);
console.log(str6);
console.log("\n");


str1 ="Frontend"
let str7 = str1.slice(5);
console.log(str1);
console.log(str7);
console.log("\n");

str1 ="chai aur code "
let str8 = str1.includes("aur");
console.log(str1);
console.log(str8);
console.log("\n");

str1 ="index.html"
let str9 = str1.startsWith("index");
console.log(str1);
console.log(str9);
console.log("\n");

str1 ="photo.jpg"
str8 = str1.endsWith("jpg");
console.log(str1);
console.log(str8);
console.log("\n");

str1 ="i love coding"
str8 = str1.indexOf("love");
console.log(str1);
console.log(str8);
console.log("\n");


str1 ="this is a bad day"
str8 = str1.replace("bad","good");
console.log(str1);
console.log(str8);
console.log("\n");

str1 ="banana"
str8 = str1.replaceAll("a","x");
console.log(str1);
console.log(str8);
console.log("\n");


str1 ="banana,apple,orange"
str8 = str1.split(',');
console.log(str1);
console.log(str8);
console.log("\n");


str1 ="code"
str8 = str1.split('');
console.log(str1);
console.log(str8);
console.log("\n");


str1 =" echo"
str8 = str1.repeat(3)
console.log(str1);
console.log(str8);
console.log("\n");


// Q20 Combine three variables (w1 = "Open", w2 = "Source", w3 = "Project") into a single string using a template literal
let w1 = "open"
let w2 = "source"
let w3 = "project"
console.log(w1)
console.log(w2)
console.log(w3)
console.log(`${w1} ${w2} ${w3}`)
console.log('\n')

let str = w1.concat(w2)
str8 =str.concat(w3)
console.log(str8)
console.log('\n')


str ="Supercalifragilistic"
let n = str.length;
console.log(str);
console.log(n);
console.log('\n')

str ="intership"
console.log(str[2])
console.log('\n')

str ="Alpha"
let asciivalue = [...str].map(char =>char.charCodeAt(0))
console.log(asciivalue);
console.log('\n')


str ="5"
str8 = str.padStart(3,"0")
console.log(str1);
console.log(str8);
console.log("\n");


str ="5"
str8 = str.padEnd(5,"!")
console.log(str1);
console.log(str8);
console.log("\n");


str ="sampleStr"
console.log(/^\s*$/.test(str))
console.log("\n");

str ="junior"
str2 =str.charAt(0).toUpperCase()+str.substring(1);
console.log(str2)
console.log("\n");

// Q30
str = "42"
str2 = Number(str)
console.log(str2)
console.log(typeof str2)
console.log("\n");

str = "3.14"
str2 = Number(str)
console.log(str2)
console.log(typeof str2)
console.log("\n")

str = 100
str2 = String(str)
console.log(str2)
console.log(typeof str2)
console.log("\n")

str =4.7
str2 =Math.round(str)
console.log(str2)
console.log(typeof str2)
console.log("\n")

str =4.3
str2 =Math.floor(str)
console.log(str2)
console.log(typeof str2)
console.log("\n")

str =4.1
str2 =Math.ceil(str)
console.log(str2)
console.log(typeof str2)
console.log("\n")


// Q37 Write code to find the minimum number among these values: 10, 50, 30, 90, 20.

let arr = [ 10, 50, 30, 90, 20];
let mini =arr[3];
for(let i=0;i<arr.length;i++)
{
    mini = Math.min(arr[i],mini);
}
console.log(mini)
console.log("\n")

// Q36 Write code to find the maximum number among these values: 10, 50, 30, 90, 20.
arr = [ 10, 50, 30, 90, 20];
let maxi =arr[3];
for(let i=0;i<arr.length;i++)
{
    maxi = Math.max(arr[i],maxi);
}
console.log(maxi)
console.log("\n")

let a = Math.random()
console.log(a);
console.log("\n")

 a = Math.floor(Math.random()*11)
console.log(a);
console.log("\n")

//Q40
console.log(Math.abs(-25))
console.log("\n")


console.log(Math.pow(2,5))
console.log("\n")

console.log(Math.sqrt(2,5))
console.log("\n")

a= 3.1417595
console.log(a.toFixed(2))
console.log("\n")

console.log(15%4)
console.log("\n")


let numsample = 5455;
if(numsample%2 ==0)
{
    console.log("true")
}
else{
    console.log("false")
}
console.log("\n")


str = "1010"
str2 = Number("0b"+str)
console.log(str)
console.log(str2)
console.log("\n")


arr=['apple','banana'];
console.log(arr);
arr.push('orange')
console.log(arr)
console.log("\n")


arr=[1,2,3,4,5,6]
console.log(arr)
arr.pop()
console.log(arr)
console.log("\n")


arr=['apple','banana'];
console.log(arr);
arr.unshift("mango")
console.log(arr)
console.log("\n")


//Q50
console.log(arr);
arr.shift()
console.log(arr)
console.log("\n")

arr= ["apple", "banana", "cherry"]
console.log(arr)
console.log(arr[1])
console.log("\n")

console.log(arr.indexOf('banana'))
console.log("\n")


console.log(arr.includes('banana'))
console.log(typeof arr)
console.log("\n")


arr=["HTML", "CSS", "JS"]
let arr1 = arr.join('-')
console.log(arr)
console.log(arr1)
console.log("\n")


arr = [1, 2, 3, 4]
console.log(arr)
arr.reverse()
console.log(arr)
console.log("\n")

//Q56Sort the array ["zebra", "apple", "mango"] alphabetically.
arr = ["zebra", "apple", "mango"]
arr.sort();
console.log(arr)

console.log("\n")

arr1=[1,2]
arr=[3,4]
arr=arr1.concat(arr);
console.log(arr);
console.log('\n')


let originalArr=[1,2,3,4,5]
let newArr= originalArr.slice(0);
console.log(originalArr)
console.log(newArr)
console.log('\n')

//Q60
originalArr=[10,20,30,40,50]
newArr = originalArr.slice(1,3)
console.log(originalArr)
console.log(newArr)
console.log('\n')


 originalArr = ["a", "b", "c", "d"]
newArr = originalArr.splice(1,2)
console.log(originalArr)
console.log(newArr)
console.log('\n')

arr=[1,2,3,4]
console.log(arr)
arr.splice(2,0,"x","y")
console.log(arr)
console.log('\n')


arr =[1,2,3]
newArr = arr.map(num => num*2)
console.log(arr)
console.log(newArr)
console.log('\n')

arr=[5, 12, 8, 15, 3]
newArr = arr.filter(num => num>10)
console.log(arr)
console.log(newArr)
console.log('\n')

arr=[1,2,3,4]
let sum =arr.reduce((sum,num)=> sum+num,0)
console.log(arr)
console.log(sum)
console.log('\n')

arr = [4, -2, 5, -9]
sum = arr.find(num => num<0)
console.log(arr)
console.log(sum)
console.log('\n')

arr = [4, -2, 5, -9]
sum = arr.findIndex(num => num<0)
console.log(arr)
console.log(sum)
console.log('\n')

arr = [4, -2, 5, -9,10]
sum = arr.some(num => num%2 ===0)
console.log(arr)
console.log(sum)
console.log('\n')

// Q70  Flatten the nested array [1, [2, 3], [4, 5]] into a flat, single-level array.
arr=[1, [2, 3], [4, 5]]
newArr = arr.flat()
console.log(arr)
console.log(newArr)
console.log('\n')


let tempArr = [1, 2, 3, 4];
tempArr.length = 0;
console.log(tempArr);
console.log('\n')


arr = new Array(5).fill(0);
console.log(arr);
console.log('\n')

let letters = ["a", "b", "c"];
letters.forEach(item => {
    console.log(item);
});
console.log('\n')

str = "HELLO";
let result = Array.from(str);
console.log(result);
console.log('\n')

const intern = { name: "Alex", role: "Developer" }
console.log(intern.name)
console.log('\n')

console.log(intern["role"])
console.log('\n')


intern.age =22
console.log(intern.age)
console.log('\n')


intern.role ="Junior Developer"
console.log(intern.role)
console.log('\n')

delete intern.role;
console.log(intern)
console.log('\n')


//Q80
console.log("status" in intern)
console.log('\n')

console.log(intern.hasOwnProperty("name"))
console.log('\n')


arr = Object.keys(intern)
console.log(arr)
console.log('\n')

arr = Object.values(intern)
console.log(arr)
console.log('\n')

let obj1 = { a: 1 }
let  obj2 = { b: 2 }
Object.assign(obj1,obj2)
console.log(obj1)
console.log('\n')


obj1 = { a: 1 };
obj2 = { b: 2 };
let obj3 ={ ...obj1, ...obj2};
console.log(obj3)
console.log('\n')


let sealedObj={
    name:"aditya",
    age: 21,
}
Object.seal(sealedObj)
console.log(Object.isSealed(sealedObj))
console.log('\n')



let frozenObj ={
    name:"aditya",
    age: 21,
}
Object.freeze(frozenObj)
console.log(Object.isFrozen(frozenObj))
console.log('\n')


const user = { name: "John", age: 25 }
let {name ,age}=user;
console.log(name)
console.log(age)
console.log('\n')


//Q90
for(let i=0;i<5;i++)
{
    console.log(i);
}
console.log('\n')

let i=0
while(i<3)
{
   console.log(i);
   i++;
}
console.log('\n')

i=0;
do{
  console.log(i);
   i++;
}while(i<3);
console.log('\n')


arr=["apple", "pear"];
for (const ar of arr)
{
   console.log(ar);
}
console.log('\n')


obj1={ item: "book", price: 15 }
for (const key in obj1)
{
    console.log(obj1[key])
}
console.log('\n')


let num =22
if(num>=0)
{
    console.log("positive")

}
else{
    console.log("negative")
}
console.log('\n')


let color ="red"
switch(color)
{
  case "red":console.log("red")
           break;
  case "blue":console.log("blue")
           break;
};
console.log('\n')


for(let i=0;i<5;i++)
{
    if(i==3)
    {
        break;
    }
}
console.log(i);
console.log('\n')

for(let i=0;i<5;i++)
{
    if(i==2)
    {
        continue;
    }
    console.log(i);
}

console.log('\n')



function add(a,b)
{
    return a+b;
}

console.log(add(10,20));
console.log('\n')

a=10
let b =20;
const add1 = (a,b) => a+b;
console.log(a+b);
console.log('\n')


function parameter(para)
{
  if(para === undefined)
  {
      return "welocme  guest"
  }
  else{
     return `welcoem ${para}`
  }
}

console.log(parameter())


let value = undefined;
console.log(value ?? "default-string");
console.log()

const user1 = {
    name: "John"
};
console.log(user.profile?.bio ?? "No bio available");
