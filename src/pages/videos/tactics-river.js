import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/common/video/styles"

const TacticsRiver = () => (
  <Layout>
    <SEO title="Tactics - River Mountain Collection" />
    <NavWrapper>
      <Link to="/videos/scott-lordofthebox">
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
        src="https://www.youtube.com/embed/L4lUEQg5JS0"
        title="Tactics - River Mountain Collection"
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

export default TacticsRiver
