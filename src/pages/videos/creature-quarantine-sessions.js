import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const CreatureQuarantineSessions = () => (
  <Layout>
    <SEO title="Creature Quarantine Sessions" />
    <NavWrapper>
      <Link to="/videos/skatewild">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/prices-are-low">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src={`https://www.youtube.com/embed/VNgghlJIKy4`}
        frameBorder="0"
        allowFullScreen={true}
        title="Quarantine Sessions with David Gravette and Fiends!"
        width="560"
        height="349"
      />
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default CreatureQuarantineSessions
