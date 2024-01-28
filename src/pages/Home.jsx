import  { useEffect, useState } from 'react';
import './Home.css';
import Section from '../components/Section';
import newsJSON from '../data/news.json';
import { Link } from 'react-router-dom';

function Home() {
  const itemsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);

  const fetchNews = () => {
    setNewsData(newsJSON);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const total_pages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsData = newsData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Section />
          </div>

          <div className="col-8">
            <div className="container hero">
              <h3>News</h3>
              {currentNewsData.map((newsItem) => (
                <div className="blog" key={newsItem.news_id}>
                  <div className="blog-content">
                    <h4>
                    <Link to={`news/${newsItem.news_id}`}>
        {newsItem.news_title}
      </Link>                    </h4>
                    <p className="inline-content">
                      {newsItem.news_image ? (
                         <img className="blog-image" src={newsItem.news_image} alt="Dummy Image" />
                         ) : null}
                         {newsItem.news_content}
                    </p>

                    <p style={{ float: 'right' }}>
                      <i className="fal fa-calendar"></i> {new Date(newsItem.date_posted).toDateString()}
                    </p>
                  </div>
                </div>
              ))}

              <div className="container">
                <ul className="pagination">
                  {currentPage > 1 && (
                    <li>
                      <a className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                        Prev
                      </a>
                    </li>
                  )}

                {Array.from({ length: total_pages }, (_, index) => (
                  <li key={index}>
                    <a
                      className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}

                  {currentPage < total_pages && (
                    <li>
                      <a className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
