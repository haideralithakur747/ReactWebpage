import { useEffect, useState } from "react";

export default function World() {
  const [articles, setArticles] = useState([]);
  const [infoMessage, setInfoMessage] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  
  async function fetchNews() {
    try {
      const url =
        "https://gnews.io/api/v4/search?q=World%20Us&lang=en&country=us&max=10&apikey=94f41ceef2d0f6ab540cae87b2864d82";
      let response = await fetch(url);
      response = await response.json();

      // Extract information
      if (response.information?.realTimeArticles?.message) {
        setInfoMessage(response.information.realTimeArticles.message);
      }

      if (response.articles) {
        setArticles(response.articles);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
    }
  }

  return (
    <div className="news-container">
      <h1>News API Example</h1>

      {/* API Info Message */}
      {infoMessage && <p style={{ color: "red" }}>{infoMessage}</p>}

      {/* News Articles */}
      <div className="news-container">
      {articles.length > 0 ? (
        articles.map((news) => (
          <div className="news-article" key={news.url} style={{ marginBottom: "15px" }}>
            
            <img
              src={news.image}
              alt={news.title}
              style={{ width: "300px", borderRadius: "8px" }}
            />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noreferrer">
              Read more
            </a>
            <p>
              <b>Source:</b> {news.source.name} ({news.source.country})
            </p>
          </div>
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
    </div>
  );
}