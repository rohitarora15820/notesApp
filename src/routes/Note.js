const express=require('express');
const routes=express.Router();

const Note=require('./../models/Note');

routes.post('/list',async function(req,res){
    var notes=await Note.find({userid:req.body.userid});

    res.json(notes);
});
routes.post('/add',async function(req,res){
    await Note.deleteOne({id:req.body.id})
    var newNotes=new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content
    });

    newNotes.save();
    const response={message:"Note Created Successfully!" + `id:${req.body.id}`,}
    res.json(response);
});

routes.post('/delete',async function(req,res){
    await Note.deleteOne({id:req.body.id})
  
    const response={message:"Note Deleted Successfully!" + `id:${req.body.id}`,}
    res.json(response);
});

module.exports=routes;