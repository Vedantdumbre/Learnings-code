// ARRAYS -> group of values
// . hum ek variable me ek value store kar pate hai par jab hume ek se jyada value store karne ho tab hum arrays ka istamalkarte hai ; array apko ek se jyada values store karne ki freedom deta hai
// .Arrays mutable hote hai 

//EX.   
var arr =[1,2,3]
console.log(arr);                                                                                          

//How arrays are made behind the scenes?
//-> when we make a array in js it is actually a 'object' js converts our array into object always while executing 
// -> hum kehsakte hai ki js me array ek object hi hai , wo kaam kaise karte hai ex. dekhke samajhte hai

// how array is executed behind the scenes?
var arr=[1,2,3,4]   // this is a array made

arr = {
    0:1,   // this is how a array is executed behind the scenes 
    1:2,
    2:3,
    3:4
}

//Looping Over Arrays : hume jab bhi kabhi kisi array me kisitype ka loop chala na hoto following steps :
//for loop : 
let heroes = [ironman , spiderman , captainAmerica];


for ( idx=0;idx<heroes.length;idx++ ){   // yahape hum tab loop ko run karenge jab tak hume jarurat hai us vlaue ki
    console.log(heroes[idx]);    // always remember ek array ki value array ki index value se +1 hoti hai
}


// calllback functions in array 
// callback is a function which is passed  as an argument to another function.

//EX.
let arr3 = [1,2,3,4,5]

arr3.forEach((val) => { //val at every idx
    console.log(val); // this is a callback function
})


//Map method in array
// map method is used to create a new array with the results of applying a provided function on every