# Instructions

1. Clone this repository or copy this file.
2. Create a file named `solutions.js` (and `solutions.html` for the HTML section).
3. Write out the practical code for each task sequentially.
4. Run your JavaScript code using `node ` and console.logs to check the output in your terminal.

## Section 1: Developer Environment & HTML Emmet Shortcuts

_Write or describe the exact code output/shortcut for these everyday editor workflows._

1. In VS Code, what happens when you type `!` in a blank `.html` file and press `Tab` or `Enter`?
2. Write down the exact `<!DOCTYPE>` header code that VS Code automatically generates at the very top of that file. What does it signify to the browser?
3. What Emmet shortcut syntax would you type to instantly generate a `<div>` containing a `<ul>` with 3 `<li>` items inside it?
4. What Emmet shortcut syntax would you type to instantly generate an `<input>` field with a class name of `form-control` and an ID of `user-email`?

---

## Section 2: Strings & Text Manipulation

_Write the code block or expression to achieve the following outcomes._

5. Trim the whitespace from the string `"   hello world   "`.
6. Trim the whitespace from `"   hello world   "` without using the `.trim()` method. (hint: use Regex)
7. Convert the string `"javascript"` completely to uppercase.
8. Convert the string `"LEARNING"` completely to lowercase.
9. Extract the first 4 characters of the string `"Developer"`.
10. Extract the last 3 characters of the string `"Frontend"`.
11. Check if the string `"Chai aur code"` contains the word `"aur"` and save the true/false result to a variable.
12. Check if the string `"index.html"` starts with the prefix `"index"`.
13. Check if the file name `"photo.jpg"` ends with the extension `".jpg"`.
14. Find the exact position index of the word `"love"` in the sentence `"I love coding"`.
15. Replace the word `"bad"` with `"good"` in the sentence `"This is a bad day"`.
16. Replace all occurrences of the letter `"a"` with `"x"` in the string `"banana"`.
17. Split the string `"apple,banana,orange"` into a working JavaScript array.
18. Split the single word `"Code"` into an array of its individual characters `['C', 'o', 'd', 'e']`.
19. Repeat the word `"Echo "` 3 times sequentially to get `"Echo Echo Echo "`.
20. Combine three variables (`w1 = "Open"`, `w2 = "Source"`, `w3 = "Project"`) into a single string using a template literal.
21. Combine those same three variables using the `.concat()` string method.
22. Write code to find the total character length of the string `"Supercalifragilistic"`.
23. Access the 3rd character of the string `"Internship"` using square bracket notation.
24. Get the character code (ASCII) value of the very first character of the string `"Alpha"`.
25. Pad the string `"5"` with leading zeros using a built-in method so it becomes `"005"`.
26. Pad the string `"OK"` with trailing exclamation marks to make it `"OK!!!"`.
27. Extract characters from index 2 up to index 6 (exclusive) of the string `"Information"`.
28. Write an expression that checks if a string `sampleStr` contains only empty spaces.
29. Write code to capitalize only the first letter of the string `"junior"` to make it `"Junior"`.

---

## Section 3: Numbers & Basic Math Operations

_Write the math or parsing syntax to solve these problems._

30. Parse and convert the string `"42"` into an actual working integer.
31. Parse and convert the string `"3.14"` into a floating-point number.
32. Convert the raw number `100` into a string data type.
33. Round the decimal number `4.7` to the nearest whole integer.
34. Round the decimal number `4.3` down to the nearest whole integer.
35. Round the decimal number `4.1` up to the nearest whole integer.
36. Write code to find the maximum number among these values: `10, 50, 30, 90, 20`.
37. Write code to find the minimum number among these values: `10, 50, 30, 90, 20`.
38. Write an expression to generate a random decimal number between `0` and `1`.
39. Write code to generate a random integer precisely between `1` and `10` (inclusive).
40. Calculate the absolute value of the number `-25`.
41. Calculate `2` raised to the power of `5` ($2^5$).
42. Calculate the square root of the number `81`.
43. Format the long decimal number `3.14159265` to exactly 2 decimal places.
44. Use the modulus operator to grab the remainder of `15` divided by `4`.
45. Write a condition that evaluates to `true` if a variable `numSample` is an even number.
46. Convert the binary string `"1010"` into a base-10 decimal integer.

---

## Section 4: Arrays & Iteration

_Manipulate the array data structures._

