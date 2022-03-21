const mongoose=require('mongoose');
const jobSchema=mongoose.Schema({
    fname:{ 
        type:String,
        required:true,
        minlength:3
    },
    lname:{ 
        type:String,
        required:true,
        minlength:1
    },
    
    email:{
        type:String,
        required:true,
        
    },
    phno:{
        type:Number,
        required:true,
        min:10,
    },
    age:{
        type:Number,
        required:true,
        minlength:2
    },
    gender: {
        type:String,
        enum:['Female', 'Male', 'Transgender'],
        required:true 
    },
    quali: {
        type: String,
        enum:['High School', 'Bachelors', 'Masters', 'PhD'],
        required:true 
    }
        
})

const Job=mongoose.model("Job",jobSchema);

module.exports=Job;