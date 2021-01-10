import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const WornpathPage = () => (
  <Layout>
    <SEO title="Wornpath" />
    <NavWrapper>
      <Link to="/videos/demo-reel">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/blm-this-is-a-zine">Next</Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/cpuSnsD_ZOg`}
          frameBorder="0"
          allowFullScreen={true}
          title="wornpath"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default WornpathPage
