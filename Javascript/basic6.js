// Loops - loop ka matlab repeat 

// 1. for loop :
// Syntax of for loop=> for (initialization;condition;increment)
//EX .
//25-50
for  (var i = 25;i <= 50;i++){
 console.log(i)
}



// 2.while loop :
// . the code in while continues to run only upto the condition is true , when the condition becomes false the code terminates
// . there  is no semicolon at the end 
// EX.
var a=12;

while(a<20){
    a++;

}



// 3.forEach loop :
// . forEach loop sirf array pe chalta hai matlab ki jab bhi tumhare pass ek array ho, tab use me ata hai forEach loop
// . forEach loop kabhi bhi main array ko change nhi karta wo bus ek temporary copy banata hai

//EX.
var a=[1,2,3,4,5,6,7];

a.forEach(function(val){
    val + 2;
});



// 4.forin :
// . objects pr loop karne ke liye hota hai forin loop

// EX.

var obj = {
    name:"ved",
    age:18,
    address:"Maharashtra"
} 

for(var key in obj){
    console.log(key);  //here only key will be printed from 'obj'
    console.log(obj[key]);  // here only the value will be displayed from 'obj'
    console.log(key,obj[key]);  // here both the key & value will be displayed from 'obj'
}

// 5. do-while loop
// .do-while loop minimum ek baar run karta hi hai (condition end me check hoti hai); on the other hand while loop pehle condition check karta hai aur fir decide karta hai ki runkarna hai ya nhi 
// .there  is a semicolon at the end of tge loop    
