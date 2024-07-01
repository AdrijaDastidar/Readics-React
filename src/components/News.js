import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 5,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    const { page } = this.state;
    const { country, category, pageSize } = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=1c4eeb61fff64b999d4a1f764e982a6e`;
    try {
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        loading: false,
        totalResults: parseData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching the news data:", error);
      this.setState({ loading: false });
    }
  };

  handlePreviousClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.fetchNews
    );
  };

  handleNextClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    const { articles, loading, page, totalResults } = this.state;
    const { pageSize } = this.props;

    return (
      <>
        <h1>Top Headlines</h1>
        {loading && <Loading />}
        <div className="row my-3">
          {articles.map((element) => (
            <div className="col-md-4 my-3" key={element.url}>
              <NewsItems
                title={element.title}
                description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handlePreviousClick}
            disabled={page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleNextClick}
            disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
