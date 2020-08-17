import React from "react"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../components/video/styles"

const ManifestFarmPage = () => (
  <Layout>
    <SEO title="Manifest Farm" />
    <NavWrapper>
      <NavLink to="/videos/blm-this-is-a-zine">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/bittersland">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/fXV8AEs1IdQ`}
        frameBorder="0"
        allowFullScreen={true}
        title="manifest farm"
      />
    </VideoWrapper>
  </Layout>
)

export default ManifestFarmPage
