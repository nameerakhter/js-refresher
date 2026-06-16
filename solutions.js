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
