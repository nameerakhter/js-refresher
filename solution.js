/*
// Trim the whitespace from the string "   hello world   ".
let text = "  hello world  "
console.log(text.trim())

//6. Trim the whitespace from "   hello world   " without using the .trim() method. (hint: use Regex)
const str = "   hello world   ";
const result = str.replace(/^\s+|\s+$/g, '');
console.log(result); 


//7.Convert the string "javascript" completely to uppercase.
let text = "javascript"
let result = text.toUpperCase();
console.log(result);


// 8. Convert the string "LEARNING" completely to lowercase.
let str = "LEARNING"
result = str.toLowerCase();
console.log(result)


// 9. Extract the first 4 characters of the string "Developer".
let str = "Developer"
result = str.slice(0,4);
console.log(result)


// 10.Extract the last 3 characters of the string "Frontend".
let str = "Frontend"
console.log(str.slice(5,8)) // result = str.slice(str.length -3) , "Frontend".slice(-3);


//11. Check if the string "Chai aur code" contains the word "aur" and save the true/false result to a variable.
let str = "chai aur code"
let result = str.includes("aur");
console.log(result);


// 12.Check if the string Check if the string "index.html" starts with the prefix "index" starts with the prefix "index"
let text = "index.html"
const result = text.startsWith("index");
console.log(result);


// 13.Check if the file name "photo.jpg" ends with the extension ".jpg".
let text = "photo.jpg"
let result = text.endsWith("jpg")
console.log(result);


// 14.Find the exact position index of the word "love" in the sentence "I love coding"
let str = "I love coding"
let result = str.indexOf("love")
console.log(result);


// 15. Replace the word "bad" with "good" in the sentence "This is a bad day".
let str = "This is a bad day";
let result = str.replace("bad", "good");
console.log(result); 


// 16.Replace all occurrences of the letter "a" with "x" in the string "banana".
let str = "banana"
let result = str.replaceAll("a","x");
console.log(result);


// 17. Split the string "apple,banana,orange" into a working JavaScript array.
let str = "apple,banana,orange"
let result = str.split(",")
console.log(result);


// 18.Split the single word "Code" into an array of its individual characters ['C', 'o', 'd', 'e'].
let str = "Code"
let result = str.split("")
console.log(result)


// 19. Repeat the word "Echo " 3 times sequentially to get "Echo Echo Echo ".
let result = "Echo ".repeat(3);
console.log(result);


// 20.Combine three variables (w1 = "Open", w2 = "Source", w3 = "Project") into a single string using a template literal.
let w1 = "open";
let w2 = "source";
let w3 ="project";
let result = `${w1} ${w2} ${w3}`
console.log(result);


// 21. Combine those same three variables using the .concat() string method.
let w1 = "open";
let w2 = "source";
let w3 ="project";
let result = w1.concat(" ",w2, " ",w3);
console.log(result);


// 22. Write code to find the total character length of the string "Supercalifragilistic".
let str = "Supercalifragilistic"
let length = str.length;
console.log(length);


// 23. Access the 3rd character of the string "Internship" using square bracket notation.
let str = "Internship";
console.log(str[2]);


// 24. Get the character code (ASCII) value of the very first character of the string "Alpha".
let str = "Alpha"
let result = str.charCodeAt(0);
console.log(result);


//25. Pad the string "5" with leading zeros using a built-in method so it becomes "005".
let str = "5"
let result = str.padStart(3, "0")
console.log(result);


// 26.Pad the string "OK" with trailing exclamation marks to make it "OK!!!".
let str = "Ok"
let result = str.padEnd(5, "!"); 
console.log(result);


// 27. Extract characters from index 2 up to index 6 (exclusive) of the string "Information".
let str = "Information"
let result = str.slice(2,6);
console.log(result);


// 28. Write an expression that checks if a string sampleStr contains only empty spaces.
let str = "   ";
let result = str.trim()==="";
console.log(result);


//29.Write code to capitalize only the first letter of the string "junior" to make it "Junior".
let str = "junior"
let result = str[0].toUpperCase()+ str.slice(1);
console.log(result);

//30.Parse and convert the string "42" into an actual working integer.
let str = "42"
console.log(typeof str)
let num = parseInt("42");
console.log(num);
console.log(typeof num);

//31. Parse and convert the string "3.14" into a floating-point number.
let str = "3.14";
let float = parseFloat(str)
console.log(float)


//32. Convert the raw number 100 into a string data type.
let num = 100;
let result = num.toString();
console.log(result);

//Round the decimal number 4.7 to the nearest whole integer.
let num = 4.7;
let result = Math.round(num);
console.log(result)

// 34.Round the decimal number 4.3 down to the nearest whole integer
let  num = 4.3;
let result = Math.floor(num)
console.log(result);


//35.Round the decimal number 4.1 up to the nearest whole integer.
let  num = 4.1;
let result = Math.ceil(num);
console.log(result);

//36.Write code to find the maximum number among these values: 10, 50, 30, 90, 20.
let maxNum = Math.max(10,50,30,90);
console.log(maxNum);

//37.Write code to find the minimum number among these values: 10, 50, 30, 90, 20.
let minNum = Math.min(10, 50, 30, 90, 20);
console.log(minNum);

//Write an expression to generate a random decimal number between 0 and 1.
let ranNum = Math.random();
console.log(ranNum);


//Write code to generate a random integer precisely between 1 and 10 (inclusive).
let ranNum = Math.floor(Math.random()*10)+1;
console.log(ranNum);

// 40.Calculate the absolute value of the number -25.
let num = -25;
let result = Math.abs(num);
console.log(result);

// 41.Calculate 2 raised to the power of 5 2^5
let result = Math.pow(2, 5);
console.log(result);

//42.Calculate the square root of the number 81.
let num = Math.sqrt(81);
console.log(num);


//43 Format the long decimal number 3.14159265 to exactly 2 decimal places.
let num = 3.14159265;
let result = num.toFixed(2);
console.log(result);

// 44.Use the modulus operator to grab the remainder of 15 divided by 4
let res = 15 % 4;
console.log(res);

//45.Write a condition that evaluates to true if a variable numSample is an even number.
let numSample = 8;
console.log(numSample % 2 === 0);

//46. Convert the binary string "1010" into a base-10 decimal integer.
let binary = "1010";
let decimal = parseInt(binary, 2);
console.log(decimal);

//47.Add the element "orange" to the end of the array ["apple", "banana"].
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

//48.Remove the last element from an array using an array method.
let fruits = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits);

//49.Add the element "mango" to the very beginning of an array.
let fruits = ["apple", "banana"];
fruits.unshift("mango");
console.log(fruits);

//50.Remove the first element from an array.
let fruits = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits);

//51.Access the second item in the array ["apple", "banana", "cherry"].
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);

//52.Find the index location of "banana" within the array ["apple", "banana", "cherry"].
let fruit = ["apple", "banana", "cherry"]
let result = fruit.indexOf("banana")
console.log(result);

//53.Check if "cherry" exists inside an array, returning a boolean.
let fruit = ["apple", "banana", "cherry"]
let result = fruit.includes("cherry")
console.log(result);

//54. Convert the array ["HTML", "CSS", "JS"] into a single combined string "HTML-CSS-JS".
let arr = ["HTML", "CSS", "JS"]
let result = arr.join("-");
console.log(result)

//55. Reverse the structural order of the array Reverse the structural order of the array [1, 2, 3, 4].
let arr = [1, 2, 3, 4]
arr.reverse();
console.log(arr);

//56. Sort the array ["zebra", "apple", "mango"] alphabetically.
let arr =  ["zebra", "apple", "mango"]
arr.sort()
console.log(arr)

//Combine arrays [1, 2] and [3, 4] into one new array using .concat().
let arr1 = [1,2];
let arr2 = [3,4]
let result = arr1.concat(arr2)
console.log(result);

// 58.Combine arrays [1, 2] and [3, 4] into one new array using the Spread (...) operator.
let arr1 = [1,2]
let arr2 = [3,4]
let result = [...arr1, ...arr2]
console.log(result)


//59.Write code to create a shallow copy of an array named originalArr using .slice().
let originalArr = [1,2,3];
let copyArr = originalArr.slice();
copyArr.push(4);
console.log(originalArr);
console.log(copyArr);

//60 Extract elements at index 1 and index 2 from [10, 20, 30, 40, 50] into a new array.
let arr = [10, 20, 30, 40, 50]
let result = arr.slice(1,3)
console.log(result)

//61 Remove 2 elements starting exactly from index 1 in the array ["a", "b", "c", "d"].
let arr =  ["a", "b", "c", "d"]
let result = arr.splice(1,2)
console.log(result)

//62 Insert the elements "x" and "y" at index 2 without removing anything from [1, 2, 3, 4].
let arr =  [1, 2, 3, 4]
arr.splice(2,0,"x","y")
console.log(arr)

//63 Use .map() to multiply every single number in the array [1, 2, 3] by 2.
let arr = [1, 2, 3];
let result = arr.map(function(num){
    return num*2;
});

//64.Use .filter() to strip out and keep only numbers greater than 10 in [5, 12, 8, 15, 3]
let arr = [5, 12, 8, 15, 3]
let result = arr.filter(function(num){
    return num >10
})
console.log(result);
*/
// 65.Use .reduce() to sum up all the numbers in the array [1, 2, 3, 4].
let arr = [1, 2, 3, 4];
let result = arr.reduce(function(total,num){
    return total + num;
});
console.log(result)

