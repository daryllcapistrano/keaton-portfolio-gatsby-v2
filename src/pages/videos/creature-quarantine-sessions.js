import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/common/seo"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../videoStyles/styles"

const CreatureQuarantineSessions = () => (
  <Layout>
    <SEO title="CreatureQuarantineSessions" />
    <NavWrapper>
      <NavLink to="/videos/prices-are-low">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/demo-reel">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/VNgghlJIKy4`}
        frameBorder="0"
        allowFullScreen={true}
        title="creature quarantine sessions"
      />
    </VideoWrapper>
  </Layout>
)

export default CreatureQuarantineSessions
