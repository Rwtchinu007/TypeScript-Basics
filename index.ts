const a = "world";
const b = 5;
console.log(a + b);
// console.log(a-b); this will give an error because we cannot subtract a string from a number

/**
 * string,number,boolean,array,tuple,void,never,any,object
 */

const name: string = "Chinu"; // this is used to define the type of the variable
console.log(name);

const nums: number[] = [1, 2]; // it tells that the array will only contain numbers or we cant add any other type of data in this array
nums.push(3); // this is valid
console.log(nums);

const tup: [string, number] = ["Chinu", 5]; // this is a tuple which can only contain a string and a number in that order it has fixed length and type
console.log(tup);

function greet(name: string): void {
  // this is a function which returns void because it does not return anything
  console.log("Hello " + name);
}
greet("Chinu"); // this is void function because it does not return anything

function add(num1: number, num2: number): number {
  return num1 + num2; // this is a function which returns a number
}
console.log(add(5, 10)); // this is a function which returns a number

function cat(name: string): never {
  // this is a function which never returns anything because it throws an error
  throw new Error("This is an error");
}

type USER = {
  // this is a type which defines the structure of an object
  name: string;
  age: number;
  isMale: boolean;
};

const user: USER = {
  name: "Chinu",
  age: 25,
  isMale: true,
};

function helloUser(data: USER): void {
  console.log(
    "hello " +
      data.name +
      " your age is " +
      data.age +
      " and you are " +
      (data.isMale ? "male" : "female"),
  );
}

helloUser(user); // this is a function which takes an object as a parameter and returns void

// any and unknown
let abc: any; // this is a variable which can take any type of data

abc = "meowwww";
console.log(abc.toUpperCase()); // this is valid because abc is of type any

let xyz: unknown; // this is a variable which can take any type of data but we cannot use any methods on it because it is of type unknown

xyz = "123";
if (typeof xyz === "number") {
  console.log(xyz.toFixed(2)); // this is valid because we have checked the type of xyz before using it
//   if it doest match the type then it will give an error
}
