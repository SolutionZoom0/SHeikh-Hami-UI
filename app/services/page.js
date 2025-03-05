import Awards from "@/components/Awards";
import Brands from "@/components/Brands";
import Faq from "@/components/Faq";
import ServiceItem from "@/components/ServiceItem";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const serviceItems = [
    { id: 1, icon: "/assets/img/icons/ui-ux.svg", title: "UI UX Design" },
    { id: 2, icon: "/assets/img/icons/app.svg", title: "Mobile App" },
    {
      id: 3,
      icon: "/assets/img/icons/prd-design.svg",
      title: "Product Design",
    },
    { id: 4, icon: "/assets/img/icons/branding.svg", title: "Branding" },
    { id: 5, icon: "/assets/img/icons/camera.svg", title: "Photography" },
    { id: 6, icon: "/assets/img/icons/youtube.svg", title: "Motion Design" },
    {
      id: 7,
      icon: "/assets/img/icons/web-development.svg",
      title: "Web Development",
    },
    { id: 8, icon: "/assets/img/icons/view.svg", title: "Visualization" },
  ];
  return (
    <BentoFolioLayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Videos / <span>Lessons</span>
                </h1>
                <br />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
