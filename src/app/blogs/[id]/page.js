import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import getAllBlogs from "@/libs/getAllBlogs";

const BlogDetailsPage = ({ params: { id } }) => {
  const blogs = getAllBlogs() || [];
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  // Create a complete blog object with all required properties
  const completeBlog = {
    id: blog?.id || parseInt(id),
    title: blog?.title || "Untitled Blog",
    desc: blog?.desc || "No description available", // Use desc instead of description
    image: blog?.image || "/img/blog/1.jpg",
    imageLarge: blog?.imageLarge || blog?.image || "/img/blog/1.jpg",
    publishDate: blog?.publishDate || new Date().toLocaleDateString(),
    category: blog?.category || "Uncategorized",
    tags: blog?.tags || [],
    author: {
      name: blog?.author?.name || "Anonymous",
      image: blog?.author?.image || "/img/team/1.jpg",
      desig: blog?.author?.desig || "",
    },
    comments: blog?.comments || [],
    views: blog?.views || 0,
    date: blog?.date || "",
    month: blog?.month || "",
    videoUrl: blog?.videoUrl || null,
    audioUrl: blog?.audioUrl || null,
  };

  return <BlogDetailsMain blog={completeBlog} />;
};

export default BlogDetailsPage;

export async function generateStaticParams() {
  const blogs = getAllBlogs() || [];
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}