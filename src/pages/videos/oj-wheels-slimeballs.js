import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import {
  NavWrapper,
  VideoWrapper,
  InnerWrapper,
} from "../../components/video/style"

const OJSlimePage = () => (
  <Layout>
    <SEO title="OJ Wheels Slimeballs" />
    <NavWrapper>
      <Link to="/videos/manifest-farm">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/blm-this-is-a-zine">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/jzNG1TSN7bs`}
          frameBorder="0"
          allowFullScreen={true}
          title="Slime Balls 2020 Promo"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>

    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/-Amo7LoszWw`}
          frameBorder="0"
          allowFullScreen={true}
          title="Slime Balls 2020 Promotional"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>

    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/69BABGRWz0o`}
          frameBorder="0"
          allowFullScreen={true}
          title="Slime Balls Promo 5"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>

    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/yjHIyzIhBUM`}
          frameBorder="0"
          allowFullScreen={true}
          title="Slime Balls Promo 9"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default OJSlimePage
