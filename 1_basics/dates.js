// refer temporal api

//dates
let mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate); //object

const d=new Date(2023, 0, 23)
console.log(d.toDateString());

//date.now
//getmonth, getdate, getday


//important
let newdate= Date();
newdate.toLocaleString('default',{
    weekday : "long"
})