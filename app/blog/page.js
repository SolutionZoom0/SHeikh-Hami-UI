"use client";

import { useState, useEffect } from "react";
import BlogItem from "@/components/BlogItem";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
import Link from "next/link";

const POSTS_PER_PAGE = 10;

async function fetchBlogItems(page) {
  const start = (page - 1) * POSTS_PER_PAGE;
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${POSTS_PER_PAGE}`
  // );

  const response = await fetch(
    `https://us-central1-sheikhhami-d00bd.cloudfunctions.net/readData?collection=Article&_start=${start}&_limit=${POSTS_PER_PAGE}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json(); // Default to 100 if header is missing
  return { data: data };
}

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogItems, setBlogItems] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  useEffect(() => {
    const loadBlogItems = async () => {
      setLoading(true);
      try {
        const { data } = await fetchBlogItems(currentPage);
        setBlogItems(data.data);
        setTotalPosts(data.totalPosts);
      } catch (error) {
        console.error("Error fetching blog items:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogItems();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text" style={{ display: "flex" }}>
                <h1 className="main-title">Recent Articles and Publications</h1>
                <Link href="new_article" className="lets-talk-btn">
                  Add
                  <svg
                    className="icon"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4V16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 10H16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="article-publications article-area">
              <div className="article-publications-main">
                {loading ? (
                  <div className="row">
                    <p>Loading...</p>
                  </div>
                ) : (
                  <div className="row">
                    {blogItems.map((item) => (
                      <BlogItem key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="pagination">
              <ul className="list-unstyled">
                {/* Previous Button */}
                <li className="prev">
                  {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        ></path>
                      </svg>
                    </button>
                  )}
                </li>
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handlePageChange(i + 1)}
                      className={currentPage === i + 1 ? "active" : ""}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                {/* Next Button */}
                <li className="next">
                  {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
}
