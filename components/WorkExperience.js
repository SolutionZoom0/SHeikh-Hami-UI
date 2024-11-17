const Experience = () => {
  const experiancesItems = [
    {
      id: 1,
      title: "Adobe",
      subTitle: "Senior UI UX Designer",
      icon: "/assets/img/icons/adobe.svg",
      date: "2021-2024",
    },
    {
      id: 2,
      title: "Google Inc.",
      subTitle: "Senior Product Designer",
      icon: "/assets/img/icons/google.svg",
      date: "2019-2021",
    },
    {
      id: 3,
      title: "Meta Inc.",
      subTitle: "Product Designer",
      icon: "/assets/img/icons/meta.svg",
      date: "2018-2019",
    },
    {
      id: 4,
      title: "Adobe",
      subTitle: "Senior UI UX Designer",
      icon: "/assets/img/icons/adobe.svg",
      date: "2017-2018",
    },
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
          </div>
          <div className="info">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
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
          {title !== "Videos" && title !== "Books" && <Experience />}
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
