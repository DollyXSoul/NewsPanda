import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 15,
        category: "general"

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
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
            totalResults: 0
        }
    };

    async updateNews() {
        this.setState({ loading: true })
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
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
        document.title = `${this.capitalizeFirstLetter(this.props.category)} -  NewsPanda`;
    }

    async componentDidMount() {
        this.updateNews();
    };

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false
            });

    };

    render() {
        return (
            <div style={{ marginTop: '1rem', paddingTop: '0.5rem' }}>
                <h1 className="text-center" >NewsPanda - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />} style={{ overflow: 'hidden' }} >

                    <div className="container" >
                        <div className="row"  >
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-sm-6 col-md-4 " >
                                    <NewsItem title={element.title} description={element.description}
                                        imageURL={element.urlToImage} newsURL={element.url} author={element.author}
                                        date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
};
