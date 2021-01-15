import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageWrapper } from "./style"
import Masonry from "react-masonry-component"

function PhotoMasonry() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    let src = image.node.childImageSharp.fluid
    let width = 4
    let height = 6
    photosArr.push({ src, width, height })
  })
  Photos.photosWide.edges.forEach(image => {
    let src = image.node.childImageSharp.fluid
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

  // test below
  // function handleClick(index) {
  //   setCurrentIndex(currentIndex === index)
  // }

  const childElements = Images.map((src, index) => {
    return (
      <ImageWrapper key={index} onClick={() => setCurrentIndex(index)}>
        <Img fluid={src.src} alt="masonry image" />
      </ImageWrapper>
    )
  })

  return (
    <Wrapper>
      <Masonry
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        style={{ margin: `0 auto` }}
      >
        {childElements}
      </Masonry>
    </Wrapper>
  )
}

export default PhotoMasonry
