const students = [
    {id:'1', name:'rahul', age:19},
    {id:'2', name:'mayank', age:22},
    {id:'3', name:'rohit', age:17},
    {id:'4', name:'lakshay', age:20},
]


const http = require('http')
// const server = http.createServer((req,res)=>{
//     // res.writeHead(200,{"content-type":"text/html"})
//     // res.write("<h1>Hello yooooo </h1>")
//     // res.write("<h1>this is my first server</h1>")
//     // res.write("<h1>My name is _____ </h1>")
//     // res.end()
// })

const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url === '/api/students'){
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify({count : students.length, students}))}

    else if(req.method ==='GET' && req.url==='/api/students/count'){
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify({count : students.length}))}

    else{
    res.writeHead(404,{"content-type":"application/json"})
    res.end(JSON.stringify({error:'Page not found'}))}
    

})

server.listen(3000,()=>{
    console.log("Server is running");
    
})