import React from "react"
import Button from "@material-ui/core/Button"

import { GrInstagram, GrSend, GrPhone } from "react-icons/gr"
import { ContactHeader, InfoContainer } from "./styles"

const ContactLinks = () => {
  return (
    <>
      <ContactHeader>Contact Me</ContactHeader>
      <InfoContainer>
        <Button href="tel:971.347.6704" startIcon={<GrPhone />} size="medium">
          <small>phone</small>
        </Button>
        <Button
          href="mailto:keatonrodgersmedia@gmail.com"
          startIcon={<GrSend />}
          size="medium"
        >
          <small>email</small>
        </Button>
        <Button
          href="https://www.instagram.com/keatonrodgers/"
          startIcon={<GrInstagram />}
          size="medium"
        >
          <small>instagram</small>
        </Button>
      </InfoContainer>
    </>
  )
}

export default ContactLinks
