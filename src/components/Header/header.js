import React from "react"
import Logo from "./Logo"
import {
  Wrapper,
  HeaderContainer,
  StyledToolbar,
  Brand,
  ResponsiveLinks,
  LinkWrapper,
  HeaderLink,
} from "./styles"

const Header = ({ menuLinks }) => {
  return (
    <Wrapper>
      <HeaderContainer position="static" color="default" elevation={0}>
        <StyledToolbar variant="dense">
          <Brand to="/">
            <Logo />
          </Brand>
          <ResponsiveLinks>
            {menuLinks.map(link => (
              <LinkWrapper key={link.name}>
                <HeaderLink variant="button" to={link.link}>
                  {link.name}
                </HeaderLink>
              </LinkWrapper>
            ))}
          </ResponsiveLinks>
        </StyledToolbar>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header
