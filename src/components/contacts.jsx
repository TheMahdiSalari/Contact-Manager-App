import React from 'react'
import {  BRIGHTGREEN, SELECTIONBACKGROUNAD, YELLOW } from '../helpers/colors'
import Contact from './contact'
import Spinner from './spinner'

export default function Contacts({contacts , loading}) {
  return (
    <React.Fragment>
        <section className='container my-3 d-flex justify-content-left'>
            <div classname = 'grid'>
                <div className='row'>
                    <div className='col'>
                        <p classname = 'h3'>
                            <button className='btn mx-2' style={{backgroundColor : SELECTIONBACKGROUNAD, color : BRIGHTGREEN}}>
                                Add New Contact {" "}
                                <i className='fa fa-plus-circle'></i>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact */}
        {
            loading ? <Spinner/> : (
            <section className='container'>
                <div className='row'>
                    {contacts.length > 0 ? contacts.map(c =>
                        ( <Contact key={c.id} contact={c}/>
                        )) :
                (
                    <div className='text-center py-5'>
                        <p className='h3' style={{color: YELLOW}}>
                            Not Found!!!
                        </p>
                        <img src={require("../assets/notFound.gif")} alt="not found" className='w-25'/>
                    </div>
                )
                    }
                </div>
            </section>
            )
        }
    </React.Fragment>
  )
}
