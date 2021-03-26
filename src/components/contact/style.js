import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media (min-width: 688px) {
    grid-template-columns: 1fr 1fr;
  }
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
  &:hover {
    background-color: #ffffff;
    color: #000000;
    transition: all 200ms;
  }
  p {
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 0 1em;
  }
`
