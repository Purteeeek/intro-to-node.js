console.log('Starting app.js.')
const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js');

// var user = os.userInfo()
// console.log(notes.add(3,4))
// fs.appendFileSync('greetings.txt',`Hello ${user.username} age is ${notes.age}`)

console.log(_.isString(true));
console.log(_.isString('Panda'));
var filteredArray = _.uniq([1,2,2,1,34,5]);
console.log(filteredArray);
