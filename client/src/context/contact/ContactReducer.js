import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

export default function(state,action){
    switch(action.type){
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null,
            }
        case FILTER_CONTACTS:
            console.log(action.payload)
            return{
                ...state,
                filtered: state.contacts.filter(contact=> {  
                    const regEx = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regEx) || contact.email.match(regEx);
                })
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null,
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts : state.contacts.map(
                    contact => (contact.id == action.payload.id) ? action.payload : contact
                )
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts : state.contacts.filter(
                    contact=>contact.id !== action.payload
                )
            }
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts,action.payload]
            }
        default:
            return state;
    }
}