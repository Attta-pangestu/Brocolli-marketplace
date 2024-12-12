"use client";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import getAllBlogs from "@/libs/getAllBlogs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import makePath from "@/libs/makePath";
import BlogCard4 from "@/components/shared/cards/BlogCard4";
import CommonContext from "@/providers/CommonContext";
import useSearch from "@/hooks/useSearch";
import modifyNumber from "@/libs/modifyNumber";
import countCommentLength from "@/libs/countCommentLength";
import sliceText from "@/libs/sliceText";

const BlogDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const blogs = getAllBlogs();
  const {
    searchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(blogs, `/blogs`);

  const blog = blogs?.find(({ id }) => id === parseInt(currentId));
  const {
    title,
    image,
    id,
    publishDate,
    desc,
    author,
    category,
    comments,
    tags,
  } = blog ? blog : {};
  const pervBlog = blogs.find(({ id }) => id === parseInt(currentId) - 1);
  const nextBlog = blogs.find(({ id }) => id === parseInt(currentId) + 1);
  const { title: prevTitle, id: prevId } = pervBlog ? pervBlog : {};
  const { title: nextTitle, id: nextId } = nextBlog ? nextBlog : {};
  const relatedBlogs = blogs
    ?.filter(({ athor: author2 }) => author2?.name === author?.name)
    ?.slice(0, 2);
  const totalBlogs = blogs?.length;
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
                <p>
                  &ldquo;Discover the essence of organic living through our carefully curated selection of fresh produce. Our commitment to sustainable farming practices ensures that every product meets the highest standards of quality and nutrition. From farm-fresh vegetables to organic fruits, we bring nature&apos;s best directly to your table. Our products are cultivated without harmful pesticides or artificial additives, preserving both their natural flavors and nutritional benefits.&rdquo;
                </p>
                <p>
                  &ldquo;We partner with local organic farmers who share our passion for sustainable agriculture and environmental stewardship. Each product is harvested at peak ripeness and delivered fresh to ensure maximum flavor and nutritional value. By choosing organic, you&apos;re not just making a healthier choice for yourself, but also supporting sustainable farming practices that benefit our planet.&rdquo;
                </p>
                <Image src={image} alt="Image" width={800} height={478} />
                <h2>A cleansing hot shower or bath</h2>
                <p>
                  &ldquo;Beyond just selling organic products, we&apos;re committed to educating our community about the benefits of organic farming and healthy eating. Through our blog posts and newsletters, we share valuable insights about sustainable living, cooking tips, and the latest developments in organic agriculture.&rdquo;
                </p>
                <hr />
                <h2>Setting the mood with incense</h2>
                <p>
                  &ldquo;Beyond just selling organic products, we&apos;re committed to educating our community about the benefits of organic farming and healthy eating. Through our blog posts and newsletters, we share valuable insights about sustainable living, cooking tips, and the latest developments in organic agriculture.&rdquo;
                </p>
                <hr />
                <h2>Setting the mood with incense</h2>
                <div className="list-item-with-icon-2">
                  <ul>
                    <li>All products are certified organic and sustainably sourced</li>
                    <li>Direct partnerships with local organic farmers</li>
                    <li>Seasonal produce selection for optimal freshness</li>
                    <li>Strict quality control measures for all products</li>
                    <li>Regular community education programs on organic living</li>
                  </ul>
                  <ul>
                    <li>All products are certified organic and sustainably sourced</li>
                    <li>Direct partnerships with local organic farmers</li>
                    <li>Seasonal produce selection for optimal freshness</li>
                    <li>Strict quality control measures for all products</li>
                    <li>Regular community education programs on organic living</li>
                  </ul>
                </div>
                <blockquote>
                  <h6 className="ltn__secondary-color mt-0">BY HETMAYAR</h6>
                  Viral dreamcatcher keytar typewriter, aest hetic offal umami.
                  Aesthetic polaroid pug pitchfork post-ironic.
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium.
                </p>
                <Image
                  className="alignleft"
                  src="/img/blog/blog-details/1.jpg"
                  alt="Image"
                  width={255}
                  height={278}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem.
                </p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur expedita velit laboriosam est sint laborum eos
                  assumenda, quam voluptatem adipisci, reprehenderit ut nobis
                  blanditiis perspiciatis!
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <Image
                      src="/img/service/31.jpg"
                      alt="Image"
                      width={600}
                      height={600}
                    />
                    <label>Image Caption Here</label>
                  </div>
                  <div className="col-lg-6">
                    <Image
                      src="/img/service/32.jpg"
                      alt="Image"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa, amet, fuga omnis eligendi sed cupiditate molestias enim
                  autem animi est tempore ipsa corporis. Recusandae, quia.
                </p>
              </div>
              <div className="ltn__blog-tags-social-media mt-80 row">
                {tags?.length ? (
                  <div className="ltn__tagcloud-widget col-lg-8">
                    <h4>Releted Tags</h4>
                    <ul>
                      {tags?.map((tag, idx) => (
                        <li key={idx}>
                          <Link href={`/blogs?tag=${makePath(tag)}`}>
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                <div className="ltn__social-media text-right text-end col-lg-4">
                  <h4>Social Share</h4>
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://X.com" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" title="Linkedin">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com" title="Youtube">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="ltn__prev-next-btn row mb-50">
                <div
                  className="blog-prev col-lg-6"
                  style={{ visibility: !prevId ? "hidden" : "visible" }}
                >
                  <h6>Prev Post</h6>
                  <h3 className="ltn__blog-title">
                    <Link href={`/blogs/${prevId ? prevId : 1}`}>
                      {prevTitle
                        ? sliceText(prevTitle, 12, true)
                        : "Tips On Minimalist"}
                    </Link>
                  </h3>
                </div>
                <div
                  className="blog-prev blog-next text-right text-end col-lg-6"
                  style={{ visibility: !nextId ? "hidden" : "visible" }}
                >
                  <h6>Next Post</h6>
                  <h3 className="ltn__blog-title">
                    <Link href={`/blogs/${nextId ? nextId : 1}`}>
                      {nextTitle
                        ? sliceText(nextTitle, 12, true)
                        : "Tips On Minimalist"}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;