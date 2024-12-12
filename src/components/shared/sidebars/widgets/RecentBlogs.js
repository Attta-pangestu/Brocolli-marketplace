"use client";
import getAllBlogs from "@/libs/getAllBlogs";
import Image from "next/image";
import Link from "next/link";
import sliceText from "@/libs/sliceText";

const RecentBlogs = () => {
  const blogs = getAllBlogs()?.slice(0, 4);

  return (
    <div className="widget ltn__popular-post-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border">Recent Posts</h4>
      <ul>
        {blogs?.map(({ id, title, image, publishDate }) => (
          <li key={id}>
            <div className="popular-post-widget-item clearfix">
              <div className="popular-post-widget-img">
                <Link href={`/blogs/${id}`}>
                  <Image src={image} alt="#" width={80} height={80} />
                </Link>
              </div>
              <div className="popular-post-widget-brief">
                <h6>
                  <Link href={`/blogs/${id}`}>{sliceText(title, 30)}</Link>
                </h6>
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt"></i>
                      {publishDate}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBlogs;