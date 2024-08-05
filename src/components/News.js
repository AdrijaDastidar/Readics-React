import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// TODO: Add API which supports hosting (currently using newsapi)
// News component to display a list of news articles
export class News extends Component {
  // Default props if none are provided
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 5,
    heading: "Top Headlines",
  };

  // Prop types for validation
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    heading: PropTypes.string.isRequired,
  };

  // Constructor to initialize state
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  // Fetch news articles when the component mounts
  componentDidMount() {
    this.fetchNews();
  }

  // Function to fetch news articles from the API
  fetchNews = async () => {
    this.setState({ loading: true });
    const { page } = this.state;
    const { country, category, pageSize } = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=1c4eeb61fff64b999d4a1f764e982a6e`;
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      if (data.status === "ok") {
        // Update state with new articles
        this.setState((prevState) => ({
          articles:
            page === 1
              ? data.articles
              : [...prevState.articles, ...data.articles],
          loading: false,
          totalResults: data.totalResults,
        }));
      } else {
        console.error("Articles data is not in expected format:", data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("Error fetching the news data:", error);
      this.setState({ loading: false });
    }
  };

  // Function to fetch more data when user scrolls down
  fetchMoreData = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchNews();
      }
    );
  };

  render() {
    const { articles, loading } = this.state;

    return (
      <>
        <h1 className="text-center">{this.props.heading}</h1>
        <InfiniteScroll
          dataLength={articles ? articles.length : 0}
          next={this.fetchMoreData}
          hasMore={articles.length < this.state.totalResults}
          loader={<Loading />}
          style={{ overflowX: "hidden" }}
        >
          <div className="row my-3">
            {articles && articles.length > 0 ? (
              articles.map((element, index) => (
                <div className="col-md-4 my-3" key={`${element.url}-${index}`}>
                  <NewsItems
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    sources={element.source.name}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No articles found</p>
            )}
          </div>
        </InfiniteScroll>
        {loading && <Loading />}
      </>
    );
  }
}

export default News;
