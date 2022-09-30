import blogJpg from "../../images/home/blog.jpg";
import blogJpg2x from "../../images/home/blog@2x.jpg";
import blogWebp from "../../images/home/blog.webp";
import blogWebp2x from "../../images/home/blog@2x.webp";
import { SectionAnchor } from "../SectionAnchor/SectionAnchor.styled";
import { BlogBtn, BlogWrap, BlogInfoWrap, BlogPic } from "./BlogSection.styled";

export default function BlogSection({ id }) {
  return (
    <BlogWrap>
      <SectionAnchor id={id} />
      <div>
        <BlogPic>
          <source
            srcSet={`${blogWebp} 1x, ${blogWebp2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${blogJpg} 1x, ${blogJpg2x} 2x`} type="image/jpeg" />
          <img src={blogJpg} alt="Blog" />
        </BlogPic>
      </div>
      <BlogInfoWrap>
        <p>April 16 2020</p>
        <h2>Blog Post One</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <BlogBtn>Read Our Blog</BlogBtn>
      </BlogInfoWrap>
    </BlogWrap>
  );
}
