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



var ip = {
  "as":"AS15169 Google Inc.",
  "city":"Mount'ain View",
  "country":"United States",
  "countryCode":"US",
  "isp":"Google",
  "lat":37.386,
  "lon":-122.0838,
  "org":"Google",
  "query":"8.8.8.8",
  "region":"CA",
  "regionName":"California",
  "status":"success",
  "timezone":"America/Los_Angeles",
  "zip":"94035"
};

for(var field in ip) {
  console.log(`${field} -> ${ip[field]}`);
}
