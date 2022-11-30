import React, { Component } from 'react'
import './newsitem.css'
export default class NewsItem extends Component {

    render() {

        let { title, description, imageURL, newsURL, author, date, source } = this.props;
        return (
            <div className=" my-3">
                <div className="card text-bg-light"  >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" >{source}</span>
                    </div>
                    <img src={!imageURL ? "https://www.shutterstock.com/image-vector/newspaper-icon-vector-template-600w-1269716161.jpg" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">{title}  </h5>
                        <p className="card-text ">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleTimeString()}</small></p>
                        <div className="d-grid gap-2">
                            <a href={newsURL} className="btn btn-dark " target="_blank" rel="noreferrer">Read More....</a></div>
                    </div>
                </div>
            </div>
        )
    }
}




