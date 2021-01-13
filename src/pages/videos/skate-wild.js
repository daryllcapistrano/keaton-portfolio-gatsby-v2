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

const Skatewild = () => (
  <Layout>
    <SEO title="David Gravette Goes to SKATE WILD Camp!" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-cruisin">
        <GrPrevious />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/videos/creature-quarantine-sessions">
        <GrNext />
      </Link>
    </NavWrapper>
    <VideoWrapper>
      <InnerWrapper>
        <iframe
          src={`https://www.youtube.com/embed/qatAkMQQpvI`}
          frameBorder="0"
          allowFullScreen={true}
          title="David Gravette Goes to SKATE WILD Camp!"
          width="560"
          height="349"
        />
      </InnerWrapper>
    </VideoWrapper>
  </Layout>
)

export default Skatewild
