import React from "react"
import Layout from "../../components/common/layout"
import SEO from "../../components/common/seo"
import { VideoWrapper, NavWrapper, NavLink, YoutubeVideo } from "./styles"

const BlackLivesMatter = () => (
  <Layout>
    <SEO title="Black Lives Matter / This is a Zine" />
    <NavWrapper>
      <NavLink to="/videos/creature-quarantine-sessions">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/demo-reel">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/v0yaPXtcdCw`}
        frameBorder="0"
        allowFullScreen={true}
        title="black lives matter / this is a zine"
      />
    </VideoWrapper>
  </Layout>
)

export default BlackLivesMatter
