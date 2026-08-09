import express from "express";

const app =express();



app.use(express.json());


const PORT = process.env.PORT || 5000;

type Note = {
    id:number,
    title:string,
    content:string
};

const notes :Note []=[] ;

app.post("/notes",(req,res)=>{
    const {title,content} = req.body;

    const newNote:Note={
        id:notes.length+1,
        title,
        content
    }
    notes.push(newNote);
    return res.status(201).json({
        newNote
    })

});


app.get("/notes",(req,res)=>{
  return res.json(notes);
});

app.get("/notes/:id",(req , res)=>{
    const {id} =req.params;

    const noteId = Number(id); // convert because array index is number=>// URL params are strings

 const note = notes.find(note=> note.id===noteId);

 if(!note){
    return res.status(404).json({
        message:"Note not found"
    })
 }

 res.status(200).json({
    note
 })

});


app.patch("/notes/:id",(req,res)=>{
    const {id} = req.params;

    const noteId = Number(id);

    const {title} = req.body;

    const note = notes.find((note)=>note.id===noteId);
    if(!note){
        return res.status(404).json({
            message:"note not found"
        })    }

    note.title=title;

    return res.status(200).json({
        note
    })

});


app.delete("/notes/:id",(req,res)=>{
    const {id} = req.params;

    const noteId= Number(id);

    const index=notes.findIndex((note)=>note.id===noteId);

    if(index===-1){
        return res.status(404).json({
            message:"INdex not found"
        })
    };

    notes.splice(index,1);

    return res.status(200).json({
        notes
    })
})








app.get("/",(req , res)=>{
return res.send("Server is up an running !!!")
    
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT  ${PORT}`)
})