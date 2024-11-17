import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
import Link from "next/link";
const page = () => {
  const projectItems = [
    {
      id: 1,
      title: "FlowSaaS - SaaS Application Tools",
      subtitle: "SaaS App | UI UX Design",
      img: "/assets/img/projects/project-1.png",
    },
    {
      id: 2,
      title: "AIMug - AI Writing Application Tools",
      subtitle: "Product Design | Application",
      img: "/assets/img/projects/project-2.png",
    },
    {
      id: 3,
      title: "FlowArch - Architecture Service Website",
      subtitle: "UI UX Design | Development",
      img: "/assets/img/projects/project-3.png",
    },
  ];
  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Check Out My Latest <span>Books</span>
                </h1>
                <p>
                  Al-Sheikh Mohammad Motaz has written several notable works,
                  including Echoes of Eternity, which explores Quranic stories,
                  and Hashia in Hanafi Fiqh, a detailed commentary on Hanafi
                  jurisprudence. His book Women of Wisdom contrasts the roles of
                  women in Islamic history with Western perspectives, while A
                  Concise Guide to Islam introduces key Islamic concepts.
                  Additionally, Bond of Brotherhood focuses on the Prophet’s
                  companions, and From the Golden Age to Today highlights the
                  contributions of Muslim scientists. He has also authored over
                  399 children’s stories to impart Islamic values. To read
                  El-Sheikh books, visit the{" "}
                  <a
                    href="https://www.amazon.com/stores/author/B0CP8JB79N/allbooks"
                    target="_blank"
                  >
                    Book Store
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
