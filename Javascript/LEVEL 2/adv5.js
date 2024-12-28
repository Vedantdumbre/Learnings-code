// iife -> immedietly invoked function expression (advanced type ka func.)
// . iife hai function ko turant chalane ki kala, is tareeke se ki tum log koi private variable bana payega
// . it cant be directly accessed by any user   

//EX.

var ans = (function(){
    var privateval = 12;

    return{
        getter: function(){
            console.log(privateval);  // IMP
        },
        setter:function(val){
            privateval = val;
        }
    }
})()