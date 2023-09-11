import React from "react"

import { StyledImg, StyledLogo, StyledLogoText } from "./Logo.styled"
import { graphql, useStaticQuery } from "gatsby"

interface LogoProps {
  logoUrl: string
  loc: "header" | "footer"
  size: "lg" | "md"
}

const Logo: React.FC<LogoProps> = ({ logoUrl, loc, size }) => {
  const data = useStaticQuery(graphql`
    query {
      allWp {
        nodes {
          siteLogo {
            sourceUrl
            altText
          }
        }
      }
    }
  `)

  const logo = data.allWp.nodes[0].siteLogo

  return (
    <StyledLogo to="/">
      <StyledImg
        src={logo.sourceUrl}
        alt="AJ SERWIS Logo"
        size={size}
        loc={loc}
      />
      <StyledLogoText loc={loc} size={size}>
        <span>AJ</span>
        <span>SERWIS</span>
      </StyledLogoText>
    </StyledLogo>
  )
}

export default Logo
