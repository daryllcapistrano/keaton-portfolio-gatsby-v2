import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const OJLeavesPage = () => (
  <Layout>
    <SEO title="OJ Wheels Cruisin'" />
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/djEnS6_MFyM`}
          frameBorder="0"
          allowFullScreen={true}
          title="oj wheels leaves"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <NavWrapper>
      <Link to="/videos/bittersland">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/oj-wheels-slimeballs">Next</Link>
    </NavWrapper>
  </Layout>
)

export default OJLeavesPage
