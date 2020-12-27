import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "A series on Accessibility Service",
  image: "img",
  index: 0,
  description:
    "The above Series is divided into two parts. It answers the questions about What is Accessibility Service? and How to use it in our application?. I am proud to announce that the blogs have received an Overwhelming response from the target audience due to lack of reading material available on the above topic.",
})
  .addHeading("A complete guide to Accessibility Service(Part 1 & 2)")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

const blog1 = new BlogBuilder({
  title: "A series on Creating Dynamic WhatsApp Stickers",
  image: "img",
  index: 1,
  description:
    "This above Series is also divided into two parts. It answers the questions about How to create an application for WhatsApp Stickers? How to use Content providers to make Dynamic Stickers? How to fix the errors related to the above implementation? I am glad to be amongst the very first users of this feature, and hence I contributed to the community by answering common queries of the people via this blog",
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  )
  .addHeading("New Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );
  const blog2 = new BlogBuilder({
  title: "Metadata of Images",
  image: "img",
  index: "https://medium.com/@vanshikaa937",
  description:
    "This is an insightful blog about Image Metadata. It answers the questions, What is Image Metadata? How Can I detect Metadat? For the purpose of learning, the blog explains how we can detect whether an image is download from Facebook using it's Metadata.",
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  )
  .addHeading("New Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

bloglist.push(blog);
bloglist.push(blog1);
bloglist.push(blog2);
export default bloglist;
