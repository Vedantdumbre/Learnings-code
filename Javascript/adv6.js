//Prototype:
// . aap jab bhi ek object banate ho tab ek property assign hoti hai jise hum prototype kehte hai 
// . app jab bhi ek object banaoge uske pass saare prototype values ajayenge automatically


//Protopypal Inheritance:
//prototypal inheritance means ek parent ki vakue apne child ko dedena

//EX.
var human={
    canFly:false,
    canWalk:true,
    haveFeelings:true
}
var humankabaccha={
    canplayCricket:true,
    canDance:true,
}

 humankabaccha.__proto__=human;  // this is the correct wway to write a prototypal inheritance