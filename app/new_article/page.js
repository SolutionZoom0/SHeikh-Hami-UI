import ArticleForm from "@/components/ArticleForm";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card contact-card">
            <div className="top-info">
              <div className="text">
                <p>
                  To Create a new article please add following information about
                  Sheikh Article.
                </p>
              </div>
            </div>
            <div className="contact-area">
              <ArticleForm />
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
