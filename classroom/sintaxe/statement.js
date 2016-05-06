
if (1 > 0) {
  console.log('Ohhhh true!!!');
}

if (false) { // undefined, false, null, 0, 0.0
  console.log('Ohhhh true!!!');
} else {
  console.log('Ohhhh false!!!');
}

var operand1 = 1;
var operand2 = 1;
var operator = '+';
var result;
switch (operator) {
  case '+':
    result = operand1 + operand2;
    break;
  case '-':
    result = operand1 - operand2;
    break;
  default:
    result = 0;
}
console.log(result);
console.log(eval(`${operand1} ${operator} ${operand2}`));

var number = 0;
var result = '';
while (number <= 10) {
  number++;
  result += number + ', ';
}
console.log(result);

number = 0;
result = '';
do {
  number++;
  result += number + ', ';
} while (number <= 10);
console.log(result);

result = '';
for (var i = 99; i < 100; i++) {
  result += i + ', ';
  if (i % 10 === 9) {
    result += '\n';
  }
}
console.log(result);

result = '';
for (var i = 99; i >= 0; i -= 2) {
  result += i + ', ';
  if (i % 10 === 1) {
    result += '\n';
  }
}
console.log(result);
