//initialize
const express=require('express');
const app = express();

const mongoose = require('mongoose');

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://rohit15820:r2iUPpnzAExxW8FQ@cluster0.cqackpe.mongodb.net/notesdb').then(
    function(){
//App Routes
app.get('/',function(req,res){
    res.send("Home page")
});

const nameRoute=require('./routes/Note');
app.use("/notes",nameRoute);

    }
);



//Start server on port 8080
app.listen(5000,function(){
    console.log("Started server on port 5000");
});

