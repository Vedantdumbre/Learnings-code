// Primitive and Reference types

// 1.Primitive  -> values which are written in singular form i.e only one value for one variable 
// . these are always writen without braces
// . we can copy(assign the value to diff. variable) the value without any difficulty
//EX.
var a=121;
var b=a;



// 2. Reference -> the multiple values stored in braces such as (),[],{} are called as reference 
// . we cant copy the value directly 
// . if we make any change in the primary braces it directly trasnfers it to the copied braces 
//EX.
var a=[12,13,14,15];
var b=a;
b.pop();

//How to copy inreference types?
var a =[1,2,3,4,5];
var b=[...a];
b.pop();
// its necessary to print 3 dots as it defines copying the value of a in a systematic manner