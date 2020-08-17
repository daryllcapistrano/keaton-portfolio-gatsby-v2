import React from "react"
import { Layout } from "../../components/common"
import { SEO } from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../components/video/styles"

const OJRainPage = () => (
  <Layout>
    <SEO title="OJ Wheels Cruisin'" />
    <NavWrapper>
      <NavLink to="/videos/oj-wheels-slimeballs">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/prices-are-low">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/fQgDbC9H9ag`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels rain"
      />
    </VideoWrapper>
  </Layout>
)

export default OJRainPage
