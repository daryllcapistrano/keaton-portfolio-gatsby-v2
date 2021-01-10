import React from "react"
import { InnerWrapper } from "./style"

function Copyright() {
  return <p> Copyright © {new Date().getFullYear()} Keaton Rodgers </p>
}

export default function StickyFooter() {
  return (
    <footer style={{ height: `2.5em` }}>
      <InnerWrapper>
        <Copyright />
      </InnerWrapper>
    </footer>
  )
}
