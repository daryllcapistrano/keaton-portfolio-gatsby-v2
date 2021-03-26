import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const BlackLivesMatter = () => (
  <Layout>
    <SEO title="Vans - The Skate Authentic" />
    <NavWrapper>
      <Link to="/videos/bronson-bearings">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/oj-wheels-cruisin">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/526234712"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Black Lives Matter - This is a Zine"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>
        <b>Director / DoP / Editor</b> - Keaton Rodgers
      </p>
      <p>
        <b>Creative Director</b> - Josh Eberhard
      </p>
    </div>
  </Layout>
)

export default BlackLivesMatter
