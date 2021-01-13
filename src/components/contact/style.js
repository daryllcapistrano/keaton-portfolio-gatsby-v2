import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 1em 2em;
  @media (min-width: 688px) {
    margin: 1em 4em;
  }
  @media (min-width: 992px) {
    margin: 1em 8em;
  }
  @media (min-width: 1312px) {
    margin: 1em 12em;
  }
`
export const ImageWrapper = styled.div`
  justify-self: center;
  width: 100%;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`

export const Button = styled.a`
  display: inline-flex;
  justify-content: space-between;
  text-decoration: none;
  background-color: #000000;
  background-clip: padding-box;
  color: #ffffff;
  margin-bottom: 0.5em;
  padding: 10px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #ffffff;
    color: #000000;
    transition: all 200ms;
  }
  p {
    text-transform: uppercase;
    margin: 0 0 0 1em;
  }
`
