import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero/Hero"
import { IHomeProps } from "../interfaces/homeInterface"
import AboutUs from "../components/AboutUs/AboutUs"
import VacanciesSlider from "../components/VacanciesSlider/VacanciesSlider"
import ContactUs from "../components/ContactUs/ContactUs"

const HomePage = ({ data }: IHomeProps) => {
  const {
    wpPage: { hero, aboutUs },
    allWpVacancies,
  } = data
  console.log(allWpVacancies)
  return (
    <>
      <Hero hero={hero} />
      {aboutUs.title && <AboutUs aboutUs={aboutUs} />}

      {allWpVacancies.nodes.length && (
        <VacanciesSlider title="Vacancies" vacancies={allWpVacancies.nodes} />
      )}
    </>
  )
}

export default HomePage

export const query = graphql`
  query ($code: WpLanguageCodeEnum) {
    wpPage(language: { code: { eq: $code } }, isFrontPage: { eq: true }) {
      hero {
        heroTitle
        heroTextButton
        heroShortDescription
        heroBackground {
          sourceUrl
        }
      }
      aboutUs {
        title
        fieldGroupName
        description
        image {
          altText
          sourceUrl
        }
      }
    }
    allWpVacancies(filter: { language: { code: { eq: $code } } }) {
      nodes {
        uri
        title
        id
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        vacanciesPreview {
          salary
          position
          fieldGroupName
          city
        }
      }
    }
  }
`
