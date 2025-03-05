"use client";

import { useState, useEffect } from "react";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

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
  const [isEditing, setIsEditing] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [expandedAnswers, setExpandedAnswers] = useState({});
  const user = useAuth();
  const ANSWER_PREVIEW_LENGTH = 200;

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
  }, [currentPage, isEditing]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleAccordion = (itemId) => {
    setIsEditing(false);
    setExpandedItemId(expandedItemId === itemId ? null : itemId);
  };

  const toggleReadMore = (itemId) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <h1 className="main-title">Recent Questions to the Sheikh</h1>
            <div className="accordion mt-4" id="accordionExample">
              {loading ? (
                <p>Loading...</p>
              ) : (
                FatwaItems.map(
                  (item) =>
                    (item.answer || user.role === "Admin") && (
                      <div
                        className={`accordion-item ${
                          !item.answer ? "unanswered" : ""
                        }`}
                        key={item.id}
                      >
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
                            {!isEditing ? (
                              <>
                                <p
                                  className={
                                    !item.answer
                                      ? "text-danger font-weight-bold"
                                      : ""
                                  }
                                >
                                  {item.answer ? (
                                    expandedAnswers[item.id] ||
                                    item.answer.length <=
                                      ANSWER_PREVIEW_LENGTH ? (
                                      item.answer
                                    ) : (
                                      <>
                                        {item.answer.slice(
                                          0,
                                          ANSWER_PREVIEW_LENGTH
                                        )}
                                        ...
                                        <Link
                                          href="#"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            toggleReadMore(item.id);
                                          }}
                                        >
                                          Read More
                                        </Link>
                                      </>
                                    )
                                  ) : (
                                    "No answer yet"
                                  )}
                                </p>
                                {user.role === "Admin" && (
                                  <Link
                                    href="#"
                                    className="btn btn-primary btn-sm"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setIsEditing(true);
                                      setAnswer(item.answer || "");
                                    }}
                                  >
                                    {item.answer ? "Edit" : "Reply"}
                                  </Link>
                                )}
                              </>
                            ) : (
                              <>
                                <textarea
                                  name="title"
                                  onChange={(e) => setAnswer(e.target.value)}
                                  value={answer}
                                  required
                                  className="form-control shadow-none mt-2"
                                  cols="30"
                                  rows="5"
                                />
                                <Link
                                  href="#"
                                  className="btn btn-success btn-sm mt-2"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // Save function call goes here
                                    setIsEditing(false);
                                  }}
                                >
                                  Save
                                </Link>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .accordion-item.unanswered .accordion-button {
          background-color: #ffe5e5;
          border-left: 4px solid red;
          font-weight: bold;
        }
        .accordion-item.unanswered .accordion-body p {
          color: red;
        }
        .accordion-button:hover {
          background-color: #f8f9fa;
        }
        .accordion-button:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        .btn {
          padding: 5px 10px;
          font-size: 14px;
          border-radius: 5px;
        }
        .btn-primary {
          background-color: #007bff;
          border: none;
        }
        .btn-success {
          background-color: #28a745;
          border: none;
        }
      `}</style>
    </BentoFolioLayout>
  );
}
