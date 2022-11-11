var express =require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {regModel}=require('./models/registerModel')
mongoose.connect("mongodb+srv://Aksageorge:aksageorge44@cluster0.3ictqpt.mongodb.net/?retryWrites=true&w=majority",{UseNewUrlParser:true})
var app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get('/viewall',async(req,res)=>{

    try{
        var result=await regModel.find()
        res.json(result)
    }
catch(error)
{
    res.send(error)
}

})
app.get('/',(req,res)=>
{
    res.send("welcome all")
})
app.post('/read',(req,res)=>
{
    var regObject=new regModel(req.body);
    regObject.save(
        (error)=>{
            if(error)
            {
                res.send(error)
            }
            else
            {
                res.json({"status":"success"})


            }
        }
    )

    
    res.json(regObject)
    
})
app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000/")
})