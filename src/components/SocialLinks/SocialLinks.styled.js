import styled from "styled-components";
import * as palette from "../../variables/Variables";

export const SocialBtn = styled.button`
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
