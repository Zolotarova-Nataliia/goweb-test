import SocialLinks from "../SocialLinks/SocialLinks";
import { FooterWrap, TextWrap } from "./Footer.styled";

export default function Footer() {
  return (
    <FooterWrap>
      <SocialLinks />
      <TextWrap>
        <p>Copyright © 2021 - FinanceLedger</p>
      </TextWrap>
    </FooterWrap>
  );
}
