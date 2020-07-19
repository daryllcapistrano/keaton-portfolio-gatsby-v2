import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClientsPage = () => (
  <Layout>
    <SEO title="ClientsPage" />
    <div
      style={{
        paddingTop: `2rem`,
        margin: `auto`,
        textAlign: `center`,
        fontFamily: `Poppins, sans-serif`,
        fontWeight: 400,
        fontSize: `1.5rem`,
      }}
    >
      <div>Nike</div>
      <div>Adidas</div>
      <div>Prana</div>
      <div>Chrome Industries</div>
      <div>Poler</div>
      <div>Timberline Lodge</div>
      <div>Alpental</div>
      <div>The Summit at Snoqualmie</div>
      <div>Spy Optics</div>
      <div>Independent Trucks</div>
      <div>OJ Wheels</div>
      <div>Bronson Bearings</div>
      <div>Mob Grip</div>
      <div>Slime Balls</div>
      <div>NHS inc.</div>
      <div>Slash Snowboards</div>
      <div>Bonfire Outerwear</div>
      <div>Worn Path</div>
      <div>Bitters</div>
      <div>Green Dream</div>
    </div>
  </Layout>
)

export default ClientsPage
