import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { IconContext } from "react-icons"
import { FaInstagram } from "react-icons/fa"
import { BsAt } from "react-icons/bs"
import { MdPhonelinkRing } from "react-icons/md"

import { Wrapper, ImageWrapper, LinkContainer, Button } from "./style"

function Contact() {
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
    <Wrapper>
      <ImageWrapper>
        <Img
          fluid={Photo.allFile.nodes[0].childImageSharp.fluid}
          style={{ margin: `auto` }}
        />
      </ImageWrapper>
      <LinkContainer>
        <Button href="tel:971.347.6704">
          <IconContext.Provider value={{ size: `1.5em` }}>
            <MdPhonelinkRing />
          </IconContext.Provider>
          <p>971.347.6704</p>
        </Button>
        <Button href="https://www.instagram.com/keatonrodgers/">
          <IconContext.Provider value={{ size: `1.5em` }}>
            <FaInstagram />
          </IconContext.Provider>
          <p>@keatonrodgers</p>
        </Button>
        <Button href="mailto:keatonrodgersmedia@gmail.com">
          <IconContext.Provider value={{ size: `1.5em` }}>
            <BsAt />
          </IconContext.Provider>
          <p>keatonrodgersmedia</p>
        </Button>
      </LinkContainer>
    </Wrapper>
  )
}

export default Contact
