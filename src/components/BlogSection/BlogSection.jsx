import blogJpg from "../../images/home/blog.jpg";
import blogJpg2x from "../../images/home/blog@2x.jpg";
import blogWebp from "../../images/home/blog.webp";
import blogWebp2x from "../../images/home/blog@2x.webp";
import { SECONDARY_COLOR } from "../../variables/Variables";
import Section from "../Section/Section";

export default function BlogSection({ id }) {
  const info = {
    text: "April 16 2020",
    title: "Blog Post One",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?",
    btnText: "Read Our Blog",
    background: SECONDARY_COLOR,
  };
  return (
    <Section
      id={id}
      jpg={blogJpg}
      jpg2x={blogJpg2x}
      webp={blogWebp}
      webp2x={blogWebp2x}
      text={info.text}
      title={info.title}
      article={info.article}
      btnText={info.btnText}
      background={info.background}
      section="blog"
    />
  );
}
