import styled from "styled-components";
import { Link } from "react-router-dom";
import * as palette from "../../variables/Variables";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background-color: rgba(33, 33, 33, 0.9);
`;

export const ModalContent = styled.div`
  padding: 20px;
  > h2 {
    font-size: ${palette.SUBTITLE_FONTSIZE_MOB};
    color: ${palette.SECONDARY_TEXT_COLOR};
    font-weight: 600;
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px;
    > h2 {
      margin-bottom: 15px;
      font-size: ${palette.TITLE_FONTSIZE_MOB};
    }
    > p {
      margin-bottom: 15px;
      font-size: ${palette.TEXT_FONTSIZE};
    }
  }
`;

export const ModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 160px;
  background: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 210px;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 200px;
  }
`;

export const GoBack = styled(Link)`
  color: ${palette.MAIN_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  > svg {
    width: 13px;
    height: 15px;
    fill: ${palette.MAIN_COLOR};
    transform: rotate(180deg);
    margin-right: 5px;
    transition: 0.3s;
    opacity: 50%;
  }
  &:hover {
    color: ${palette.HOVER_BUTTON_COLOR};
    letter-spacing: 0.02em;
    > svg {
      opacity: 100%;
      fill: ${palette.HOVER_BUTTON_COLOR};
    }
  }
  @media screen and (min-width: 768px) {
    font-size: ${palette.TEXT_FONTSIZE};
  }
`;
