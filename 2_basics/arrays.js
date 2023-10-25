const arr= [1,2,3,4,5,true,"Anshika"]
console.log(arr);
console.log(arr.push(8));
//push, pop, unshift(starting me add ho jayega), join, includes, indexof
//slice- the second index is not included


//splice- read from docs very important

//spread
const fruits = ['orange', 'kiwi'];
const veg = ['spinach', 'carrot'];
const total = [...fruits, ...veg];
console.log(total);

//flat

const a = [1,2,3,[4,5,6],[7,[8,[9]]]];
console.log(a.flat(Infinity)); //1,2,3,4,5,6,7,8,9

//from- converts to array

console.log(Array.from("Anshika")); //a,n,s,h,i,k,a
console.log(Array.from({name : "Anshika"})); //returns empty array ****important and interesting case
let x1=1
let x2=2
let x3=3
console.log(Array.of(x1,x2,x3)); // 1,2,3