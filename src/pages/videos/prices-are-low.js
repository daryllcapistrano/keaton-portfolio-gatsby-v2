import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../videoStyles/styles"

const PricesAreLow = () => (
  <Layout>
    <SEO title="Prices Are Low" />
    <NavWrapper>
      <NavLink to="/videos/oj-wheels-rain">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/creature-quarantine-sessions">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/TVbZff32XIQ`}
        frameBorder="0"
        allowFullScreen={true}
        title="prices are low"
      />
    </VideoWrapper>
  </Layout>
)

export default PricesAreLow
