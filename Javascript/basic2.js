// var let const

//1. Variables:
// . kisi bhi type ka data(partof code) store karne liye lagne wali space.
// . always indicated on left 
// . we can change the content written in it

//2.Constants
// . kisi bhi type ka data(partof code) store karne liye lagne wali space.
// . always indicated on left 
// . we can never chanage the value or content inside the const 

//3.Let
// . kisi bhi type ka data(partof code) store karne liye lagne wali space.
// .let new js me hai(es6)



// DIFF.btwn var  & let const

// 1.var old me tha(es5)
// 2.var' function scoped' hota hai => var apne parent function me kahi bhi use ho sakta hai

function abcd(){
    for ( var i =1;i<12;i++){  // heer of we put let or const instead of var the code wont 12 because let and const 'braces scoped hai' 
        console.log(i);
    }
        console.log(i);
}
abcd();
// 3.var adds itself to window object -> js ke pass kuch cheese nahi hoti hai jo hum use karte hai aur wo use karne ke liye hum ek browser ki help leta hai jiska naam hai window object



// 1.let new js me hai(es6)
// 2.let const 'braces scope' hota hai 
// 3.let const doesnt add