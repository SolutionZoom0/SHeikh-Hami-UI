import Link from "next/link";

const BlogItem = ({ item }) => {
  return (
    <div className="col-lg-12" key={item.id}>
      <div className="article-publications-item">
        <div
          className="text"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href={item.URL} target="_blank" className="title">
            {item.title}
          </Link>
          <p>{item.category}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogItem;
