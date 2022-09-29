import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const BlogWrap = styled.div`
  @media screen and (min-width: 768px) {
    height: 569px;
    display: flex;
    flex-direction: row-reverse;
    height: 581px;
    justify-content: space-between;
    > div {
      flex: 1 50%;
    }
  }
  @media screen and (min-width: 1280px) {
    height: 460px;
  }
`;

export const BlogPic = styled.picture`
  height: 247px;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const BlogInfoWrap = styled.div`
  background: ${palette.SECONDARY_COLOR};
  color: ${palette.MAIN_TEXT_COLOR};
  padding: 48px 20px 58px 20px;
  font-weight: 400;
  > p {
    font-size: ${palette.TEXT_FONTSIZE_MOB};
    margin-bottom: 24px;
  }
  > h2 {
    font-size: ${palette.TITLE_FONTSIZE_MOB};
    font-weight: 400;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 59px 32px;
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
  @media screen and (min-width: 1280px) {
    padding: 80px 28px;
  }
`;

export const BlogBtn = styled.button`
  width: 146px;
  height: 54px;
  background: transparent;
  font-weight: 400;
  font-size: ${palette.TEXT_FONTSIZE_MOB};
  color: ${palette.MAIN_TEXT_COLOR};
  border: 1px solid ${palette.MAIN_TEXT_COLOR};
  border-radius: 5px;
  transition: 0.3s;
  margin-top: 9px;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid ${palette.SECONDARY_COLOR};
    color: ${palette.SECONDARY_COLOR};
  }
`;
