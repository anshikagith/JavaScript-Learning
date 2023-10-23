let x="15"
console.log(typeof x);
let value= Number(x);
console.log(value) //number
let y= "15abc"
let value2=Number(y)
console.log(value2) //

let z= null
let value3=Number(z)
console.log(value3) //0

let a= undefined
let value4=Number(a)
console.log(value4) //NaN


//1=> true
//0=>false
//empty string=>false
//non empty string=>true