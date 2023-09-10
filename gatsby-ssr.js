import React from "react"
import Layout from "./src/components/Layout/layout"
import client from "./src/gatsby-plugin-apollo/client"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"
import { ApolloProvider } from "@apollo/client"
import { LangProvider } from "./src/context/LangProvider"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
