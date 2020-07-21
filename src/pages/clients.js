import React from "react"
import Layout from "../components/common/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 2em;
  margin: auto;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 1.5em;
`

const ClientsPage = () => (
  <Layout>
    <SEO title="ClientsPage" />
    <Wrapper>
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
    </Wrapper>
  </Layout>
)

export default ClientsPage
