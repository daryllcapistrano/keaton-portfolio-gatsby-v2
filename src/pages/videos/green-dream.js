import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/seo"
import { VideoWrapper, NavWrapper, NavLink, YoutubeVideo } from "./styles"

const GreenDreamPage = () => (
  <Layout>
    <SEO title="GreenDreamPage" />
    <NavWrapper>
      <NavLink to="/videos/prices-are-low">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/creature-quarantine-sessions">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/EYzWnZchDNg`}
        frameBorder="0"
        allowFullScreen={true}
        title="green dream promotional"
      />
    </VideoWrapper>
  </Layout>
)

export default GreenDreamPage
