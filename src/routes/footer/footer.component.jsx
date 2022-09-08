import React from 'react'
import { Outlet } from 'react-router-dom';
import { FooterContainer, FooterWrap, SocialNav, Copyright, NavLink } from './footer.styles'

const Footer = () => {
  return (
    <>
        <Outlet />
        <FooterContainer>
            <FooterWrap>
                <Copyright>
                    © 2021 - BRAND / All Rights Reserved
                </Copyright>
                    <SocialNav>  
                        <NavLink to="https://www.instagram.com/" target="_blank" rel="nofollow, noreferrer" >Instagram
                        </NavLink>
                        <NavLink to="https://www.facebook.com/" target="_blank" rel="nofollow, noreferrer" >Facebook
                        </NavLink>
                    </SocialNav>
	    </FooterWrap>
        </FooterContainer>
        
    </>
    
  )
}

export default Footer