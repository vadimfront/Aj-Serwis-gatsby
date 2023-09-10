import React from "react"
import LangSelect from "../../LangSelect/LangSelect"
import Navigation from "../../Navigation/Navigation"
import Logo from "../../Logo/Logo"

import { GiHamburgerMenu } from "react-icons/gi"

import { BurgerButton, StyledAppBar, StyledNavWraper } from "./AppBar.styled"
import { useAppContext } from "../../../context/AppContext"
import {
  IAllWpMenu,
  IMenuItem,
  IMenuNode,
} from "../../../interfaces/headerInterface"

interface AppBarProps {
  logo: string
  theme: {
    colors: { accentColor: string }
  }
  menu: IMenuNode
}

const AppBar: React.FC<AppBarProps> = ({ theme, logo, menu }) => {
  const { openModal, isOpenModal } = useAppContext()

  return (
    <StyledAppBar>
      <Logo logoUrl={logo} loc="header" size="md" />

      <StyledNavWraper>
        <Navigation flexDirection="row" menu={menu} />

        <LangSelect />
      </StyledNavWraper>

      <BurgerButton onClick={openModal} type="button">
        {!isOpenModal && (
          <GiHamburgerMenu
            size={30}
            style={{ color: theme.colors.accentColor }}
          />
        )}
      </BurgerButton>
    </StyledAppBar>
  )
}

export default AppBar
