//object literals
const mysym = ("Ke1")
const ob={
    name: "Anshika",
    age: 20,
    [mysym] : "Mykey1", //very very very important, look at the way the symbol is used
    location: "Lucknow",
    weekend: ['Saturday', 'Sunday']
}
//two ways to access object elements
console.log(ob.name);
console.log(ob["name"]);
console.log(ob[mysym]);


ob.greeting = function(){
    console.log("Hello");
}
console.log(ob.greeting());

ob.greeeting2 = function(){
    console.log(`Hello my name is ${this.name}`);
}
console.log(ob.greeeting2());

//important: assign
const ob1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}
const ob2 = {
    4 : 'd',
    5 : 'e',
    6 : 'f'
}
const ob3 = Object.assign({}, ob1, ob2) // Object.assign(target, source)- check mdn docs for reference
console.log(ob3);
const ob4 = {...ob1, ...ob2}
console.log(ob4);

//important
console.log(Object.keys(ob4)); //1,2,3,4,5,6
console.log(Object.values(ob4)); //a,b,c,d,e,f

//object destructuring

const course = {
    name : "JavaScript",
    price : 1000,
    teacher : "Hitesh"
}
//course.teacher

const{teacher} = course
console.log(teacher);
//if you want to address teacher as some other name
 const{teacher : instructor} = course
 console.log(instructor);

 