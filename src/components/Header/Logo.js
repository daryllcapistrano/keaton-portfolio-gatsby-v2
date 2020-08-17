import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LogoWrapper, GifLogo } from "./styles"

export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gifs/keaton_Logo-blend.gif" }) {
        publicURL
      }
    }
  `)

  return (
    <LogoWrapper>
      <GifLogo src={data.file.publicURL} />
    </LogoWrapper>
  )
}
