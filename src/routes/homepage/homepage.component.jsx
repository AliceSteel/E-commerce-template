import React from 'react'
import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
      	<Outlet/>
       	<Directory />
    </div>
  )
}

export default Homepage;