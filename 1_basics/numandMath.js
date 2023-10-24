const num = new Number(400)
console.log(num);
//toFixed
console.log(num.toFixed(2)); //400.00
const num1= new Number(123.89)
console.log(num1.toPrecision(4)); //123.9
const num3= new Number(1000000)
console.log(num3.toLocaleString('en-IN')); //10,00,000

//****Maths******* */
console.log(Math.abs(-5));
console.log(Math.round(4.5));
console.log(Math.pow(2,3));
//Math.max, math.min
console.log(Math.random());

 
// ***************************important******************** //
// agar hume random value chahiye 10 aur 20 ke beech--
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);