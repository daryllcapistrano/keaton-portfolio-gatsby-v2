import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/SEO"
import ClientList from "../components/clientList"

const ClientsPage = () => (
  <Layout>
    <SEO title="Clients" />
    <ClientList />
  </Layout>
)

export default ClientsPage
