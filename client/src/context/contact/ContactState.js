import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './ContactContaxt';
import ContactReducer from './ContactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState = props =>{
    const initialState = {
        contacts: [
            {
                id : 1,
                name: "John Doe",
                email: "john@doe.com",
                phone: "878-343-2342",
                type: "personal"
            },
            {
                id : 2,
                name: "Steve smith",
                email: "steve@smith.com",
                phone: "878-343-2342",
                type: "professional"
            },
            {
                id : 3,
                name: "John James",
                email: "john@james.com",
                phone: "878-343-2342",
                type: "personal"
            },
        ],
        current: null,
        filtered: null
    }

    const [state,dispatch] = useReducer(ContactReducer,initialState);

    //add contact
    const addContact = contact=>{
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    //delete contact
    const deleteContact = id=>{
        dispatch({type: DELETE_CONTACT, payload: id})
    }

    //set current contact
    const setCurrent = contact=>{
        dispatch({type: SET_CURRENT, payload: contact})
    }


    //clear current contact
    const clearCurrent = ()=>{
        dispatch({type: CLEAR_CURRENT})
    }

    //update contact
    const updateContact = contact=>{
        dispatch({type: UPDATE_CONTACT, payload: contact})
    }

    //filter contacts
    const filterContacts = str =>{
        dispatch({type: FILTER_CONTACTS, payload: str})
    }

    //clear filter

    const clearFilter = ()=>{
        dispatch({type: CLEAR_FILTER})
    }

    //get all contacts

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            updateContact,
            setCurrent,
            clearCurrent,
            filterContacts,
            clearFilter,
        }}>
            {props.children}
        </ContactContext.Provider>
    )

}


export default ContactState