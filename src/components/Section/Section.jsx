import { SectionAnchor } from "../SectionAnchor/SectionAnchor.styled";
import {
  SectionBtn,
  SectionInfoWrap,
  SectionPic,
  SectionWrap,
} from "./Section.styled";

export default function Section({
  id,
  webp,
  webp2x,
  jpg,
  jpg2x,
  text,
  title,
  article,
  btnText,
  background,
  section,
}) {
  return (
    <SectionWrap section={section}>
      <SectionAnchor id={id} />
      <div>
        <SectionPic>
          <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
          <source srcSet={`${jpg} 1x, ${jpg2x} 2x`} type="image/jpeg" />
          <img src={jpg} alt="Blog" />
        </SectionPic>
      </div>
      <SectionInfoWrap style={{ backgroundColor: background }}>
        <p>{text}</p>
        <h2>{title}</h2>
        <p>{article}</p>
        <SectionBtn color={background}>{btnText}</SectionBtn>
      </SectionInfoWrap>
    </SectionWrap>
  );
}
