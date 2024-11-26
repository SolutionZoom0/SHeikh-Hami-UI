import Link from "next/link";

const BlogItem = ({ item }) => {
  return (
    <div className="col-lg-6" key={item.id}>
      <div className="article-publications-item">
        <div className="text">
          <Link href="#" className="title">
            {item.title}
          </Link>
          <ul className="list-unstyled">
            <li>{item.readingTime} read</li>
            <li>{item.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
