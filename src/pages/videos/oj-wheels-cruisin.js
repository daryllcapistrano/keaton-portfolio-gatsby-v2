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

const OJCruising = () => (
  <Layout>
    <SEO title="OJ Wheels Cruisin'" />
    <NavWrapper>
      <Link to="/videos/bronson-bearings">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/skatewild">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/djEnS6_MFyM`}
          frameBorder="0"
          allowFullScreen={true}
          title="Cruisin' Through the Leaves - Fall in the NW | OJ Wheels"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/fQgDbC9H9ag`}
          frameBorder="0"
          allowFullScreen={true}
          title="Cruisin' in the rain | OJ Wheels"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/G7oARsOWQDo`}
          frameBorder="0"
          allowFullScreen={true}
          title="Cruisin' on Watermelon Super Juice with Preston Harper | OJ Wheels"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default OJCruising
