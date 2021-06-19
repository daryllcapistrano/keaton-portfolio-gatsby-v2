import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const SID = () => (
  <Layout>
    <SEO title="SID" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-slimeballs">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/tactics-artlab">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/521963968?color=ffe000"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="SID"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>DoP / Editor</p>
    </div>
  </Layout>
)

export default SID
