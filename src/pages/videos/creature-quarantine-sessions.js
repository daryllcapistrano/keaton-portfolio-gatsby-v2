import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const CreatureQuarantineSessions = () => (
  <Layout>
    <SEO title="Creature Quarantine Sessions" />
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/VNgghlJIKy4`}
          frameBorder="0"
          allowFullScreen={true}
          title="creature quarantine sessions"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <NavWrapper>
      <Link to="/videos/prices-are-low">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/demo-reel">Next</Link>
    </NavWrapper>
  </Layout>
)

export default CreatureQuarantineSessions
