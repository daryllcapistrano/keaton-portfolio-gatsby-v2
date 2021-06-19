import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const AcidTurns = () => (
  <Layout>
    <SEO title="Willis Kimbell Acid Turns - OJ Wheels" />
    <NavWrapper>
      <Link to="/videos/sicky-mag">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/oj-wheels-retro">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/537416580"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Willis Kimbell Acid Turns - OJ Wheels"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default AcidTurns
