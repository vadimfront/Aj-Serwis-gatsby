import React, { useEffect, useState } from "react"
import AppBar from "./AppBar/AppBar"
import TopBar from "./TopBar/TopBar"
import MobileMenu from "./MobileMneu/MobileMenu"
import { theme } from "../../common/theme"
import { StyledHeader } from "./Header.styled"
import { graphql } from "gatsby"
import { AppProvider } from "../../context/AppProvider"
import { LangProvider } from "../../context/LangProvider"

const Header = ({ data }: any) => {
  const navList = data.allWpMenu.nodes[0].menuItems.nodes

  const [scrolling, setScrolling] = useState(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)
  const [headerStyle, setHeaderStyle] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const scrollingDown =
        prevScrollPosition < currentScrollPosition &&
        currentScrollPosition > 100

      setScrolling(scrollingDown)
      setPrevScrollPosition(currentScrollPosition)

      const headerStyleAfterScroll = {
        transition: "transform 1s ease-in-out",
        transform: scrollingDown ? "translateY(-100%)" : "translateY(0)",
      }

      setHeaderStyle(headerStyleAfterScroll)
    }

    const cleanupScroll = () => {
      window.removeEventListener("scroll", handleScroll)
    }

    window.addEventListener("scroll", handleScroll)

    return cleanupScroll
  }, [prevScrollPosition, scrolling])

  return (
    <AppProvider>
      <LangProvider>
        <StyledHeader style={headerStyle}>
          <TopBar />
          <AppBar theme={theme} menu={navList} logo={""} />
          <MobileMenu theme={theme} />
        </StyledHeader>
      </LangProvider>
    </AppProvider>
  )
}

export const query = graphql`
  query ($lang: String) {
    allWpMenu(filter: { name: { eq: $lang } }) {
      nodes {
        menuItems {
          nodes {
            uri
            id
            label
          }
        }
      }
    }
  }
`

export default Header
