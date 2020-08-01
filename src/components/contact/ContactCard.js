import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import ContactForm from "./ContactForm"
import { ImageWrapper, StyledCard } from "./styles"

export default function ContactCard() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-images/model1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <StyledCard>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <ImageWrapper>
              <Card elevation={2}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </Card>
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Container>
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </StyledCard>
    </Container>
  )
}
