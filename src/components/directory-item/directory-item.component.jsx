import React from 'react';
import {Link} from 'react-router-dom';

import {BackgroundImg,
        Content,
        DirectoryItemContainer} from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
	
    const {title, imageUrl, linkUrl } = category; 

  return (
    <DirectoryItemContainer to={linkUrl}> 
        <BackgroundImg imageUrl={imageUrl} />
        <Content>
            <h2>{title}</h2>
            <p>SHOP NOW</p>
        </Content>

    </DirectoryItemContainer>
  )
}

export default DirectoryItem

