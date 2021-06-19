import React from "react"
import { StyledFooter, InnerWrapper } from "./style"

function Copyright() {
  return <p> Copyright © {new Date().getFullYear()} Keaton Rodgers </p>
}

export default function Footer() {
  return (
    <StyledFooter>
      <InnerWrapper>
        <Copyright />
      </InnerWrapper>
    </StyledFooter>
  )
}
