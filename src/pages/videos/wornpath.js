import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const WornpathPage = () => (
  <Layout>
    <SEO title="Wornpath" />
    <NavWrapper>
      <Link to="/videos/maple-xo">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/manifest-farm">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/cpuSnsD_ZOg`}
          frameBorder="0"
          allowFullScreen={true}
          title="Wornpath"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default WornpathPage
