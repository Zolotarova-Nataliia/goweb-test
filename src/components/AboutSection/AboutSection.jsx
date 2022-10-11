import aboutWebp from "../../images/home/people.webp";
import aboutWebp2x from "../../images/home/people@2x.webp";
import aboutJpg from "../../images/home/people.jpg";
import aboutJpg2x from "../../images/home/people@2x.jpg";
import Section from "../Section/Section";
import { MAIN_COLOR } from "../../variables/Variables";

export default function AboutSection({ id }) {
  const info = {
    text: "What you are looking for",
    title: "We provide bespoke solutions",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
    btnText: "Read More",
    background: MAIN_COLOR,
  };

  return (
    <Section
      id={id}
      jpg={aboutJpg}
      jpg2x={aboutJpg2x}
      webp={aboutWebp}
      webp2x={aboutWebp2x}
      text={info.text}
      title={info.title}
      article={info.article}
      btnText={info.btnText}
      background={info.background}
    />
  );
}
