import React from 'react'

import DirectoryItem from '../directory-item/directory-item.component';
import SECTIONS from '../../data/directories';

import { DirectoryContainer, DirectoryWrap } from './directory.styles.jsx';

const Directory= () => {

  return (
    <DirectoryContainer>
      <DirectoryWrap>
        { SECTIONS.map((section) => (
            <DirectoryItem key={section.id} category={section} />
        ))}
      </DirectoryWrap>
    </DirectoryContainer>
  )
}

export default Directory