import React from "react"
import { StyledFooter } from "./style"

function Copyright() {
  return <p> Copyright © {new Date().getFullYear()} Keaton Rodgers </p>
}

export default function StickyFooter() {
  return (
    <StyledFooter>
      <Copyright />
    </StyledFooter>
  )
}
