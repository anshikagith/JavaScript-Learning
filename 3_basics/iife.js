//immediately invoked function expression
(function hello (){
    console.log("Hi");
})();
//check iife ka badhiya sa viva ans
( () => {
    console.log("hello");
})();

(function yes (name){
    console.log(`${name}, hiii`);
})("Anshika");

//refer video 25 of chai and code js for call stack
