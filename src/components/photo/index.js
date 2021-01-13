import React, { useState, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Wrapper } from "./style"

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  // * Style the carousel
  const carouselStyles = {
    view: () => ({
      height: `100vh`,
      width: `100%`,
    }),
  }

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const Photos = useStaticQuery(graphql`
    query {
      photos: allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      photosWide: allFile(
        filter: { sourceInstanceName: { eq: "photos-wide" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // * Push GraphQL query into seperate arrays
  const photosArr = []
  const photosWideArr = []

  Photos.photos.edges.forEach(image => {
    let src = image.node.childImageSharp.fluid.src
    let width = 4
    let height = 6
    photosArr.push({ src, width, height })
  })

  Photos.photosWide.edges.forEach(image => {
    let src = image.node.childImageSharp.fluid.src
    let width = 6
    let height = 4
    photosWideArr.push({ src, width, height })
  })

  // * Merge the two arrays alternatively into new array for use in Gallery
  const newPhotoSources = []
  let i,
    l = Math.min(photosArr.length, photosWideArr.length)

  for (i = 0; i < l; i++) {
    newPhotoSources.push(photosArr[i], photosWideArr[i])
  }
  newPhotoSources.push(...photosArr.slice(l), ...photosWideArr.slice(l))

  return (
    <Wrapper>
      <Gallery
        photos={newPhotoSources}
        onClick={openLightbox}
        direction={"row"}
        margin={2}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              styles={carouselStyles}
              currentIndex={currentImage}
              views={newPhotoSources.map(x => ({
                ...x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Wrapper>
  )
}

export default PhotoGallery
