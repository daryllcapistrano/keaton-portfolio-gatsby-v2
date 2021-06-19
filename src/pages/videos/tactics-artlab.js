import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const TacticsArtLab = () => (
  <Layout>
    <SEO title="Tactics - Art Lab" />
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
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YdH1Tm5Ixfk"
        title="Tactics - Art Lab"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </IframeWrapper>
    <div>
      <p>Director / DoP / Editor</p>
    </div>
  </Layout>
)

export default TacticsArtLab
