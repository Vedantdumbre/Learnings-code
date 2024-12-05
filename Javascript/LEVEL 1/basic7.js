// what are function ?
// a block of code that can be called multiple times from different parts of the program
// functions are reusable blocks of code that can be called multiple times from different parts of the program
// functions are used to perform a specific task or set of tasks

// EX.
function myFunction (msg) {  // this is paarameter 
    console.log(msg)   // this can be  content , loop , print something 
}
myFunction("Hello")  // this is calling the function and called as argument , which inserts value in parameter


// Functions  -> function=code ko naam dena 
// . function ka matlab aap kuch code ko likh kar koi naam de sakte ho and badmein use kar sakte ho as many times you want 
// . function mainly 3 kaam ke liye hote hai 
// 1.jab apka code aap turant nhi chalana chahte aur future me chalana chahte ho 
// 2.jab aapka code aap reuse karna chahte ho 
// 3.jab aap code chalana chahte ho aur har baar different data ke sath

//EX.
function Oatsbanaoandkhao(){
    console.log("Oats kharido ")
    console.log("paatela garam karo ")
    console.log("Oats dalo ")
    console.log("mix it and boil it ")
    console.log("Eat")
}
Oatsbanaoandkhao();


// ARGUMENTS? ->real value jo hum dete hai jab hum function ko chalana chahte ho 
// PARAMETERS? ->variables jinme value store hoti hai 

//EX.
function abcd (a,b,c) { // heree a,b,c are parameters 
    console.log(a,b,c)  // heree a,b,c are parameters 
}
abcd(12,13,14);         // here 12,13,14 are arguments 


// Callback function :
// aisa code jo badmein chalta hai use hum ek function dedete hai ke jab ye code complete hojaye tab ise chalana , aur wo function ek normal hi hota hai aur use call back function kehte hai 

// EX.
setTimeout(function(){
    console.log("2 second baad chalana");
},2000);

//Arrow function 
//arrow function ek normal function ki taarh hi hota hai jhaa pe hum function ko ek variable ki tarah treat kr sakte hai 

//EX. 
const arrowSum = (a,b) =>{
    console.log(a+b )
};



// First CLass Function :
// . js me ek concept hai jiska matlab gai ki aap function ko use kar sakte ho as a value 

//EX.
function abcd(a){
        a();
}
abcd(function(){console.log("hello");}) //IMP


// A]Execution context(EC)
// ->'Execution context(EC)' matlab jab bhi hum ek function chalayenge function apna ek imaginary container bana lega jis me uski 3 cize hongi 
// 1. variables
// 2. function inside that parent function
// 3. lexical environment of that function

// EX.
function abcd(){
    var a=12;
    function def(){   // here in this code this container's name is abcd and this is a EC it contains all three above mentioned values; anything inside EC is accesible by abcd; but other functions cant ('var' has function scoped property so it cant acess boyond the 'def' function )
        b=15;
    }
}
abcd();

// B]Lexical envoronment(LE)?
// -> lexical environment hota hai ki ek chart jisme ye likha hota hai ke aapka function konse chej ko acess kr sakta hai and kinko nhi, matlab it holds scope and scope chains 