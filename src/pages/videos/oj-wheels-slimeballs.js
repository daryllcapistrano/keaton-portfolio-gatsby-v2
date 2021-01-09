import React from "react"
import { Layout } from "../../components/common"
import { SEO } from "../../components/SEO/"
import {
  VideoWrapper,
  NavWrapper,
  NavLink,
  YoutubeVideo,
} from "../../components/video/style"

const OJSlimePage = () => (
  <Layout>
    <SEO title="OJ Wheels Slimeballs" />
    <NavWrapper>
      <NavLink to="/videos/oj-wheels-leaves">Back</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos/oj-wheels-rain">Next</NavLink>
    </NavWrapper>
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/jzNG1TSN7bs`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 2020 promo"
      />
    </VideoWrapper>
    <hr />
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/-Amo7LoszWw`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 2020 promotional"
      />
    </VideoWrapper>
    <hr />
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/69BABGRWz0o`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 5"
      />
    </VideoWrapper>
    <hr />
    <VideoWrapper>
      <YoutubeVideo
        src={`https://www.youtube.com/embed/yjHIyzIhBUM`}
        frameBorder="0"
        allowFullScreen={true}
        title="oj wheels slimeballs 9"
      />
    </VideoWrapper>
  </Layout>
)

export default OJSlimePage
