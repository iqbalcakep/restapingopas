const express = require('express');
const router = express.Router();
const Manusia = require('../Models/Manusia');

router.get('/data',(req,res)=>{
    Manusia.find({}).then((Manusia)=>{
        res.status(200).json({
            status:"succes",
            data:Manusia
        })
    })
})

router.post('/tambah',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    Manusia.create(req.body,function(err){
        if(err){
        res.status(500).json({
            status:"error",
            data:err
        })
    }
    })

    Manusia.find({}).then((Manusia)=>{
        res.status(200).json({
            status:"Tambah Sukses",
            data:Manusia
        })
    })
})

router.delete('/hapus/:id',(req,res)=>{
    Manusia.findByIdAndDelete({_id:req.params.id},()=>{
        res.json({
            status:"DELETE BERHASIL"
        })
    });
    
})

router.put('/update/:id',(req,res)=>{
    Manusia.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=>{
        res.status(200).json({
            status:"SUkses Terupdate",
            data:data
        })
    })
})

module.exports = router;