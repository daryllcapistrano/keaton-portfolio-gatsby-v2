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

const BlackLivesMatter = () => (
  <Layout>
    <SEO title="Black Lives Matter / This is a Zine" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-slimeballs">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/bittersland">
        <GrNext />
      </Link>
    </NavWrapper>
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
  </Layout>
)

export default BlackLivesMatter
