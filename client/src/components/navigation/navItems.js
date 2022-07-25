import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  flex-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
`

const StyledLink = styled(Link)`
  font-family: inherit;
  color: var(--text);
  font-weight: 800;
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 1rem 2rem;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    color: var(--primary);
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 3rem 2rem;
  }
`

const NavItems = ({ mobile }) => {
  return (
    <StyledNav mobile={mobile}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/category_page">Agriculture</StyledLink>
      <StyledLink to="/horticulture">Horticulture</StyledLink>
      <StyledLink to="/category/flower">Floriculture</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <StyledLink to="/contact">Contact us</StyledLink>
    </StyledNav>
  )
}

export default NavItems
