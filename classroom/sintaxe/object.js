// JSON - Javascript Object Notation
// http://json.org/
// http://ip-api.com/json/8.8.8.8

var student = {
  name: 'Fulano',
  email: 'fulano@email.com',
  phone: '999999999',
  address: {
    street: 'rua no meio do zero',
    number: '10'
  },
  faltou_ideia: [1, 2 ,3]
};

console.log(student);
student.matricula = 41234;
console.log(student.matricula);
console.log(student);
console.log(student['name']);
console.log(student.name);
console.log(student.address.street);
