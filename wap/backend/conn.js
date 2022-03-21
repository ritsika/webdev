const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/finaldatabase",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connection successful");
})