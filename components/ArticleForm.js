"use client";

import { useState } from "react";

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    category: "",
    URL: "",
  });

  const { title, duration, category, URL } = formData;
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!title || !duration || !category || !URL) {
      setFieldError(true);
      setError("All fields are required.");
      clearError();
      return;
    }

    const requestBody = {
      data: {
        title,
        duration,
        category,
        URL,
        publishDate: new Date(),
      },
      collection: "Article",
    };

    try {
      const response = await fetch(
        "https://us-central1-sheikhhami-d00bd.cloudfunctions.net/createData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFieldError(false);
        setError(null);
        setFormData({ title: "", duration: "", category: "", URL: "" });
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setError("Failed to submit the form. Please try again later.");
    } finally {
      clearError();
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  return (
    <div className="leave-comments-area">
      <div className="comments-box">
        <form onSubmit={onSubmit} id="contact-form">
          <div className="row gx-3">
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Title</label>
                <input
                  name="title"
                  onChange={onChange}
                  value={title}
                  required
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter article title"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Duration</label>
                <input
                  name="duration"
                  onChange={onChange}
                  value={duration}
                  required
                  type="duration"
                  className="form-control shadow-none"
                  placeholder="Enter the article duration"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Category</label>
                <input
                  name="category"
                  onChange={onChange}
                  value={category}
                  required
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Category"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">URL</label>
                <input
                  name="URL"
                  onChange={onChange}
                  value={URL}
                  required
                  className="form-control shadow-none"
                  rows={4}
                  placeholder="Type the url for the uploaded article"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button className="submit-btn" type="submit">
                Add New Article
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
              </button>
            </div>
          </div>
        </form>
        <p
          className={`ajax-response mb-0 ${
            fieldError ? "error" : success ? "success" : ""
          }`}
          style={{ display: error || success ? "block" : "none" }}
        >
          {error ? error : success ? "New Article published Successfully!" : ""}
        </p>
      </div>
    </div>
  );
};

export default ArticleForm;
