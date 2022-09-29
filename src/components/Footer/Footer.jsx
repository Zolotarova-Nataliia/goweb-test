import { BtnWrap, FooterBtn, FooterWrap, TextWrap } from "./Footer.styled";
const svgStyle = {
  marginTop: "4px",
};
export default function Footer() {
  return (
    <FooterWrap>
      <BtnWrap>
        <FooterBtn type="button">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.4531 17.875C34.4531 8.50977 26.8652 0.921875 17.5 0.921875C8.13477 0.921875 0.546875 8.50977 0.546875 17.875C0.546875 26.3516 6.69922 33.3926 14.834 34.623V22.7969H10.5273V17.875H14.834V14.1836C14.834 9.94531 17.3633 7.55273 21.1914 7.55273C23.1055 7.55273 25.0195 7.89453 25.0195 7.89453V12.0645H22.9004C20.7812 12.0645 20.0977 13.3633 20.0977 14.7305V17.875H24.8145L24.0625 22.7969H20.0977V34.623C28.2324 33.3926 34.4531 26.3516 34.4531 17.875Z" />
          </svg>
        </FooterBtn>
        <FooterBtn type="button">
          <svg
            style={svgStyle}
            width="35"
            height="30"
            viewBox="0 0 35 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.377 7.76562C32.7441 6.74023 33.9746 5.50977 34.9316 4.07422C33.7012 4.62109 32.2656 5.03125 30.8301 5.16797C32.334 4.2793 33.4277 2.91211 33.9746 1.20312C32.6074 2.02344 31.0352 2.63867 29.4629 2.98047C28.0957 1.54492 26.25 0.724609 24.1992 0.724609C20.2344 0.724609 17.0215 3.9375 17.0215 7.90234C17.0215 8.44922 17.0898 8.99609 17.2266 9.54297C11.2793 9.20117 5.94727 6.33008 2.39258 2.02344C1.77734 3.04883 1.43555 4.2793 1.43555 5.64648C1.43555 8.10742 2.66602 10.2949 4.64844 11.5938C3.48633 11.5254 2.32422 11.252 1.36719 10.7051V10.7734C1.36719 14.2598 3.82812 17.1309 7.10938 17.8145C6.5625 17.9512 5.87891 18.0879 5.26367 18.0879C4.78516 18.0879 4.375 18.0195 3.89648 17.9512C4.78516 20.8223 7.45117 22.873 10.5957 22.9414C8.13477 24.8555 5.05859 26.0176 1.70898 26.0176C1.09375 26.0176 0.546875 25.9492 0 25.8809C3.14453 27.9316 6.9043 29.0938 11.0059 29.0938C24.1992 29.0938 31.377 18.2246 31.377 8.72266C31.377 8.38086 31.377 8.10742 31.377 7.76562Z" />
          </svg>
        </FooterBtn>
        <FooterBtn type="button">
          <svg
            style={svgStyle}
            width="38"
            height="27"
            viewBox="0 0 38 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M36.8418 4.91992C36.4316 3.2793 35.1328 1.98047 33.5605 1.57031C30.6211 0.75 19 0.75 19 0.75C19 0.75 7.31055 0.75 4.37109 1.57031C2.79883 1.98047 1.5 3.2793 1.08984 4.91992C0.269531 7.79102 0.269531 13.9434 0.269531 13.9434C0.269531 13.9434 0.269531 20.0273 1.08984 22.9668C1.5 24.6074 2.79883 25.8379 4.37109 26.248C7.31055 27 19 27 19 27C19 27 30.6211 27 33.5605 26.248C35.1328 25.8379 36.4316 24.6074 36.8418 22.9668C37.6621 20.0273 37.6621 13.9434 37.6621 13.9434C37.6621 13.9434 37.6621 7.79102 36.8418 4.91992ZM15.1719 19.4805V8.40625L24.8789 13.9434L15.1719 19.4805Z" />
          </svg>
        </FooterBtn>
        <FooterBtn type="button">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.02344 31V10.5605H0.666016V31H7.02344ZM3.81055 7.82617C5.86133 7.82617 7.50195 6.11719 7.50195 4.06641C7.50195 2.08398 5.86133 0.443359 3.81055 0.443359C1.82812 0.443359 0.1875 2.08398 0.1875 4.06641C0.1875 6.11719 1.82812 7.82617 3.81055 7.82617ZM30.7441 31H30.8125V19.7891C30.8125 14.3203 29.582 10.082 23.1562 10.082C20.0801 10.082 18.0293 11.791 17.1406 13.3633H17.0723V10.5605H10.9883V31H17.3457V20.8828C17.3457 18.2168 17.8242 15.6875 21.1055 15.6875C24.3867 15.6875 24.4551 18.6953 24.4551 21.0879V31H30.7441Z" />
          </svg>
        </FooterBtn>
      </BtnWrap>
      <TextWrap>
        <p>Copyright © 2021 - FinanceLedger</p>
      </TextWrap>
    </FooterWrap>
  );
}
