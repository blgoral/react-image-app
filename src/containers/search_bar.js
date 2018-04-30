import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this)
    
    this.setSearchTerms = _.debounce((term) => {
      this.props.fetchData(this.state.term)
    }, 300)

  }



  onInputChange(event) {
    this.setSearchTerms(event)
    this.setState({ term: event.target.value})
  }



  render(){

    return(
    <div>
      <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand">Imgur Image Search</a>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" value={this.state.term} onChange={this.onInputChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
