import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import styled from "styled-components"

export const StyledGrid = styled(Grid)`
  @media screen and (min-width: 2560px) {
    padding-top: 80px;
  }
  padding: 40px 10px;
`
export const StyledCard = styled(Card)`
  position: relative;
  border-radius: 0 !important;
`
export const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`
export const Text = styled.div`
  color: #ffffff;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 30px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.57);
  width: 80%;
  position: absolute;
  padding-bottom: 25px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
  ${"" /* @media screen and (max-width: 1280px) {
    font-size: 20px;
    padding-bottom: 15px;
  } */}
  @media screen and (max-width: 960px) {
    font-size: 16px;
    text-shadow: 1px 1px 1.5px rgba(0, 0, 0, 0.57);
    padding-bottom: 10px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    text-shadow: 1px 1px 1.5px rgba(0, 0, 0, 0.57);
    padding-bottom: 10px;
  }
`
