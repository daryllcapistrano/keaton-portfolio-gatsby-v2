import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr 1fr; */
  gap: 0.5em;
  margin: 1.5em 0;
  padding: 0.5em;
`
export const ImageWrapper = styled.div`
  padding: 0;
`
export const ContactHeader = styled.p`
  text-align: center;
  margin-top: 0;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`
