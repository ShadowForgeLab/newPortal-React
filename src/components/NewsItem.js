import React, { Component } from 'react'
import image from './default.jpg'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date} =this.props;
    return (
      <div>
        <div className="card">
  <img style={{height:"200px"}} src={imgUrl?imgUrl:image} className="card-img-top" alt="..."/>
  <div className="card-body"> 
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">by {author?author:"Unknown Author"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank ' className="btn btn-primary btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
