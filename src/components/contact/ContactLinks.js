import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import { GrInstagram, GrSend, GrPhone } from "react-icons/gr"
import { ContactHeader, InfoContainer } from "./styles"

const ContactLinks = () => {
  return (
    <>
      <ContactHeader>Contact Me</ContactHeader>
      <InfoContainer>
        <ButtonGroup orientation="vertical">
          <Button href="tel:971.347.6704" startIcon={<GrPhone />} size="large">
            Phone
          </Button>
          <Button
            href="mailto:keatonrodgersmedia@gmail.com"
            startIcon={<GrSend />}
            size="large"
          >
            Email
          </Button>
          <Button
            href="https://www.instagram.com/keatonrodgers/"
            startIcon={<GrInstagram />}
            size="large"
          >
            Instagram
          </Button>
        </ButtonGroup>
      </InfoContainer>
    </>
  )
}

export default ContactLinks
