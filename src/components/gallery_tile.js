import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (props) => {



    console.log(props)
    // return the cover image if the post is an album, otherwise return the image thumbnail
    let returnId = props.image ? props.imageCover : props.imageId


    return(
      <div className="col col-md-3" key={props.key}>

        <img className="image-responsive" src={`https://i.imgur.com/${returnId}b.jpg`} />



      </div>
    )

}
