import React, { useState, useCallback } from "react"
import styled from "styled-components"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { photoSources } from "../data/photoSources"

const carouselStyles = {
  view: () => ({
    height: `100vh`,
    width: `100%`,
    textAlign: `center`,
    paddingTop: `5vh`,
    paddingBottom: `5vh`,
  }),
}

const Wrapper = styled.div`
  padding: 20px;
`

function PhotoGallery() {
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
        photos={photoSources}
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
              views={photoSources.map(x => ({
                ...x,
                srcset: x.srcSet,
                // caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Wrapper>
  )
}

export default PhotoGallery
