import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, Item, TextWrapper } from "./style"

const VideoThumbnails = () => {
  const data = useStaticQuery(graphql`
    query {
      allVideoThumbnailsJson {
        nodes {
          title
          link
          subtitle
          src {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid>
      {data.allVideoThumbnailsJson.nodes.map((thumbnail, index) => (
        <Item key={index}>
          <Link to={thumbnail.link}>
            <Img
              fluid={thumbnail.src.childImageSharp.fluid}
              backgroundColor={true}
            />
            <TextWrapper>
              {thumbnail.title}
              <br />
              {thumbnail.subtitle}
            </TextWrapper>
          </Link>
        </Item>
      ))}
    </Grid>
  )
}

export default VideoThumbnails
