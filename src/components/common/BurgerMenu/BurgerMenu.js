import React from "react"
import { slide as Menu } from "react-burger-menu"
import "./burgerStyles.css"
import { MenuLink } from "./styles"

const BurgerMenu = () => {
  return (
    <Menu right pageWrapId={"page-wrap"}>
      <MenuLink to="/">videos</MenuLink>
      <MenuLink to="/photos">photos</MenuLink>
      <MenuLink to="/clients">clients</MenuLink>
      <MenuLink to="/contact">contact</MenuLink>
    </Menu>
  )
}

export default BurgerMenu
