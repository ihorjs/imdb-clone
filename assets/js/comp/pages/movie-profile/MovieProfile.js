import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import MovieBackground from './MovieBackground'
import {pickedMovie,getMovieInfo, removeLike, addLike, getTrendingMovies, topRatedMovies, searchOneMovie} from '../../actions/movieActions'

class MovieProfile extends Component {
  constructor () {
    super()
    this.state = {
     heartLike: false
    }
    this.hitButton = this.hitButton.bind(this)
    this.saveMovieInfo = this.saveMovieInfo.bind(this)
    this.findUserLikes = this.findUserLikes.bind(this)
   
  }

  componentDidUpdate(prevProps, prevState) {
   
    this.findUserLikes()
    console.log(this.findUserLikes())

}

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.getMovieInfo()
    this.hitButton()


    
    
  }

  


  saveMovieInfo( movieData) {
    
    axios.post('/api/movie', movieData).then(res => {
      console.log(res)
    }).catch(console.error)
    
  }


  onLikeClick(id){
    this.props.addLike(id)
    console.log('false')
    
   
    
    
  }

  onUnLikeClick(id){
    this.props.removeLike(id)
    console.log('true')
    
    
    
  }

  hitButton(){
   
    let discoverData = this.props.movies.moviesData
    let topData = this.props.movies.topRatedData
    let searchMovieData = this.props.movies.filteredMovies
    let moviesData = discoverData.concat(topData)
    let movieData = moviesData.concat(searchMovieData)
  
   console.log(moviesData)
    const newMovies = Object.values(movieData)
    return newMovies.map((movie, index) => {
      if(movie.title === this.props.match.params.movieName){
        this.props.pickedMovie(movie)
    
         console.log(typeof movie.id)

         let newMovie = {
          movie_id: movie.id,
          movie: movie
    
        }

        this.saveMovieInfo(newMovie)
        

         
        //  <Link  key={index} to={`/movie/${movie.title}`}><li className="singleMovie">
        //   <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
          
        //  </li></Link>
        
      
      }
     
    })
   

   
  }

  

 


  findUserLikes(){
   
    
    let bool = false
    const savedMovie = Object.values(this.props.movies.savedMovie)
    
    const pickedMovie = this.props.movies.pickedMovie
    
    
    if (savedMovie.find(movie => movie.movie_id === pickedMovie.id)){
     savedMovie.map(movie => {
      
      if(movie.movie_id == pickedMovie.id){
        

        const {auth} = this.props
        if(movie.likes.filter(like => like.user === auth.user.id).length > 0){
         bool = true
         return bool
        
            
        
        }


        
      }

     
    
    
    
    })
  }
  return bool

  
}


 

  render() {
   const props = this.props
   const movie = this.props.movies.pickedMovie
   const findLikes = this.findUserLikes()
   

    return (
      
      <div id="mainMovieProfile">
       
       <MovieBackground {...props}/>
       
      
       <div className="infoBlock col-xs-12">
       
       <div className=" movieTitle col-xs-9">
       {findLikes
       ?<div className='heartButton'
      onClick={ this.onUnLikeClick.bind(this, movie.id)}>
      <i className='fas fa-heart heartOrange'></i>
      </div>
      : <div className='heartButton'
      onClick={ this.onLikeClick.bind(this, movie.id)}>
      <i className='fas fa-heart heartGrey'></i>
      </div>
       }
       <div className="movieOne">
       <h6 className="movieDate">{movie.release_date}</h6>
       <h3 className="movieName">
       {movie.title } 
       </h3>
       </div>
       <div >
        <p className="movieOverview">{movie.overview}</p>
       </div>
       </div> 
       <div className="row end-xs">
       <div className="col-xs-3 center-xs">
        <h3 className="scoreBox">Overall Score</h3>
        <span className="voteBox">{movie.vote_average}</span>
       </div>
       </div>
       
       
       </div>
    </div>
    )
  }
}

MovieProfile.propTypes = {
  auth: PropTypes.object.isRequired,

  movies: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  movies:state.movies
});



export default connect(mapStateToProps, {pickedMovie,removeLike, getMovieInfo, addLike, getTrendingMovies, topRatedMovies, searchOneMovie})(MovieProfile);