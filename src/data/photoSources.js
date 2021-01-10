// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const PhotoSources = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allFile(filter: { sourceInstanceName: { eq: "contact-image" } }) {
//         edges {
//           node {
//             id
//             childrenImageSharp {
//               fluid {
//                 base64
//                 tracedSVG
//                 srcWebp
//                 srcSetWebp
//                 originalImg
//                 originalName
//                 presentationWidth
//                 presentationHeight
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const photos = [];

//   data.allFile.forEach(image => {
//     let imgObj = {};

//     imgObj.original=image.node.childrenImageSharp
//   })

//   return ()
// }

// export default PhotoSources

export const photoSources = [
  {
    src: "/static/38f1e523c6196bfe0073a97fc5329157/Poler2- thumbnail.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/da3171f5fadf6c89d86ff96fcc8ad87d/Bit_10.png",
    width: 4,
    height: 6,
  },
  {
    src:
      "/static/618a59f849a75e3cc17d148115e45cc4/surf through legs edit-resize-thumbnail.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/e9e49a121b72cb82adc1a16466abadcb/amonkey5.png",
    width: 6,
    height: 4,
  },
  {
    src: "/static/6667f684e775a2b25be04ccf68d8c266/chad air.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/11347bf6b6556972c728729e77124a4c/artsy-1-thumbnail.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/e4dbac034e9e4d5f2ef61630373f75fe/james wallie resize.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/cf5d282831351a4001b0be39be0c233c/poler12.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/8bdd7c928fff7321b7a5c72460d56aed/poler13.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/d46d5f1e877605fc7d51357923139d47/ben.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/d40df793a46176235ef2249a78362b37/MC-2-thumbnail.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/c4d44021d494ea9ae9b8f5a4133bd8ac/am-1-resize.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/d808a422020c8976887db9a53c75de49/ale_artsy_resize.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/03a93d70cbdfcbbf62f5a7292e970661/Bit_17.png",
    width: 6,
    height: 4,
  },
  {
    src: "/static/a90c8ed404060b8f4ee1c1191cf1f92c/av-1-resize: crop2.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/4efbf48a1a53d12ba274adca70778df3/asf-1-resize.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/65212d5857a8bb7ea4d758471ad9b937/poler14.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/1f18b0cf5b3a3c68b380b5f05ee74c62/poler17.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/f569fea6c295615a51a4adeb61998d90/bride.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/b0bcc7b9b5d9b369f474ede2d85c1507/Bit_4.png",
    width: 4,
    height: 6,
  },
  {
    src: "/static/6f7eb1983651854d2618043edf354a1d/Bit_9.png",
    width: 4,
    height: 6,
  },
  {
    src: "/static/e570c5b40b94b2ef57c8b5d23d4da3aa/amonkey6.png",
    width: 4,
    height: 6,
  },
  {
    src: "/static/9e95d259ecc7470132b3d84e3f5709ca/bobbieollie3_R.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/512bc73ac46c5325ea78c40806ed9bba/bali1.png",
    width: 6,
    height: 4,
  },
  {
    src: "/static/ddd74023d4cb9e6299c016146edf6ff2/jordanfeeb.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/aa6f9b461ab41234a7939ef7c80d159a/mountain artsy-8.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/05d5c61357c0087eed14e6e44e48a35c/nick boneless crop.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/541be7d10b11f31d18acb627af0c4985/poler22.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/11415e3ea7554d9a41fb7b24910308a0/joshfaceBW.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/f6de5606be6c58ea4f0b6fcf447426e3/cassie.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/1ca0ba4d25b43efe90630487884df1c2/amonkey2crop.png",
    width: 4,
    height: 6,
  },
  {
    src: "/static/b016c0cb65d31a7670683363d931d965/Bit_16.png",
    width: 4,
    height: 6,
  },
  {
    src: "/static/d4c9146fa3e229c7c62d1214460a12ef/mom1.jpg",
    width: 4,
    height: 6,
  },
  {
    src: "/static/8cad8bb1dc99beeaa52ed4ebd877a41c/qualmdoubles-1.jpg",
    width: 6,
    height: 4,
  },
  {
    src: "/static/108843f54e373712bf76c6bfd2b632fc/amonkey4.png",
    width: 4,
    height: 6,
  },
  {
    src: "/static/52624d26e7feabcf28d281b1c284724b/poler3.jpg",
    width: 4,
    height: 6,
  },
]
