// OBJECTS -> ek se jyada logo ke bre me baat kar rahe ho to wo array hai, aur ek bande ke baare me saari batein kar raheho to use object kehte hai
// . object hai ek bande ki details ko hold karna ,in a key value pair

// 1.blank obj
var a = {}

// 2. filled obj
var a = {
    age:18,     // here age and namae are properties
    name:"vedant",
    place:function(){}  // here place is a method because it has no value but function
}
// how to update a object
a.age=19;

// how too delete a object?
var obj ={
    name : "vedant",
    age : 18
}
delete obj.age;

// use JSON FORMATER for api understandign and to improve api readability