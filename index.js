const http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application\json'})
    res.write(JSON.stringify([
        {name:"harsha",email:"harsha10@gmail.com"},
        {name:"nisha",email:"nisha34@gmail.com"},
        {}
    ]));
    res.end()
}).listen(5000)
console.log("hii")


/*
const fs=require("fs")
const path=require("path")
const dirpath=path.join(__dirname,'files')
for(let i=0;i<3;i++){
    fs.writeFile(dirpath,"hello"+i+"txt","file created")
}
*/

