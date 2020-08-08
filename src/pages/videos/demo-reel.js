import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/common/seo"
import { VideoWrapper, NavWrapper, NavLink, YoutubeVideo } from "./styles"

const DemoReel = () => (
  <Layout>
    <SEO title="Demo Reel" />
    <NavWrapper>
      <NavLink to="/videos/blm-this-is-a-zine">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/wornpath">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/1Wl-rT3rU94`}
        frameBorder="0"
        allowFullScreen={true}
        title="demo reel"
      />
    </VideoWrapper>
  </Layout>
)

export default DemoReel
