import { Link } from "react-router-dom";

function GalleryCard({ id, tag, image, demo: demo_link, source: source_link }) {
  return (
    <div className="card">
      <Link to={`/articles/${id}`}>
        <div className="card-image">
          <img src={require(`../assets/${image}`)} alt="" />
        </div>

        <div className="card-description-absolute">
          <div className="card-description">
            <h3>{tag}</h3>
            <div className="card-description-link">
              {demo_link === "" ? null : (
                <a className="card-link" href={demo_link}>
                  Demo
                </a>
              )}

              <a className="card-link" href={source_link}>
                Source code
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GalleryCard;
