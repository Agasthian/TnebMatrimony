import React from 'react'

import {
  FooterSection,
  FooteritemsAll,
  FooterItem,
  Heading,
  FooterText
} from './footer.styles'
import {Container} from '../../themes/utils'

const footer1 = () => {
  return (
    <FooterSection>
      <Container>
        <FooteritemsAll>
          <FooterItem>
            <Heading>Company</Heading>
            <FooterText>Home</FooterText>
            <FooterText>About Us</FooterText>
            <FooterText>Contact Us</FooterText>
          </FooterItem>
          <FooterItem>
            <Heading>Let's Talk</Heading>
            <FooterText>Home</FooterText>
            <FooterText>About Us</FooterText>
            <FooterText>Contact Us</FooterText>
          </FooterItem>
          <FooterItem>
            <Heading>Connect With Us</Heading>
            <FooterText>Home</FooterText>
            <FooterText>About Us</FooterText>
            <FooterText>Contact Us</FooterText>
          </FooterItem>

        </FooteritemsAll>
      </Container>
    </FooterSection>
  )
}

export default footer1