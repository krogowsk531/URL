import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleTitleChange = event => {
    event.preventDefault()
    this.setState({title: event.target.value})
  }

  handleUrlChange = event => {
    event.preventDefault();
    this.setState({urlToShorten: event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
    const newUrl = {title: this.state.title, urlToShorten: this.state.urlToShorten}
    this.props.makeUrlPost(newUrl)
  }

  handleSubmit = event => {
    event.preventDefault();

  }
  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleTitleChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleUrlChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
