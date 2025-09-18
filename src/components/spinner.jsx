import React from 'react'

export default function Spinner() {
  return (
    <React.Fragment>
        <img src={require("../assets/spinner.gif")} alt="spinner" className='d-block m-auto' style={{width : "200px"}}/>
    </React.Fragment>
  )
}
