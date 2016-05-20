// função normal
function soma(a, b){
  return a + b;
}

function produto(a, b){
  return a * b;
}

console.log(soma(1, 1));
console.log(produto(1, 1));

// lambda
var soma = function(a, b){
  return a + b;
}

var produto = function(a, b){
  return a * b;
}

console.log(soma(1, 1));
console.log(produto(1, 1));

// Array Function
var soma = (a, b) => a + b;
var produto = (a, b) => { return a * b};
console.log(soma(1, 1));
console.log(produto(1, 1));

// Case Sensitive
function SOMA(a, b){
  return a - b;
}
console.log(SOMA(2, 2));

// sobrecarga
function soma(a, b, c){
  return a + b + c;
}
console.log(soma(1, 1, 1));

// Default Param
function soma(a, b=1){
  return a + b;
}
console.log(soma(1, 1));
console.log(soma(1));

// RestParam
function somaRestParam(...values) {
  let sum = 0;
  for(let number of values){
    sum += number;
  }
  return sum;
}
console.log(somaRestParam(1, 1, 3));
console.log(somaRestParam(1, 1, 2, 5));
console.log(somaRestParam(1, 1));
console.log(somaRestParam(1));

// Rest Param ES5 (arguments)
function somaRestParamOld() {
  let values = arguments;
  let sum = 0;
  for(let number of values){
    sum += number;
  }
  return sum;
}
console.log(somaRestParamOld(1, 1, 3));
console.log(somaRestParamOld(1, 1, 2, 5));
console.log(somaRestParamOld(1, 1));
console.log(somaRestParamOld(1));

// Rest Param Array.forEach
function somaRestParamEach(...values) {
  let sum = 0;
  values.forEach(function(value){
    sum += value;
  });
  return sum;
}
console.log(somaRestParamEach(1, 1, 3));
console.log(somaRestParamEach(1, 1, 2, 5));
console.log(somaRestParamEach(1, 1));
console.log(somaRestParamEach(1));

// Rest Param Array.reduce
function somaRestParamReduce(...values) {
  return values.reduce(function(sum, value){
    return sum + value;
  }, 0);
}
console.log(somaRestParamReduce(1, 1, 3));
console.log(somaRestParamReduce(1, 1, 2, 5));
console.log(somaRestParamReduce(1, 1));
console.log(somaRestParamReduce(1));

function productRestParamReduce(...values) {
  return values.reduce(function(product, value){
    return product * value;
  }, 1);
}
console.log(productRestParamReduce(1, 1, 3));
console.log(productRestParamReduce(1, 1, 2, 5));



// Rest Param Array.reduce com Arrow Func
function somaRestParamReduceArrowFunc(...values) {
  var sum = values.reduce((sum, value) => sum + value , 0);
  return sum;
}
console.log(somaRestParamReduceArrowFunc(1, 1, 3));
console.log(somaRestParamReduceArrowFunc(1, 1, 2, 5));
console.log(somaRestParamReduceArrowFunc(1, 1));
console.log(somaRestParamReduceArrowFunc(1));

function productRestParamReduce(...values) {
  return values.reduce(((product, value) => product * value), 1);
}
console.log(productRestParamReduce(1, 1, 3));
console.log(productRestParamReduce(1, 1, 2, 5));

// Array.select
// Duplicar Array: classicamente
var array = [1, 2, 3];
var newArray =[];
var flag = 0;
for(var value of array){
  newArray[flag] = value * 2;
  flag += 1;
}
console.log(newArray);

// Duplicar Array: Array.pop, Array.push, Array.shift, Array.unshift
var array = [1, 2, 3];
var newArray =[];
for(var value of array){
  newArray.push(value * 2);
}
console.log(newArray);

// Duplicar Array: Array.map
var newArray = [1, 2, 3].map((value) => value * 2)
console.log(newArray);

// Obter pares: Array.filter
var evenArray = [1, 435, 4, 6, 3, 9].filter((value) => value % 2 == 0);
console.log(evenArray);
