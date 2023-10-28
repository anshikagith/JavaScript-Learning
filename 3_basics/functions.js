function add(num1, num2){
    let a=num1 + num2
    return a
}
console.log(add(60,9));

function greeting(user) {
    return `${user} says hi`
}
console.log(greeting("Anshika"));
//if no argument is given 
 console.log(greeting()); //undefined says hi

 //if we want to pass multiple arguments for same variable

 function cart(...value) {
    return value
 }
 console.log(cart(200,300,400)); //200 300 400
//important
 function cart(num1,num2,...value) {
    return value
 }
 console.log(cart(200,300,400,500)); // [400, 500]


 //functions and objects

 const ob = {
    name : "Anshi",
    age : 20
 }
 function obfun(anyob) {
    console.log(`Name : ${anyob.name} Age : ${anyob.age}`);
 }
 obfun(ob)