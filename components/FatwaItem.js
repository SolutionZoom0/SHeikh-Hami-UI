import Link from "next/link";

const FatwaItem = ({ item }) => {
  return (
    <div className="col-lg-6" key={item.id}>
      <div className="article-publications-item">
        <div className="text">
          <Link href="#" target="_blank" className="title">
            {item.question.length > 30
              ? `${item.question.slice(0, 30)}...`
              : item.question}
          </Link>
          <ul className="list-unstyled">
            <li>{item.name}</li>
            <li>{item.publishDate.slice(0, 10)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FatwaItem;
