import React from "react"
import { Link } from "gatsby"
import RotatingLogo from "../../images/gifs/Logo.mp4"

import {
  StyledHeader,
  InnerWrapper,
  LogoWrapper,
  Video,
  LinkWrapper,
} from "./style"

const Header = ({ menuLinks }) => {
  return (
    <StyledHeader>
      <InnerWrapper>
        <LogoWrapper>
          <Video autoPlay loop preload="auto">
            <source src={RotatingLogo} type="video/mp4" />
          </Video>
        </LogoWrapper>
        <LinkWrapper>
          {menuLinks.map(link => (
            <Link
              to={link.link}
              key={link.name}
              activeStyle={{ borderBottom: `2px solid black` }}
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
