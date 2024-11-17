import BlogItem from "@/components/BlogItem";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  const blogItems = [
    {
      id: 1,
      title: "Are you new muslim? Learn more about prophet of Islam",
      img: "assets/img/blog/blog-img-1.jpg",
      category: "Feqh",
      date: "Nov 6, 2023",
      readingTime: "15 min",
    },
    {
      id: 2,
      title: "Are you new muslim? Learn more about prophet of Islam",
      img: "assets/img/blog/blog-img-2.jpg",
      category: "Seerah",
      date: "Nov 6, 2023",
      readingTime: "15 min",
    },
    {
      id: 3,
      title: "Are you new muslim? Learn more about prophet of Islam",
      img: "assets/img/blog/blog-img-3.jpg",
      category: "Hadeeth",
      date: "Nov 6, 2023",
      readingTime: "15 min",
    },
    {
      id: 4,
      title: "Are you new muslim? Learn more about prophet of Islam",
      img: "assets/img/blog/blog-img-4.jpg",
      category: "Tawheed",
      date: "Nov 6, 2023",
      readingTime: "15 min",
    },
    {
      id: 5,
      title: "Are you new muslim? Learn more about prophet of Islam",
      img: "assets/img/blog/blog-img-5.jpg",
      category: "Islamic History",
      date: "Nov 6, 2023",
      readingTime: "15 min",
    },
    {
      id: 6,
      title: "Are you new muslim? Learn more about prophet of Islam",
      img: "assets/img/blog/blog-img-6.jpg",
      category: "Kids",
      date: "Nov 6, 2023",
      readingTime: "15 min",
    },
  ];
  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">Recent Questions to the Sheikh</h1>
                <h2>STILL UNDER DEVELOPMENT</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
