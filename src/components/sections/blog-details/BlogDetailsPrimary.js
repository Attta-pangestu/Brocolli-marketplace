"use client";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import getAllBlogs from "@/libs/getAllBlogs";
import Image from "next/image";
import Link from "next/link";
import makePath from "@/libs/makePath";
import BlogCard4 from "@/components/shared/cards/BlogCard4";
import modifyNumber from "@/libs/modifyNumber";
import countCommentLength from "@/libs/countCommentLength";
import sliceText from "@/libs/sliceText";

const BlogDetailsPrimary = ({ blog }) => {
  if (!blog) return null;

  const blogs = getAllBlogs();
  const {
    title = "",
    image = "/img/blog/1.jpg", // default image
    id,
    publishDate = new Date().toLocaleDateString(),
    desc = "No description available", // default description
    author = {},
    category = "Uncategorized",
    comments = [],
    tags = [],
  } = blog;

  const pervBlog = blogs.find(({ id: bid }) => bid === parseInt(id) - 1);
  const nextBlog = blogs.find(({ id: bid }) => bid === parseInt(id) + 1);
  const { title: prevTitle, id: prevId } = pervBlog || {};
  const { title: nextTitle, id: nextId } = nextBlog || {};
  
  const relatedBlogs = blogs
    ?.filter(({ author: author2 }) => author2?.name === author?.name)
    ?.slice(0, 2);

  const commentsLength = countCommentLength(comments);
  const totalComments = modifyNumber(commentsLength);

  return (
    <div className="ltn__page-details-area ltn__blog-details-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="ltn__blog-details-wrap">
              <div className="ltn__page-details-inner ltn__blog-details-inner">
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-category">
                      <Link href={`/blogs?category=${makePath(category)}`}>
                        {category}
                      </Link>
                    </li>
                  </ul>
                </div>
                <h2 className="ltn__blog-title">{title}</h2>
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-author">
                      <Link href={`/blogs?author=${makePath(author?.name)}`}>
                        <Image
                          src={author?.image}
                          alt="#"
                          width={2000}
                          height={1000}
                        />
                        By: {author?.name}
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt"></i>
                      {publishDate}
                    </li>
                    <li>
                      <Link href="#comments">
                        <i className="far fa-comments"></i>
                        {totalComments} Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <p>{desc}</p>
                <Image src={image} alt="Image" width={800} height={478} />
                <div className="ltn__blog-tags-social-media">
                  <div className="ltn__tagcloud-widget">
                    <h6>Tags:</h6>
                    <ul>
                      {tags?.map((tag, index) => (
                        <li key={index}>
                          <Link href={`/blogs?tag=${makePath(tag)}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ltn__social-media">
                    <h6>Social Share:</h6>
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="LinkedIn">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="ltn__prev-next-btn row">
                  <div className="blog-prev col-lg-6">
                    {prevId && (
                      <h6>
                        <Link href={`/blogs/${prevId}`}>
                          <i className="fas fa-arrow-left"></i> {prevTitle}
                        </Link>
                      </h6>
                    )}
                  </div>
                  <div className="blog-next col-lg-6 text-right">
                    {nextId && (
                      <h6>
                        <Link href={`/blogs/${nextId}`}>
                          {nextTitle} <i className="fas fa-arrow-right"></i>
                        </Link>
                      </h6>
                    )}
                  </div>
                </div>
                <hr />
                <div className="related-post-area mb-50">
                  <h4 className="title-2">Related Posts</h4>
                  <div className="row">
                    {relatedBlogs?.map((blog) => (
                      <div key={blog.id} className="col-md-6">
                        <BlogCard4 blog={blog} />
                      </div>
                    ))}
                  </div>
                </div>
                <div id="comments" className="ltn__comment-area mb-50">
                  <div className="ltn__comment-inner">
                    <h4 className="title-2">{totalComments} Comments</h4>
                    <ul>
                      {comments?.map((comment) => (
                        <li key={comment.id}>
                          <div className="ltn__comment-item clearfix">
                            <div className="ltn__commenter-img">
                              <Image
                                src={comment.userImage}
                                alt="Image"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="ltn__commenter-comment">
                              <h6>
                                <Link href="#">{comment.userName}</Link>
                              </h6>
                              <span className="comment-date">
                                {comment.commentDate}
                              </span>
                              <p>{comment.comment}</p>
                              <Link href="#" className="ltn__comment-reply-btn">
                                <i className="fas fa-reply"></i>Reply
                              </Link>
                            </div>
                          </div>
                          {comment?.replies?.map((reply) => (
                            <ul key={reply.id}>
                              <li>
                                <div className="ltn__comment-item clearfix">
                                  <div className="ltn__commenter-img">
                                    <Image
                                      src={reply.userImage}
                                      alt="Image"
                                      width={100}
                                      height={100}
                                    />
                                  </div>
                                  <div className="ltn__commenter-comment">
                                    <h6>
                                      <Link href="#">{reply.userName}</Link>
                                    </h6>
                                    <span className="comment-date">
                                      {reply.commentDate}
                                    </span>
                                    <p>{reply.comment}</p>
                                    <Link
                                      href="#"
                                      className="ltn__comment-reply-btn"
                                    >
                                      <i className="fas fa-reply"></i>Reply
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="ltn__comment-reply-area ltn__form-box mb-60">
                  <h4 className="title-2">Leave a Reply</h4>
                  <form action="#">
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea placeholder="Type your comments...."></textarea>
                    </div>
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" placeholder="Type your name...." />
                    </div>
                    <div className="input-item input-item-email ltn__custom-icon">
                      <input type="email" placeholder="Type your email...." />
                    </div>
                    <div className="input-item input-item-website ltn__custom-icon">
                      <input type="text" placeholder="Type your website...." />
                    </div>
                    <label className="mb-0 input-info-save">
                      <input type="checkbox" name="agree" /> Save my name, email,
                      and website in this browser for the next time I comment.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar author={author} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;