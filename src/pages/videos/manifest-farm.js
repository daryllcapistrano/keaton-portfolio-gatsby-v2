import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const ManifestFarmPage = () => (
  <Layout>
    <SEO title="Manifest Farm" />
    <NavWrapper>
      <Link to="/videos/blm-this-is-a-zine">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/bittersland">Next</Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/fXV8AEs1IdQ`}
          frameBorder="0"
          allowFullScreen={true}
          title="manifest farm"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default ManifestFarmPage
