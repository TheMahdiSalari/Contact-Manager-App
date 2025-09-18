import React from 'react'
import {BACKGROUND , SELECTIONBACKGROUNAD, GREEN , BRIGHTBLUE, BRIGHTRED, BRIGHTYELLOW} from '../../helpers/colors'
export default function Contact() {
  return (
    <section className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div style={{backgroundColor : BACKGROUND, borderColor : SELECTIONBACKGROUNAD}} className='card my-2'>
                            <div classname = 'card-body'>   
                                <div className='row-align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4 col-sm-4 my-2'>
                                        <img src="https://placehold.co/200" alt="" style={{borderColor : `1px solid ${GREEN}`}}
                                        className='img-fluid rounded'/>
                                    </div>
                                    <div className='col-md-7 col-sm-3 d-flex justify-content-center flex-column align-items-center'>
                                        <ul className='list-group '>
                                            <li className='list-group-item list-group-item-dark'>
                                                FirstName : {" "}
                                                <span className='fw-bold'>
                                                    Mahdi
                                                </span>
                                            </li>
                                            <li className='list-group-item list-group-item-dark'>
                                                Phone Number : {" "}
                                                <span className='fw-bold'>
                                                    +989122334455
                                                </span>
                                            </li>
                                            <li className='list-group-item list-group-item-dark'>
                                                Email Address : {" "}
                                                <span className='fw-bold'>
                                                    Mahdi.s@gmail.com
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-1 col-sm-1 d-flex flex-column align-items-center justify-content-center'>
                                        <button className='btn my-1' style={{backgroundColor : BRIGHTYELLOW}}>
                                            <i className='fa fa-eye'></i>
                                        </button>
                                        <button className='btn my-1' style={{backgroundColor : BRIGHTBLUE}}>
                                            <i className='fa fa-pen'></i>
                                        </button>
                                        <button className='btn my-1' style={{backgroundColor : BRIGHTRED}}>
                                            <i className='fa fa-trash'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>

  )
}




