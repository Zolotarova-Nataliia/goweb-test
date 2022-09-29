import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const AboutWrap = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 581px;
    justify-content: space-between;
    > div {
      flex: 1 50%;
    }
  }
  @media screen and (min-width: 768px) {
    height: 569px;
  }
  @media screen and (min-width: 1280px) {
    height: 460px;
  }
`;

export const TeamPic = styled.picture`
  height: 220px;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const InfoWrap = styled.div`
  background: ${palette.MAIN_COLOR};
  color: ${palette.MAIN_TEXT_COLOR};
  padding: 79px 20px;
  font-weight: 400;
  > p {
    font-size: ${palette.TEXT_FONTSIZE_MOB};
    margin-bottom: 16px;
  }
  > h2 {
    font-size: ${palette.TITLE_FONTSIZE_MOB};
    font-weight: 400;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 62px 32px;
    > p {
      font-size: ${palette.TEXT_FONTSIZE};
      margin-bottom: 16px;
    }
    > h2 {
      font-size: ${palette.TITLE_FONTSIZE};
      font-weight: 400;
      margin-bottom: 24px;
    }
  }
`;

export const AboutBtn = styled.button`
  width: 146px;
  height: 54px;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  color: ${palette.MAIN_TEXT_COLOR};
  border: 1px solid ${palette.MAIN_TEXT_COLOR};
  border-radius: 5px;
  transition: 0.3s;
  margin-top: 9px;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid ${palette.MAIN_COLOR};
    color: ${palette.MAIN_COLOR};
  }
`;
