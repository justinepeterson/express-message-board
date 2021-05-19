var express = require('express');
var router = express.Router();
var messages = require('../data/data')


 router.post('/new',(req,res,next)=>{
     var date = new Date();
     messages.push({"text":req.body.text,"user":req.body.user,"date":date})
     console.log(req.body)
    //  res.status(200).json({message:"New message sent"});
    
    res.redirect('/')
 })

router.get('/',(req,res,next)=>{
    res.status(200).json(messages);
})


module.exports = router;