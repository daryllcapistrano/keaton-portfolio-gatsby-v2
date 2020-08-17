import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/SEO"

import { VideoThumbnails } from "../components/video/VideoThumbnails"

const IndexPage = () => (
  <Layout>
    <SEO title="Videos" />
    <VideoThumbnails />
  </Layout>
)

export default IndexPage