47. Add the element `"orange"` to the end of the array `["apple", "banana"]`.
48. Remove the last element from an array using an array method.
49. Add the element `"mango"` to the very beginning of an array.
50. Remove the first element from an array.
51. Access the second item in the array `["apple", "banana", "cherry"]`.
52. Find the index location of `"banana"` within the array `["apple", "banana", "cherry"]`.
53. Check if `"cherry"` exists inside an array, returning a boolean.
54. Convert the array `["HTML", "CSS", "JS"]` into a single combined string `"HTML-CSS-JS"`.
55. Reverse the structural order of the array `[1, 2, 3, 4]`.
56. Sort the array `["zebra", "apple", "mango"]` alphabetically.
57. Combine arrays `[1, 2]` and `[3, 4]` into one new array using `.concat()`.
58. Combine arrays `[1, 2]` and `[3, 4]` into one new array using the Spread (`...`) operator.
59. Write code to create a shallow copy of an array named `originalArr` using `.slice()`.
60. Extract elements at index 1 and index 2 from `[10, 20, 30, 40, 50]` into a new array.
61. Remove 2 elements starting exactly from index 1 in the array `["a", "b", "c", "d"]`.
62. Insert the elements `"x"` and `"y"` at index 2 without removing anything from `[1, 2, 3, 4]`.
63. Use `.map()` to multiply every single number in the array `[1, 2, 3]` by 2.
64. Use `.filter()` to strip out and keep only numbers greater than 10 in `[5, 12, 8, 15, 3]`.
65. Use `.reduce()` to sum up all the numbers in the array `[1, 2, 3, 4]`.
66. Use `.find()` to locate the first number that is less than 0 in the array `[4, -2, 5, -9]`.
67. Use `.findIndex()` to get the index of the first negative number found in `[4, -2, 5]`.
68. Use `.every()` to confirm if ALL numbers in the array `[2, 4, 6]` are even.
69. Use `.some()` to check if at least ONE number in the array `[1, 3, 6, 7]` is even.
70. Flatten the nested array `[1, [2, 3], [4, 5]]` into a flat, single-level array.
71. Clear all items from an array named `tempArr` by changing its `.length` property directly.
72. Create a 5-element array filled entirely with the number `0` using an array method sequence.
73. Loop through an array `["a", "b", "c"]` and log each item out using the `.forEach()` method.
74. Convert the string `"HELLO"` into a true structural array of individual characters `['H', 'E', 'L', 'L', 'O']`.

---

## Section 5: Objects & Property Manipulation

_Perform CRUD and operational changes on JavaScript objects._

75. Given `const intern = { name: "Alex", role: "Developer" };`, access `name` using dot notation.
76. Access the property `role` from that same object using dynamic bracket notation instead.
77. Add a new property `age` with a value of `22` to the `intern` object.
78. Update the property `role` inside the object to read `"Junior Developer"`.
79. Delete the property `role` completely from the `intern` object.
80. Write a statement to check if the property `"status"` exists inside the object using the `in` operator.
81. Write a statement to check if the object has the property `"name"` using `hasOwnProperty()`.
82. Generate an array containing all the keys of the object.
83. Generate an array containing all the values of the object.
84. Generate an array of key-value pair arrays from the object.
85. Merge two objects `const obj1 = { a: 1 };` and `const obj2 = { b: 2 };` using `Object.assign()`.
86. Merge those same two objects `obj1` and `obj2` using the Object Spread operator.
87. Seal an object named `sealedObj` so properties cannot be added or deleted, but values can change.
88. Freeze an object named `frozenObj` entirely so no modifications can happen.
89. Destructure the properties `name` and `age` out of the object `const user = { name: "John", age: 25 };` into standalone variables.

---

## Section 6: Control Flow, Loops & Logic Syntax

90. Write a traditional `for` loop that runs exactly 5 times (tracking an index from 0 to 4).
91. Write a `while` loop that increments a counter and runs exactly 3 times.
92. Write a `do...while` loop structure.
93. Iterate over the elements of the array `["apple", "pear"]` using a `for...of` loop.
94. Iterate over the keys of the object `{ item: "book", price: 15 }` using a `for...in` loop.
95. Write a standard `if-else` statement that logs "Positive" if a number is >= 0, and "Negative" otherwise.
96. Convert that `if-else` block into a compact, single-line conditional Ternary operator expression.
97. Write a `switch` statement evaluating a variable `color` for the cases `"red"` and `"blue"`.
98. Use the `break` keyword inside a loop to stop execution the moment an index counter reaches `3`.
99. Use the `continue` keyword inside a loop to skip all code execution for index `2` and move directly to the next iteration loop.
100.  Write a traditional function declaration named `add` that returns the sum of parameters `a` and `b`.
101.  Convert that traditional `add` function into an ES6 Arrow Function assigned to a variable.
102.  Define a function parameter signature that provides a default string value of `"Guest"` if no argument is supplied.
103.  Use the Logical Nullish Coalescing operator (`??`) to fallback to `"default-string"` if a variable is null or undefined.
104.  Use Optional Chaining (`?.`) to safely log `user.profile.bio` without throwing an error if `profile` is missing.
