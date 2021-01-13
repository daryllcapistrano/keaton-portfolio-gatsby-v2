import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Gallery from "react-photo-gallery"
// import Carousel, { Modal, ModalGateway } from "react-images"
import { Wrapper } from "./style"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

function PhotoCarousel() {
  // * Begin Image Query & Manipulation
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
  //  Push GraphQL query into seperate arrays
  const photosArr = []
  const photosWideArr = []
  const Images = []

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
  //  Merge the two arrays alternatively into new array for use in Gallery
  let i,
    l = Math.min(photosArr.length, photosWideArr.length)

  for (i = 0; i < l; i++) {
    Images.push(photosArr[i], photosWideArr[i])
  }

  Images.push(...photosArr.slice(l), ...photosWideArr.slice(l))

  // * End Image Query & Manipulation

  return (
    <Wrapper>
      {/* <Gallery
        photos={Images}
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
              views={Images.map(x => ({
                ...x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
      <Carousel>
        {Images.map(src => (
          <div>
            <img src={src.src} />
          </div>
        ))}
      </Carousel>
    </Wrapper>
  )
}

export default PhotoCarousel
