import React from "react"
import { Link } from "gatsby"
import RotatingLogo2 from "../../images/gifs/Rotating_Logo_WhiteBG.gif"

import { StyledHeader, InnerWrapper, LogoWrapper, LinkWrapper } from "./style"

const Header = ({ menuLinks }) => {
  return (
    <StyledHeader>
      <InnerWrapper>
        <LogoWrapper>
          <img src={RotatingLogo2} alt="rotating logo gif" />
        </LogoWrapper>
        <LinkWrapper>
          {menuLinks.map(link => (
            <Link
              to={link.link}
              key={link.name}
              activeStyle={{ borderBottom: `1px solid #010101` }}
            >
              {link.name}
            </Link>
          ))}
        </LinkWrapper>
      </InnerWrapper>
    </StyledHeader>
  )
}

export default Header
