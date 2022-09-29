import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { HeaderWrap } from "./Header.styled";
import { useEffect, useState, useRef } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(isScrolled);
  isScrolledRef.current = isScrolled;
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const newIsScrolled = window.scrollY > ref.current.clientHeight;
      if (newIsScrolled !== isScrolledRef.current) {
        setIsScrolled(newIsScrolled);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <HeaderWrap
      ref={ref}
      style={{
        backgroundColor: isScrolled ? " rgba(0, 0, 0, 0.8)" : undefined,
      }}
    >
      <Logo></Logo>
      <Navigation></Navigation>
    </HeaderWrap>
  );
}
