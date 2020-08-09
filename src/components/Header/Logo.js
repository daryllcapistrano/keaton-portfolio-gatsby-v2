import React from "react"
import logo from "../../images/gifs/logo_1.gif"
import { LogoWrapper, GifLogo } from "./styles"

const Logo = () => {
  return (
    <LogoWrapper>
      <GifLogo src={logo} alt="light logo" />
    </LogoWrapper>
  )
}

export default Logo
