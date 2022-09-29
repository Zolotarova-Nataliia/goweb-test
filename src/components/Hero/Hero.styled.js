import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const HeroWrap = styled.div`
  position: relative;
  padding-top: 120px;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  @media screen and (min-width: 768px) {
    padding-top: 70px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 192px;
  }
`;

export const HeroPicture = styled.picture`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 20px 104px 20px;
  align-items: center;
  text-align: center;
  > p,
  h1 {
    color: ${palette.MAIN_TEXT_COLOR};
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: ${palette.TITLE_FONTSIZE};
  margin-bottom: 16px;
  width: 241px;
  @media screen and (min-width: 768px) {
    width: 523px;
    font-size: 55px;
  }
`;
export const HeroSubtitle = styled.p`
  font-weight: 400;
  font-size: ${palette.SUBTITLE_FONTSIZE_MOB};
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroBtn = styled.button`
  width: 175px;
  height: 57px;
  background: ${palette.MAIN_COLOR};
  color: ${palette.MAIN_TEXT_COLOR};
  border-radius: 5px;
  font-weight: 400;
  font-size: ${palette.TEXT_FONTSIZE};
  transition: 0.3s;
  > svg {
    margin-right: 9px;
    transition: 0.3s;
    opacity: 50%;
  }
  &:hover {
    background: ${palette.HOVER_BUTTON_COLOR};
    letter-spacing: 0.02em;
    > svg {
      transform: scale(1.3);
      opacity: 100%;
    }
  }
`;
