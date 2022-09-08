import React from 'react'

import DirectoryItem from '../directory-item/directory-item.component';
import SECTIONS from '../../data/directories';

import './directory.styles.scss'

const Directory= () => {

  return (
    <div className='directory_menu'>
      <div className="directory_wrap">
        { SECTIONS.map((section) => (
            <DirectoryItem key={section.id} category={section} />
        ))}
      </div>
        
    </div>
  )
}

export default Directory