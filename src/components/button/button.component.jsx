import React from 'react';
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google_sign_in',
    inverted: 'inverted'
}

const Btn = ({children, btnType, ...otherProps}) => {
  return (
    <button 
        className={`btn_container ${BUTTON_TYPE_CLASSES[btnType]}`}
        {...otherProps}
    >
        {children}
    </button>
  )
}

export default Btn