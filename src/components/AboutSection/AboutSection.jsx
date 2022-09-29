import aboutPic from "../../images/home/people.webp";
import aboutPic2x from "../../images/home/people@2x.webp";
import { AboutBtn, AboutWrap, InfoWrap, TeamPic } from "./AboutSection.styled";

export default function AboutSection() {
  return (
    <AboutWrap>
        <div>
      <TeamPic>
        <source srcSet={`${aboutPic2x} 2x`}/>
        <img src={aboutPic} alt="Our team"/>
      </TeamPic>
      </div>
      <InfoWrap>
        <p>What you are looking for</p>
        <h2>We provide bespoke solutions</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <AboutBtn>Read More</AboutBtn>
      </InfoWrap>
    </AboutWrap>
   
  );
}
