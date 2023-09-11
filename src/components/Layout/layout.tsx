import React, { ReactNode } from "react"
import { Slice } from "gatsby"
import { useLangContext } from "../../context/LangProvider"

interface LayoutProps {
  children: ReactNode
  pageContext: any
}

const Layout = ({ children }: LayoutProps) => {
  const { selectedValue } = useLangContext()

  return (
    <>
      {selectedValue === "UK" && <Slice alias="header_uk" />}
      {selectedValue === "EN" && <Slice alias="header_en" />}
      {selectedValue === "PL" && <Slice alias="header_pl" />}

      <main>{children}</main>

      {selectedValue === "UK" && <Slice alias="footer_uk" />}
      {selectedValue === "EN" && <Slice alias="footer_en" />}
      {selectedValue === "PL" && <Slice alias="footer_pl" />}
    </>
  )
}

export default Layout
