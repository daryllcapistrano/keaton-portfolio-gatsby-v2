import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 3em 1.5em;
  @media (min-width: 688px) {
    margin: 1.5em 4em;
  }
  @media (min-width: 992px) {
    margin: 1.5em 8em;
  }
  @media (min-width: 1312px) {
    margin: 1.5em 12em;
  }
`

export const ImageWrapper = styled.div`
  width: 50%;
  padding: 0.15em;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 0.5;
  }
  @media (min-width: 688px) {
    width: 33%;
  }
`
