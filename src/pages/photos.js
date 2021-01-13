import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/SEO"

// import PhotoGallery from "../components/photo"
import PhotoCarousel from "../components/photo/photo-carousel"

const PhotosPage = () => (
  <Layout>
    <SEO title="Photos" />
    {/* <PhotoGallery /> */}
    <PhotoCarousel />
  </Layout>
)

export default PhotosPage
