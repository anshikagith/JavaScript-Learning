const user = {
    name : "Anshika",
    age : 20,
    welfun : function(){
        console.log(`${this.name}, welcome`);
    }
}
user.welfun() //anshika
user.name = "AArohi"
user.welfun() //aarohi

//arrow function
const hello = ()=>{
    let name = "Anshika"
    console.log(this);
}
hello()

const add = (n1,n2) =>{
    return n1+n2
}
//instead of curly braces if we use paranthesis, then we must return a value
console.log(add(3,4));