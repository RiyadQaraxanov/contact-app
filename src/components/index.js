import React, {useEffect, useState} from 'react'
import Form from './Form'
import List from './List'
import "./contacts.css"
function Contact() {

    const [contacts, setContacts] = useState([
        {
            fullname:"asddd",
            number: 12
        },
        {
            fullname:"dana",
            number: 123
        },
        {
            fullname:"adsadd",
            number: 456
        },
    ])


    useEffect(()=>{console.log(contacts)},[contacts])
  return (
    <div className='container'>
      <List contacts={contacts}/>
      <Form onPrint={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contact
