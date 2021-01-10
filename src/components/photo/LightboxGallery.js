import React, { useState, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Wrapper } from "./styles"

const carouselStyles = {
  view: () => ({
    height: `100vh`,
    width: `100%`,
    textAlign: `center`,
    paddingTop: `5vh`,
    paddingBottom: `5vh`,
  }),
}

function PhotoGallery() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)

  // create array to store photo objects
  const photos = []

  // assign src from GraphQl
  data.allFile.edges.forEach(image => {
    let src = image.node.publicURL
    let width = 2
    let height = 3
    photos.push({ src, width, height })
  })

  console.log(photos)

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Wrapper>
      <Gallery
        photos={photos}
        onClick={openLightbox}
        direction={"row"}
        margin={2}
        limitNodeSearch={3}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              styles={carouselStyles}
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Wrapper>
  )
}

export default PhotoGallery
