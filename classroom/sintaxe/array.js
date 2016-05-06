console.log([1, 2, 3, 4]);
console.log(new Array(1, 2, 3, 4));
console.log([1, 'lorem', 3, 4.1]);

var array = [];
array[0] = 1;
array[1] = 2;
array[2] = 3;
console.log(array);

array[5] = 50;
console.log(array);

console.log(array[3]); //undefined

array['lorem'] = 10;
array.lorem = 10;
console.log(array.lorem);

array = [1, 'lorem', 3, 4.1, [1, 2, 3]];
console.log(array);
console.log(array[4][2]);

// for in

// for of
