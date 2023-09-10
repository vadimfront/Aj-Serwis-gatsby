import React, { ReactNode } from "react"
import { AppProvider } from "../../context/AppProvider"
import { LangProvider, useLangContext } from "../../context/LangProvider"
import { Slice } from "gatsby"
import { ThemeProvider } from "@emotion/react"
import { theme } from "../../common/theme"
import { ApolloProvider } from "@apollo/client"
import client from "../../gatsby-plugin-apollo/client"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { selectedValue } = useLangContext()
  console.log(selectedValue)
  return (
    <ApolloProvider client={client}>
      <LangProvider>
        <AppProvider>
          <ThemeProvider theme={theme}>
            {selectedValue === "UK" && <Slice alias="header--uk" />}
            {selectedValue === "EN" && <Slice alias="header--en" />}
            {selectedValue === "PL" && <Slice alias="header--pl" />}
            <main>{children}</main>

            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
              {` `}
              And <a href="https://wordpress.org/">WordPress</a>
            </footer>
          </ThemeProvider>
        </AppProvider>
      </LangProvider>
    </ApolloProvider>
  )
}

export default Layout
