import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/seo"

import Gallery from "../components/LightboxGallery"

const PhotosPage = () => (
  <Layout>
    <SEO title="PhotosPage" />
    <Gallery />
  </Layout>
)

export default PhotosPage
