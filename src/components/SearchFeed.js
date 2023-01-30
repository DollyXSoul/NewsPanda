import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import withRouter from './withRouter';

class SearchFeed extends Component {

  static defaultProps = {
    pageSize: 50
  }

  static propTypes = {
    pageSize: PropTypes.number,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      changedProp: ""
    }
  };

  async updateNews() {
    this.setState({ loading: true })
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?q=${this.props.params.searchTerm}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState(
      {
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      });
    this.props.setProgress(100);
    document.title = `${this.capitalizeFirstLetter(this.props.params.searchTerm)} Headlines - NewsPanda`;
  }

  async componentDidMount() {
    this.updateNews();
  };


  componentDidUpdate(prevProps) {
    if (prevProps.params.searchTerm !== this.props.params.searchTerm) {
      this.updateNews();
      this.setState({
        changedProp: this.props.params.changedProp
      });
    }
  }


  render() {

    return (
      <div style={{ marginTop: '1rem', paddingTop: '0.5rem' }}>
        <h1 className="text-center" >NewsPanda - Top Headlines for "{this.capitalizeFirstLetter(this.props.params.searchTerm)}" </h1>
        {this.state.loading && <Spinner />}

        <div className="container" >
          <div className="row"  >
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-sm-6 col-md-4 " >
                <NewsItem title={element.title} description={element.description}
                  imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
};


export default withRouter(SearchFeed);
