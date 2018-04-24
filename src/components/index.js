import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../actions'

class PostsIndex extends Component {
  componentDidMount(){

    this.props.fetchData('memes')

  }

  renderData(galleryData) {

    //number of elements to show on page
    const numberToShow = 10
    galleryData.data.length = numberToShow
    const listItem = galleryData.data.map(value => <li key={value.id}>{value.title}</li>)
    return(listItem)
  }

  render(){

        return (
      //use the map method to run the renderData function for each item in the array
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {
            //use the map method to run the renderData function for each item in the array
            this.props.posts.map(this.renderData)
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchData })(PostsIndex) // { fetchPosts } is the same as { fetchPosts: fetchPosts}
