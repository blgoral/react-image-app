import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      term: '',
      placeholder: 'Search for Images....'
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.setSearchTerms = _.debounce((term) => {
      this.props.fetchData(this.state.term)
    }, 400)

  }



  onInputChange(event) {
    this.setSearchTerms(event)
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
  }



  render(){

    return(
    <div>
      <nav className="navbar navbar-light bg-dark">

      <form className="form-inline" onSubmit={this.onFormSubmit}>
        <input className="search-bar form-control mr-sm-2" type="search" placeholder={this.state.placeholder} value={this.state.term} onChange={this.onInputChange}/>
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
