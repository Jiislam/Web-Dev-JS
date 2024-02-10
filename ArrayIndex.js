var newArray = [4,5,6,1,23,8,9,1,4,23];
 // get element by index

// console.log(newArray[1], newArray[5], newArray[0]);

//  index numbers starts from 0, 0 means the first item of the array

// assigning values to current array index
newArray[1] = 11;
newArray[0] = 1;

console.log(newArray);

//  get the index number of an array element
var position_index = newArray.indexOf(23);
var position_index1 = newArray.lastIndexOf(23);

console.log(position_index, position_index1);
