import React, { useState, createContext, useContext, ReactNode } from "react"

interface LangContextProps {
  selectedValue: string
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>
}

const LangContext = createContext<LangContextProps | undefined>(undefined)

export const LangProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem("selectedLang") || "UK"
  )

  return (
    <LangContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error("useLangContext must be used within a LangProvider")
  }
  return context
}
