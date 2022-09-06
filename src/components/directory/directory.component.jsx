import React from 'react'
import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component';
import SECTIONS from '../../data/directories';

const Directory= () => {

  return (
    <div className='directory_menu'>
        { SECTIONS.map(({id, ...otherSectionProps}) => (
            <DirectoryItem key={id} {...otherSectionProps} />
        ))}
    </div>
  )
}

export default Directory