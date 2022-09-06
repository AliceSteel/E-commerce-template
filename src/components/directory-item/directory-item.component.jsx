import React from 'react'
import { useNavigate } from "react-router-dom";

import './directory-item.styles.scss'

const DirectoryItem = ({ title, imageUrl, size, linkUrl}) => {
	
    let navigate = useNavigate(); 

  return (
    <div onClick={() => navigate(`${linkUrl}`)}
        className={`${size} directory_item`}>
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

export default DirectoryItem