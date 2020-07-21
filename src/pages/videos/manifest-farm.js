import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/common/seo"
import { VideoWrapper, NavWrapper, NavLink, YoutubeVideo } from "./styles"

const ManifestFarmPage = () => (
  <Layout>
    <SEO title="ManifestFarmPage" />
    <NavWrapper>
      <NavLink to="/videos/wornpath">Back</NavLink>
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
