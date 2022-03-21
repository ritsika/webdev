const path=require("path");
const express=require('express');
require("./conn");
const User=require("./usermessage.js");
const Job= require("./jobs.js");

const app=express();
console.log();

const staticPath=path.join(__dirname,"../frontend");
console.log(staticPath);
app.use(express.static(staticPath));
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    try {   
        console.log('GET /');
        console.log((path.join(staticPath, '/index.html'))); 
        res.sendFile((path.join(staticPath, '/index.html'))); 
    }
    catch(error) { console.log(error); }
});
app.post("/contact",async(req,res)=>{
    try {
        //res.send(req.body);
        console.log(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).redirect("/"); 



    } catch (error) {
        res.status(500).send(error);
    }
})


// app.get('/jobsfinal', async(req, res) => {
//     try {



//     } catch(err){
//         console.log(err)
//     }
// })

    app.post("/jobs",async(req,res)=>{
        try {
            //res.send(req.body);
            console.log(req.body);
            const jobData=new Job(req.body);
            await jobData.save(); 
            res.status(201).redirect("/"); 
        } catch (error) {
            res.status(500).send(error);
        }
})
app.get("/adminlogin",async(req,res)=>{
    try {
        console.log(path.join(__dirname, '../frontend/html/adminlogin.html'));
        res.sendFile(path.join(__dirname, '../frontend/html/adminlogin.html'));
    } catch (error) {
        console.log(error);
    }
})

app.listen(7000,()=>{
    console.log('http://localhost:7000/');
})
