import React from 'react'
import { useNavigate } from "react-router-dom";

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl}) => {
	
    let navigate = useNavigate(); 

  return (
    <div onClick={() => navigate(`${linkUrl}`)}
        className={`${size} menu_item`}>
        <div className='background_img' 
            style={{backgroundImage: `url(${imageUrl})`}} 
        />
        <div className="content">
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem