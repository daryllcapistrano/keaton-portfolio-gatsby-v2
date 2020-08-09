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
  StyledGrid,
} from "./styles"
import { Grid } from "@material-ui/core"

const Header = ({ menuLinks }) => {
  return (
    <Wrapper>
      <HeaderContainer position="static" color="default" elevation={0}>
        <StyledToolbar variant="dense">
          <Grid container>
            <StyledGrid item xl={12}>
              <Brand to="/">
                <Logo />
              </Brand>
            </StyledGrid>
            <StyledGrid item xl={12}>
              <ResponsiveLinks>
                {menuLinks.map(link => (
                  <LinkWrapper key={link.name}>
                    <HeaderLink variant="button" to={link.link}>
                      {link.name}
                    </HeaderLink>
                  </LinkWrapper>
                ))}
              </ResponsiveLinks>
            </StyledGrid>
          </Grid>
        </StyledToolbar>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header
