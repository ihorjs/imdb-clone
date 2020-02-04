import React, { Component } from 'react'
import MovieHeader from './MovieHeader'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

 class MovieBackground extends Component {
  render() {
    const movie = this.props.movies.pickedMovie
    return (
      <header className="movieProfile">
      <MovieHeader/>
      <div className="movieImage">
      
      <img className="moviesPoster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
      
      </div>


       
      </header>
    )
  }
}

MovieBackground.propTypes = {
  movies: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieBackground);