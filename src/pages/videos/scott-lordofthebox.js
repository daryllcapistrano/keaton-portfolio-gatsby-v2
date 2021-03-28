import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const LordOfTheBox = () => (
  <Layout>
    <SEO title="Scott Stevens - Lord of the Box" />
    <NavWrapper>
      <Link to="/videos/bronson-bearings">
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
        src="https://player.vimeo.com/video/524708727"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Scott Stevens - Lord of the Box"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default LordOfTheBox
