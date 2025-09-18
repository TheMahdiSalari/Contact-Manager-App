import React from 'react'
import SearchContact from './contacts/searchContact'
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
                    <SearchContact />
                </div>
            </div>

        </div>

    </nav>
  )
}
