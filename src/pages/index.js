import React from "react"

import Layout from "../components/common/layout"
import SEO from "../components/seo"

import { VideoThumbnails } from "../components/VideoThumbnails"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoThumbnails />
  </Layout>
)

export default IndexPage
