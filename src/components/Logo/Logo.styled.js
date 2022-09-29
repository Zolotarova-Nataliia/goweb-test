import styled from "styled-components";
import { Link } from "react-router-dom";
import * as palette from "../../variables/Variables";

export const LogoWrap = styled.div`
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-items: center;
  transition: 0.3s;
  svg,
  p {
    transition: 0.3s;
  }
  &:hover {
    svg {
      transform: scale(1.1);
      fill: ${palette.HOVER_BUTTON_COLOR};
    }
    p {
      color: ${palette.HOVER_BUTTON_COLOR};
    }
    letter-spacing: 0.02em;
  }
`;

export const LogoImg = styled.svg`
  width: 39px;
  height: 31px;
  margin-right: 8px;
  fill: ${palette.MAIN_COLOR};
  @media screen and (min-width: 1280px) {
    width: 42px;
    margin-right: 4px;
  }
`;

export const LogoTextWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${palette.TEXT_FONTSIZE};
  font-weight: 400;
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const LogoText = styled.p`
  color: ${palette.MAIN_COLOR};
  margin-right: 8px;
`;
export const LogoSpan = styled.span`
  color: ${palette.MAIN_TEXT_COLOR};
`;
