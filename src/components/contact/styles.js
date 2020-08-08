import styled from "styled-components"
import Card from "@material-ui/core/Card"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"

// Contact Form Styles
export const Wrapper = styled(Container)`
  padding: 40px 20px;
`
export const ContactHeader = styled.h3`
  text-align: center;
  font-size: 1em;
`
export const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-weight: 200;
`
export const InfoContainer = styled(Container)`
  padding-left: 7px;
`
export const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const ListItem = styled.li``

export const FormWrapper = styled.form`
  border-radius: 0;
`
export const ButtonWrapper = styled.div`
  text-align: center;
  padding: 0.5em;
`
export const FormButton = styled.button`
  background-color: #373a47;
  border: none;
  color: #f0f0f0;
  padding: 7px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
export const TextFieldWrapper = styled(Container)`
  padding: 0 !important;
`
export const StyledTextField = styled(TextField)`
  margin: 5px !important;
`
export const Response = styled.p`
  margin: 5px;
  text-align: center;
`

// Contact Card Styles
export const ImageWrapper = styled(Container)`
  padding: 24px;
`
export const StyledCard = styled(Card)`
  border-radius: 0;
`
