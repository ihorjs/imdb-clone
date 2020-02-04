import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import moviesData from '../../moviesData'
import PropTypes from 'prop-types';

import Background from './Background'
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import {getTrendingMovies, topRatedMovies, searchOneMovie} from '../actions/movieActions'
import Slider from "react-slick";

 class MovieSection extends Component {
  constructor () {
    super()
    this.state = {
      movies: '',
      filteredMovies: '',
      moviesData: '',
      showSearch: false
    }
    this.hitButton = this.hitButton.bind(this)
    this.newMovies = this.newMovies.bind(this)
    this.onChangeMovies = this.onChangeMovies.bind(this)
    // this.filteredData = this.filteredData.bind(this)
    this.searchMovies = this.searchMovies.bind(this)
    this.topMovies = this.topMovies.bind(this)
  }

 hitButton = async() =>{
   const query = this.state.movies
   console.log(query)
   
  if(query){
    const search = new moviesData(query)

    await search.getResults()

    
    const searchMovie = search.result
    console.log(searchMovie)
   
    this.props.searchOneMovie(searchMovie)
    if(this.state.movies != '' && this.state.showSearch === false){
  
      this.setState({
        showSearch: true
      });
      }
  
  }
}

onChangeMovies(e){
  e.preventDefault()
  var name = e.target.name
  var value = e.target.value
  this.setState(
    {
      [name]: value
    },
    () => {
      console.log(this.state)
      
    }
  )
      

}

// filteredData(){
//   if(this.state.filteredMovies != undefined){
//   var newMovies = Object.values(this.state.moviesData)
//   console.log(this.state.filteredMovies.length)
   
//    newMovies = newMovies.filter(movie => {
      
//     var movieText = movie.title.split('').filter(word => word != '').map(word => word.toLowerCase()).join('');
//     var searchText = this.state.movies.split('').filter(word => word != '').map(word => word.toLowerCase()).join('')
//     var n = movieText.match(searchText)
//       if(n != null){
//         return movie
//       }
//     })
//     this.setState({
//       filteredMovies: newMovies
//     })
//   }
  
  
  
  
// }




componentDidMount = () => {
  window.scrollTo(0, 0)
  this.props.getTrendingMovies()
  console.log(this.props.getTrendingMovies())
  console.log(this.props.match.params.movieName)
  this.props.topRatedMovies()
  
}

  newMovies() {
    
    const moviesData = this.props.movies.moviesData
  
    const newMovies = Object.values(moviesData)
    return newMovies.map((movie, index) => {
      return (
        
         <Link  key={index} to={`/moviepath/${movie.title}`}><li className="singleMovie">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
          
         </li></Link>
        
      )
    })

} 


topMovies() {
    
  const moviesData = this.props.movies.topRatedData

  const newMovies = Object.values(moviesData)
  return newMovies.map((movie, index) => {
    return (
      
       <Link  key={index} to={`/moviepath/${movie.title}`}><li className="singleMovie">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
        
       </li></Link>
      
    )
  })

} 

onInputPress(e){
 if(e.key === 'Enter'){
   this.hitButton()
 }
}




  searchMovies(){
    console.log(this.props)
    const newMovies = Object.values(this.props.movies.filteredMovies)
    
   return newMovies.map((movie, index) => {
     return (
      
      <Link  key={index} to={`/moviepath/${movie.title}`}><li className="singleMovie">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
      
     </li></Link>
       
     )
   })
   
  }

 
  render () {
    console.log(this.props)

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4
    };


    return (<div>
      <Background/>
      <section id="movieSection">
      <section  className="row center-xs">
        <section className="search-area col-xs-12">
          <input type="text" name="movies" onChange={this.onChangeMovies} onKeyPress={this.onInputPress.bind(this)} placeholder="Find movies here..."/>
          <a onClick={this.hitButton}><i className=" searchButton fas fa-search"></i></a>
        </section>
        </section>

        <section className="col-xs-12">
        
          {this.state.showSearch == true && 
          <div>
         <h1 className="popularTitle col-xs-3"> Search Results </h1>
          <div className="row center-xs">

            <ul className="moviesArea col-xs-11">
              <Slider {...settings}>
              {this.searchMovies()}
              </Slider>
            </ul>
          </div>
          </div>}
        
          <h1 className="popularTitle col-xs-3"> Discover </h1>

        <div className="row center-xs">
          <ul className="moviesArea col-xs-11">
            <Slider {...settings}>
            {this.newMovies()}
            </Slider>
          </ul>

        </div>

        <h1 className="popularTitle col-xs-3">Top Rated</h1>

        <div className="row center-xs">
          <ul className="moviesArea col-xs-11">
            <Slider {...settings}>
            {this.topMovies()}
            </Slider>
          </ul>
          
        </div>
        </section>
       
     
      </section>
      </div>
    )
  }
}

MovieSection.propTypes = {
  auth: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
}
const mapStateToProps = (state, ownProps) => ({
  
  auth: state.auth,
  movies:state.movies

})

export default connect(mapStateToProps, {getTrendingMovies, topRatedMovies, searchOneMovie})(withRouter(MovieSection))