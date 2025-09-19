import { useEffect, useState } from "react";

export default function About() {
  const [articles, setArticles] = useState([]);
  const [infoMessage, setInfoMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const url =
        "https://gnews.io/api/v4/search?q=About%20Us&lang=en&country=us&max=10&apikey=94f41ceef2d0f6ab540cae87b2864d82";
      let response = await fetch(url);
      response = await response.json();

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
    } finally {
      setLoading(false);
    }
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        About Us
      </h1>

      {infoMessage && (
        <p style={{ textAlign: "center", color: "red" }}>{infoMessage}</p>
      )}

      {articles.length === 0 ? (
        <p style={{ textAlign: "center" }}>No articles found.</p>
      ) : (
        articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "10px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "15px",
                fontSize: "1.1rem",
                fontWeight: "500",
                cursor: "pointer",
                background: activeIndex === index ? "#f1f1f1" : "white",
                border: "none",
                outline: "none",
              }}
            >
              {article.title}
              <span style={{ float: "right" }}>
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {activeIndex === index && (
              <div
                style={{
                  padding: "15px",
                  background: "#fafafa",
                  borderTop: "1px solid #ddd",
                }}
              >
                <p>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  Read more
                </a>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
