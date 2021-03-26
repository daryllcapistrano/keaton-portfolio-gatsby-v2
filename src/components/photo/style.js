import styled from "styled-components"

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
