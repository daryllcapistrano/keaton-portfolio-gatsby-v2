import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const MapleXO = () => (
  <Layout>
    <SEO title="Maple XO - Farewell 2020" />
    <NavWrapper>
      <Link to="/videos/vans-skate">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/wornpath">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526249391"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Maple XO - Farewell 2020"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director/ DoP/ Editor - Keaton Rodgers</p>
    </div>
  </Layout>
)

export default MapleXO
