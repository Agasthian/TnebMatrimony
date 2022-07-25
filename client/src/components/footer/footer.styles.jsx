import styled from "styled-components"

export const FooterSection = styled.footer`
  background-color: var(--secondary);
  color: #000;
  padding:4rem 0 0 0;
`
export const FooteritemsAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

 
`

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 22rem;

 
`

export const Heading = styled.h5`
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

export const FooterText = styled.p`
  margin: 10px 0px 5px 0px;
  color: var(--primary-lighter);
  font-size: 1.5rem;
`