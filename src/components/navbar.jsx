import React from 'react'
import Searchcontact from './contacts/searchcontact'
import {BACKGROUND, GREEN, WHITE} from '../helpers/colors'
export default function Navbar() {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm shadow-lg'
    style={{backgroundColor : BACKGROUND}}>
        <div className='container'>
            <div className='row w-100'>
                <div className='col'>
                    <div className='navbar-brand'>
                    <i className='fas fa-id-badge' style={{color : GREEN}}>
                        <span style={{color : WHITE}}>{" "}Contact web Application {" "}</span>
                    </i>
                    <span style={{color : "dodgerblue"}}></span>
                    </div>
                </div>
                <div className='col'>
                    <Searchcontact />
                </div>
            </div>

        </div>

    </nav>
  )
}
