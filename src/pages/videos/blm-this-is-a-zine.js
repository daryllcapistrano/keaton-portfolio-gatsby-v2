import React from "react"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../components/video/styles"

const BlackLivesMatter = () => (
  <Layout>
    <SEO title="Black Lives Matter / This is a Zine" />
    <NavWrapper>
      <NavLink to="/videos/wornpath">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/manifest-farm">Next</NavLink>
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
