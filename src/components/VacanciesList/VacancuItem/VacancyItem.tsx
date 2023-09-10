import { IVacancieData } from "../../../common/vacanciesArr"
import {
  StyledGradientWrap,
  StyledImgGradient,
  StyledTextContainer,
  StyledVacancyItem,
  StyledVacancyItemImg,
  StyledVacancyLink,
  StyledVacancyJobTitle,
  StyledVacancyText,
  StyledVacancyTitle,
} from "./VacancyItem.styled"
import Button from "../../Button/Button"
import { FaLocationDot } from "react-icons/fa6"
import { BsFillPersonFill } from "react-icons/bs"
import { GiCash } from "react-icons/gi"
import React from "react"

interface IVacancyItem {
  vacancy: any
}

const VacancyItem: React.FC<IVacancyItem> = ({
  vacancy: { id, title, uri, featuredImage, vacanciesPreview },
}) => {
  const { sourceUrl, altText } = featuredImage.node
  const { city, position, salary } = vacanciesPreview
  return (
    <StyledVacancyItem>
      <StyledVacancyLink to={uri} state={{ from: location }}>
        <StyledGradientWrap>
          <StyledVacancyItemImg src={sourceUrl} alt={altText} />
          <StyledImgGradient>
            <StyledVacancyJobTitle>{title}</StyledVacancyJobTitle>
          </StyledImgGradient>
        </StyledGradientWrap>

        <StyledTextContainer>
          <StyledVacancyText>
            <FaLocationDot size={24} color="#c3a069" />
            <StyledVacancyTitle>City:</StyledVacancyTitle> {city}
          </StyledVacancyText>
          <StyledVacancyText>
            <BsFillPersonFill size={24} color="#c3a069" />
            <StyledVacancyTitle>Position:</StyledVacancyTitle> {position}
          </StyledVacancyText>
          <StyledVacancyText>
            <GiCash size={24} color="#c3a069" />
            <StyledVacancyTitle>Salary:</StyledVacancyTitle> {salary}
          </StyledVacancyText>
        </StyledTextContainer>
      </StyledVacancyLink>

      <StyledVacancyLink to={uri} state={{ from: location }}>
        <Button
          variant={"card"}
          type={"button"}
          onClick={() => {
            console.log("Navigate Vacancy Details")
          }}
        >
          More Info
        </Button>
      </StyledVacancyLink>
    </StyledVacancyItem>
  )
}

export default VacancyItem
