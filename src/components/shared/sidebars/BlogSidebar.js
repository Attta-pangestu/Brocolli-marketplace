"use client";
import BlogAuthor from "./widgets/BlogAuthor";
import BlogCategories from "./widgets/BlogCategories";
import BlogSearch from "./widgets/BlogSearch";
import BlogTags from "./widgets/BlogTags";
import RecentBlogs from "./widgets/RecentBlogs";

const BlogSidebar = ({ author }) => {
  return (
    <aside className="sidebar-area blog-sidebar ltn__right-sidebar">
      <BlogSearch />
      <BlogAuthor author={author} />
      <BlogCategories />
      <RecentBlogs />
      <BlogTags />
    </aside>
  );
};

export default BlogSidebar;