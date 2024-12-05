// function countVowels(str) {
//     let count = 0;
//     for (const char of str.toLowerCase()) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// }
//using arrow fnc
// let countVowels = (str) => {
//     let count = 0;
//     for (let char of str){
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++
//         }
            
//     }
//     return count;
// }


// print the square of elements in an array
//EX.
 let arr = [1, 2, 3, 4, 5];
arr.forEach ((val) => {
    console.log(val * val);
});