import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/common/seo"
import { VideoWrapper, NavWrapper, NavLink, YoutubeVideo } from "./styles"

const WornpathPage = () => (
  <Layout>
    <SEO title="WornpathPage" />
    <NavWrapper>
      <NavLink to="/videos/demo-reel">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/blm-this-is-a-zine">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/cpuSnsD_ZOg`}
        frameBorder="0"
        allowFullScreen={true}
        title="wornpath"
      />
    </VideoWrapper>
  </Layout>
)

export default WornpathPage
