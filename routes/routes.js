const express = require('express');
const router = express.Router();

router.post('/myform',(req,res)=>{
    console.log(req.body.firstName);
    res.send('Form submitted')
});

module.exports = router;