import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../actions'
import GalleryTile from './gallery_tile'

class PostsIndex extends Component {
  componentDidMount(){

    this.props.fetchData('cats')

  }

  renderData(galleryData) {

    //number of elements to show on page
    const numberToShow = 6
    galleryData.data.length = numberToShow
    console.log(galleryData.data)
    const listItem = galleryData.data.map(value =>
      <GalleryTile
      isAlbum={value.is_album}
      imageCover={value.cover}
      imageId={value.id}
      title={value.title}
      image={value.images}
      />)
    return(listItem)
  }

  render(){

        return (
      <div>
        <h3>Posts</h3>
        <div className="container">
          <div className ="row">
          {
            //use the map method to run the renderData function for each item in the array
            this.props.posts.map(this.renderData)
          }
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchData })(PostsIndex) // { fetchPosts } is the same as { fetchPosts: fetchPosts}
