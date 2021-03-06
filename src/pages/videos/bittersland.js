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

const BitterslandPage = () => (
  <Layout>
    <SEO title="Bitters" />
    <NavWrapper>
      <Link to="/videos/blm-this-is-a-zine">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/bronson-bearings">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/J-zFcJ0rMTM`}
          frameBorder="0"
          allowFullScreen={true}
          title="Bittersland"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default BitterslandPage
