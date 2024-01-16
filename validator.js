var validator = require('validator');

console.log(validator.isEmail('foo@bar')); //=> true
console.log(validator.isISBN('978-0-596-52068-7')); //=> true