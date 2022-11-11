var express =require('express')
var bodyParser=require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get('/',(req,res)=>
{
    res.send("welcome all")
})
app.post('/read',(req,res)=>
{
    var getName=req.body.name
    var getRoll=req.body.roll
    var getadmno=req.body.admno
    var getcollege=req.body.college
    res.json({"name":getName,"roll":getRoll,"admno":getadmno,"college":getcollege})
    
})
app.listen(3000,()=>{
    console.log("server started at http://localhost:3000/")
})