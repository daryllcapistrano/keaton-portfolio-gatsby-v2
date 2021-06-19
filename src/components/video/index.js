import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, GridItem, ThumbnailText } from "./styles"

const VideoThumbnails = () => {
  const data = useStaticQuery(graphql`
    query {
      allVideoThumbnailsJson {
        nodes {
          title
          link
          src {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
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
        <GridItem key={index}>
          <Link to={thumbnail.link}>
            <Img
              title={thumbnail.title}
              alt={thumbnail.title}
              fluid={thumbnail.src.childImageSharp.fluid}
            />
          </Link>
          <ThumbnailText>{thumbnail.title}</ThumbnailText>
        </GridItem>
      ))}
    </Grid>
  )
}

export default VideoThumbnails
