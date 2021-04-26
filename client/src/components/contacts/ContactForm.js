import Reactm , {useState, useContext, useEffect} from 'react'
import ContactContext from '../../context/contact/ContactContaxt';

const ContactForm = () => {

    const contactContaxt = useContext(ContactContext)
    const {addContact, updateContact, current, clearCurrent } =contactContaxt;

    useEffect(()=>{
        if(current !== null)
            setContact(current)
        else
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal',
            })
        
    },[contactContaxt,current])

    const [contact,setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    })

    const {name,phone,email,type} = contact;

    const onChange = (e)=>  setContact({...contact, [e.target.name]:e.target.value })
    
    const onSubmitForm = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if(current === null){
            addContact(contact);
        }else{
            updateContact(contact)
        }
        clearAll()        
    }

    const clearAll = ()=> clearCurrent()

    return (
        <form onSubmit={onSubmitForm}>
            <h2 className="text-primary">{(current !== null ? 'Update Contact' : 'Add Contact')}</h2>
            <input type="text" placeholder="Enter Name" name="name" value={name} onChange={onChange} />
            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={onChange} />
            <input type="text" placeholder="Enter Phone" name="phone" value={phone} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={(type==='personal')}  onChange={onChange}/>Personal {' '}
            <input type="radio" name="type" value="professional" checked={(type==='professional')}  onChange={onChange}/> Professional

            <div>
                <input type="submit" className="btn btn-primary btn-block" value={(current !== null ? 'Update Contact' : 'Add Contact')} />
            </div>
            {current && <div>
                <button className="btn btn-white btn-block" onClick={clearAll}>Clear</button>
                </div>}
            
        </form>
    )
}

export default ContactForm;
