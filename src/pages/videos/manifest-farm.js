import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/common/layout"
import SEO from "../../components/SEO"
import { GrPrevious, GrNext } from "react-icons/gr"
import { NavWrapper, IframeWrapper } from "../../components/video/style"

const ManifestFarmPage = () => (
  <Layout>
    <SEO title="Manifest Farm" />
    <NavWrapper>
      <Link to="/videos/wornpath">
        <GrPrevious />
        prev
      </Link>
      <Link to="/videos/sid">
        next
        <GrNext />
      </Link>
    </NavWrapper>
    <IframeWrapper>
      <iframe
        src="https://player.vimeo.com/video/524432287"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Manifest Farm"
      ></iframe>
    </IframeWrapper>
    <div>
      <p>
        <b>Director / DoP / Editor</b> - Keaton Rodgers
      </p>
      <p>
        <b>Starring</b> - Katie Linkous
      </p>
    </div>
  </Layout>
)

export default ManifestFarmPage
