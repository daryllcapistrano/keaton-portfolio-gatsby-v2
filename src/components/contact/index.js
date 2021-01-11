import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GrInstagram, GrSend, GrPhone } from "react-icons/gr"
import { InfoContainer } from "./style"

import { Wrapper, ImageWrapper } from "./style"

function Contact() {
  const Photo = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "contact-images" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <ImageWrapper>
        <Img fluid={Photo.allFile.nodes[0].childImageSharp.fluid} />
      </ImageWrapper>
      <InfoContainer>
        <a href="tel:971.347.6704">
          <GrPhone />
          <small>phone</small>
        </a>
        <a href="mailto:keatonrodgersmedia@gmail.com">
          <GrSend />
          <small>email</small>
        </a>
        <a href="https://www.instagram.com/keatonrodgers/">
          <GrInstagram />
          <small>instagram</small>
        </a>
      </InfoContainer>
    </Wrapper>
  )
}

export default Contact
