import Link from "next/link";

const FatwaItem = ({ item }) => {
  const gotoDetails = (item) => {
    localStorage.setItem("selectedFatwa", JSON.stringify(item));
  };
  return (
    <div className="col-lg-6" key={item.id}>
      <div className="article-publications-item">
        <div className="text">
          <Link
            href={`/fatwa_details`}
            onClick={() => gotoDetails(item)}
            className="title"
          >
            {item.question.length > 30
              ? `${item.question.slice(0, 30)}...`
              : item.question}
          </Link>
          <ul className="list-unstyled">
            <li>{item.name}</li>
            <li>{item.publishDate.slice(0, 10)}</li>
            <li>
              <Link href={`/fatwa_details`} onClick={() => gotoDetails(item)}>
                more details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FatwaItem;
