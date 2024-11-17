import Awards from "@/components/Awards";
import BlogSlider from "@/components/Blog";
import Brands from "@/components/Brands";
import Testimonial from "@/components/Testimonial";
import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const counterItems = [
    { id: 1, title: "Videos", value: 50 },
    { id: 2, title: "Books", value: 400 },
    { id: 3, title: "Articles", value: 75 },
  ];
  const about = {
    name: "Sheikh Motaz",
    bio: `
Scholar of Arabic Studies and Islamic Jurisprudence<br><br>

<b>Early Life and Education</b><br>
Born into a family that cherished education and religious scholarship, Mohammad Hami exhibited a passion for Islamic studies and the Arabic language from an early age. His quest for knowledge led him to some of the most prestigious institutions in the Islamic world.
<br><br>
Hami’s academic journey began at Al-Azhar University, a revered center of Islamic learning, where he earned his bachelor’s degree in Islamic studies. Building on this foundation, he pursued a master’s degree in Fiqh (Islamic jurisprudence) at Al-Azhar, specializing in the interpretation and application of Islamic law. Seeking to deepen his expertise, he then embarked on a PhD in Arabic Studies at Beirut University in collaboration with Al-Azhar, focusing his research on the linguistic and rhetorical intricacies of classical Arabic texts.
<br><br>
<b>Contributions and Achievements</b><br>
Mohammad Hami has made notable contributions to Arabic studies and Islamic jurisprudence. His scholarly works are well-regarded in academic circles, and he has authored several influential books that reflect his profound understanding of Islamic traditions and the Arabic language:
<br>
Echoes of Eternity: Timeless Tales from the Quran — A 273-page exploration that brings Quranic stories to life with deep insights and reflections.
<br>
Hashia in Hanafi Fiqh — A comprehensive 353-page commentary titled "حاشية على شرح مجمع البحرين," serving as a critical reference in Hanafi jurisprudence.
<br>
Women of Wisdom: The Role of Women Between Islam and Western Society — A 133-page examination of women’s contributions in Islamic history, juxtaposed with Western perspectives.
<br>
A Concise Guide to Islam — A 55-page introductory guide outlining essential Islamic concepts and terms, accessible for newcomers.
<br>
Bond of Brotherhood: Al-Sahaba and the Prophet's Mission — A detailed account of the Prophet Muhammad's companions and their pivotal roles in early Islam.
<br>
From the Golden Age to Today: The Impact of Muslim Scientist-Inventors — An exploration of the enduring influence of Muslim scientists from the Islamic Golden Age to modern times.
<br>
More Than 665 Children's Stories — An extensive collection designed to impart Islamic values and teachings to young readers, available for purchase on Amazon.
<br><br>
<b>Teaching and Mentorship</b><br>
Beyond his research, Mohammad Hami has devoted much of his career to teaching and mentoring. As a respected professor, he has inspired countless students in Islamic studies and the Arabic language. Known for his approachable teaching style and vast knowledge, he continues to shape the next generation of scholars.
<br><br>
<b>Legacy and Vision</b><br>
Mohammad Hami remains a key figure in academic and religious communities. His dedication to Arabic and Islamic jurisprudence exemplifies his commitment to preserving and modernizing classical scholarship. His work addresses contemporary issues while honoring Islamic traditions, making them accessible and relevant today.
<br><br>
<b>Personal Life</b><br>
Despite his demanding academic career, Hami is known for his humility and commitment to community service. Actively participating in educational and charitable initiatives, he seeks to give back and promote understanding and knowledge. His life’s work reflects a dedication to Islamic scholarship and a vision for a more informed and enlightened world. `,
  };

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  <span>{about.name}</span>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: about.bio }}></p>
              </div>
            </div>
            <div className="counter-area">
              <div className="counter">
                {counterItems.map((item) => (
                  <div className="counter-item" key={item.id}>
                    <h3 className="number">{item.value}+</h3>
                    <p className="subtitle">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
