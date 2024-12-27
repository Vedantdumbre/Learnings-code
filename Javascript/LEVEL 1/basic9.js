// push pop shift unshift splice in ARRAYS
// EX.
var arr = [1,2,3,4,5];
arr.push(8); //here 8 is pushed at the very end of the array

var arr = [1,2,3,4,5];
arr.pop(); //here last value in the array deletes & returns the array again

var arr = [1,2,3,4,5];
arr.unshift(0); //here array ke start me 0 add hoga 

var arr = [1,2,3,4,5];
arr.shift(0) // here array ka 1st value dlt hota hai & array return karat hai

var arr = [1,2,3,4,5];
arr.splice(0,1); //here array ke bech se kitni value hatani hai (value ki index,kitni value hatani hai)

var arr= [1,2,3,4,5];
var arr1= [1,2,3,4,5];

var plus=arr.concat(arr1)//concat 2 ya 2 se jyada array add karta hai 
console.log(plus);
                      