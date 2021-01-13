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

const MapleXO = () => (
  <Layout>
    <SEO title="Maple XO - Farewell 2020" />
    <NavWrapper>
      <Link to="/videos/demo-reel">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/wornpath">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/4MIiP4unU-s`}
          frameBorder="0"
          allowFullScreen={true}
          title="Maple XO - Farewell 2020"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default MapleXO
