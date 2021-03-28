import React from "react"
import { FiPhoneCall, FiInstagram, FiAtSign } from "react-icons/fi"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Grid, Button } from "@material-ui/core"
import useStyles from "./styles"

function Contact() {
  const classes = useStyles()

  const Photo = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "contact-images" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageWrapper}>
            <Img fluid={Photo.allFile.nodes[0].childImageSharp.fluid} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.linkWrapper}>
            <Button
              variant="contained"
              href="tel:971.347.6704"
              startIcon={<FiPhoneCall />}
            >
              971.347.6704
            </Button>
            <br />
            <Button
              variant="contained"
              href="https://www.instagram.com/keatonrodgers/"
              startIcon={<FiInstagram />}
            >
              @keatonrodgers
            </Button>
            <br />
            <Button
              variant="contained"
              href="mailto:keatonrodgersmedia@gmail.com"
              startIcon={<FiAtSign />}
            >
              keatonrodgersmedia
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
