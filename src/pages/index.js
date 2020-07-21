import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

import { VideoThumbnails } from "../components/video/VideoThumbnails"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoThumbnails />
  </Layout>
)

export default IndexPage
