import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react"

interface LangContextProps {
  selectedValue: string
  setSelectedValue: any
}

const LangContext = createContext<LangContextProps | undefined>(undefined)

export const LangProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("UK")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialLang = localStorage.getItem("selectedLang") || "UK"
      setSelectedValue(initialLang)
    }
    console.log("selectedValue" + selectedValue)
  }, [selectedValue])

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
