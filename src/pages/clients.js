import React from "react"
import { Layout } from "../components/common/"
import { SEO } from "../components/SEO"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 40px 20px;
  margin: auto;
  text-align: center;
  font-weight: 400;
  font-size: 0.75em;
`

const ClientsPage = () => (
  <Layout>
    <SEO title="Clients" />
    <Wrapper>
      <div>Nike</div>
      <hr />
      <div>Adidas</div>
      <hr />
      <div>Prana</div>
      <hr />
      <div>Chrome Industries</div>
      <hr />
      <div>Poler</div>
      <hr />
      <div>Timberline Lodge</div>
      <hr />
      <div>Alpental</div>
      <hr />
      <div>The Summit at Snoqualmie</div>
      <hr />
      <div>Spy Optics</div>
      <hr />
      <div>Independent Trucks</div>
      <hr />
      <div>OJ Wheels</div>
      <hr />
      <div>Creature Skateboards</div>
      <hr />
      <div>Bronson Bearings</div>
      <hr />
      <div>Mob Grip</div>
      <hr />
      <div>Slime Balls</div>
      <hr />
      <div>NHS inc.</div>
      <hr />
      <div>Slash Snowboards</div>
      <hr />
      <div>Bonfire Outerwear</div>
      <hr />
      <div>WornPath</div>
      <hr />
      <div>Bitters</div>
      <hr />
    </Wrapper>
  </Layout>
)

export default ClientsPage
