import React from "react"
import Layout from "./src/components/Layout/layout"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"
import { AppProvider } from "./src/context/AppProvider"
import { ThemeProvider } from "@emotion/react"
import { LangProvider } from "./src/context/LangProvider"
import { theme } from "./src/common/theme"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
export function wrapRootElement({ element }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <LangProvider>{element}</LangProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
