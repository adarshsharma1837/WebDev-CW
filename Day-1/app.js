console.log("yoo");

const fs = require('fs')
fs.writeFileSync('notes.txt','Yoooooo')
const data = fs.readFileSync('notes.txt', 'utf-8')
console.log(data);

const path = require('path')
const filePath = path.join(__dirname,'test','hello.txt')
console.log(filePath);

const os = require('os')
const user = os.userInfo()
console.log(user);

const des = require('./module/des')
console.log(des);
