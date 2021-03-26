import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const Skatewild = () => (
  <Layout>
    <SEO title="David Gravette Goes to SKATE WILD Camp!" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-cruisin">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/creature-quarantine-sessions">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src={`https://www.youtube.com/embed/qatAkMQQpvI`}
        frameBorder="0"
        allowFullScreen={true}
        title="David Gravette Goes to SKATE WILD Camp!"
        width="560"
        height="349"
      />
    </IframeWrapper>
  </Layout>
)

export default Skatewild
