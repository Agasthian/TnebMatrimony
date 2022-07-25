import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

import NavItems from "../navItems"

const BackgroundWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background: var(--white);
  width: 100%;
  max-width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);
  min-height: 100vh;
  display: flex;
  transition: background 0.2s ease-out;
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 15rem;
  padding: 2rem 1rem;
`

const SideDrawer = ({ setMenuOpened, ...rest }) => {
  return (
    <BackgroundWrapper {...rest}>
      <Wrapper>
        <NavItems mobile clicked={() => setMenuOpened(false)} />
      </Wrapper>
    </BackgroundWrapper>
  )
}

export default SideDrawer
