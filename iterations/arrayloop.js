//for of
const nums = [1,2,3,4]
for (const num of nums) {
    console.log(num);
}
//map
const map1 = new Map();
map1.set("IN", "India")
map1.set("USA", "United States of India")
console.log(map1)
for( const  [key, value] of map1)
{
    console.log(key, '->' , value);
}
//for in
//for each
const lang = ['java', 'c++', 'c' , 'python']
lang.forEach( (item)=> {
    console.log(item);
})
const n= [1,2,3,4,5,6,7,8,9,10]
const res=n.filter ((n)=>(
n>5
))
console.log(res);