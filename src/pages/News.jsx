import { useEffect, useState } from 'react';
import Section from '../components/Section';
import { useParams } from 'react-router-dom';
import newsJSON from '../data/news.json';

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const selectedNews = newsJSON.find((article) => article.news_id === parseInt(id));

    setNews(selectedNews);

    document.title = selectedNews ? `${selectedNews.news_title} | ISPSC Tagudin` : 'Home | ISPSC Tagudin';

    return () => {
      document.title = 'Home | ISPSC Tagudin';
    };
  }, [id]);

  if (!news) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Section></Section>
          </div>

          <div className="col-8">
            <div className="container hero">
              <h3>{news.news_title}</h3>
              <p>
                <i className="fal fa-calendar"></i>{' '}
                {new Date(news.date_posted).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <div className="container">
                <div className="blog">
                  <div className="blog-content">
                    {news.news_image && <img className="blog-image" style={{ margin: '0 auto' }} src={news.news_image} alt="" />}
                    <p>{news.news_content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
