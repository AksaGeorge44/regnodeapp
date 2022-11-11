var mongoose=require('mongoose')
var regSchema=new mongoose.Schema(

{
    name:{type:String,required:true},
    roll:{type:Number,required:true},
    admno:{type:Number,required:true},
    college:{type:String,required:true},
}

)
var regModel=mongoose.model('registers',regSchema);
module.exports={regModel}