import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 3em 2.75em;
  @media (min-width: 688px) {
    grid-template-columns: 1fr 1fr;
    margin: 3em 4em;
  }
  @media (min-width: 992px) {
    margin: 3em 8em;
  }
  @media (min-width: 1312px) {
    margin: 6em 12em;
  }
`
export const ImageWrapper = styled.div`
  width: 100%;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  @media (min-width: 688px) {
    margin-top: 0;
    margin-left: 4em;
  }
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
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: #ffffff;
    color: #000000;
    transition: all 200ms;
  }
  p {
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 0 1em;
  }
`
