import styled from "styled-components"

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1.5em;
  @media (min-width: 688px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
  }
`

export const GridItem = styled.div`
  @media (min-width: 688px) {
    padding: 2em;
  }
`

export const ThumbnailText = styled.div`
  margin: 0.25em 0 0;
  text-align: center;
  font-weight: 400;
`
