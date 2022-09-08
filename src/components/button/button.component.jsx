import React from 'react';
import {BaseBtn, GoogleSignInBtn, InvertedBtn, TransparentBtn} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google_sign_in',
    inverted: 'inverted',
    transparent: 'transparent'
};

const getBtn = (btnType = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseBtn,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,
  [BUTTON_TYPE_CLASSES.transparent]: TransparentBtn
}[btnType]);

const Btn = ({children, btnType, ...otherProps}) => {
  const CustomBtn = getBtn(btnType);

  return (
    <CustomBtn {...otherProps}>{children}</CustomBtn>
  )
}

export default Btn;