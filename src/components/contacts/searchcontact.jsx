import React from 'react'
import {BACKGROUND, BRIGHTGREEN, GREEN} from '../../helpers/colors'

export default function Searchcontact() {
  return (
    <div className='input-group mx-2 w-75' dir= 'ltr'>
        <span className='input-group-text'  id = 'basic-addon1' style={{backgroundColor : BACKGROUND , borderColor : GREEN}}>
            <i className='fas fa-search' style={{color : BRIGHTGREEN}}></i>
        </span>
        <input
        dir='ltr'
        type='text'
        className='form-control'
        placeholder='Search Contact'
        aria-label='Search'
        aria-describedby='basic-addon1'
        ></input>
    </div>
  )
}
