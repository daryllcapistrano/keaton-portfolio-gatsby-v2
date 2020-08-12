import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import { FooterWrapper } from "./styles"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.instagram.com/keatonrodgers">
        Keaton Rodgers
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function StickyFooter() {
  return (
    <FooterWrapper>
      <footer>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </FooterWrapper>
  )
}
