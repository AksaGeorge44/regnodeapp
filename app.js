var express=require('express')
var bodyparser=require('body-parser')
var mongoose=require('mongoose')
const { studentModel } = require('./models/studentModel')
mongoose.connect("mongodb+srv://Aksageorge:aksageorge44@cluster0.3ictqpt.mongodb.net/?retryWrites=true&w=majority",{useNewurlparser:true})
var app=express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send("hai everyone")
})

app.post('/read',(req,res)=>{

    var studentObject=new studentModel(req.body);
    studentObject.save()

    res.json(studentObject)
})

app.post('/search',async(req,res)=>{

    var result= await studentModel.find(req.body)
    res.json(result)
})

app.post('/edit',async(req,res)=>{
    var result=await studentModel.findByIdAndUpdate({"_id":req.body._id},req.body)
    res.json(result)
})

app.post('/delete',async(req,res)=>{

    var result=await studentModel.findByIdAndDelete({"_id":req.body._id})
res.json(result)

})

app.get('/viewall',async(req,res)=>{
    var result=await studentModel.find()
    res.json(result)
})


app.listen(process.env.PORT||3000,()=>{

    console.log("server started")
})