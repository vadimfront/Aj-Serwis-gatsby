import { LinkItem, NavListItem, StyledNavList } from "./Navigation.styled"
import { useAppContext } from "../../context/AppContext"
import React from "react"
import { Link } from "gatsby"
import { IMenuItem, IMenuNode } from "../../interfaces/headerInterface"

interface NavigationProps {
  flexDirection: "row" | "column"
  //menu: IMenuNode
  menu: any
}

const Navigation: React.FC<NavigationProps> = ({ flexDirection, menu }) => {
  const { closeModal } = useAppContext()
  return (
    <nav>
      <StyledNavList flexDirection={flexDirection}>
        {menu.map(({ id, uri, label }: IMenuItem) => (
          <NavListItem key={id}>
            <LinkItem onClick={closeModal} to={uri} activeClassName="active">
              {label}
            </LinkItem>
          </NavListItem>
        ))}
      </StyledNavList>
    </nav>
  )
}

export default Navigation
