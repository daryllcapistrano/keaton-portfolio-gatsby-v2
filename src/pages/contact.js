import React from "react"
import { Layout } from "../components/common/"
import SEO from "../components/SEO"

import { ContactCard } from "../components/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactCard />
  </Layout>
)

export default ContactPage
