import React from "react"
import Layout from "../components/common/layout"
import PhotoMasonry from "../components/photo/"
import SEO from "../components/SEO"

const PhotosPage = () => (
  <Layout>
    <SEO title="Photos" />

    <PhotoMasonry />
  </Layout>
)

export default PhotosPage
