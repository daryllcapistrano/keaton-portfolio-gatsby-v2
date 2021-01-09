import React from "react"
import { Link } from "gatsby"
import RotatingLogo from "../../images/gifs/keaton_Logo-blend.gif"

import { LogoWrapper, LinkWrapper } from "./style"

const Header = ({ menuLinks }) => {
  return (
    <header>
      <LogoWrapper>
        <img
          src={RotatingLogo}
          alt="Gif Logo for Keaton Rodgers"
          style={{ width: `50%` }}
        />
      </LogoWrapper>
      <LinkWrapper>
        {menuLinks.map(link => (
          <div key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </div>
        ))}
      </LinkWrapper>
    </header>
  )
}

export default Header
