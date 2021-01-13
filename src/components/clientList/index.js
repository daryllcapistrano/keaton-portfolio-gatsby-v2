import React from "react"
import { Wrapper, InnerWrapper } from "./style"

const ClientList = () => {
  const clients = [
    "Nike",
    "Adidas",
    "Prana",
    "Chrome Industries",
    "Poler",
    "Timberline Lodge",
    "Alpental",
    "The Summit at Snoqualmie",
    "Spy Optics",
    "Independent Trucks",
    "OJ Wheels",
    "Creature Skateboards",
    "Bronson Bearings",
    "Mob Grip",
    "Slime Balls",
    "NHS inc.",
    "Slash Snowboards",
    "Bonfire Outerwear",
    "WornPath",
    "Bitters",
  ]

  return (
    <Wrapper>
      <InnerWrapper>
        {clients.map((client, index) => (
          <p key={index}>{client}</p>
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default ClientList
