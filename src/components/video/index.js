import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, ThumbnailText } from "./style"

const VideoThumbnails = () => {
  const data = useStaticQuery(graphql`
    query {
      allVideoThumbnailsJson {
        nodes {
          title
          link
          src {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp
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
        <div key={index}>
          <Link to={thumbnail.link}>
            <Img
              title={thumbnail.title}
              alt={thumbnail.title}
              sizes={thumbnail.src.childImageSharp.sizes}
            />
          </Link>
          <ThumbnailText>{thumbnail.title}</ThumbnailText>
        </div>
      ))}
    </Grid>
  )
}

export default VideoThumbnails
