import styled from "@emotion/styled"
import { Link } from "gatsby"
import { theme } from "../../common/theme"

interface StyledNavListProps {
  flexDirection: "row" | "column"
}

export const StyledNavList = styled.ul<StyledNavListProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  list-style: none;
  .active {
    color: ${props => props?.theme?.colors?.accentColor};
  }
`
export const NavListItem = styled.li`
  margin-bottom: 0;
`

export const LinkItem = styled(Link)`
  font-weight: ${theme?.typography?.fontWeight?.semiBold};
  font-size: 1rem;
  text-decoration: none;
  color: ${theme?.colors?.secondaryColor};
  transition: ${theme?.transition?.basic};
  position: relative;

  &:hover {
    color: ${theme?.colors?.accentColor};
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${theme?.colors?.accentColor};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`
