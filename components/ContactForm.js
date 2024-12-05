"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !subject || !message) {
      setFieldError(true);
      setError("All fields are required.");
      clearError();
      return;
    }

    const requestBody = {
      data: {
        name,
        email,
        subject,
        question: message,
        answer: "",
        publishDate: new Date(),
      },
      collection: "Fatwa",
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
        setFormData({ name: "", email: "", subject: "", message: "" });
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
                <label className="form-label">Name</label>
                <input
                  name="name"
                  onChange={onChange}
                  value={name}
                  required
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  onChange={onChange}
                  value={email}
                  required
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-4">
                <label className="form-label">Subject</label>
                <input
                  name="subject"
                  onChange={onChange}
                  value={subject}
                  required
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-4">
                <label className="form-label">Question</label>
                <textarea
                  name="message"
                  onChange={onChange}
                  value={message}
                  required
                  className="form-control shadow-none"
                  rows={4}
                  placeholder="Type details about your question"
                />
              </div>
            </div>
            <div className="col-md-12">
              <button className="submit-btn" type="submit">
                Ask Al-Sheikh
                <svg
                  className="icon"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 11.6665V6.6665H12.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.6665L10 14.1665L2.5 6.6665"
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
          {error
            ? error
            : success
            ? "Thank you! Your question has been submitted."
            : ""}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
