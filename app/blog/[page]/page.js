import BlogItem from "@/components/BlogItem";
import BentoFolioLayout from "@/layout/BentoFolioLayout";

const POSTS_PER_PAGE = 10;

async function fetchBlogItems(page) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${POSTS_PER_PAGE}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const totalPosts = response.headers.get("x-total-count") || 100; // Default to 100 if header is missing
  return { data, totalPosts };
}

export async function generateStaticParams() {
  // Assuming a total of 100 posts and 10 per page, pre-generate pages
  const totalPosts = 100;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function page({ params }) {
  const page = parseInt(params.page || "1", 10);
  const { data: blogItems, totalPosts } = await fetchBlogItems(page);
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <BentoFolioLayout>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">Recent Articles and Publications</h1>
              </div>
            </div>
            <div className="article-publications article-area">
              <div className="article-publications-main">
                <div className="row">
                  {blogItems.map((item) => (
                    <BlogItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="pagination">
              <ul className="list-unstyled">
                {/* Previous Button */}
                <li className="prev">
                  {page > 1 && (
                    <a href={`/blog/${page - 1}`}>
                      <button>
                        <svg
                          className="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  )}
                </li>
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <a href={`/blog/${i + 1}`}>
                      <button className={page === i + 1 ? "active" : ""}>
                        {i + 1}
                      </button>
                    </a>
                  </li>
                ))}
                {/* Next Button */}
                <li className="next">
                  {page < totalPages && (
                    <a href={`/blog/${page + 1}`}>
                      <button>
                        <svg
                          className="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
}
