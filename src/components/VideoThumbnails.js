import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"

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
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      align-items="center"
      style={{ padding: `20px` }}
    >
      {data.allVideoThumbnailsJson.nodes.map((thumbnail, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card style={{ position: `relative`, borderRadius: `0` }}>
            <Link to={thumbnail.link}>
              <Img
                fluid={thumbnail.src.childImageSharp.fluid}
                style={{ width: `100%`, height: `100%`, paddingTop: `100%` }}
              />
            </Link>
            <div
              style={{
                color: `white`,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: `32px`,
                textShadow: `2px 2px 3px rgba(0,0,0,0.57)`,
                width: `80%`,
                position: `absolute`,
                paddingBottom: `25px`,
                top: `80%`,
                left: `50%`,
                transform: `translate(-50%, -50%)`,
                textTransform: `uppercase`,
                textAlign: `center`,
              }}
            >
              {thumbnail.title}
              <br />
              {thumbnail.subtitle}
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
