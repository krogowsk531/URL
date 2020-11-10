import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => {this.setState({ urls: data.urls})})
      .catch(error => console.error('Error fetching data', error))
  }

  makeUrlPost = (shortUrl) => {
    if(shortUrl.title && shortUrl.urlToShorten && shortUrl.title.length > 0 && shortUrl.urlToShorten > 0) {
      let successful = true
      postUrl(shortUrl)
      .catch(error => {
        successful = false;
        console.error(error)
      })
      if(successful) {
        let urls = this.state.urls
        urls.push(shortUrl)
        this.setState({urls: urls})
      }
    }
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm makeUrlPost={this.makeUrlPost}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
