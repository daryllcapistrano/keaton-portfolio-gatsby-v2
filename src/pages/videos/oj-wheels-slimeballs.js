import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const OJSlimePage = () => (
  <Layout>
    <SEO title="OJ Wheels Slimeballs" />
    <NavWrapper>
      <Link to="/videos/sid">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/bronson-bearings">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526275284?color=ffe000"
        width="640"
        height="640"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="promo1"
      ></iframe>
    </IframeWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526276542?color=ffe000"
        width="640"
        height="640"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="promo2"
      ></iframe>
    </IframeWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526278190?color=ffe000"
        width="640"
        height="640"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="promo3"
      ></iframe>
    </IframeWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526279765?color=ffe000"
        width="640"
        height="640"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="promo4"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director/ DoP/ Editor - Keaton Rodgers</p>
      <p>Producer - Alex Foy</p>
    </div>
  </Layout>
)

export default OJSlimePage
