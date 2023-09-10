export interface IHeroBackground {
  sourceUrl: string
}

export interface IHero {
  heroTitle: string
  heroShortDescription: string
  heroTextButton: string
  heroBackground: IHeroBackground
}

export interface IHeroProps {
  hero: IHero
}
