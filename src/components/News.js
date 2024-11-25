import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {


    static defaultProps={
        country:'us',
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles:[],
            loading:false,
            page:1,
            
        }
    }

     handleNextClick=async()=>{
            
            console.log("Next");
            //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=55dabaeb0fdc438dbea2c44e387127a4&page=1&pageSize=5
            this.setState(
                (prevState)=>({page:prevState.page+1}),
                ()=>this.fetchNews()
            )
        }
    handlePreviousClick=async()=>{
            console.log("Next");
            this.setState(
                (prevState)=>({page:prevState.page-1}),
                ()=>this.fetchNews()
            )
    }
    //fetching 
    async componentDidMount(){
        console.log(`${this.props.category}`)
        this.fetchNews();
    }
    // without using componentDidUpdate we  directlty use exact on route and 
    //call this.setState({page:this.state.page-1/+1})
    //if componentDidUpdate used then prevProps and prevState as argument
    async componentDidUpdate(prevProps,prevState){
        console.log(`${this.props.category}`)
        if(prevProps.category!==this.props.category){
            this.setState({page:1},()=>this.fetchNews())
        }
    }

    fetchNews=async()=>{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55dabaeb0fdc438dbea2c44e387127a4&page=${this.state.page}&pageSize=12`
        let response=await fetch(url);
        let data=await response.json();
        console.log(data);
        this.setState({
            articles:data.articles,
            totalResults:data.totalResults,
            loading:false
            })

    }
  render() {
    return (
        <>
      <div className='containber my-3 text-center '>
        <h2>News Portal- Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row ">
        {!this.state.loading &&  this.state.articles.map((element)=>{
        return <div className="col-md-4 my-2" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
        })}
       
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button className="btn btn-primary" disabled={this.state.page<=1} onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button className="btn btn-primary" disabled={(Math.ceil(this.state.page+1>this.state.totalResults/20)) } onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default News;
