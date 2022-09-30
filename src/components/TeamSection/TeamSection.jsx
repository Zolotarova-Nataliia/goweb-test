import { team } from "../helpers/team";
import SocialLinks from "../SocialLinks/SocialLinks";
import {
  HeadWrap,
  Overlay,
  PersonPic,
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
        {team.map((item, index) => {
          return (
            <PersonPicWrap key={index}>
              <PersonPic>
                <source
                  srcSet={`${item.webp} 1x, ${item.webp2} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${item.jpg} 1x, ${item.jpg2} 2x`}
                  type="image/jpeg"
                />
                <img src={item.jpg} alt={item.alt} />

                <Overlay>
                  <SocialLinks />
                </Overlay>
              </PersonPic>
              <div>
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            </PersonPicWrap>
          );
        })}
      </TeamWrap>
    </TeamSectionWrap>
  );
}
