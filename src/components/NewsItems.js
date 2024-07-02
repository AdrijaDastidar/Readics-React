import React from "react";
import PropTypes from "prop-types";

const NewsItems = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  sources,
}) => {
  return (
    <div className="card">
      <img
        src={
          !imageUrl
            ? "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"
            : imageUrl
        }
        className="card-img-top"
        alt="news"
      />
      <span
        className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
        style={{ left: "90%", zIndex: 1 }}
      >
        {sources}
      </span>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string,
  sources: PropTypes.string,
};

export default NewsItems;
