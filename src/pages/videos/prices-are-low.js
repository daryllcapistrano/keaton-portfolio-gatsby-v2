import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const PricesAreLow = () => (
  <Layout>
    <SEO title="Prices Are Low" />
    <NavWrapper>
      <Link to="/videos/creature-quarantine-sessions">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/vans-skate">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src={`https://www.youtube.com/embed/TVbZff32XIQ`}
        frameBorder="0"
        allowFullScreen={true}
        title="Prices are Low - David Gravette, Tony Ellis, Willis Kimbel, Cody Lockwood, Fern Covarrubias and more"
        width="560"
        height="349"
      />
    </IframeWrapper>
  </Layout>
)

export default PricesAreLow
