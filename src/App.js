import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar';
import News from './components/News';
import Searchbar from './components/Searchbar';
import SearchFeed from './components/SearchFeed';


export default class App extends Component {
  state = {
    progress: 0
  }

  setLoad = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Navbar />
          <Searchbar />
          <LoadingBar
            height={3}
            color='#adb5bd'
            progress={this.state.progress}

          />
          <Routes>
            <Route exact path="/" element={<News key="general" setProgress={this.setLoad} pageSize={15} country="in" category="general" />} />
            <Route exact path="/general" element={<News key="general" setProgress={this.setLoad} pageSize={15} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" setProgress={this.setLoad} pageSize={15} country="in" category="business" />} />
            <Route exact path="/science" element={<News key="science" setProgress={this.setLoad} pageSize={15} country="in" category="science" />} />
            <Route exact path="/technology" element={<News key="technology" setProgress={this.setLoad} pageSize={15} country="in" category="technology" />} />
            <Route exact path="/sports" element={<News key="sports" setProgress={this.setLoad} pageSize={15} country="in" category="sports" />} />
            <Route exact path="/health" element={<News key="health" setProgress={this.setLoad} pageSize={15} country="in" category="health" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" setProgress={this.setLoad} pageSize={15} country="in" category="entertainment" />} />
            <Route path="/search/:searchTerm" element={<SearchFeed setProgress={this.setLoad} pageSize={50} />} />
          </Routes>

        </Router>
      </div>
    )
  }
}







