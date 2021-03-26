import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const Vans = () => (
  <Layout>
    <SEO title="Vans - The Skate Authentic" />
    <NavWrapper>
      <Link to="/videos/prices-are-low">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/maple-xo">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/529388655"
        width="640"
        height="640"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Vans - The Skate Authentic"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director/ DoP/ Editor - Keaton Rodgers</p>
      <p>Starring - Romel Torres</p>
    </div>
  </Layout>
)

export default Vans
