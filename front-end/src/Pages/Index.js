// Desc: Index page for the application
// this file is used to display the albums in the database
// it is imported into App.js
import React from 'react'
import Albums from '../Components/Albums'

function Index() {
  return (
    <div className='section'>
      <div className='container'>
      
        <Albums />
      </div>
    </div>
  )
}

export default Index
