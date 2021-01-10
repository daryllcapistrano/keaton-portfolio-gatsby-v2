import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const BitterslandPage = () => (
  <Layout>
    <SEO title="Bitters" />
    <NavWrapper>
      <Link to="/videos/manifest-farm">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/oj-wheels-leaves">Next</Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/J-zFcJ0rMTM`}
          frameBorder="0"
          allowFullScreen={true}
          title="bittersland"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default BitterslandPage
