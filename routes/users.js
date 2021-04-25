const express = require('express');
const router = express.Router();

// @route   POST    api/users
// @dsc     Regiter a user
// @access  Public
router.post('/', (req,res)=>{
    res.send('Regiters a user');
})


module.exports = router;
