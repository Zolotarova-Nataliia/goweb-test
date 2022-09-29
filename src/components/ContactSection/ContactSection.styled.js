import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const ContactWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 374px;
    justify-content: space-between;
    > div {
      flex: 1 50%;
    }
  }
  @media screen and (min-width: 1280px) {
    height: 460px;
  }
`;

export const ContactPic = styled.picture`
  height: 267px;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const FormWrap = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 51px 20px 25px 20px;
  > h2 {
    margin-bottom: 69px;
    font-size: ${palette.TITLE_FONTSIZE_MOB};
    color: ${palette.SECONDARY_TEXT_COLOR};
  }
  @media screen and (min-width: 768px) {
    height: 100%;
    padding: 39px 24px 33px 24px;
    > h2 {
      margin-bottom: 24px;
      font-size: ${palette.TITLE_FONTSIZE};
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 56px 28px 77px 20px;
  }
`;

export const SpanWrap = styled.span`
  position: relative;
`;
export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  color: red;
  font-size: 12px;
  padding: 2px;
  margin-top: -12px;
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  background-color: ${palette.MAIN_TEXT_COLOR};
  font-weight: 400;
  margin-bottom: 20px;
  padding: 16px 8px;
  font-size: ${palette.TEXT_FONTSIZE_MOB};
  color: ${palette.SECONDARY_TEXT_COLOR};
  width: 100%;
  height: 57px;
  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 14px;
    transform: translateY(-23px);
  }

  @media screen and (min-width: 768px) {
    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-38px);
    }
  }
`;

export const FormLabel = styled.label`
  transition: transform 250ms ease;
  font-size: ${palette.TEXT_FONTSIZE_MOB};
  color: #808080;
  padding: 16px 8px;
  position: absolute;
  bottom: -16px;
  left: 0;
  pointer-events: none;
`;

export const SubmitBtn = styled.button`
  width: 155px;
  height: 57px;
  margin-top: 4px;
  background-color: ${palette.MAIN_COLOR};
  font-weight: 400;
  font-size: ${palette.TEXT_FONTSIZE_MOB};
  color: ${palette.MAIN_TEXT_COLOR};
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: ${palette.HOVER_BUTTON_COLOR};
  }
`;
