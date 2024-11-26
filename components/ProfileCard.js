"use client";
import ClipboardJS from "clipboard";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    new ClipboardJS(".btn-copy");
  }, []);

  const toggleBtn = () => {
    setToggle(true);
    const timerId = setTimeout(() => {
      setToggle(false);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  };

  const socialItems = [
    {
      id: 1,
      href: "https://www.facebook.com/people/%D9%85%D8%AD%D8%A8%D9%8A-%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%B9%D8%AA%D8%B2-%D8%AD%D9%85%D9%8ADr-Mohammad-Motazz-Hami/61563405472787/",
      name: "Facebook",
      icon: "fab fa-facebook",
    },
    {
      id: 2,
      href: "https://www.amazon.com/stores/author/B0CP8JB79N/allbooks",
      name: "Amazon",
      icon: "fab fa-amazon",
    },
    { id: 3, href: "#", name: "Instagram", icon: "fab fa-instagram" },
    {
      id: 4,
      href: "https://www.youtube.com/playlist?list=PLBN2NiezF7VHMG_pFlnzRCrffOreJNS5t",
      name: "Youtube",
      icon: "fab fa-youtube",
    },
  ];

  return (
    <div className="card profile-card">
      <div className="card-body">
        <div className="image text-center">
          <img
            src="../assets/img/images/profile.png"
            alt="profile"
            width="60%"
          />
        </div>
        <div className="text">
          <h3 className="card-title">Al-Sheikh Motaz</h3>
          <p>
            Sheikh Mohammad Motaz, a scholar of Arabic studies and Islamic
            jurisprudence.
          </p>
          <div className="social-media-icon">
            <ul className="list-unstyled">
              {socialItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} target="_blank">
                    <i className={item.icon} />
                  </a>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
