"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blogs?search=${searchTerm.trim()}`);
    }
  };

  return (
    <div className="widget ltn__search-widget">
      <h4 className="ltn__widget-title ltn__widget-title-border">Search</h4>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search your keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;