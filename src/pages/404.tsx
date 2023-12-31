import * as React from "react"
import { graphql } from "gatsby"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location?: any
}
const NotFoundPage = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}
export default NotFoundPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
