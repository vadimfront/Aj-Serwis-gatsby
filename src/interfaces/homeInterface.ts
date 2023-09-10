import { IAllWpMenu } from "./headerInterface"
import { IHeroProps } from "./heroInterface"
import { IAboutUs, IAboutUsProps } from "./interfaceAboutUs"

export interface IHomeProps {
  data: {
    wpPage: IHeroProps & IAboutUsProps
    allWpMenu: IAllWpMenu
    allWpVacancies: any
  }
}
export { IAllWpMenu }
