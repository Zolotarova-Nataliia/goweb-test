import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const BusinessSectionWrap = styled.div`
  padding: 56px 20px 40px 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 48px 32px 40px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 80px 28px;
  }
`;

export const BusinessHead = styled.div`
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

export const BusinessGallery = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 8px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18px;
    grid-template-rows: none;
  }
`;

export const BusinessPic = styled.div`
  position: relative;
  cursor: pointer;
  picture {
    > img {
      height: 100%;
      object-fit: cover;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: opacity 250ms linear;
  }
  &:hover:after {
    opacity: 1;
  }
`;

export const BusinessModalWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const BusinessImgWrap = styled.div`
  width: 80vw;
  background-color: ${palette.MAIN_TEXT_COLOR};
  height: calc(80vw / 211 * 141);
  @media screen and (min-width: 1280px) {
    width: 60vw;
    height: calc(60vw / 211 * 141);
  }
`;

export const BusinessImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Prev = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -30px;
  width: 20px;
  height: 20px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  opacity: 0.5;
  transition: opacity 250ms ease;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    left: -50px;
  }
`;

export const Next = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  opacity: 0.5;
  transition: opacity 250ms ease;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    right: -50px;
  }
`;

export const Close = styled.button`
  position: absolute;
  padding: 0;
  top: -20px;
  right: -20px;
  cursor: pointer;
  background: transparent;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  transition: opacity 250ms ease;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    top: -30px;
    right: -30px;
  }
`;
