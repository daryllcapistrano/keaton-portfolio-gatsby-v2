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
        <Item key={index}>
          <Link to={thumbnail.link}>
            <Img
              title={thumbnail.title}
              alt="Video Work Thumbnails"
              sizes={thumbnail.src.childImageSharp.sizes}
            />
            <TextWrapper>
              <p>{thumbnail.title}</p>
              <br />
              <p>{thumbnail.subtitle}</p>
            </TextWrapper>
          </Link>
        </Item>
      ))}
    </Grid>
  )
}

export default VideoThumbnails
