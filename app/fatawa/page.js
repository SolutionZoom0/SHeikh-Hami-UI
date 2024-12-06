"use client";

import { useState, useEffect } from "react";
import BentoFolioLayout from "@/layout/BentoFolioLayout";

const POSTS_PER_PAGE = 10;

async function fetchFatwaItems(page) {
  const start = (page - 1) * POSTS_PER_PAGE;

  const response = await fetch(
    `https://us-central1-sheikhhami-d00bd.cloudfunctions.net/readData?collection=Fatwa&_start=${start}&_limit=${POSTS_PER_PAGE}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return { data: data };
}

export default function FatawaPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [FatwaItems, setFatwaItems] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  useEffect(() => {
    const loadFatwaItems = async () => {
      setLoading(true);
      try {
        const { data } = await fetchFatwaItems(currentPage);
        setFatwaItems(data.data);
        setTotalPosts(data.totalPosts);
      } catch (error) {
        console.error("Error fetching blog items:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFatwaItems();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleAccordion = (itemId) => {
    setExpandedItemId(expandedItemId === itemId ? null : itemId); // Toggle expand/collapse
  };

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">Recent Questions to the Sheikh</h1>
              </div>
            </div>
            <div className="article-publications article-area">
              <div className="article-publications-main">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="accordion mt-4" id="accordionExample">
                    {FatwaItems.map((item) => (
                      <div className="accordion-item" key={item.id}>
                        <h2
                          className="accordion-header"
                          id={`heading${item.id}`}
                        >
                          <button
                            className="accordion-button"
                            type="button"
                            onClick={() => toggleAccordion(item.id)}
                            aria-expanded={
                              expandedItemId === item.id ? "true" : "false"
                            }
                            aria-controls={`collapse${item.id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className={`accordion-collapse collapse ${
                            expandedItemId === item.id ? "show" : ""
                          }`}
                          aria-labelledby={`heading${item.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              {item.answer ? item.answer : "No answers yet"}
                            </p>
                          </div>
                        </div>
                      </div>
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
