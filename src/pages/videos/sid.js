import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const SID = () => (
  <Layout>
    <SEO title="SID" />
    <NavWrapper>
      <Link to="/videos/manifest-farm">
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
        src="https://player.vimeo.com/video/521963968?color=ffe000"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="SID"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>
        <b>Starring</b> - Sid Murrell
      </p>
      <p>
        <b>Director</b> - Brenton Salo
      </p>
      <p>
        <b>Cinematographer / Editor</b> - Keaton Rodgers
      </p>
      <p>
        <b>Producer</b> - Lisa Webster
      </p>
      <p>
        <b>Music</b> - "Angry Waves" by Kid Ferris
      </p>
      <p>
        <b>1st AC</b> - Jesse Tobler
      </p>
      <p>
        <b>Colorist</b> - Ivan Vidovic
      </p>
    </div>
  </Layout>
)

export default SID
