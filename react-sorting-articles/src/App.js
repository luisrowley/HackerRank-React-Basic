import React from 'react'
import './App.css'
import 'h8k-components'

import Articles from './components/Articles'

const title = 'Sorting Articles'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: this.props.articles, flag: 'votes' };
  }

  sortVotes() {
    this.setState({flag: 'votes'});
    this.state.articles.sort((a, b) =>
      a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
    )
  }

  sortDate() {
    this.setState({flag: 'Most Recent'});
    this.state.articles.sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))
  }

  sortAlphabet() {
    this.setState({flag: 'Alphabetical Order'});
    this.state.articles.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 : b.title.toLowerCase() < a.title.toLowerCase() ? 1 : 0
    )
  }

  render() {
    return (
      <div className='App'>
        <h8k-navbar header={title}></h8k-navbar>
        <div className='layout-row align-items-center justify-content-center my-20 navigation'>
          <label className='form-hint mb-0 text-uppercase font-weight-light'>
            Sort By
          </label>
          <button
            data-testid='most-upvoted-link'
            className='small'
            onClick={() => this.sortVotes()}>
            Most Upvoted
          </button>
          <button
            data-testid='most-recent-link'
            className='small'
            onClick={() => this.sortDate()}>
            Most Recent
          </button>
          <button
            data-testid='alphabetical-link'
            className='small'
            onClick={() => this.sortAlphabet()}>
            Alphabetical Order
          </button>
        </div>
        <div className='layout-row align-items-center justify-content-center my-20 navigation'>
          <h4>Sorting by {this.state.flag}</h4>
        </div>
        <Articles articles={this.state.articles}/>
      </div>
    )
  }
}

export default App
