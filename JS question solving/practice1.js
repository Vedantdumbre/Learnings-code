// find the average if the following numbers (ARRAY):

let marks = [42,32,56,78,99,86]

sum =0;
for (i=0; i<marks.length; i++){
    sum += marks[i];
}
console.log(sum/marks.length);

// find the 10 % value of the same array:

let tenPercent = marks.length-0.1;
console.log(tenPercent);


//Consider the following object:
const car = {
  brand: 'Volvo',
  model: 'EX90',
  drive: function() {
    return true;
  }
};
//How many properties do the object have? 
//ANS : 2

