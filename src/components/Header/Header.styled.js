import styled from "styled-components";

export const HeaderWrap = styled.div`
  height: 120px;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 26px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 25px 32px;
  }
`;
