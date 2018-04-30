import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (props) => {



    
    // return the cover image if the post is an album, otherwise return the image thumbnail
    let returnId = props.image ? props.imageCover : props.imageId


    return(
      <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6 nopadding" key={props.key}>

        <img className="image-fluid image-thumbnail" src={`https://i.imgur.com/${returnId}b.jpg`} />



      </div>
    )

}
