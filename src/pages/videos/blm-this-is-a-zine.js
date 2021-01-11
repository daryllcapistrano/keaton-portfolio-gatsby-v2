import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const BlackLivesMatter = () => (
  <Layout>
    <SEO title="Black Lives Matter / This is a Zine" />
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/v0yaPXtcdCw`}
          frameBorder="0"
          allowFullScreen={true}
          title="black lives matter / this is a zine"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <NavWrapper>
      <Link to="/videos/wornpath">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/manifest-farm">Next</Link>
    </NavWrapper>
  </Layout>
)

export default BlackLivesMatter
