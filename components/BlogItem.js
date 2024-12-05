import Link from "next/link";

const BlogItem = ({ item }) => {
  return (
    <div className="col-lg-6" key={item.id}>
      <div className="article-publications-item">
        <div className="text">
          <Link href={item.URL} target="_blank" className="title">
            {item.title}
          </Link>
          <ul className="list-unstyled">
            <li>{item.duration} read</li>
            <li>{item.publishDate}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
