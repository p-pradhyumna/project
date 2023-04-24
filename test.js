//sum of elements of an array using reduce() method
let a=[9,8,7,6,5];
let sum = a.reduce((accumulator, element) => accumulator + element);
console.log("The sum of elements of an array is: ", sum);

//create new array

let b = [1, 2, 3, 4];
let res = b.map((ele) => ele + ((b.findIndex((e) => e == ele)) + 1) * 10);
console.log("By using both map and findIndex function", res);

let arr= [1, 2, 3, 4];
let result= arr.map((ele) => ele * 11);
console.log("Using only map function", result);

// to find name of student who got highest marks

let stu = [{ name: "ravi", marks: { maths: 99, physics: 97, chemistry: 86 } },
{ name: "bhanu", marks: { maths: 78, physics: 86, chemistry: 94} },
{ name: "kiran", marks: { maths: 84, physics: 92, chemistry: 92 } },];
let mmax = stu.reduce((accumulator, element) => (accumulator.marks.maths > element.marks.maths) ? accumulator : element);
console.log("Highest marks in maths", mmax);

let pmax = stu.reduce((accumulator, element) => (accumulator.marks.physics > element.marks.physics) ? accumulator : element);
console.log("Highest marks in physics", pmax);
