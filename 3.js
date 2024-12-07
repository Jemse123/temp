const http=require('http')
const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('welcome to shemsedin home page')
}if(req.url==='/about'){
    res.end('I am shemsedin abdella')
}
res.end(`<h1>Oops!</h1>
    <p>Nothing found link to your search </p>
  <a href='/'>back home</a>
`)
})

server.listen(5000)












/*
const http=require('http)
const server= http.createServer((req,res)=>{
    res.write('welcome to our home page ')
    res.end()
}
)

server.listen(5000)



















































/*

const { log } = require('console')
const {readFile,writeFile}=require('fs')

const first= readFileSync('./content/first.txt','utf8')
const scond=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-gan',`Here the result :${first},${scond}`,{flag:`a`})

readFile('./content/first.txt','utf8',(err,result)=>{if(err){
  console.log(err);
  return
}
console.log(result);

})
*/








