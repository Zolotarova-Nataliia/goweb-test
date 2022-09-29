import firstPersonImg from "../../images/team/person1.jpg";
import firstPersonPic from "../../images/team/person1.webp";
import firstPersonPic2x from "../../images/team/person1@2x.webp";
import secondPersonImg from "../../images/team/person2.jpg";
import secondPersonPic from "../../images/team/person2.webp";
import secondPersonPic2x from "../../images/team/person2@2x.webp";
import thirdPersonImg from "../../images/team/person3.jpg";
import thirdPersonPic from "../../images/team/person3.webp";
import thirdPersonPic2x from "../../images/team/person3@2x.webp";
import {
  HeadWrap,
  PersonPicWrap,
  TeamSectionWrap,
  TeamWrap,
} from "./TeamSection.styled";

export default function TeamSection() {
  return (
    <TeamSectionWrap>
      <HeadWrap>
        <h3>Who we are</h3>
        <h2>Our Professional Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </HeadWrap>
      <TeamWrap>
        <PersonPicWrap>
          <picture>
            <source srcSet={`${firstPersonPic} 1x, ${firstPersonPic2x} 2x`} />
            <img src={firstPersonImg} alt="Finance Ledger President" />
          </picture>
          <div>
            <h3>John Doe</h3>
            <p>President</p>
          </div>
        </PersonPicWrap>
        <PersonPicWrap>
          <picture>
            <source srcSet={`${secondPersonPic} 1x, ${secondPersonPic2x} 2x`} />
            <img src={secondPersonImg} alt="Finance Ledger Marketing Head" />
          </picture>
          <div>
            <h3>Jane Doe</h3>
            <p>Vice President</p>
          </div>
        </PersonPicWrap>
        <PersonPicWrap>
          <picture>
            <source srcSet={`${thirdPersonPic} 1x, ${thirdPersonPic2x} 2x`} />
            <img src={thirdPersonImg} alt="Finance Ledger Vice Presedent" />
          </picture>
          <div>
            <h3>Steve Smith</h3>
            <p>Marketing Head</p>
          </div>
        </PersonPicWrap>
      </TeamWrap>
    </TeamSectionWrap>
  );
}
