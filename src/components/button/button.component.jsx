import React from 'react';
import {BaseBtn, GoogleSignInBtn, InvertedBtn} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google_sign_in',
    inverted: 'inverted'
};

const getBtn = (btnType = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseBtn,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn
}[btnType]);

const Btn = ({children, btnType, ...otherProps}) => {
  const CustomBtn = getBtn(btnType);

  return (
    <CustomBtn {...otherProps}>{children}</CustomBtn>
  )
}

export default Btn;