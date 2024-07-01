import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imageUrl
              ? "https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE="
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "180px" }}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
