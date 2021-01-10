import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const OJRainPage = () => (
  <Layout>
    <SEO title="OJ Wheels Cruisin'" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-slimeballs">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/prices-are-low">Next</Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/fQgDbC9H9ag`}
          frameBorder="0"
          allowFullScreen={true}
          title="oj wheels rain"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default OJRainPage
