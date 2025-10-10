
import './App.css';
import Navbar from './components/navbar';
import Contacts from './components/contacts/contacts';
import { useState } from 'react';
import {Route , Routes , useNavigate, Navigate} from 'react-router-dom'
import React from 'react'
import { AddContact, Contact, EditContact } from './components';

export default function App() {
  const [loading , setLoading] = useState(false)
  const [getContacts , setContacts ] = useState ([]);
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Navigate to="/contacts"/>} />
        <Route path='/contacts' element={<Contacts contacts={getContacts} loading={loading}/>}/>
        <Route path='/contacts/add' element={<AddContact/>}/>
        <Route path='/contacts/:contactId' element={<Contact/>}/>
        <Route path='/contacts/edit/:contactId' element={<EditContact/>}/>
      </Routes>
      {/* <Contacts contacts = {getContacts}  loading={loading}/> */}
    </div>
  )
}

