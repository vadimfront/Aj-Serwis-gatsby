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
import { theme } from "./src/common/theme"
import { LangProvider } from "./src/context/LangProvider"

export function wrapPageElement({ element, props }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <LangProvider>
          <Layout {...props}>{element}</Layout>
        </LangProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
