import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./burgerStyles.css"
import { MenuLink } from "./styles"

const BurgerMenu = () => {
  return (
    <Menu right pageWrapId={"page-wrap"}>
      <MenuLink to="/" activeStyle={{ color: `#bdc3c7` }}>
        videos
      </MenuLink>
      <MenuLink to="/photos" activeStyle={{ color: `#bdc3c7` }}>
        photos
      </MenuLink>
      <MenuLink to="/clients" activeStyle={{ color: `#bdc3c7` }}>
        clients
      </MenuLink>
      <MenuLink to="/contact" activeStyle={{ color: `#bdc3c7` }}>
        contact
      </MenuLink>
    </Menu>
  )
}

export default BurgerMenu
