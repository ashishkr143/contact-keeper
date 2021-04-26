const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET    api/contacts
// @dsc     get all user's contact
// @access  Private
router.get('/', auth ,async (req,res)=>{
    try{
        const contacts =  await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts)
    }
    catch(er){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

// @route   POST    api/contacts
// @dsc     Add new contact
// @access  Private
router.post('/', [auth, [
    check('name','Name field is required').not().isEmpty()
] ], async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array()})
        }

        const {name, email, phone, type} = req.body;

        try{
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id
            });
            const contact = await newContact.save();
            res.send(contact);
        }catch(err){
            console.log(err.message);
            res.status(500).send('Server Error');
        }
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
