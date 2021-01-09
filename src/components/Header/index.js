import React from "react"
import { Link } from "gatsby"
import RotatingLogo from "../../images/gifs/Logo.mp4"

import { LogoWrapper, LinkWrapper } from "./style"

const Header = ({ menuLinks }) => {
  return (
    <header>
      <LogoWrapper>
        <video autoPlay loop preload="auto" style={{ width: `50%` }}>
          <source src={RotatingLogo} type="video/mp4" />
        </video>
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
    </header>
  )
}

export default Header
