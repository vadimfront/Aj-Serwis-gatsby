import React, { useState, useEffect } from "react"
import {
  CustomSelectContainer,
  CustomSelectImage,
  Select,
  SelectOption,
} from "./LangSelect.styled"

import { dataLang } from "../../common/dataLang"
import { navigate } from "gatsby"
import { useLangContext } from "../../context/LangProvider"

const LangSelect = () => {
  const { setSelectedValue, selectedValue } = useLangContext()

  useEffect(() => {
    const str = location.pathname.replace(/^(\/(en|pl))?/, "")
    const langPath =
      selectedValue !== "UK" ? `/${selectedValue.toLowerCase()}` : "/"
    const path = langPath === "/" ? str : `${langPath}${str}`

    if (location.pathname !== path) {
      navigate(path)
    }
  }, [selectedValue])

  const selectedImage = dataLang.find(lang => lang.key === selectedValue)?.value

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target

    setSelectedValue(value)
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLang", value)
    }
  }

  return (
    <CustomSelectContainer>
      <CustomSelectImage
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      ></CustomSelectImage>
      <Select value={selectedValue} onChange={handleSelectChange}>
        {dataLang.map(lang => (
          <SelectOption key={lang.key} value={lang.key}>
            {lang.key}
          </SelectOption>
        ))}
      </Select>
    </CustomSelectContainer>
  )
}

export default LangSelect
