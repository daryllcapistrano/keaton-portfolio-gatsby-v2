import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const WatersEdge = () => (
  <Layout>
    <SEO title="Water's Edge" />
    <NavWrapper>
      <Link to="/videos/prices-are-low">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/vans-skate">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe src="https://player.vimeo.com/video/567253252" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Water's Edge" allowfullscreen></iframe>
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default WatersEdge
