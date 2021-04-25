const express = require('express');
const router = express.Router();

// @route   GET    api/auth
// @dsc     get logged om user
// @access  Private
router.get('/', (req,res)=>{
    res.send('Gets logged in user');
})


// @route   POST    api/auth
// @dsc     authentciate user & get token
// @access  Public
router.post('/', (req,res)=>{
    res.send('Log in user');
})



module.exports = router;
