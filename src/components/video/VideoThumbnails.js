import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { StyledGrid, StyledCard, StyledImg, Text } from "./styles"

const VideoThumbnails = () => {
  const data = useStaticQuery(graphql`
    query {
      allVideoThumbnailsJson {
        nodes {
          link
          title
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

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <StyledGrid
      container
      spacing={isSmall ? 2 : 4}
      direction="row"
      justify="center"
      align-items="center"
    >
      {data.allVideoThumbnailsJson.nodes.map((thumbnail, index) => (
        <Grid item key={index} xs={6} sm={6} md={6} lg={4} xl={4}>
          <StyledCard elevation={0}>
            <Link to={thumbnail.link}>
              <StyledImg fluid={thumbnail.src.childImageSharp.fluid} />
              <Text>
                {thumbnail.title}
                <br />
                {thumbnail.subtitle}
              </Text>
            </Link>
          </StyledCard>
        </Grid>
      ))}
    </StyledGrid>
  )
}

export default VideoThumbnails
