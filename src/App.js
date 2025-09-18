
import './App.css';
import Navbar from './components/navbar';
import Contacts from './components/contacts/contacts';
import { useState } from 'react';
import React from 'react'

export default function App() {
  const [loading , setLoading] = useState(false)
  const [getContacts , setContacts ] = useState ([]);
  return (
    <div className='App'>
      <Navbar/>
      <Contacts contacts = {getContacts}  loading={loading}/>
    </div>
  )
}

