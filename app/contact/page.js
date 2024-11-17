import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
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
                  To Ask Al-Sheikh please fill the form concise and clearly,
                  Sheikh will get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="contact-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
