import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../components/common"
import SEO from "../../components/SEO"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const OJSlimePage = () => (
  <Layout>
    <SEO title="OJ Wheels Slimeballs" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-leaves">Back</Link>
      <Link to="/">Home</Link>
      <Link to="/videos/oj-wheels-rain">Next</Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/jzNG1TSN7bs`}
          frameBorder="0"
          allowFullScreen={true}
          title="oj wheels slimeballs 2020 promo"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <hr />
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/-Amo7LoszWw`}
          frameBorder="0"
          allowFullScreen={true}
          title="oj wheels slimeballs 2020 promotional"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <hr />
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/69BABGRWz0o`}
          frameBorder="0"
          allowFullScreen={true}
          title="oj wheels slimeballs 5"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <hr />
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/yjHIyzIhBUM`}
          frameBorder="0"
          allowFullScreen={true}
          title="oj wheels slimeballs 9"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default OJSlimePage
