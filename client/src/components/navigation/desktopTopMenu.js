import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { faSkype } from "@fortawesome/free-brands-svg-icons"

import { Container } from "../../themes/utils"
import {StyledIcon,StyledLinkOutter} from '../footer/footer'

const TopNavWrapper = styled.div`
  height : 3.75rem;
  width:100%;
  background-color:var(--primary);
  position:fixed;
  top:0;
  z-index:6;
  display: flex;
  align-items: center;

  @media ${props => props.theme.mediaQueries.smaller} {
   display:none;
  }
`;

const FlexWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const  LeftContent = styled.div`
display:flex;
align-items: center;
`

const RightContent = styled.div`
  display:flex;
  align-items: center;
`

const Para = styled.p`
  margin:0;
  font-family:Poppins;
  color:#fff;
  font-size:1.4rem;
  margin-right:2rem;
`;

const IconWrapper = styled(StyledLinkOutter)`
  margin-top:0;
`;

const EnquiryBtn =  styled.button`
height:2.5rem;
cursor: pointer;
border: none;
outline: none;
background: var(--secondary);
color: var(--white);
font-family: Poppins;
font-size: 1.4rem;
font-weight: 500;
word-spacing: 2px;
border-radius: 10rem;
padding: 0 2rem;
box-shadow: 0px 8px 15px var(--shadow-color);
transition: all 0.2s ease-out;
`;

const StyledLink = styled(Link)`
cursor: pointer;`

const DesktopTopMenu = () => {
  return (
    <TopNavWrapper>
    <Container>
      <FlexWrapper>
        <LeftContent>
          <IconWrapper>
            <StyledIcon icon={faEnvelope} />
          </IconWrapper>
          <Para>support@farmbotanica.com</Para>
          <IconWrapper>
            <StyledIcon icon={faSkype} />
          </IconWrapper>
          <Para>farmbotanica</Para>
        </LeftContent>
        
        <RightContent>
          <IconWrapper>
            <StyledIcon icon={faPhoneVolume} />
          </IconWrapper>
          <Para>(+91) 73588 71283</Para>
            <StyledLink to='/contact'>
              <EnquiryBtn>Enquiry now
              </EnquiryBtn>
            </StyledLink>
        </RightContent>
      </FlexWrapper>
    </Container>
  </TopNavWrapper>
  )
}

export default DesktopTopMenu
