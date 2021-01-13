import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  font-weight: 500;
`

const ClientsPage = () => (
  <Layout>
    <SEO title="Clients" />
    <Wrapper>
      <p>Nike</p>

      <p>Adidas</p>

      <p>Prana</p>

      <p>Chrome Industries</p>

      <p>Poler</p>

      <p>Timberline Lodge</p>

      <p>Alpental</p>

      <p>The Summit at Snoqualmie</p>

      <p>Spy Optics</p>

      <p>Independent Trucks</p>

      <p>OJ Wheels</p>

      <p>Creature Skateboards</p>

      <p>Bronson Bearings</p>

      <p>Mob Grip</p>

      <p>Slime Balls</p>

      <p>NHS inc.</p>

      <p>Slash Snowboards</p>

      <p>Bonfire Outerwear</p>

      <p>WornPath</p>

      <p>Bitters</p>
    </Wrapper>
  </Layout>
)

export default ClientsPage
