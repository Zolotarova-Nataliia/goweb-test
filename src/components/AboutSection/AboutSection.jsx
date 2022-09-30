import aboutWebp from "../../images/home/people.webp";
import aboutWebp2x from "../../images/home/people@2x.webp";
import aboutJpg from "../../images/home/people.jpg";
import aboutJpg2x from "../../images/home/people@2x.jpg";
import { SectionAnchor } from "../SectionAnchor/SectionAnchor.styled";
import { AboutBtn, AboutWrap, InfoWrap, TeamPic } from "./AboutSection.styled";

export default function AboutSection({ id }) {
  return (
    <AboutWrap>
      <SectionAnchor id={id} />
      <div>
        <TeamPic>
          <source
            srcSet={`${aboutWebp} 1x, ${aboutWebp2x} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${aboutJpg} 1x, ${aboutJpg2x} 2x`}
            type="image/jpeg"
          />
          <img src={aboutJpg} alt="Our team" />
        </TeamPic>
      </div>
      <InfoWrap>
        <p>What you are looking for</p>
        <h2>We provide bespoke solutions</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <AboutBtn>Read More</AboutBtn>
      </InfoWrap>
    </AboutWrap>
  );
}
