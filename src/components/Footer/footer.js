import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
// import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: "flex",
  //   flexDirection: "column",
  //   minHeight: "55vh",
  // },
  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  // },
  footer: {
    padding: theme.spacing(3, 2),
    textAlign: `center`,
    marginTop: "auto",
    backgroundColor: `inherit`,
  },
}))

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
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
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}
