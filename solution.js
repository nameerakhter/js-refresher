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
//32. Convert the raw number `100` into a string data type.
//33. Round the decimal number `4.7` to the nearest whole integer.
//34. Round the decimal number `4.3` down to the nearest whole integer.
//35. Round the decimal number `4.1` up to the nearest whole integer.
//36. Write code to find the maximum number among these values: `10, 50, 30, 90, 20`.
//37. Write code to find the minimum number among these values: `10, 50, 30, 90, 20`.
//38. Write an expression to generate a random decimal number between `0` and `1`.
//39. Write code to generate a random integer precisely between `1` and `10` (inclusive).
//40. Calculate the absolute value of the number `-25`.
//41. Calculate `2` raised to the power of `5` ($2^5$).
//42. Calculate the square root of the number `81`.
//43. Format the long decimal number `3.14159265` to exactly 2 decimal places.
//44. Use the modulus operator to grab the remainder of `15` divided by `4`.
//45. Write a condition that evaluates to `true` if a variable `numSample` is an even number.
//46. Convert the binary string `"1010"` into a base-10 decimal integer.
