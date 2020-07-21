import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/seo"
import { VideoWrapper, NavWrapper, NavLink, YoutubeVideo } from "./styles"

const OJLeavesPage = () => (
  <Layout>
    <SEO title="OJLeavesPage" />
    <NavWrapper>
      <NavLink to="/videos/bittersland">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/oj-wheels-slimeballs">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/djEnS6_MFyM`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels leaves"
      />
    </VideoWrapper>
  </Layout>
)

export default OJLeavesPage
