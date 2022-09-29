import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const FooterWrap = styled.footer`
  height: 110px;
  padding: 20px 0;
  background: ${palette.SECONDARY_TEXT_COLOR};
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  > button {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const FooterBtn = styled.button`
  padding: 0;
  width: 35px;
  height: 35px;
  justify-content: center;
  background: transparent;
  > svg {
    transition: fill 0.3s;
    fill: ${palette.MAIN_TEXT_COLOR};
  }
  &:hover {
    > svg {
      fill: ${palette.MAIN_COLOR};
    }
  }
`;

export const TextWrap = styled.div`
  color: ${palette.MAIN_TEXT_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${palette.TEXT_FONTSIZE_MOB};
  @media screen and (min-width: 768px) {
    font-size: ${palette.TEXT_FONTSIZE};
  }
`;
