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