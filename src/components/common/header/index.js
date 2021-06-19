import React from "react"
import { Link } from "gatsby"
import RotatingLogo2 from "../../../images/gifs/keaton_Logo-blend.gif"

import { StyledHeader, LogoWrapper, LinkWrapper } from "./styles"

const Header = ({ menuLinks }) => {
  return (
    <StyledHeader>
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
    </StyledHeader>
  )
}

export default Header
