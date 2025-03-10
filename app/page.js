import WorkExperience from "@/components/WorkExperience";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  return (
    <BentoFolioLayout homePage={true}>
      <div className="col-xl-4">
        <div className="row g-4">
          <div className="col-lg-12">
            <WorkExperience title="Videos" />
          </div>
          <div className="col-lg-12">
            <WorkExperience title="Articles" />
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="row g-4">
          <div className="col-lg-12">
            <WorkExperience title="Books" />
          </div>
          <div className="col-lg-12">
            <WorkExperience title="Fatawas" />
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
