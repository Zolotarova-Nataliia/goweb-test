import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const TeamSectionWrap = styled.section`
  padding: 72px 20px 50px 20px;

  @media screen and (min-width: 1280px) {
    padding: 80px 28px 88px 28px;
  }
`;

export const TeamWrap = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 30px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 18px;
    grid-template-rows: none;
    margin: 0;
  }
`;

export const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${palette.SECONDARY_TEXT_COLOR};
  margin-bottom: 63px;
  > h3,
  > p {
    font-weight: 400;
    font-size: ${palette.TEXT_FONTSIZE_MOB};
  }
  > h2 {
    font-weight: 400;
    font-size: ${palette.TITLE_FONTSIZE_MOB};
    margin: 16px 0 24px 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    > h2 {
      font-size: ${palette.TITLE_FONTSIZE};
    }
    > h3 {
      font-size: 20px;
    }
    > p {
      font-size: ${palette.TEXT_FONTSIZE_MOB};
    }
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
    > h3 {
      font-size: 20px;
    }
    > p {
      font-size: ${palette.TEXT_FONTSIZE};
    }
  }
`;

export const PersonPicWrap = styled.div`
  display: grid;
  grid-template-rows: (3fr 1fr);
  grid-row-gap: 16px;
  color: ${palette.SECONDARY_TEXT_COLOR};
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    h3 {
      font-size: ${palette.TITLE_FONTSIZE_MOB};
    }
    p {
      font-size: ${palette.TEXT_FONTSIZE};
    }
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  position: absolute;
  overflow: auto;
  > button {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  button:hover {
    > svg {
      fill: rgba(255, 255, 255, 0.8);
    }
  }
  @media screen and (min-width: 1280px) {
    > button {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
`;
export const PersonPic = styled.picture`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: transform 250ms linear;
  > img {
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.16),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  &:hover ${Overlay} {
    top: 0;
    left: 0;
  }
`;
