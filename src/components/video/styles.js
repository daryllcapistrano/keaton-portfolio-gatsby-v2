import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import styled from "styled-components"

export const StyledGrid = styled(Grid)`
  padding: 20px;
`
export const StyledCard = styled(Card)`
  position: relative;
  border-radius: 0;
`
export const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  padding-top: 100%;
`
export const Text = styled.div`
  color: white;
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
`
