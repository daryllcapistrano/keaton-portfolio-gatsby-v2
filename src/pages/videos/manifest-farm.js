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

const ManifestFarmPage = () => (
  <Layout>
    <SEO title="Manifest Farm" />
    <NavWrapper>
      <Link to="/videos/wornpath">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/oj-wheels-slimeballs">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/fXV8AEs1IdQ`}
          frameBorder="0"
          allowFullScreen={true}
          title="Manifest Farm"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default ManifestFarmPage
