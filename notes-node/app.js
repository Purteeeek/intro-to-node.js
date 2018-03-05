console.log('Starting app.js.')
const fs = require('fs')
const os = require('os')
const notes = require('./notes.js');

var user = os.userInfo()
console.log(notes.add(3,4))
fs.appendFileSync('greetings.txt',`Hello ${user.username} age is ${notes.age}`)
