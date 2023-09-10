import React from "react"
import {
  Container,
  ImageEl,
  LeftBox,
  RightBox,
  Text,
  Title,
} from "./AboutUs.styled"
import SectionContainer from "../SectionContainer/SectionContainer"
import SectionTitle from "../SectionTitle/SectionTitle"

const AboutUs = ({ aboutUs }: any) => {
  const { title, description, image } = aboutUs
  console.log(image)
  return (
    <SectionContainer>
      <Container>
        <LeftBox>
          <SectionTitle>{title}</SectionTitle>
          <Text>{description}</Text>
        </LeftBox>
        <RightBox>
          <ImageEl src={image.sourceUrl} alt="about us" />
        </RightBox>
      </Container>
    </SectionContainer>
  )
}

export default AboutUs
