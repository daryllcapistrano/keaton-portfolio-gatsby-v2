import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import Grid from "@material-ui/core/Grid"
// import { useTheme } from "@material-ui/core/styles"
// import useMediaQuery from "@material-ui/core/useMediaQuery"

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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // const theme = useTheme()
  // const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid>
      {data.allVideoThumbnailsJson.nodes.map((thumbnail, index) => (
        <Item id={index}>
          <Link to={thumbnail.link}>
            <Img fluid={thumbnail.src.childImageSharp.fluid} />
          </Link>
          <TextWrapper>
            {thumbnail.title}
            <br />
            {thumbnail.subtitle}
          </TextWrapper>
        </Item>
      ))}
    </Grid>
  )
}

export default VideoThumbnails
