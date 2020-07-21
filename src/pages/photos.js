import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

import LightboxGallery from "../components/photo/LightboxGallery"

const PhotosPage = () => (
  <Layout>
    <SEO title="PhotosPage" />
    <LightboxGallery />
  </Layout>
)

export default PhotosPage
