import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const BronsonBearings = () => (
  <Layout>
    <SEO title="Bronson Bearings with David Gravette" />
    <NavWrapper>
      <Link to="/videos/oj-wheels-slimeballs">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/blm-this-is-a-zine">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526252280?color=ffe000"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Bronson Bearings with David Gravette"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Cinematographer / Editor - Keaton Rodgers</p>
    </div>
  </Layout>
)

export default BronsonBearings
