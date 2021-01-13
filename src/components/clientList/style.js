import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 1.5em 2em;

  @media (min-width: 688px) {
    margin: 2em 4em;
  }
  @media (min-width: 992px) {
    margin: 2em 8em;
  }
  @media (min-width: 1312px) {
    margin: 2em 12em;
  }
`

export const InnerWrapper = styled.div`
  text-align: center;
  height: 100vh;
  p {
    font-weight: 900;
  }
`
