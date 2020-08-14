import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/SEO"

import LightboxGallery from "../components/photo/LightboxGallery"

const PhotosPage = () => (
  <Layout>
    <SEO title="Photos" />
    <LightboxGallery />
  </Layout>
)

export default PhotosPage
