"use client";
import Image from "next/image";
import Link from "next/link";

const BlogAuthor = ({ author }) => {
  const { name, image, desig } = author || {};

  return (
    <div className="widget ltn__author-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border">About Author</h4>
      <div className="ltn__author-widget-inner text-center">
        <Image
          src={image || "/img/team/4.jpg"}
          alt="Author Image"
          width={400}
          height={400}
        />
        <h5>{name || "Author Name"}</h5>
        <p>
          A passionate landscaping professional with over a decade of experience in 
          creating beautiful and sustainable outdoor spaces. Specializing in innovative 
          design solutions and eco-friendly gardening practices.
        </p>
        <div className="ltn__social-media">
          <ul>
            <li>
              <Link href="https://www.facebook.com" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com" title="Twitter">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com" title="Linkedin">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;