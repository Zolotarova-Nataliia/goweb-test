import heroPic from "../../images/home/showcase.webp";
import heroPic2x from "../../images/home/showcase@2x.webp";
import {
  HeroBtn,
  HeroInfo,
  HeroPicture,
  HeroSubtitle,
  HeroTitle,
  HeroWrap,
} from "./Hero.styled";
export default function Hero({ id }) {
  return (
    <HeroWrap id={id}>
      <HeroPicture>
        <source srcSet={`${heroPic2x} 2x`} />
        <img src={heroPic} alt="Night town" />
      </HeroPicture>
      <HeroInfo>
        <HeroTitle>The Sky Is The Limit</HeroTitle>
        <HeroSubtitle>We provide world class financial assistance</HeroSubtitle>
        <HeroBtn>
          {" "}
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.88555 7.09764L3.1043 11.8789C2.77383 12.2094 2.23945 12.2094 1.9125 11.8789L1.11797 11.0844C0.7875 10.7539 0.7875 10.2195 1.11797 9.89257L4.50703 6.5035L1.11797 3.11444C0.7875 2.78397 0.7875 2.2496 1.11797 1.92264L1.90898 1.12108C2.23945 0.790613 2.77383 0.790613 3.10078 1.12108L7.88203 5.90233C8.21602 6.2328 8.21602 6.76718 7.88555 7.09764Z"
              fill="white"
            />
          </svg>
          Read More
        </HeroBtn>
      </HeroInfo>
    </HeroWrap>
  );
}
