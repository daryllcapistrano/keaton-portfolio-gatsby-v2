import React from "react"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../components/video/styles"

const BitterslandPage = () => (
  <Layout>
    <SEO title="Bitters" />
    <NavWrapper>
      <NavLink to="/videos/manifest-farm">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/oj-wheels-leaves">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/J-zFcJ0rMTM`}
        frameBorder="0"
        allowFullScreen={true}
        title="bittersland"
      />
    </VideoWrapper>
  </Layout>
)

export default BitterslandPage
