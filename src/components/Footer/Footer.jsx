import SocialLinks from "../SocialLinks/SocialLinks";
import { BtnWrap, FooterWrap, TextWrap } from "./Footer.styled";

export default function Footer() {
  return (
    <FooterWrap>
      <BtnWrap>
        <SocialLinks />
      </BtnWrap>
      <TextWrap>
        <p>Copyright © 2021 - FinanceLedger</p>
      </TextWrap>
    </FooterWrap>
  );
}
