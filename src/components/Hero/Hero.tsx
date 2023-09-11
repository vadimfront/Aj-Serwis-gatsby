import React from "react"
import { useSpring, animated } from "@react-spring/web"
import Button from "../Button/Button"
import { HeroTitle, HeroUnderTitle, Overlay } from "./Hero.styled"
import { theme } from "../../common/theme"
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { IHero, IHeroProps } from "../../interfaces/heroInterface"

const Hero = ({ hero }: IHeroProps) => {
  const { heroTitle, heroShortDescription, heroTextButton, heroBackground } =
    hero
  const titleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
  })

  const underTitleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
  })

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 600,
  })

  const handleButtonClick = () => {
    navigate("/vacancies")
  }

  return (
    <Overlay sourceUrl={heroBackground.sourceUrl}>
      <animated.div style={titleSpring}>
        <HeroTitle>{heroTitle}</HeroTitle>
      </animated.div>
      <animated.div style={underTitleSpring}>
        <HeroUnderTitle>{heroShortDescription}</HeroUnderTitle>
      </animated.div>
      <animated.div style={buttonSpring}>
        <Button variant="hero" type="button" onClick={handleButtonClick}>
          {heroTextButton}
        </Button>
      </animated.div>
      <SocialMediaLink />
    </Overlay>
  )
}

export default Hero
