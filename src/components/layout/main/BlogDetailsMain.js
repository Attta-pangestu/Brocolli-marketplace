'use client';
import { usePathname } from 'next/navigation';
import CommonContext from "@/providers/CommonContext";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import BlogDetailsPrimary from "@/components/sections/blog-details/BlogDetailsPrimary";
import Features4 from "@/components/sections/features/Features4";

const BlogDetailsMain = ({ blog }) => {
  const currentPath = usePathname();
  
  return (
    <CommonContext value={{ currentPath }}>
      <main>
        <HeroPrimary title={"News Details"} text={"News Details"} />
        <BlogDetailsPrimary blog={blog} />
        <Features4 />
      </main>
    </CommonContext>
  );
};

export default BlogDetailsMain;