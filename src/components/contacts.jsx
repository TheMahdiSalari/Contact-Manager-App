import React from 'react'
import { BACKGROUND, BRIGHTBLUE, BRIGHTRED, BRIGHTYELLOW, GREEN, SELECTIONBACKGROUNAD } from '../helpers/colors'
import Contact from './contact'

export default function Contacts() {
  return (
    <React.Fragment>
        <section className='container my-3 d-flex justify-content-left'>
            <div classname = 'grid'>
                <div className='row'>
                    <div className='col'>
                        <p classname = 'h3'>
                            <button className='btn mx-2' style={{backgroundColor : SELECTIONBACKGROUNAD, color : BRIGHTBLUE}}>
                                Add New Contact {" "}
                                <i className='fa fa-plus-circle'></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact */}
        <Contact/>
    </React.Fragment>
  )
}
