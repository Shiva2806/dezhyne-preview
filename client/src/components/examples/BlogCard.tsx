import BlogCard from "../BlogCard";
import blogImg from "@assets/generated_images/Development_workspace_blog_ddf29661.png";

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-md">
      <BlogCard
        image={blogImg}
        title="The Future of Web Development"
        description="Exploring the latest trends and technologies shaping modern web development."
        readTime="5 min read"
        gradient="bg-gradient-to-r from-purple-400 to-pink-400"
        link="/blogs/1"
      />
    </div>
  );
}
