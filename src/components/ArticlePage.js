import { useParams } from "react-router-dom";
import local_data from "../data/local_data";
import NotFoundPage from "./NotFoundPage";
import "../stylesheets/article.css";

function ArticlePage() {
  let index = 1;
  const { articleId } = useParams();
  const article = local_data.find((article) => article.id === articleId);
  const demo_link = article.demo_link;
  const source_link = article.source_link;
  window.scrollTo(0, 0);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section id="article">
        <div className="banner">
          <img src={require(`../assets/${article.images[0]}`)} alt="" />
        </div>

        <div className="article-body">
          <h1>{article.title.toUpperCase()}</h1>

          {article.content.map((paragraph, i) => {
            if (paragraph === "image" && index < article.images.length) {
              return (
                <img
                  key={i}
                  src={require(`../assets/${article.images[index++]}`)}
                  className="article-image"
                  alt=""
                />
              );
            } else if (paragraph === "video" && index < article.images.length) {
              return (
                <video
                  className="article-video"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source
                    src={require(`../assets/${article.images[index++]}`)}
                    type="video/mp4"
                  />
                </video>
              );
            } else {
              return (
                <p key={i} className="article-paragraph">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        <div className="article-external-link">
          {demo_link === "" ? null : (
            <a className="article-link" href={demo_link}>
              Demo
            </a>
          )}
          <a className="article-link" href={source_link}>
            Source
          </a>
        </div>
      </section>
    </>
  );
}

export default ArticlePage;
