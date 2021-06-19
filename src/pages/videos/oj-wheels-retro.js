import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const RetroCommercials = () => (
  <Layout>
    <SEO title="Slime Balls - Retro Commercials" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-willis-kimbell">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/oj-wheels-slimeballs">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/564769877"
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="commercial1"
      ></iframe>
    </IframeWrapper>
    <br />
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/564775608"
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="commercial4"
      ></iframe>
    </IframeWrapper>
    <br />
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/564773576"
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="commercial3"
      ></iframe>
    </IframeWrapper>
    <br />
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/564772311"
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="commercial2"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default RetroCommercials
