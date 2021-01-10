import React from "react"
import { Layout } from "../components/common/"
import SEO from "../components/SEO"

import PhotoGallery from "../components/photo"

const PhotosPage = () => (
  <Layout>
    <SEO title="Photos" />
    <PhotoGallery />
  </Layout>
)

export default PhotosPage
