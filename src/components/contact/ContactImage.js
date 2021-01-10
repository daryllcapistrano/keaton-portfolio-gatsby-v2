import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { ImageWrapper } from "./styles"

export default function ContactImage() {
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
    <ImageWrapper>
      {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
    </ImageWrapper>
  )
}
