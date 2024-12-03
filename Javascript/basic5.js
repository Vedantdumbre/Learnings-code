// Conditionals -> agaar koi statment ya logic me agr/magar ata hai to hum  use conditional statements dete hai aur aisa hota to/ waisa hota to jaise statements hote to hum conditional statements use karte hai 

if (true) {
    
}
else if(false) { 

}
else{
    
}

//Ternary Operators:
//ye ek type ka conditional statement hai jo 3 operands me kaam karta hai . Hum hi use condition dete hai aur fir agar true hoga to kya output ayega bataenge aur agar false hota hai t kya output ayega ye batayenge

//EX.

let age =19
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// js me kuch bhi likho wo mainly 2 prakar ke hote hai 
// 1.falsy : falsy values are -> 0, false, undefined, null, NaN, document.all
// 2.truthy

if (-1) {
    console.log("hey");
}
else{
    console.log("hello");
}