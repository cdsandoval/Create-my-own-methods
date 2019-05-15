//Pop method
function myPop(array) {
  array.length -= 1;
  console.log(array);
}

myPop([1, 2, 3, 4, 5]); // [1,2,3,4]

//Every method
function evenNumber(value) {
  if (value % 2 == 0) return true;
  else return false;
}

let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (evenNumber(array[i]) == true) {
    newArray.push("matching");
  }
}

if (array.length == newArray.length) {
  return true;
} else {
  return false;
}

myEvery([2, 4, 3]);

//Some
let array = [1, 3, 5, 4];

let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (evenNumber(array[i]) == true) {
    newArray.push("matching");
  }
}

if (newArray.length >= 1) {
  console.log(true);
} else {
  console.log(false);
}

//Find

let array = [1, 3, 5, 4];

let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (evenNumber(array[i]) == true) {
    console.log(array[i]);
    break;
  }
}

//Join
function newJoin(element, array) {
  let string = array[0];
  for (let i = 1; i < array.length; i++) {
    string += element + array[i];
  }
  return string;
}
