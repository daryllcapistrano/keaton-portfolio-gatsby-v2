import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const SickyMag = () => (
  <Layout>
    <SEO title="Sicky Magazine - The Sheer Possibility" />
    <NavWrapper>
      <Link to="/videos/manifest-farm">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/oj-wheels-willis-kimbell">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/562827267"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Sicky Magazine - The Sheer Possibility"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default SickyMag