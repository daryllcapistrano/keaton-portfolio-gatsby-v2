import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const DemoReel = () => (
  <Layout>
    <SEO title="Demo Reel" />
    <NavWrapper>
      <Link to="/videos/creature-quarantine-sessions">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/wornpath">Next</Link>
    </NavWrapper>

    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/1Wl-rT3rU94`}
          frameBorder="0"
          allowFullScreen={true}
          title="demo reel"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default DemoReel
