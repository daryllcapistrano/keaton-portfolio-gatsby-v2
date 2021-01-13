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

const BronsonBearings = () => (
  <Layout>
    <SEO title="Bronson Bearings with David Gravette" />
    <NavWrapper>
      <Link to="/videos/bittersland">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/oj-wheels-cruisin">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/21SFuxrkZ00`}
          frameBorder="0"
          allowFullScreen={true}
          title="Bronson Bearings David Gravette Ad"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default BronsonBearings
