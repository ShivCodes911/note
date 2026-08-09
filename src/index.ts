import express from "express";

const app =express();

const PORT = process.env.PORT || 5000;

type Note = {
    id:number | string,
    name:String,
    content:String
};





app.get("/",(req , res)=>{
return res.send("Server is up an running !!!")
    
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT  ${PORT}`)
})