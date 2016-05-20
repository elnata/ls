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

// for in es5
var array = [1, 2, 3, 4];
for(var flag in array) {
  console.log(flag);
}

// for in es6
for(let flag in array) {
  console.log(flag);
}

var array = [];
array['key'] = 'value';
array[0] = 1;
console.log(array);
for(let key in array) {
  console.log(key);
}
for(let key in array) {
  console.log(array[key]);
}

// for of
for(let value of array) {
  console.log(value);
}

// split e join
console.log("lorem ipsum dolor".split(" "));
console.log("lorem ipsum dolor".split(""));
console.log([ 'lorem', 'ipsum', 'dolor' ].join(" "));

// geração de tabela
var alunos = "nome, email\nfulano, fulano@email\nsicrano, sicrano@email";
console.log(alunos.split("\n"));
var table = "<table>";
alunos.split("\n").forEach(function(row){
  table += "<tr>"
  row.split(", ").forEach(function(col){
    table += "<td>"+col+"</td>"
  });
  table += "</tr>";
});
table += "</table>"
console.log(table);

var table = "<table><thead>";
var rows = alunos.split("\n");
var firstRow = rows.shift();
table += "<tr><th>"+firstRow.split(", ").join("</th><th>")+"</th></tr></thead><tbody>";
rows.forEach(function(row){
  table += "<tr><td>"+row.split(", ").join("</td><td>")+"</td></tr>";
});
table += "</tbody></table>"
console.log(table);
