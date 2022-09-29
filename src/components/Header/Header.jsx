import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { HeaderWrap } from "./Header.styled";
export default function Header() {
  return (
    <HeaderWrap>
      <Logo></Logo>
      <Navigation></Navigation>
    </HeaderWrap>
  );
}
