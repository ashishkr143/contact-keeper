const express = require('express');
const router = express.Router();

// @route   GET    api/contacts
// @dsc     get all user's contact
// @access  Private
router.get('/', (req,res)=>{
    res.send('Get all contacts');
})

// @route   POST    api/contacts
// @dsc     Add new contact
// @access  Private
router.post('/', (req,res)=>{
    res.send('Add contact');
})

// @route   PUT    api/contacts/:id
// @dsc     update contact
// @access  Private
router.put('/:id', (req,res)=>{
    res.send('Update contact');
})

// @route   DELETE    api/contacts/:id
// @dsc     delete contact
// @access  Private
router.delete('/:id', (req,res)=>{
    res.send('Delete contact');
})



module.exports = router;
