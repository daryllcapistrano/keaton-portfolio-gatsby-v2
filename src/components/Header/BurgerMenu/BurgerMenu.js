import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./burgerStyles.css"

import styled from "styled-components"
import { Link } from "gatsby"

const MenuLink = styled(Link)`
  color: #000000;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5em;
  margin: 0.5em;
`

const BurgerMenu = () => {
  return (
    <Menu right pageWrapId={"page-wrap"}>
      <MenuLink
        to="/"
        activeStyle={{ color: `#bdc3c7`, border: `2px #bdc3c7 solid` }}
      >
        videos
      </MenuLink>
      <MenuLink
        to="/photos/"
        activeStyle={{ color: `#bdc3c7`, border: `2px #bdc3c7 solid` }}
      >
        photos
      </MenuLink>
      <MenuLink
        to="/clients/"
        activeStyle={{ color: `#bdc3c7`, border: `2px #bdc3c7 solid` }}
      >
        clients
      </MenuLink>
      <MenuLink
        to="/contact/"
        activeStyle={{ color: `#bdc3c7`, border: `2px #bdc3c7 solid` }}
      >
        contact
      </MenuLink>
    </Menu>
  )
}

export default BurgerMenu
