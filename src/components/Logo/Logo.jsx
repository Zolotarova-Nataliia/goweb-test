import {
  LogoWrap,
  LogoLink,
  LogoImg,
  LogoTextWrap,
  LogoText,
  LogoSpan,
} from "./Logo.styled";
export default function Logo() {
  return (
    <LogoWrap>
      <LogoLink to="/">
        <LogoImg
            viewBox="0 0 40 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.0025 0.190915C33.2628 0.403512 25.8298 1.17734 21.2412 3.99101C20.9245 4.18515 20.745 4.53037 20.745 4.89131V29.7652C20.745 30.5548 21.6069 31.0538 22.3337 30.6874C27.0547 28.3071 33.8824 27.6577 37.2584 27.48C38.411 27.4191 39.307 26.4936 39.307 25.3841V2.28955C39.3077 1.0789 38.2595 0.119821 37.0025 0.190915ZM18.0658 3.99101C13.4779 1.17734 6.04492 0.404196 2.30523 0.190915C1.04821 0.119821 0 1.0789 0 2.28955V25.3848C0 26.4949 0.896024 27.4205 2.04864 27.4807C5.42596 27.6584 12.257 28.3085 16.9781 30.6901C17.7028 31.0559 18.562 30.5575 18.562 29.77V4.879C18.562 4.51738 18.3832 4.18584 18.0658 3.99101Z"
             
            />
        </LogoImg>
        <LogoTextWrap>
          <LogoText>Finance</LogoText>
          <LogoSpan>Ledger</LogoSpan>
        </LogoTextWrap>
      </LogoLink>
    </LogoWrap>
  );
}
