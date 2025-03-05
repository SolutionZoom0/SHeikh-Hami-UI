"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Experience = ({ title }) => {
  console.log(title);
  const [experiancesItems, setexperiancesItems] = useState([]);
  useEffect(() => {
    const loadBlogItems = async () => {
      try {
        const { data } = await fetchBlogItems();
        setexperiancesItems(data.data);
      } catch (error) {
        console.error("Error fetching blog items:", error);
      }
    };

    loadBlogItems();
  }, []);
  async function fetchBlogItems(page) {
    const response = await fetch(
      `https://us-central1-sheikhhami-d00bd.cloudfunctions.net/readData?collection=${
        title === "Fatawas" ? "Fatwa" : "Article"
      }&_start=0&_limit=10`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); // Default to 100 if header is missing
    return { data: data };
  }
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="info">
            <div
              className="text"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h4 className="title">
                {title === "Fatawas" ? (
                  <Link href="fatawa" target="_blank" className="title">
                    {item.question}
                  </Link>
                ) : (
                  <Link href={item.URL} target="_blank" className="title">
                    {item.title}
                  </Link>
                )}
              </h4>
              <h6 className="subtitle">
                {title === "Fatawas" ? item.name : item.category}
              </h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const WorkExperience = ({ title }) => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">{title}</h3>
        <div className="work-experiance-main">
          {title === "Videos" && (
            <p>
              Al-Sheikh Mohammad Motaz has launched a weekly series at the
              Roswell Community Center, where he explains Al-Majmoo by Imam
              Al-Nawawi. To watch these episodes, visit his{" "}
              <a
                href="https://www.youtube.com/playlist?list=PLBN2NiezF7VHMG_pFlnzRCrffOreJNS5t"
                target="_blank"
              >
                {" "}
                Youtube channel{" "}
              </a>
            </p>
          )}
          {title === "Books" && (
            <p>
              Al-Sheikh Mohammad Motaz wrote Echoes of Eternity, Hashia in
              Hanafi Fiqh, Women of Wisdom, A Concise Guide to Islam, and Bond
              of Brotherhood. He created over 399 stories for kids, visit the{" "}
              <a
                href="https://www.amazon.com/stores/author/B0CP8JB79N/allbooks"
                target="_blank"
              >
                Book Store
              </a>
            </p>
          )}
          {title !== "Videos" && title !== "Books" && (
            <Experience title={title} />
          )}
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
