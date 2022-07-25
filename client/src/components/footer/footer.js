import React from "react"
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
// import {faTwitter, faSkype,faInstagram, faLinkedin,faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { Container } from '../layout/element'

const FooterSection = styled.footer`
  background-color: var(--primary);
  color: var(--light-text);
  padding:4rem 0 0 0;
`
const FooteritemsAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: column;
  }
`
const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 22rem;

  @media ${props => props.theme.mediaQueries.small} {
    min-height:15rem;
  }
`
const FooterTextWrapper = styled.div`
  display: flex;
` 
const Heading = styled.h5`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-lighter);  
  font-size: 1.8rem;
  margin: 2rem 0px;
  position: relative;


  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 5rem;
    height: 2px;
    background: #fff;
    bottom: -4px;
  }
`

const FooterText = styled.p`
  margin: 10px 0px 5px 0px;
  color: var(--primary-lighter);
  font-size: 1.5rem;
`

const FooterItemSocial = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 14vw;
  @media ${props => props.theme.mediaQueries.small} {
    width: 55vw;
  }
`

// const StyledLink = styled(Link)`
// cursor: pointer;
// color:var(--white);
// font-weight:500;
// text-decoration:none;
// transition: all 0.4s ease-out;

// &:hover {
//   color: ${ props => props.dark ? "var(--light-text)" : "var(--secondary)" };
//   border-bottom: ${ props => props.dark ? "3px solid var(--light-text)" : "3px solid var(--secondary)" }; 
// }
// `;

// export const StyledIcon = styled(FontAwesomeIcon)`
//   color: var(--lighter);
//   font-size: 1.5rem;
//   transition: color 0.2s ease-out;

//   ${StyledLink}:hover & {
//     color: var(--secondary);
//   }

//   @media ${props => props.theme.mediaQueries.medium} {
//     font-size: 2rem;
//   }

//   @media ${props => props.theme.mediaQueries.small} {
//     font-size: 1.7rem;
//   }

//   @media ${props => props.theme.mediaQueries.smaller} {
//     font-size: 1.6rem;
//   }
// `

// export const StyledLinkOutter = styled.a`
// cursor:pointer;
// color:var(--white);
// margin-right: 5px;
// margin-top: 6px;
// width: 3rem;
// height: 3rem;
// border-radius: 50%;
// display: flex;
// justify-content: center;
// align-items: center;
// text-decoration: none;
// border: 2px solid var(--white);
// transition: all 0.2s ease-out;

// &:hover {
//   background-color: var(--secondary);
//   border-color: var(--primary); 
// }
// `;

const FooterBottom = styled.div`
  min-height:5rem;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:var(--secondary);
  color:var(--light-text);
`

const Footer = () => {

//   const { site } = useStaticQuery(graphql`
//   query {
//     site {
//       siteMetadata {
//         social {
//           skype
//           email
//           twitter
//           instagram
//           facebook
//           linkedin
//         }
//       }
//     }
//   }
// `)

  return (
    <FooterSection>
      {/* ****** Footer Top******* */}
      <Container>
        <FooteritemsAll>
         
          {/* <FooterItem>
            <Heading>Company</Heading>
            <StyledLink to='/'>
             <FooterText> Home </FooterText>
            </StyledLink>
            <StyledLink to='/category_page'>
             <FooterText> Category</FooterText>
            </StyledLink>
            <StyledLink to='/about'>
             <FooterText> About Us</FooterText>
            </StyledLink>
            <StyledLink to='/contact'>
             <FooterText> Contact Us</FooterText>
            </StyledLink>
          </FooterItem>

          <FooterItem>
            <Heading>Let's Talk</Heading>
            <FooterTextWrapper>
              <StyledLinkOutter>
                <StyledIcon icon={faEnvelope} />
              </StyledLinkOutter>
              <FooterText>support@farmbotanica.com</FooterText>
            </FooterTextWrapper>

            <FooterTextWrapper>
              <StyledLinkOutter>
                <StyledIcon icon={faPhoneVolume} />
              </StyledLinkOutter>{" "}
              <FooterText> (+91) 73588 71283  <br/> (+91) 94451 19072</FooterText>
            </FooterTextWrapper>
          </FooterItem>

          <FooterItem>
            <Heading>Connect with us</Heading>
              <FooterItemSocial>
                <StyledLinkOutter 
                href={`https://www.twitter.com/${site.siteMetadata.social.twitter}`}
                target="_blank"
                aria-label="" >
                  <StyledIcon icon={faTwitter} />
                </StyledLinkOutter>

                <StyledLinkOutter  
                href={`skype:${site.siteMetadata.social.skype}?chat`}
                target="_blank"
                aria-label="" >
                  <StyledIcon icon={faSkype} />
                </StyledLinkOutter>

                <StyledLinkOutter  
                href={`https://www.instagram.com/${site.siteMetadata.social.instagram}`}
                target="_blank"
                aria-label="" >
                  <StyledIcon icon={faInstagram} />
                </StyledLinkOutter>
                <StyledLinkOutter  
                href={`https://www.linkedin.com/company/${site.siteMetadata.social.linkedin}`}
                target="_blank"
                aria-label="" >
                  <StyledIcon icon={faLinkedin} />
                </StyledLinkOutter>
                <StyledLinkOutter  
                href={`https://www.facebook.com/${site.siteMetadata.social.facebook}`}
                target="_blank"
                aria-label="" >
                  <StyledIcon icon={faFacebookF} />
                </StyledLinkOutter>
              </FooterItemSocial>
          
          </FooterItem> */}
        </FooteritemsAll>
      </Container>

      {/* ********* Footer Bottom ********** */}
    <FooterBottom>
     {/* <FooterText style={{ padding: "0 2rem", borderRight: "1px solid #fff" }} > <StyledLink dark to='/'>  Privacy Policy </StyledLink> </FooterText>
     <FooterText style={{ padding: "0 2rem", borderRight: "1px solid #fff" }} > <StyledLink dark to='/'>  Terms of Use </StyledLink> </FooterText>
     <FooterText style={{ padding: "0 2rem" }} > <StyledLink dark to='/'>  © 2020 Farm Botanica </StyledLink> </FooterText> */}
   
    </FooterBottom>
    </FooterSection>
  )
}

export default Footer
