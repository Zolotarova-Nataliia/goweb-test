import styled from "styled-components";
import { Link } from "react-router-dom";
import * as palette from "../../variables/Variables";

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  > li {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  @media screen and (min-width: 768px) {
    > li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  }
  @media screen and (min-width: 1280px) {
    > li {
    &:not(:last-child) {
      margin-right: 46px;
    }
  }
  }
`;

export const NavigationLink = styled(Link)`
  font-weight: 400;
  font-size: ${palette.TEXT_FONTSIZE_MOB};
  line-height: 22px;
  color: ${palette.MAIN_TEXT_COLOR};
  position: relative;
  transition: color 0.35s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: ${palette.MAIN_COLOR};
    transition: width 0.35s;
  }
  &:hover {
    color: ${palette.MAIN_COLOR};
  }
  &:hover:before ,
  &:active:before{
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    font-size: ${palette.TEXT_FONTSIZE};
    line-height: 25px;
  }
`;
