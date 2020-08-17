import React from "react"
import { Layout } from "../components/common/"
import { SEO } from "../components/SEO"

import { LightboxGallery } from "../components/photo/"

const PhotosPage = () => (
  <Layout>
    <SEO title="Photos" />
    <LightboxGallery />
  </Layout>
)

export default PhotosPage
