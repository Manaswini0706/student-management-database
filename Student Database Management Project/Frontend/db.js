const express = require('express')
const app = express()
var alert = require('alert')
// const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
// const mongoose = require('./connection.js')
const syntax = require('./syntax.js')

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())


const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/example",{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=>{
        console.log("connected to mongo")
    })
    .catch((error)=>{
        console.log(error)
    });

app.get('/display/:rollno',async (req,res)=>{
    try{
        const rollno = req.params
        const f = await syntax.findOne(rollno)
        // console.log(f)
        res.json(f)
    }
    catch(err)
    {
        res.send(err)
    }
})

app.post('/create',async (req,res)=>{
    try
    {
        const { name, rollno, branch } = req.body;
        const syntax1 = new syntax({ name, rollno, branch });
        await syntax1.save();
        alert('Data created successfully')
        res.json({ message: 'Data created successfully' });   
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
})

app.put('/update/:rollno', async (req,res)=>{
    try
    {
        const rollno = req.params.rollno
        const { name,branch } = req.body
        const v =await syntax.updateOne({rollno},{name,branch})
        alert('Data updated successfully')
        res.json(v)
    }   
    catch(err)
    {
        res.send(err)
    }
})


app.delete('/delete/:rollno',async (req, res) => {
    try{
        const rollno = req.params
        console.log(rollno)
        const a = await syntax.deleteOne(rollno)
        console.log(a)
        alert('Data deleted successfully')
        res.json(a)
    }
    catch(err)
    {
        console.log(err)
        res.send(err)
    }
  });
  

app.listen(5050,()=>{
    console.log("5050 server running succesfully")
})