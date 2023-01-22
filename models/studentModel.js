var mongoose=require('mongoose')

var studentSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        rollno:{type:String,required:true},
        admno:{type:String,required:true},
        college:{type:String,required:true},


        
    }
);

var studentModel=mongoose.model('students',studentSchema);
module.exports={studentModel}