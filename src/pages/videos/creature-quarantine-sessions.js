import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../components/video/styles"

const CreatureQuarantineSessions = () => (
  <Layout>
    <SEO title="Creature Quarantine Sessions" />
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
