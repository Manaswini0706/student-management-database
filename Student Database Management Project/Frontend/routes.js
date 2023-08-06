const express = require('express')
const router = express.Router()
const syntax = require('../frontend/syntax.js')
//display all
router.get('display',async (req,res)=>{
    try{
        const f = await syntax.find()
        res.send(f)
    }
    catch(err)
    {
        res.send(err)
    }
})

//inserting
router.post('create',async (req,res)=>{
    try
    {
        const { name,rollno,branch } = req.body;
        if(syntax.findById(rollno)==null)
        {
            const u = new syntax({name,rollno,branch})
            await u.save()
            res.json(u)
        }
        else
        {
            alert('duplicate roll number change the roll number and try again')
        }
    }
    catch(err)
    {
        res.send(err)
    }
})



//find user by id
router.get('display/:id',async (req,res)=>{
    const rollno = req.params.id
    const a = await syntax.findById(rollno)
    res.json(a)
})



//delete user by id
// router.delete('delete/:id', async (req,res)=>{
    
//     const rollno = req.params
//     const user = await syntax.findByIdAndDelete(rollno)
//     res.json(user) 
// })


//update user
// router.post('update/:id',async (req,res)=>{
//     // const { id , name , branch } = req.body
//     // const id = req.params
//     const a=await syntax.findById(req.params);
//     if(a!=null)
//     {
//         const user = await syntax.findByIdAndUpdate(req.params,{name:req.body.name,branch:req.body.branch})
//         res.json(user)
//     }
//     else
//     {
//         alert('no roll no found to update')
//     }
    
// })

// module.exports = router