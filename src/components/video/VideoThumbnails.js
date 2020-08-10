import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"

import { StyledGrid, StyledCard, StyledImg, Text } from "./styles"

export const VideoThumbnails = () => {
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

  return (
    <StyledGrid
      container
      spacing={4}
      direction="row"
      justify="center"
      align-items="center"
    >
      {data.allVideoThumbnailsJson.nodes.map((thumbnail, index) => (
        <Grid item key={index} xs={6} sm={6} md={6} lg={4} xl={4}>
          <StyledCard>
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
