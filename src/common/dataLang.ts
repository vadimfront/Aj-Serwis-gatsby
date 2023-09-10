import ukrFlag from "../assets/png/ua.png"
import polFlag from "../assets/png/pl.png"
import engFlag from "../assets/png/eng.png"

interface LanguageData {
  key: string
  value: string
}

export const dataLang: LanguageData[] = [
  { key: "EN", value: engFlag }, //default lang
  { key: "PL", value: polFlag },
  { key: "UK", value: ukrFlag },
]
