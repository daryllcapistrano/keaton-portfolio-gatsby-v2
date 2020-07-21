import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/common/seo"

import ContactCard from "../components/contact/ContactCard"

const ContactPage = () => (
  <Layout>
    <SEO title="ContactPage" />
    <ContactCard />
  </Layout>
)

export default ContactPage
