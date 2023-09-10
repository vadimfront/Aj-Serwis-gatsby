export interface IMenuItem {
  uri: string
  id: string
  label: string
}

export interface IMenuNode {
  menuItems: {
    nodes: IMenuItem[]
  }
}

export interface IAllWpMenu {
  nodes: IMenuNode[]
}

export interface IHeaderProps {
  menu: IAllWpMenu
}
