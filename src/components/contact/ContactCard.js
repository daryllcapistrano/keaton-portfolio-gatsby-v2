import React from "react"
import Grid from "@material-ui/core/Grid"

import ContactImage from "./ContactImage"
import ContactLinks from "./ContactLinks"

import { Wrapper } from "./styles"

export default function ContactCard() {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <ContactImage />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <ContactLinks />
        </Grid>
      </Grid>
    </Wrapper>
  )
}
