import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const SocialLink = styled.li`
  padding: 0;
  width: 35px;
  height: 35px;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  svg {
    transition: fill 0.3s;
    fill: ${palette.MAIN_TEXT_COLOR};
  }
  &:hover {
    svg {
      fill: ${palette.MAIN_COLOR};
    }
  }
`;

export const SocialLinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  > li {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
