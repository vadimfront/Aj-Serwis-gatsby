import React, { ReactNode } from "react"
import { Slice } from "gatsby"
import { useLangContext } from "../../context/LangProvider"

interface LayoutProps {
  children: ReactNode
  pageContext: any
}

const Layout = ({ children }: LayoutProps) => {
  const { selectedValue, setSelectedValue } = useLangContext()
  console.log(selectedValue)
  return (
    <>
      {selectedValue === "UK" && <Slice alias="header_uk" />}
      {selectedValue === "EN" && <Slice alias="header_en" />}
      {selectedValue === "PL" && <Slice alias="header_pl" />}

      <main>{children}</main>
      {selectedValue}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </>
  )
}

export default Layout
